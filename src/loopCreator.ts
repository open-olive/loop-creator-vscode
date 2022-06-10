import templates from '@oliveai/loop-templates';
import { TemplatesObject } from '@oliveai/loop-templates/dist/types';
import * as path from 'path';
import { platform } from 'process';
import * as Sqrl from 'squirrelly';
import {
  commands,
  ExtensionContext,
  Uri,
  ViewColumn,
  window,
  workspace,
} from 'vscode';
import * as ua from 'universal-analytics';
import { openDialogForFolder } from './utils';
import { readFileSync } from 'fs';
import { randomBytes } from 'crypto';


interface IWebviewMessage<T> {
  command: string;
  payload: T;
}

interface LoopFormData {
  language: string;
  path: string;
  projectName: string;
  aptitudes: string[];
}

const osName = platform === 'win32' ? 'windows' : platform;

export class LoopCreator {
  private context: ExtensionContext;
  private analytics:
    | ua.Visitor
    | {
        event: () => {
          send: () => undefined;
        };
        set: () => undefined;
      };

  constructor(context: ExtensionContext) {
    this.context = context;
    this.analytics = __GOOGLE_ANALYTICS_ID__
      ? ua(__GOOGLE_ANALYTICS_ID__)
      : // For development
        {
          event: () => ({
            send: () => undefined,
          }),
          set: () => undefined,
        };

    this.analytics.set('cd1', __ENVIRONMENT__);
    this.analytics.set('cd4', osName);
  }

  async createFiles(
    isTypeScript: boolean,
    basePath: string,
    projectName: string,
    aptitudes: string[]
  ) {
    // Replace TS file extension with the right one
    const filenameWithExtension = (filename: string) => {
      const fileExtension = isTypeScript ? '.ts' : '.js';

      if (filename.endsWith('.ts')) {
        return filename.replace('.ts', fileExtension);
      }

      return filename;
    };

    const renderTemplate = async (template: any, filePath: string) => {
      const fileContents = Sqrl.render(template, {
        isTypeScript,
        hasConfigAptitude: aptitudes.includes("config"),
        projectName,
        aptitudes,
        promiseVoid: ': Promise<void>',
      });
      await workspace.fs.writeFile(
        Uri.file(filePath),
        Buffer.from(fileContents, 'utf-8')
      );
    };

    const renderFileMap = async (
      templatesObject: TemplatesObject,
      targetFilePath: string
    ) => {
      const projectAptitudes = aptitudes;
      const { fileMap } = templatesObject;
      if (!fileMap) {
        return console.error('There is no file map on this object');
      }

      for (const [key, { fileName, aptitude }] of Object.entries(fileMap)) {
        // If it's not a general template
        // AND if it's not a template for an aptitude we're using
        // AND if it's not a 'nonzero' aptitude while we have aptitudes in our project
        const nonzero = projectAptitudes.length && aptitude === 'nonzero';
        if (
          aptitude !== 'any' &&
          !projectAptitudes.includes(aptitude) &&
          !nonzero
        ) {
          continue;
        }

        // If it's a string, it's a template. Otherwise, it's a directory/object.
        if (typeof templatesObject[key] === 'string') {
          await renderTemplate(
            templatesObject[key],
            path.join(targetFilePath, filenameWithExtension(fileName))
          );
        } else if (typeof templatesObject[key] === 'object') {
          // Create directory for this set of templates
          const newTargetFilePath = path.join(targetFilePath, key);
          await workspace.fs.createDirectory(Uri.file(newTargetFilePath));

          await renderFileMap(
            templatesObject[key] as TemplatesObject,
            newTargetFilePath
          );
        }
      }
    };

    // #region /
    await workspace.fs.createDirectory(Uri.file(basePath));

    await renderFileMap(templates, basePath);
    // #endregion /src/whispers/
    // #endregion /src/
    // #endregion /
  }

  async createLoop({
    language,
    path: basePath,
    projectName,
    aptitudes,
  }: LoopFormData) {
    await this.createFiles(
      language === 'TypeScript',
      basePath,
      projectName,
      aptitudes
    );

    // Try/catch to ensure any errors with sending analytics
    // doesn't prevent the extension from working
    try {
      this.analytics
        .event({
          eventCategory: 'Loop Authors',
          eventAction: 'Loop Source Code Generated: VSCode',
          eventLabel: 'Loop Created',
        })
        .send();

      this.analytics
        .event({
          eventCategory: 'Loop Authors',
          eventAction: 'Loop Source Code Generated: VSCode',
          eventLabel: `Language Selected: ${language.toLowerCase()}`,
        })
        .send();

      aptitudes.forEach((aptitude) => {
        this.analytics
          .event({
            eventCategory: 'Loop Authors',
            eventAction: 'Loop Source Code Generated: VSCode',
            eventLabel: `Aptitude Selected: ${aptitude}`,
          })
          .send();
      });
    } catch (error) {}

    let uri = Uri.file(basePath);
    await commands.executeCommand('vscode.openFolder', uri, {
      forceNewWindow: true,
    });
  }

  async openCreateLoopWebview() {
    const panel = window.createWebviewPanel(
      'loopInfo', // Identifies the type of the webview. Used internally
      'Create Loop', // Title of the panel displayed to the user
      ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [Uri.file(path.join(this.context.extensionPath, 'loopForm'))]
      }
    );

    const htmlPath = Uri.file(path.join(this.context.extensionPath, '/loopForm/createLoopForm.html'));

    let htmlView = readFileSync(htmlPath.path).toString();
   
    const jsDiskPath = Uri.file(
      path.join(this.context.extensionPath, 'loopForm/assets', 'main.js')
    );

    const oliveLogoDiskPath = Uri.file(
      path.join(this.context.extensionPath, 'loopForm/assets', 'newOliveLogo.png')
    );

    const scriptUri = panel.webview.asWebviewUri(jsDiskPath);

    let nonce = randomBytes(16).toString('base64');

    htmlView = htmlView.replace('{{nonce}}', nonce);
    htmlView = htmlView.replace('{{jsUrl}}', scriptUri.toString());
   
    panel.webview.html = htmlView;

    panel.webview.onDidReceiveMessage(
      async (message: IWebviewMessage<LoopFormData>) => {
        try {
          if (message.command === 'openFolderDialog') {
            const uri = await openDialogForFolder();
            panel.webview.postMessage({
              command: 'getProjectPath',
              payload: uri.fsPath,
            });
          } else if (message.command === 'createLoop') {
            await this.createLoop(message.payload);
            panel.dispose();
          } else {
            throw new Error(`Invalid command "${message.command}".`);
          }
        } catch (err: any) {
          console.error(err);
          window.showErrorMessage(`Error creating loop: ${err.message}`);
        }
      }
    );
  }
}

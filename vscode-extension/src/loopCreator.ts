import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import * as path from 'path';
import { Uri } from 'vscode';
import * as Sqrl from 'squirrelly';
import templates from '@oliveai/loop-templates';
import { TemplatesObject } from '@oliveai/loop-templates/dist/types';
import { openDialogForFolder } from './utils';
import createLoopFormHtml from './createLoopForm.html';

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

export class LoopCreator {
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
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

    const renderTemplate = (template: any, filePath: string) => {
      const fileContents = Sqrl.render(template, {
        isTypeScript,
        projectName,
        aptitudes,
        promiseVoid: ': Promise<void>'
      });
      fs.writeFile(filePath, fileContents);
    };

    const renderFileMap = async (templatesObject: TemplatesObject, targetFilePath: string) => {
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
        if (aptitude !== 'any' && !projectAptitudes.includes(aptitude) && !nonzero) {
          return;
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
          await fs.mkdir(newTargetFilePath);

          await renderFileMap(templatesObject[key] as TemplatesObject, newTargetFilePath);
        }
      }
    };

    // #region /
    await fs.ensureDir(basePath);

    await renderFileMap(templates, basePath);
    // #endregion /src/whispers/
    // #endregion /src/
    // #endregion /
  }

  async createLoop({ language, path: basePath, projectName, aptitudes }: LoopFormData) {
    await this.createFiles(language === 'TypeScript', basePath, projectName, aptitudes);

    let uri = Uri.file(basePath);
    await vscode.commands.executeCommand('vscode.openFolder', uri, {
      forceNewWindow: true
    });
  }

  async openCreateLoopWebview() {
    const panel = vscode.window.createWebviewPanel(
      'loopInfo', // Identifies the type of the webview. Used internally
      'Create Loop', // Title of the panel displayed to the user
      vscode.ViewColumn.One,
      {
        enableScripts: true
      }
    );

    panel.webview.html = createLoopFormHtml;

    panel.webview.onDidReceiveMessage(async (message: IWebviewMessage<LoopFormData>) => {
      try {
        if (message.command === 'openFolderDialog') {
          const uri = await openDialogForFolder();
          panel.webview.postMessage({
            command: 'getProjectPath',
            payload: uri.fsPath
          });
        } else if (message.command === 'createLoop') {
          await this.createLoop(message.payload);
          panel.dispose();
        } else {
          throw new Error(`Invalid command "${message.command}".`);
        }
      } catch (err: any) {
        console.error(err);
        vscode.window.showErrorMessage(`Error creating loop: ${err.message}`);
      }
    });
  }
}

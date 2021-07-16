import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import * as path from 'path';
import { Uri } from 'vscode';
import * as Sqrl from 'squirrelly';
import { openDialogForFolder } from './utils';
import createLoopFormHtml from './createLoopForm.html';
import eslintrcTemplate from './templates/.eslintrc.squirrelly';
import gitignoreTemplate from './templates/.gitignore.squirrelly';
import prettierrcTemplate from './templates/.prettierrc.squirrelly';
import packageJsonTemplate from './templates/package.json.squirrelly';
import readmeTemplate from './templates/README.md.squirrelly';
import tsconfigTemplate from './templates/tsconfig.json.squirrelly';
import indexTestTemplate from './templates/src/index.test.ts.squirrelly';
import indexTemplate from './templates/src/index.ts.squirrelly';
import jestGlobalSetupTemplate from './templates/src/jestGlobalSetup.js.squirrelly';
import aptitudesTemplates from './templates/src/aptitudes';
import whispersTemplates from './templates/src/whispers';

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
    const filenameWithExtension = (filename: string) =>
      `${filename}${isTypeScript ? '.ts' : '.js'}`;

    const renderTemplate = (template: any, filePath: string) => {
      const fileContents = Sqrl.render(template, {
        isTypeScript,
        projectName,
        aptitudes,
      });
      fs.writeFile(filePath, fileContents);
    };

    // #region /
    await fs.ensureDir(basePath);

    renderTemplate(eslintrcTemplate, path.join(basePath, '.eslintrc'));
    renderTemplate(gitignoreTemplate, path.join(basePath, '.gitignore'));
    renderTemplate(prettierrcTemplate, path.join(basePath, '.prettierrc'));
    renderTemplate(packageJsonTemplate, path.join(basePath, 'package.json'));
    renderTemplate(readmeTemplate, path.join(basePath, 'README.md'));
    if (isTypeScript) {
      renderTemplate(tsconfigTemplate, path.join(basePath, 'tsconfig.json'));
    }

    // #region /src/
    await fs.ensureDir(path.join(basePath, 'src'));

    renderTemplate(
      indexTestTemplate,
      path.join(basePath, 'src', filenameWithExtension('index.test'))
    );
    renderTemplate(
      indexTemplate,
      path.join(basePath, 'src', filenameWithExtension('index'))
    );
    renderTemplate(
      jestGlobalSetupTemplate,
      path.join(basePath, 'src', 'jestGlobalSetup.js')
    );

    // #region /src/aptitudes/
    if (aptitudes.length) {
      await fs.ensureDir(path.join(basePath, 'src', 'aptitudes'));

      renderTemplate(
        aptitudesTemplates.index,
        path.join(basePath, 'src', 'aptitudes', filenameWithExtension('index'))
      );

      if (aptitudes.includes('clipboard')) {
        await fs.ensureDir(
          path.join(basePath, 'src', 'aptitudes', 'clipboard')
        );
        renderTemplate(
          aptitudesTemplates.clipboardListener,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'clipboard',
            filenameWithExtension('clipboardListener')
          )
        );
        renderTemplate(
          aptitudesTemplates.clipboardListenerTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'clipboard',
            filenameWithExtension('clipboardListener.test')
          )
        );
      }

      if (aptitudes.includes('filesystem')) {
        await fs.ensureDir(
          path.join(basePath, 'src', 'aptitudes', 'filesystem')
        );
        renderTemplate(
          aptitudesTemplates.filesystemExample,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'filesystem',
            filenameWithExtension('filesystemExample')
          )
        );
        renderTemplate(
          aptitudesTemplates.filesystemExampleTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'filesystem',
            filenameWithExtension('filesystemExample.test')
          )
        );
      }

      if (aptitudes.includes('keyboard')) {
        await fs.ensureDir(path.join(basePath, 'src', 'aptitudes', 'keyboard'));
        renderTemplate(
          aptitudesTemplates.keyboardListener,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'keyboard',
            filenameWithExtension('keyboardListener')
          )
        );
        renderTemplate(
          aptitudesTemplates.keyboardListenerTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'keyboard',
            filenameWithExtension('keyboardListener.test')
          )
        );
      }

      if (aptitudes.includes('network')) {
        await fs.ensureDir(path.join(basePath, 'src', 'aptitudes', 'network'));
        renderTemplate(
          aptitudesTemplates.networkExample,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'network',
            filenameWithExtension('networkExample')
          )
        );
        renderTemplate(
          aptitudesTemplates.networkExampleTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'network',
            filenameWithExtension('networkExample.test')
          )
        );
      }

      if (aptitudes.includes('ui')) {
        await fs.ensureDir(path.join(basePath, 'src', 'aptitudes', 'ui'));
        renderTemplate(
          aptitudesTemplates.searchListener,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'ui',
            filenameWithExtension('searchListener')
          )
        );
        renderTemplate(
          aptitudesTemplates.searchListenerTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'ui',
            filenameWithExtension('searchListener.test')
          )
        );
      }

      if (aptitudes.includes('window')) {
        await fs.ensureDir(path.join(basePath, 'src', 'aptitudes', 'window'));
        renderTemplate(
          aptitudesTemplates.activeWindowListener,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'window',
            filenameWithExtension('activeWindowListener')
          )
        );
        renderTemplate(
          aptitudesTemplates.activeWindowListenerTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'window',
            filenameWithExtension('activeWindowListener.test')
          )
        );
      }
    }
    // #endregion /src/aptitudes/

    // #region /src/whispers/
    await fs.ensureDir(path.join(basePath, 'src', 'whispers'));

    renderTemplate(
      whispersTemplates.index,
      path.join(basePath, 'src', 'whispers', filenameWithExtension('index'))
    );
    renderTemplate(
      whispersTemplates.introWhisper,
      path.join(
        basePath,
        'src',
        'whispers',
        filenameWithExtension('IntroWhisper')
      )
    );
    renderTemplate(
      whispersTemplates.introWhisperTest,
      path.join(
        basePath,
        'src',
        'whispers',
        filenameWithExtension('IntroWhisper.test')
      )
    );

    if (aptitudes.includes('clipboard')) {
      renderTemplate(
        whispersTemplates.clipboardWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('ClipboardWhisper')
        )
      );
      renderTemplate(
        whispersTemplates.clipboardWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('ClipboardWhisper.test')
        )
      );
    }

    if (aptitudes.includes('filesystem')) {
      renderTemplate(
        whispersTemplates.filesystemWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('FilesystemWhisper')
        )
      );
      renderTemplate(
        whispersTemplates.filesystemWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('FilesystemWhisper.test')
        )
      );
    }

    if (aptitudes.includes('keyboard')) {
      renderTemplate(
        whispersTemplates.keyboardWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('KeyboardWhisper')
        )
      );
      renderTemplate(
        whispersTemplates.keyboardWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('KeyboardWhisper.test')
        )
      );
    }

    if (aptitudes.includes('network')) {
      renderTemplate(
        whispersTemplates.networkWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('NetworkWhisper')
        )
      );
      renderTemplate(
        whispersTemplates.networkWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('NetworkWhisper.test')
        )
      );
    }

    if (aptitudes.includes('ui')) {
      renderTemplate(
        whispersTemplates.uiWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('UiWhisper')
        )
      );
      renderTemplate(
        whispersTemplates.uiWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('UiWhisper.test')
        )
      );
    }

    if (aptitudes.includes('window')) {
      renderTemplate(
        whispersTemplates.windowWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('WindowWhisper')
        )
      );
      renderTemplate(
        whispersTemplates.windowWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('WindowWhisper.test')
        )
      );
    }
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

    let uri = Uri.file(basePath);
    await vscode.commands.executeCommand('vscode.openFolder', uri, {
      forceNewWindow: true,
    });
  }

  async openCreateLoopWebview() {
    const panel = vscode.window.createWebviewPanel(
      'loopInfo', // Identifies the type of the webview. Used internally
      'Create Loop', // Title of the panel displayed to the user
      vscode.ViewColumn.One,
      {
        enableScripts: true,
      }
    );

    panel.webview.html = createLoopFormHtml;

    panel.webview.onDidReceiveMessage(
      async (message: IWebviewMessage<LoopFormData>) => {
        try {
          if (message.command === 'openFolderDialog') {
            const uri = await openDialogForFolder();
            panel.webview.postMessage({
              command: 'getProjectPath',
              payload: uri.path,
            });
          } else if (message.command === 'createLoop') {
            await this.createLoop(message.payload);
            panel.dispose();
          } else {
            throw new Error(`Invalid command "${message.command}".`);
          }
        } catch (err) {
          console.error(err);
          vscode.window.showErrorMessage(`Error creating loop: ${err.message}`);
        }
      }
    );
  }
}

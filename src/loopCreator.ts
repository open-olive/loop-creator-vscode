import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import * as path from 'path';
import { Uri } from 'vscode';
import * as Sqrl from 'squirrelly';
import { openDialogForFolder } from './utils';
import createLoopFormHtml from './createLoopForm.html';
import templates from './templates';

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
    const isAptitudeIncluded = {
      clipboard: aptitudes.includes('clipboard'),
      filesystem: aptitudes.includes('filesystem'),
      keyboard: aptitudes.includes('keyboard'),
      network: aptitudes.includes('network'),
      ui: aptitudes.includes('ui'),
      window: aptitudes.includes('window'),
    };

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

    renderTemplate(templates.eslintrc, path.join(basePath, '.eslintrc'));
    renderTemplate(templates.gitignore, path.join(basePath, '.gitignore'));
    renderTemplate(templates.prettierrc, path.join(basePath, '.prettierrc'));
    renderTemplate(templates.packageJson, path.join(basePath, 'package.json'));
    renderTemplate(templates.readme, path.join(basePath, 'README.md'));
    if (isTypeScript) {
      renderTemplate(templates.tsconfig, path.join(basePath, 'tsconfig.json'));
    }

    // #region /src/
    await fs.ensureDir(path.join(basePath, 'src'));

    renderTemplate(
      templates.src.indexTest,
      path.join(basePath, 'src', filenameWithExtension('index.test'))
    );
    renderTemplate(
      templates.src.index,
      path.join(basePath, 'src', filenameWithExtension('index'))
    );
    renderTemplate(
      templates.src.jestGlobalSetup,
      path.join(basePath, 'src', 'jestGlobalSetup.js')
    );

    // #region /src/aptitudes/
    if (aptitudes.length) {
      await fs.ensureDir(path.join(basePath, 'src', 'aptitudes'));

      renderTemplate(
        templates.src.aptitudes.index,
        path.join(basePath, 'src', 'aptitudes', filenameWithExtension('index'))
      );

      if (isAptitudeIncluded.clipboard) {
        await fs.ensureDir(
          path.join(basePath, 'src', 'aptitudes', 'clipboard')
        );
        renderTemplate(
          templates.src.aptitudes.clipboardListener,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'clipboard',
            filenameWithExtension('clipboardListener')
          )
        );
        renderTemplate(
          templates.src.aptitudes.clipboardListenerTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'clipboard',
            filenameWithExtension('clipboardListener.test')
          )
        );
      }

      if (isAptitudeIncluded.filesystem) {
        await fs.ensureDir(
          path.join(basePath, 'src', 'aptitudes', 'filesystem')
        );
        renderTemplate(
          templates.src.aptitudes.filesystemExample,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'filesystem',
            filenameWithExtension('filesystemExample')
          )
        );
        renderTemplate(
          templates.src.aptitudes.filesystemExampleTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'filesystem',
            filenameWithExtension('filesystemExample.test')
          )
        );
      }

      if (isAptitudeIncluded.keyboard) {
        await fs.ensureDir(path.join(basePath, 'src', 'aptitudes', 'keyboard'));
        renderTemplate(
          templates.src.aptitudes.keyboardListener,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'keyboard',
            filenameWithExtension('keyboardListener')
          )
        );
        renderTemplate(
          templates.src.aptitudes.keyboardListenerTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'keyboard',
            filenameWithExtension('keyboardListener.test')
          )
        );
      }

      if (isAptitudeIncluded.network) {
        await fs.ensureDir(path.join(basePath, 'src', 'aptitudes', 'network'));
        renderTemplate(
          templates.src.aptitudes.networkExample,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'network',
            filenameWithExtension('networkExample')
          )
        );
        renderTemplate(
          templates.src.aptitudes.networkExampleTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'network',
            filenameWithExtension('networkExample.test')
          )
        );
      }

      if (isAptitudeIncluded.ui) {
        await fs.ensureDir(path.join(basePath, 'src', 'aptitudes', 'ui'));
        renderTemplate(
          templates.src.aptitudes.searchListener,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'ui',
            filenameWithExtension('searchListener')
          )
        );
        renderTemplate(
          templates.src.aptitudes.searchListenerTest,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'ui',
            filenameWithExtension('searchListener.test')
          )
        );
      }

      if (isAptitudeIncluded.window) {
        await fs.ensureDir(path.join(basePath, 'src', 'aptitudes', 'window'));
        renderTemplate(
          templates.src.aptitudes.activeWindowListener,
          path.join(
            basePath,
            'src',
            'aptitudes',
            'window',
            filenameWithExtension('activeWindowListener')
          )
        );
        renderTemplate(
          templates.src.aptitudes.activeWindowListenerTest,
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
      templates.src.whispers.index,
      path.join(basePath, 'src', 'whispers', filenameWithExtension('index'))
    );
    renderTemplate(
      templates.src.whispers.introWhisper,
      path.join(
        basePath,
        'src',
        'whispers',
        filenameWithExtension('IntroWhisper')
      )
    );
    renderTemplate(
      templates.src.whispers.introWhisperTest,
      path.join(
        basePath,
        'src',
        'whispers',
        filenameWithExtension('IntroWhisper.test')
      )
    );

    if (isAptitudeIncluded.clipboard) {
      renderTemplate(
        templates.src.whispers.clipboardWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('ClipboardWhisper')
        )
      );
      renderTemplate(
        templates.src.whispers.clipboardWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('ClipboardWhisper.test')
        )
      );
    }

    if (isAptitudeIncluded.filesystem) {
      renderTemplate(
        templates.src.whispers.filesystemWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('FilesystemWhisper')
        )
      );
      renderTemplate(
        templates.src.whispers.filesystemWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('FilesystemWhisper.test')
        )
      );
    }

    if (isAptitudeIncluded.keyboard) {
      renderTemplate(
        templates.src.whispers.keyboardWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('KeyboardWhisper')
        )
      );
      renderTemplate(
        templates.src.whispers.keyboardWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('KeyboardWhisper.test')
        )
      );
    }

    if (isAptitudeIncluded.network) {
      renderTemplate(
        templates.src.whispers.networkWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('NetworkWhisper')
        )
      );
      renderTemplate(
        templates.src.whispers.networkWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('NetworkWhisper.test')
        )
      );
    }

    if (isAptitudeIncluded.ui) {
      renderTemplate(
        templates.src.whispers.uiWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('UiWhisper')
        )
      );
      renderTemplate(
        templates.src.whispers.uiWhisperTest,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('UiWhisper.test')
        )
      );
    }

    if (isAptitudeIncluded.window) {
      renderTemplate(
        templates.src.whispers.windowWhisper,
        path.join(
          basePath,
          'src',
          'whispers',
          filenameWithExtension('WindowWhisper')
        )
      );
      renderTemplate(
        templates.src.whispers.windowWhisperTest,
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

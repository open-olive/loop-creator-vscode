import * as vscode from 'vscode';
import * as fs from 'fs-extra';
import * as path from 'path';
import sidebarHtml from './build/sidebar.html';
import loadingHtml from './loading.html';

import { exec } from 'child_process';

export class LoopPreview {
  private context: vscode.ExtensionContext;
  private currentPanel: vscode.WebviewPanel | undefined;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
    this.currentPanel = undefined;
  }

  async updateWebview(loop: String | undefined) {
    const resourcePath = vscode.Uri.file(path.join(this.context.extensionPath, 'src', 'build'))
                            .with({ scheme: 'vscode-resource' });

    if (this.currentPanel?.webview) {
      this.currentPanel.webview.html = sidebarHtml.replace('<head>', `<head><base href="${resourcePath}/" /><script src="preload.js"></script>`)
                            .replace('</body>', `${loadingHtml}${loop ? `<script>(function() {${loop}})();</script>` : ''}</body>`);
    }
  }

  postMessage(command: string, value: string) {
    this.currentPanel?.webview.postMessage({ command, value });
  }

  async openPreviewLoopWebview(loop: string | undefined) {
    var currentlyOpenTabfilePath = vscode.window.activeTextEditor?.document.fileName;

    const packageJsonExists = await fs.pathExists(path.join(path.dirname(currentlyOpenTabfilePath || ''), 'package.json'));

    if (
      packageJsonExists &&
      fs.readJsonSync(
        path.join(path.dirname(currentlyOpenTabfilePath || ''), 'package.json')
      ).ldk) {
      if (this.currentPanel) {
        this.currentPanel.reveal(vscode.ViewColumn.Beside);
      } else {
        this.currentPanel = vscode.window.createWebviewPanel(
          'sidebar',
          'Preview Loop',
          // vscode.ViewColumn.Beside,
          {
            preserveFocus: true,
            viewColumn: vscode.ViewColumn.Beside,
          },
          {
            enableScripts: true,
            localResourceRoots: [vscode.Uri.file(path.join(this.context.extensionPath, 'src', 'build'))]
          }
        );
    
        this.updateWebview(loop);
    
        const onDidSaveTextDocument = vscode.workspace.onDidSaveTextDocument(async (document: vscode.TextDocument) => {
          if (["javascript", "javascriptreact"].includes(document.languageId) && document.uri.scheme === "file") {
            const cwd = path.dirname(document.fileName);
            const exists = await fs.pathExists(path.join(cwd, 'package.json'));
    
            if (exists) {
              this.postMessage('loading', 'start');
              // exec('sleep 4 && ls', { cwd }, async (error, stdout, stderr) => {
              exec('npm run build', { cwd }, (error, stdout, stderr) => {
                if (error) {
                  console.error(`exec error: ${error}`);
                  this.postMessage('loading', 'error');
                  return;
                }
    
                this.postMessage('loading', 'success');
    
                try {
                  const data = fs.readFileSync(path.join(cwd, 'dist', 'loop.js'), 'utf8');
    
                  this.updateWebview(data);
                } catch (err) {
                  console.error(err);
                }
              });
            }
          }
        });
    
        this.currentPanel.onDidDispose(
          () => {
            this.currentPanel = undefined;
            onDidSaveTextDocument.dispose();
          },
          null,
          this.context.subscriptions
        );
      }
    } else {
      vscode.window.showInformationMessage(`Loop working directory could not be found for ${currentlyOpenTabfilePath}`);
    }
  }
}

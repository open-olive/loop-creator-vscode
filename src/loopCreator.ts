import * as vscode from "vscode";
import * as fs from "fs-extra";
import * as path from "path";
import { Uri } from "vscode";
import * as Sqrl from "squirrelly";
import { openDialogForFolder } from "./utils";
import createLoopFormHtml from "./createLoopForm.html";
import readmeTemplate from "./templates/README.md.squirrelly";
import packageJsonTemplate from "./templates/package.json.squirrelly";
import indexTemplate from "./templates/src/index.ts.squirrelly";
import tsconfigTemplate from "./templates/tsconfig.json.squirrelly";

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
    let fileContents: string;

    fileContents = Sqrl.render(readmeTemplate, { projectName });
    await fs.writeFile(path.join(basePath, "README.md"), fileContents);

    fileContents = Sqrl.render(packageJsonTemplate, {
      isTypeScript,
      projectName,
      aptitudes,
    });
    await fs.writeFile(path.join(basePath, "package.json"), fileContents);

    fileContents = Sqrl.render(indexTemplate, {
      isTypeScript,
      projectName,
      aptitudes,
    });
    await fs.writeFile(
      path.join(basePath, "src", `index.${isTypeScript ? "ts" : "js"}`),
      fileContents
    );

    if (isTypeScript) {
      await fs.writeFile(
        path.join(basePath, "tsconfig.json"),
        tsconfigTemplate
      );
    }
  }

  async createLoop({
    language,
    path: basePath,
    projectName,
    aptitudes,
  }: LoopFormData) {
    await fs.ensureDir(basePath);
    await fs.ensureDir(path.join(basePath, "src"));

    await this.createFiles(
      language === "TypeScript",
      basePath,
      projectName,
      aptitudes
    );

    let uri = Uri.file(basePath);
    await vscode.commands.executeCommand("vscode.openFolder", uri, {
      forceNewWindow: true,
    });
  }

  async openCreateLoopWebview() {
    const panel = vscode.window.createWebviewPanel(
      "loopInfo", // Identifies the type of the webview. Used internally
      "Create Loop", // Title of the panel displayed to the user
      vscode.ViewColumn.One,
      {
        enableScripts: true,
      }
    );

    panel.webview.html = createLoopFormHtml;

    panel.webview.onDidReceiveMessage(
      async (message: IWebviewMessage<LoopFormData>) => {
        try {
          if (message.command === "openFolderDialog") {
            const uri = await openDialogForFolder();
            panel.webview.postMessage({
              command: "getProjectPath",
              payload: uri.path,
            });
          } else if (message.command === "createLoop") {
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

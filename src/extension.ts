import * as vscode from "vscode";
import { LoopCreator } from "./loopCreator";
import { LoopPreview } from "./loopPreview";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const loopCreator = new LoopCreator(context);
  const loopPreview = new LoopPreview(context);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let createLoopCommand = vscode.commands.registerCommand("loop-development-kit.createLoop", () => {
    loopCreator.openCreateLoopWebview();
  });

  context.subscriptions.push(createLoopCommand);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let previewLoopCommand = vscode.commands.registerCommand("loop-development-kit.previewLoop", () => {
    loopPreview.openPreviewLoopWebview(undefined);
  });

  context.subscriptions.push(previewLoopCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}

import { commands, ExtensionContext } from 'vscode';
import { LoopCreator } from './loopCreator';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  const loopCreator = new LoopCreator(context);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let createLoopCommand = commands.registerCommand(
    'loop-development-kit.createLoop',
    () => {
      loopCreator.openCreateLoopWebview();
    }
  );

  context.subscriptions.push(createLoopCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const createLoop_1 = require("./createLoop");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const project = new createLoop_1.Project(context);
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let createLoop = vscode.commands.registerCommand('loop-development-kit.createLoop', () => {
        project.createProject();
    });
    context.subscriptions.push(createLoop);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
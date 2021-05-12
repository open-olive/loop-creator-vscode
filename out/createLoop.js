"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const vscode = require("vscode");
const fs = require("fs-extra");
const path = require("path");
const vscode_1 = require("vscode");
const Sqrl = require("squirrelly");
class Project {
    constructor(context) {
        this.context = context;
    }
    createFolders(baseDir, directories) {
        return __awaiter(this, void 0, void 0, function* () {
            directories.forEach((dir) => {
                try {
                    fs.ensureDirSync(path.join(baseDir, dir));
                }
                catch (err) {
                    console.error(err);
                }
            });
        });
    }
    createTypeScriptFiles(basePath, ldkVersion, projectName, aptitudes) {
        return __awaiter(this, void 0, void 0, function* () {
            const indexTSPath = path.join(this.context.extensionPath, "templates", "TypeScript", "src", "index.ts.squirrelly");
            const indexTSTemplate = fs.readFileSync(indexTSPath, "utf-8");
            const indexTSContents = Sqrl.render(indexTSTemplate, {
                projectName,
                aptitudes,
            });
            fs.writeFileSync(path.join(basePath, "src", "index.ts"), indexTSContents);
            const packageJsonPath = path.join(this.context.extensionPath, "templates", "TypeScript", "package.json.squirrelly");
            const packageJsonTemplate = fs.readFileSync(packageJsonPath, "utf-8");
            const packageJsonContents = Sqrl.render(packageJsonTemplate, {
                ldkVersion,
                projectName,
                aptitudes,
            });
            fs.writeFileSync(path.join(basePath, "package.json"), packageJsonContents);
            const readmePath = path.join(this.context.extensionPath, "templates", "TypeScript", "README.md.squirrelly");
            const readmeTemplate = fs.readFileSync(readmePath, "utf-8");
            const readmeContents = Sqrl.render(readmeTemplate, { projectName });
            fs.writeFileSync(path.join(basePath, "README.md"), readmeContents);
            const tsconfigPath = path.join(this.context.extensionPath, "templates", "TypeScript", "tsconfig.json");
            fs.writeFileSync(path.join(basePath, "tsconfig.json"), fs.readFileSync(tsconfigPath, "utf-8"));
        });
    }
    createProject() {
        return __awaiter(this, void 0, void 0, function* () {
            const panel = vscode.window.createWebviewPanel("loopInfo", // Identifies the type of the webview. Used internally
            "Create Loop", // Title of the panel displayed to the user
            vscode.ViewColumn.One, {
                enableScripts: true,
            });
            const createLoopFormPath = path.join(this.context.extensionPath, "src", "createLoopForm.html");
            const createLoopFormHtml = fs.readFileSync(createLoopFormPath, "utf-8");
            console.log(createLoopFormHtml);
            panel.webview.html = createLoopFormHtml;
            panel.webview.onDidReceiveMessage((message) => __awaiter(this, void 0, void 0, function* () {
                const { language, ldkVersion, path, projectName, aptitudes, } = message.text;
                try {
                    yield fs.ensureDir(path);
                }
                catch (err) {
                    vscode.window.showErrorMessage(`Failed to create directory "${path}".`);
                }
                try {
                    if (language === "TypeScript") {
                        yield this.createFolders(path, ["src"]);
                        yield this.createTypeScriptFiles(path, ldkVersion, projectName, aptitudes);
                    }
                    else {
                        throw new Error("Invalid loop language.");
                    }
                    let uri = vscode_1.Uri.file(path);
                    yield vscode.commands.executeCommand("vscode.openFolder", uri, {
                        forceNewWindow: true,
                    });
                }
                catch (err) {
                    console.error(err);
                    yield vscode.window.showErrorMessage(`Error generating project: ${err.message}`);
                }
            }));
        });
    }
}
exports.Project = Project;
//# sourceMappingURL=createLoop.js.map
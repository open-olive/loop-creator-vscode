import { OpenDialogOptions, Uri, window } from "vscode";

export const openDialogForFolder = async (): Promise<Uri> => {
  const options: OpenDialogOptions = {
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
  };
  const result: Uri[] | undefined = await window.showOpenDialog(Object.assign(options));
  if (result && result.length) {
    return Promise.resolve(result[0]);
  } else {
    return Promise.reject();
  }
};


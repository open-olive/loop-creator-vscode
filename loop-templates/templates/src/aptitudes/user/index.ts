import userExampleTest from "./userExample.test.ts.squirrelly";
import userExample from "./userExample.ts.squirrelly";
import { FileMap } from "@/types";

const fileMap: FileMap = {
  userExampleTest: { fileName: "userExample.test.ts", aptitude: "keyboard" },
  userExample: { fileName: "userExample.ts", aptitude: "user" },
};

export default {
  userExample,
  fileMap,
};

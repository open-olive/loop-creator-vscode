const tsconfigTemplate = `{
  "compilerOptions": {
    "outDir": "dist",
    "allowJs": true,
    "target": "es5",
    "downlevelIteration": true,
    "module": "es6",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "rootDir": "./src",
    "declaration": true,
    "strict": true,
    "typeRoots": ["./node_modules/@types"]
  },
  "files": ["./src/index.ts"]
}`;
export default tsconfigTemplate;

#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const path = require('path');
const { execSync } = require('child_process');
const prompts = require('prompts');
const Sqrl = require('squirrelly');
const { default: templates } = require('@oliveai/loop-templates');

const projectOptions = {
  name: '',
  language: '',
  aptitudes: [],
};

const installNodeModules = () => {
  try {
    const { name: projectName } = projectOptions;

    execSync('npm install', { cwd: `./${projectName}`, stdio: 'inherit' });
  } catch (error) {
    console.error(error);
  }
};

const createProject = async () => {
  try {
    const {
      name: projectName,
      aptitudes: projectAptitudes,
      language,
    } = projectOptions;
    const isTypeScript = language === 'typescript';

    // Render a given template file to a given target file path
    const renderTemplate = async (template, filePath) => {
      const fileContents = await Sqrl.render(template, {
        isTypeScript,
        projectName,
        aptitudes: projectAptitudes,
        promiseVoid: ': Promise<void>',
      });

      await fs.writeFile(filePath, fileContents);
    };

    // Replace TS file extension with the right one
    const filenameWithExtension = (filename) => {
      const fileExtension = isTypeScript ? '.ts' : '.js';

      if (filename.endsWith('.ts')) {
        return filename.replace('.ts', fileExtension);
      }

      return filename;
    };

    const renderFileMap = async (templatesObject, targetFilePath) => {
      const { fileMap } = templatesObject;
      if (!fileMap) {
        return console.error('There is no file map on this object');
      }

      for (const [key, { fileName, aptitude }] of Object.entries(fileMap)) {
        // If it's not a general template
        // AND if it's not a template for an aptitude we're using
        // AND if it's not a 'nonzero' aptitude while we have aptitudes in our project
        const nonzero = projectAptitudes.length && aptitude === 'nonzero';
        if (
          aptitude !== 'any' &&
          !projectAptitudes.includes(aptitude) &&
          !nonzero
        )
          continue;

        // If it's a string, it's a template. Otherwise, it's a directory/object.
        if (typeof templatesObject[key] === 'string') {
          await renderTemplate(
            templatesObject[key],
            path.join(targetFilePath, filenameWithExtension(fileName))
          );
        } else if (typeof templatesObject[key] === 'object') {
          // Create directory for this set of templates
          const newTargetFilePath = path.join(targetFilePath, key);
          await fs.mkdir(newTargetFilePath);

          await renderFileMap(templatesObject[key], newTargetFilePath);
        }
      }
    };

    // Target path: the project being created
    const targetBasePath = `./${projectName}`;
    await fs.mkdir(targetBasePath);

    await renderFileMap(templates, targetBasePath);

    installNodeModules();
  } catch (error) {
    console.error(error);
  }
};

const languagePrompt = () => {
  prompts({
    type: 'select',
    name: 'language',
    message: 'Which language do you want to use?',
    choices: [
      { title: 'TypeScript', value: 'typescript' },
      { title: 'JavaScript', value: 'javascript' },
    ],
  }).then((response) => {
    const { language } = response;
    projectOptions.language = language;

    return createProject();
  });
};

const aptitudesPrompt = () => {
  prompts({
    type: 'multiselect',
    name: 'aptitudes',
    message: 'Which Aptitudes do you want to include?',
    choices: [
      { title: 'Clipboard', value: 'clipboard' },
      { title: 'Document', value: 'document' },
      { title: 'Filesystem', value: 'filesystem' },
      { title: 'Keyboard', value: 'keyboard' },
      { title: 'Network', value: 'network' },
      { title: 'Process', value: 'process' },
      { title: 'Screen', value: 'screen' },
      { title: 'UI', value: 'ui' },
      { title: 'User', value: 'user' },
      { title: 'Window', value: 'window' },
    ],
    hint: 'Use your spacebar to select. You can select multiple!',
  }).then((response) => {
    const { aptitudes } = response;
    projectOptions.aptitudes = aptitudes;

    return languagePrompt();
  });
};

const projectNamePrompt = () =>
  prompts({
    type: 'text',
    name: 'projectName',
    message: 'What is your project name? (a-z A-Z 0-9 . - _ ~)',
    format: (projectNameInput) =>
      projectNameInput.replace(/ /g, '-').toLowerCase(),
    validate: (projectNameInput) => {
      // The regex pattern NPM uses for project names in package.json http://json.schemastore.org/package
      const NPM_PROJECT_NAME_PATTERN =
        /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/g;
      const projectNameFormatted = projectNameInput
        .replace(/ /g, '-')
        .toLowerCase();

      return projectNameFormatted.match(NPM_PROJECT_NAME_PATTERN);
    },
  }).then((response) => {
    try {
      const { projectName } = response;
      projectOptions.name = projectName;

      return aptitudesPrompt();
    } catch (error) {
      return console.error(error);
    }
  });

projectNamePrompt();

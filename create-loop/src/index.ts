#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import * as fs from 'fs/promises';
import { execSync } from 'child_process';
import * as path from 'path';
import { platform } from 'process';
import * as prompts from 'prompts';
import * as Sqrl from 'squirrelly';
import * as ua from 'universal-analytics';
import { default as templates } from '@oliveai/loop-templates';
import { TemplatesObject, TemplateFile } from '@oliveai/loop-templates/dist/types';

const analytics = __GOOGLE_ANALYTICS_ID__ ? 
  ua(__GOOGLE_ANALYTICS_ID__) : 
  // For development
  {
    event: () => ({
        send: () => undefined
      }),
    set: () => undefined,
  };

const osName = platform === 'win32' ? 'windows' : platform;

analytics.set('cd1', __ENVIRONMENT__);
analytics.set('cd4', osName);

type ProjectOptions = {
  name: string,
  language: string,
  aptitudes: TemplateFile['aptitude'][]
};

const projectOptions: ProjectOptions = {
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
    const renderTemplate = async (template: string, filePath: string) => {
      const fileContents = await Sqrl.render(template, {
        isTypeScript,
        hasConfigAptitude: projectAptitudes.includes("config"),
        projectName,
        aptitudes: projectAptitudes,
        promiseVoid: ': Promise<void>',
      });

      await fs.writeFile(filePath, fileContents);
    };

    // Replace TS file extension with the right one
    const filenameWithExtension = (filename: string) => {
      const fileExtension = isTypeScript ? '.ts' : '.js';

      if (filename.endsWith('.ts')) {
        return filename.replace('.ts', fileExtension);
      }

      return filename;
    };

    const renderFileMap = async (templatesObject: TemplatesObject, targetFilePath: string) => {
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
          {continue;}

        // If it's a string, it's a template. Otherwise, it's a directory/object.
        if (typeof templatesObject[key] === 'string') {
          await renderTemplate(
            templatesObject[key] as string,
            path.join(targetFilePath, filenameWithExtension(fileName))
          );
        } else if (typeof templatesObject[key] === 'object') {
          // Create directory for this set of templates
          const newTargetFilePath = path.join(targetFilePath, key);
          await fs.mkdir(newTargetFilePath);

          await renderFileMap(templatesObject[key] as TemplatesObject, newTargetFilePath);
        }
      }
    };

    // Target path: the project being created
    const targetBasePath = `./${projectName}`;
    await fs.mkdir(targetBasePath);

    await renderFileMap(templates, targetBasePath);
    
    try {
      analytics.event({
        eventCategory: 'Loop Authors',
        eventAction: 'Loop Source Code Generated: NPX',
        eventLabel: 'Loop Created',
      }).send();
    } catch (error) {};

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

    try {
      analytics.event({
        eventCategory: 'Loop Authors',
        eventAction: 'Loop Source Code Generated: NPX',
        eventLabel: `Language Selected: ${language}`,
      }).send();
    } catch (error) {}

    return createProject();
  });
};

const aptitudesPrompt = () => {
  prompts({
    type: 'multiselect',
    name: 'aptitudes',
    message: 'Which Aptitudes do you want to include?',
    choices: [
      { title: 'Browser', value: 'browser' },
      { title: 'Clipboard', value: 'clipboard' },
      { title: 'Cursor', value: 'cursor' },
      { title: 'Config', value: 'config' },
      { title: 'Document', value: 'document' },
      { title: 'Filesystem', value: 'filesystem' },
      { title: 'Keyboard', value: 'keyboard' },
      { title: 'Network', value: 'network' },
      { title: 'Process', value: 'process' },
      { title: 'Search', value: 'search' },
      { title: 'System', value: 'system'},
      { title: 'UI', value: 'ui' },
      { title: 'User', value: 'user' },
      { title: 'Vault', value: 'vault' },
      { title: 'Window', value: 'window' },
    ],
    hint: 'Use your spacebar to select. You can select multiple!',
  }).then((response) => {
    const { aptitudes }: { aptitudes: ProjectOptions['aptitudes'] } = response;
    projectOptions.aptitudes = aptitudes;

    aptitudes.forEach((aptitude) => {
      try {
        analytics.event({
          eventCategory: 'Loop Authors',
          eventAction: 'Loop Source Code Generated: NPX',
          eventLabel: `Aptitude Selected: ${aptitude}`,
        }).send();
      } catch (error) {}
    });

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

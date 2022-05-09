import browserExample from './browserExample.ts.squirrelly';
import browserExampleTest from './browserExample.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
    browserExampleTest: {
    fileName: 'browserExample.test.ts',
    aptitude: 'browser',
  },
  searchExample: { fileName: 'searchExample.ts', aptitude: 'browser' },
};

export default {
    browserExample,
    browserExampleTest,
  fileMap,
};
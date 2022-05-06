import screenExample from './screenExample.ts.squirrelly';
import screenExampleTest from './screenExample.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  screenExampleTest: {
    fileName: 'screenExample.test.ts',
    aptitude: 'screen',
  },
  screenExample: { fileName: 'screenExample.ts', aptitude: 'screen' },
};

export default {
  screenExample,
  screenExampleTest,
  fileMap,
};

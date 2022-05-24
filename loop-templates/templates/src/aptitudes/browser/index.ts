import browserListener from './browserListener.ts.squirrelly';
import browserListenerTest from './browserListener.test.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
    browserListenerTest: {
    fileName: 'browserListener.test.ts',
    aptitude: 'browser',
  },
  browserListener: { fileName: 'browserListener.ts', aptitude: 'browser' },
};

export default {
    browserListenerTest,
    browserListener,
    fileMap,
};
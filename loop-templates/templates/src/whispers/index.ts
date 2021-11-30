import clipboardWhisperTest from './ClipboardWhisper.test.ts.squirrelly';
import clipboardWhisper from './ClipboardWhisper.ts.squirrelly';
import filesystemWhisperTest from './FilesystemWhisper.test.ts.squirrelly';
import filesystemWhisper from './FilesystemWhisper.ts.squirrelly';
import index from './index.ts.squirrelly';
import introWhisperTest from './IntroWhisper.test.ts.squirrelly';
import introWhisper from './IntroWhisper.ts.squirrelly';
import keyboardWhisperTest from './KeyboardWhisper.test.ts.squirrelly';
import keyboardWhisper from './KeyboardWhisper.ts.squirrelly';
import networkWhisperTest from './NetworkWhisper.test.ts.squirrelly';
import networkWhisper from './NetworkWhisper.ts.squirrelly';
import uiWhisperTest from './UiWhisper.test.ts.squirrelly';
import uiWhisper from './UiWhisper.ts.squirrelly';
import windowWhisperTest from './WindowWhisper.test.ts.squirrelly';
import windowWhisper from './WindowWhisper.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  clipboardWhisperTest: { fileName: 'ClipboardWhisper.test.ts', aptitude: 'clipboard' },
  clipboardWhisper: { fileName: 'ClipboardWhisper.ts', aptitude: 'clipboard' },
  filesystemWhisperTest: { fileName: 'FilesystemWhisper.test.ts', aptitude: 'filesystem' },
  filesystemWhisper: { fileName: 'FilesystemWhisper.ts', aptitude: 'filesystem' },
  index: { fileName: 'index.ts', aptitude: 'any' },
  introWhisperTest: { fileName: 'IntroWhisper.test.ts', aptitude: 'any' },
  introWhisper: { fileName: 'IntroWhisper.ts', aptitude: 'any' },
  keyboardWhisperTest: { fileName: 'KeyboardWhisper.test.ts', aptitude: 'keyboard' },
  keyboardWhisper: { fileName: 'KeyboardWhisper.ts', aptitude: 'keyboard' },
  networkWhisperTest: { fileName: 'NetworkWhisper.test.ts', aptitude: 'network' },
  networkWhisper: { fileName: 'NetworkWhisper.ts', aptitude: 'network' },
  uiWhisperTest: { fileName: 'UiWhisper.test.ts', aptitude: 'ui' },
  uiWhisper: { fileName: 'UiWhisper.ts', aptitude: 'ui' },
  windowWhisperTest: { fileName: 'WindowWhisper.test.ts', aptitude: 'window' },
  windowWhisper: { fileName: 'WindowWhisper.ts', aptitude: 'window' }
};

export default {
  clipboardWhisperTest,
  clipboardWhisper,
  filesystemWhisperTest,
  filesystemWhisper,
  index,
  introWhisperTest,
  introWhisper,
  keyboardWhisperTest,
  keyboardWhisper,
  networkWhisperTest,
  networkWhisper,
  uiWhisperTest,
  uiWhisper,
  windowWhisperTest,
  windowWhisper,
  fileMap
};
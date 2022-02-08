import clipboard from './clipboard';
import filesystem from './filesystem';
import keyboard from './keyboard';
import network from './network';
import process from './process';
import ui from './ui';
import user from './user';
import window from './window';
import index from './index.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  clipboard: { fileName: 'clipboard', aptitude: 'clipboard' },
  filesystem: { fileName: 'filesystem', aptitude: 'filesystem' },
  keyboard: { fileName: 'keyboard', aptitude: 'keyboard' },
  network: { fileName: 'network', aptitude: 'network' },
  process: { fileName: 'process', aptitude: 'process' },
  ui: { fileName: 'ui', aptitude: 'nonzero' },
  user: { fileName: 'user', aptitude: 'user' },
  window: { fileName: 'window', aptitude: 'window' },
  index: { fileName: 'index.ts', aptitude: 'any' },
};

export default {
  clipboard,
  filesystem,
  keyboard,
  network,
  process,
  ui,
  user,
  window,
  index,
  fileMap,
};

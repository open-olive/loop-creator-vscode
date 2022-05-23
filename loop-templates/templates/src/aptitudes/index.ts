import clipboard from './clipboard';
import config from './config';
import document from './document';
import filesystem from './filesystem';
import keyboard from './keyboard';
import network from './network';
import process from './process';
import search from './search';
import system from './system';
import ui from './ui';
import user from './user';
import vault from './vault';
import window from './window';
import index from './index.ts.squirrelly';
import { FileMap } from '@/types';

const fileMap: FileMap = {
  clipboard: { fileName: 'clipboard', aptitude: 'clipboard' },
  config: { fileName: 'config', aptitude: 'config'},
  document: { fileName: 'document', aptitude: 'document' },
  filesystem: { fileName: 'filesystem', aptitude: 'filesystem' },
  keyboard: { fileName: 'keyboard', aptitude: 'keyboard' },
  network: { fileName: 'network', aptitude: 'network' },
  process: { fileName: 'process', aptitude: 'process' },
  search: { fileName: 'search', aptitude: 'search' },
  system: { fileName: 'system', aptitude: 'system'},
  ui: { fileName: 'ui', aptitude: 'any' },
  user: { fileName: 'user', aptitude: 'user' },
  vault: { fileName: 'vault', aptitude: 'vault' },
  window: { fileName: 'window', aptitude: 'window' },
  index: { fileName: 'index.ts', aptitude: 'any' },
};

export default {
  clipboard,
  config,
  document,
  filesystem,
  keyboard,
  network,
  process,
  search,
  system,
  ui,
  user,
  vault,
  window,
  index,
  fileMap,
};

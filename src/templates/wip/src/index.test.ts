import {
  clipboardListener,
  filesystemExample,
  keyboardListener,
  networkExample,
  searchListener,
  activeWindowListener,
} from './aptitudes';

jest.mock('@oliveai/ldk');
jest.mock('./aptitudes');

const introShowSpy = jest.fn();
jest.mock('./whispers', () => {
  return {
    IntroWhisper: jest.fn().mockImplementation(() => {
      return { show: introShowSpy };
    }),
  };
});

describe('Project Startup', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start the Intro whisper and all active aptitudes', () => {
    // eslint-disable-next-line global-require
    require('.');

    expect(introShowSpy).toBeCalled();

    expect(clipboardListener.listen).toBeCalled();
    expect(filesystemExample.run).toBeCalled();
    expect(keyboardListener.listen).toBeCalled();
    expect(networkExample.run).toBeCalled();
    expect(searchListener.listen).toBeCalled();
    expect(activeWindowListener.listen).toBeCalled();
  });
});

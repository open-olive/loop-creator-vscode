import { window } from '@oliveai/ldk';
import { WindowWhisper } from '../../whispers';
import activeWindowListener, { handler } from './activeWindowListener';

jest.mock('@oliveai/ldk');

const windowShowSpy = jest.fn();
jest.mock('../../whispers', () => {
  return {
    WindowWhisper: jest.fn().mockImplementation(() => {
      return { show: windowShowSpy };
    }),
  };
});

describe('Active Window Listener', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start the active window listener', () => {
    activeWindowListener.listen();

    expect(window.listenActiveWindow).toBeCalledWith(handler);
  });

  it('should create the whisper when handler is triggered', () => {
    const activeWindowStub = {} as window.WindowInfo;

    handler(activeWindowStub);

    expect(WindowWhisper).toBeCalledWith(activeWindowStub);
    expect(windowShowSpy).toBeCalled();
  });
});

import { keyboard } from '@oliveai/ldk';
import { KeyboardWhisper } from '../../whispers';
import keyboardListener, { handler } from './keyboardListener';

jest.mock('@oliveai/ldk');

const keyboardShowSpy = jest.fn();
jest.mock('../../whispers', () => {
  return {
    KeyboardWhisper: jest.fn().mockImplementation(() => {
      return { show: keyboardShowSpy };
    }),
  };
});

describe('Keyboard Listener', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start the keyboard listener', () => {
    keyboardListener.listen();

    expect(keyboard.listenText).toBeCalledWith(handler);
  });

  it('should create the whisper when handler is triggered', () => {
    handler('test');

    expect(KeyboardWhisper).toBeCalledWith('test');
    expect(keyboardShowSpy).toBeCalled();
  });
});

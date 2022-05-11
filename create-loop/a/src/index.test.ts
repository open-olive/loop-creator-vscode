import { openHandler } from './aptitudes';

jest.mock('./aptitudes');

describe('Project Startup', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start the aptitudes and open handler on startup', async () => {
    // eslint-disable-next-line global-require
    await require('.');
    expect(console.log).toBeCalledWith('Example Loop Started');
    expect(openHandler.start).toBeCalled();
  });
});

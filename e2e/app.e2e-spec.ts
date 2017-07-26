import { Ang2S7Assign7.1Page } from './app.po';

describe('ang2-s7-assign7.1 App', () => {
  let page: Ang2S7Assign7.1Page;

  beforeEach(() => {
    page = new Ang2S7Assign7.1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

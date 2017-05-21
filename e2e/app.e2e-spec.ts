import { ThePolishWeddingPage } from './app.po';

describe('the-polish-wedding App', () => {
  let page: ThePolishWeddingPage;

  beforeEach(() => {
    page = new ThePolishWeddingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tpw works!');
  });
});

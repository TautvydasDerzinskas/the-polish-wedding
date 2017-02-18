import { WeddingPagePage } from './app.po';

describe('wedding-page App', () => {
  let page: WeddingPagePage;

  beforeEach(() => {
    page = new WeddingPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wp works!');
  });
});

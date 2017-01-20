import { Ng2WeddingPagePage } from './app.po';

describe('wedding-page App', function() {
  let page: Ng2WeddingPagePage;

  beforeEach(() => {
    page = new Ng2WeddingPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

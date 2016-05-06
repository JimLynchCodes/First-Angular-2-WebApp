import { Ng2Page } from './app.po';

describe('ng-2 App', function() {
  let page: Ng2Page;

  beforeEach(() => {
    page = new Ng2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Wow, Jim Lynch is one forward thinking Angular dev!');
  });
});

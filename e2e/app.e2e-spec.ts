import { AprendendoAngular22Page } from './app.po';

describe('aprendendo-angular22 App', function() {
  let page: AprendendoAngular22Page;

  beforeEach(() => {
    page = new AprendendoAngular22Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

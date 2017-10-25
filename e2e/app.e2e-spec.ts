import { AngularPourPage } from './app.po';

describe('angular-pour App', () => {
  let page: AngularPourPage;

  beforeEach(() => {
    page = new AngularPourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

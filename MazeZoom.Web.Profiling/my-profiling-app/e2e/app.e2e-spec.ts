import { MyProfilingAppPage } from './app.po';

describe('my-profiling-app App', () => {
  let page: MyProfilingAppPage;

  beforeEach(() => {
    page = new MyProfilingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ProjectContractsPage } from './app.po';

describe('project-contracts App', () => {
  let page: ProjectContractsPage;

  beforeEach(() => {
    page = new ProjectContractsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

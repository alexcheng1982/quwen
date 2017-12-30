import { HomePage } from "./home.po";

describe('Home page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should show 20 items', async () => {
    await page.navigateTo();
    let items = await page.getItemsCount();
    expect(items).toEqual(20);
  });

});

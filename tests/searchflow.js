import SearchPage from '../page/searchpage';
import ResultsPage from '../page/resultspage';
import config from '../config.json';


const searchPage = new SearchPage();
const resultsPage = new ResultsPage();

const SearchUser = async (t) => {
  await t
    .typeText(searchPage.searchBox, "cypress.io")
    .pressKey('enter');
};


fixture("Search Page Tests")
.page(`${config.SEARCH_PROVIDER_URL}`)

test("Check Search Page", async (t) => {
  await SearchUser(t);
  await t
      .expect(resultsPage.searchBar.exists).ok()
      .expect(resultsPage.menuBar.exists).ok()
      .expect(resultsPage.signInButton.exists).ok();
});
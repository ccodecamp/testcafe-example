import SearchPage from '../page/searchpage';
import ResultsPage from '../page/resultspage';

const searchPage = new SearchPage();
const resultsPage = new ResultsPage();

const SearchUser = async (t) => {
  await t
    .typeText(searchPage.searchBox, "")
    .click(searchPage.searchButton);
};


fixture("Search Page Tests")
.page("https://www.google.com.au/");

test("Check Search Page", async (t) => {
  await SearchUser(t);
  await t
      .expect(resultsPage.searchBar.exists).ok()
      .expect(resultsPage.menuBar.exists).ok()
      .expect(resultsPage.signInButton.exists).ok();
});
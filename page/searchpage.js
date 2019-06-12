import { Selector } from 'testcafe';

export default class SearchPage {
    constructor() {
        this.searchBox =Selector('');
        this.searchButton = Selector('');
    }
}
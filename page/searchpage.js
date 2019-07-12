import { Selector } from 'testcafe';

export default class SearchPage {
    constructor() {
        this.searchBox =Selector('input[class="gLFyf gsfi"]');
    }
}
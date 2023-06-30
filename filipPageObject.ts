import {By, until} from 'selenium-webdriver';
import { BasePage } from './basePage';

export class filipPage extends BasePage {
    //selectors

        //Simple Search
            searchTerm: By = By.id("ctl00_ctl00_MainContent_Content_SearchControls_CardSearchBoxParent_CardSearchBox");
            noCookies: By = By.id("wizardCookieBannerOptOut");

            //Random card locators
            randomCard: By = By.xpath('//div[@class="randomtext"]');
            randomCard2: By = By.id("ctl00_ctl00_ctl00_Random");
            randomCardName: By = By.xpath('//div[@id="ctl00_ctl00_ctl00_MainContent_SubContent_SubContent_nameRow"]/div[2]');

            //Color check boxes
            whiteBox: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchWhite"]');
            blueBox: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchBlue"]');
            blackBox: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchBlack"]');
            redBox: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchRed"]');
            greenBox: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchGreen"]');

            //Search conditions check boxes
            matchExactColors: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchColorExact"]');
            excludeColors: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchColorExclude"]');
            matchMulticolor: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchColorMulti"]');
            byName: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchCardName"]');
            byType: By = By.xpath('//label[@for="ctl00_ctl00_MainContent_Content_SearchControls_SearchCardTypes"]');

            //Search Button
            searchBtn: By = By.id("ctl00_ctl00_MainContent_Content_SearchControls_searchSubmitButton");

            //Elements used for assertions
            cardsByName: By = By.id("ctl00_ctl00_ctl00_MainContent_SubContent_SubContent_ctl00_listRepeater_ctl00_cardTitle");

            //Dropdown options
            outputChecklist: By = By.xpath('//*[@id="ctl00_ctl00_MainContent_Content_SearchControls_resultsView"]/option[4]');

            //Checklist Results
            checklistColor: By = By.xpath('//*[@id="ctl00_ctl00_ctl00_MainContent_SubContent_SubContent_searchResultsContainer"]/div/table/tbody/tr[2]/td[4]');
            checklistColor2: By = By.xpath('//*[@id="ctl00_ctl00_ctl00_MainContent_SubContent_SubContent_searchResultsContainer"]/div/table/tbody/tr[10]/td[4]');
            checklistColor3: By = By.xpath('//*[@id="ctl00_ctl00_ctl00_MainContent_SubContent_SubContent_searchResultsContainer"]/div/table/tbody/tr[16]/td[4]');
    
        //Advanced Search
            advancedSearch: By = By.xpath('//*[@id="Main"]/div[1]/div[3]/a[2]');
            byArtist: By = By.id("autoCompleteSourceBoxartistAddText6_InnerTextBox");
            advSearchBtn: By = By.id("ctl00_ctl00_MainContent_Content_filterSubmit");
            advArtistAdd: By = By.id("ctl00_ctl00_MainContent_Content_artistAdd");
            advClickOnCard: By = By.xpath('//*[@id="ctl00_ctl00_ctl00_MainContent_SubContent_SubContent_ctl00_listRepeater_ctl00_cardTitle"]');
            advCardArtist: By = By.xpath('//*[@id="ctl00_ctl00_ctl00_MainContent_SubContent_SubContent_ArtistCredit"]/a');

    //constructor
    constructor() {
        super({url: "https://gatherer.wizards.com/Pages/Default.aspx"});
    };

    //methods
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }
};
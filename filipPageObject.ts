import {By, until} from 'selenium-webdriver';
import { BasePage } from './basePage';

export class filipPage extends BasePage {
    //selectors
   

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
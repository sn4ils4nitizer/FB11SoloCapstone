import { By } from "selenium-webdriver";
import { filipPage } from "./filipPageObject";
const filipGatherer = new filipPage();

const fs = require("fs");

describe("Testing Gatherer", () => {
    beforeEach(async ()=> {
        await filipGatherer.navigate();
    });
    
    test("Search Cards by Color", async ()=> {
        await filipGatherer.click(filipGatherer.whiteBox);
        await filipGatherer.click(filipGatherer.outputChecklist);
        await filipGatherer.click(filipGatherer.searchBtn);
        let colorResults1 = await filipGatherer.getText(filipGatherer.checklistColor);
        expect(colorResults1).toContain("White");
        

        fs.writeFile(`${__dirname}/includesColor.png`,
    await filipGatherer.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });
    });


    test("Filter Cards by Name FB11SC-11", async ()=> {
        await filipGatherer.driver.manage().window().maximize();
        await filipGatherer.setInput(filipGatherer.searchTerm, "Jin-Gitaxias");
        //await filipGatherer.click(filipGatherer.whiteBox);
        await filipGatherer.click(filipGatherer.searchBtn);
        let results = await filipGatherer.getText(filipGatherer.cardsByName);
        expect(results).toContain("Jin-Gitaxias");

        fs.writeFile(`${__dirname}/cardByName.png`,
    await filipGatherer.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });
        console.log(results);
    });
    
    test("Random Card, FB11SC-12", async ()=> {
        await filipGatherer.click(filipGatherer.noCookies);
        await filipGatherer.click(filipGatherer.randomCard);
        let resultsRandomCard1 = await filipGatherer.getText(filipGatherer.randomCardName);
        console.log(resultsRandomCard1);
        
        fs.writeFile(`${__dirname}/randomCard1.png`,
    await filipGatherer.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });

        await filipGatherer.click(filipGatherer.randomCard2);
        let resultsRandomCard2 = await filipGatherer.getText(filipGatherer.randomCardName);
        console.log(resultsRandomCard2);
        expect(resultsRandomCard1).not.toContain(resultsRandomCard2);

        fs.writeFile(`${__dirname}/randomCard2.png`,
    await filipGatherer.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });
        
    });

    
    afterAll(async ()=> {
        await filipGatherer.driver.quit();
    });
});
import { By } from "selenium-webdriver";
import { filipPage } from "./filipPageObject";
const filipGatherer = new filipPage();

const fs = require("fs");

//Console.log for each result to confirm assertion are made correctly

describe("Testing Gatherer", () => {
    beforeEach(async ()=> {
        await filipGatherer.navigate();
    });
    
    test("Search Cards by Color FB11SCC-4", async ()=> {
        await filipGatherer.driver.manage().window().maximize();
        await filipGatherer.click(filipGatherer.whiteBox);
        await filipGatherer.click(filipGatherer.outputChecklist);
        await filipGatherer.click(filipGatherer.searchBtn);
        let colorResults1 = await filipGatherer.getText(filipGatherer.checklistColor);
        console.log(colorResults1);
        expect(colorResults1).toContain("White");
        

        fs.writeFile(`${__dirname}/includesColor.png`,
    await filipGatherer.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });
        
    });


    test("Filter Cards by Name FB11SC-11", async ()=> {
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

    test("Exclude Unchecked Colors FB11SC-7", async ()=> {
        await filipGatherer.click(filipGatherer.blackBox);
        await filipGatherer.click(filipGatherer.blueBox);
        await filipGatherer.click(filipGatherer.excludeColors);
        await filipGatherer.click(filipGatherer.outputChecklist);
        await filipGatherer.click(filipGatherer.searchBtn);
        let excludeColorsResult = await filipGatherer.getText(filipGatherer.checklistColor);
        console.log(excludeColorsResult);        
        expect(excludeColorsResult).not.toContain("Red" && "White" && "Green");

        fs.writeFile(`${__dirname}/excludeUncheckedColors.png`,
    await filipGatherer.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });

    });

    test("Search for Multicolor Card Containing Chosen Colors FB11SC-8", async ()=>  {
        await filipGatherer.click(filipGatherer.redBox);
        await filipGatherer.click(filipGatherer.greenBox);
        await filipGatherer.click(filipGatherer.matchMulticolor);
        await filipGatherer.click(filipGatherer.outputChecklist);
        await filipGatherer.click(filipGatherer.searchBtn);
        let resultsMulticolor = await filipGatherer.getText(filipGatherer.checklistColor);
        expect(resultsMulticolor).toContain("Red" && "Green");
        console.log(resultsMulticolor)

        fs.writeFile(`${__dirname}/multicolorContainsChosenColors.png`,
    await filipGatherer.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });

    });

    test("Search for Card That Are Only the Chosen Colors FB11SC-2", async ()=> {
        await filipGatherer.click(filipGatherer.whiteBox)
        await filipGatherer.click(filipGatherer.blueBox);
        await filipGatherer.click(filipGatherer.matchExactColors);
        await filipGatherer.click(filipGatherer.excludeColors);
        await filipGatherer.click(filipGatherer.outputChecklist);
        await filipGatherer.click(filipGatherer.searchBtn);
        let resultsChoseColorsOnly = await filipGatherer.getText(filipGatherer.checklistColor);
        expect(resultsChoseColorsOnly).toContain("White" || "Blue");
        expect(resultsChoseColorsOnly).not.toContain("Red" && "Green" && "Black");
        console.log(resultsChoseColorsOnly);

        fs.writeFile(`${__dirname}/multicolorContainsOnlyChosenColors.png`,
    await filipGatherer.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });

    });

    test("Search for Multicolor Cards Only", async ()=> {
        await filipGatherer.click(filipGatherer.matchMulticolor);
        await filipGatherer.click(filipGatherer.outputChecklist);
        await filipGatherer.click(filipGatherer.searchBtn);
        let resultsMulticolorOnly = await filipGatherer.getText(filipGatherer.checklistColor);
        expect(resultsMulticolorOnly).toContain("White" || "Blue" || "Black" || "Red" || "Green");
        console.log(resultsMulticolorOnly);

        fs.writeFile(`${__dirname}/multicolorOnly.png`,
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
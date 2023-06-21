import { filipPage } from "./filipPageObject";
const filipTest1 = new filipPage();

const fs = require("fs");

describe("Testing Demoblaze", () => {
    beforeEach(async ()=> {
        await filipTest1.navigate();
    });
    
    afterAll(async ()=> {
        await filipTest1.driver.quit();
    });
});
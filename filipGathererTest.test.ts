import { filipPage2 } from "./filipPO";
const filipTest1 = new filipPage2();

const fs = require("fs");

describe("Testing Demoblaze", () => {
    beforeEach(async ()=> {
        await filipTest1.navigate();
    });
    
    afterAll(async ()=> {
        await filipTest1.driver.quit();
    });
});
import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlRanking = "http://localhost:3000/ranking";

test.use({
    browserName: "chromium",
    ...devices["iPhone XR"],
});

test.describe("Testing for mobile viewport for iPhone XR", () => {
    
    test("Testing for colours on iPhone XR", async ({ page }) => {
        await page.goto(urlRanking);

        const mainContainer = page.locator("#title");

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color");
        });

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(241, 230, 230)");
    });

    test("Testing for Table colors on iPhone XR", async ({ page }) => {
        await page.goto(urlRanking);

        const table = page.locator("#table");

        const checkingTableColour = await table.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color");
        });

        console.log(checkingTableColour);
        expect(checkingTableColour).toBe("rgb(251, 168, 168)");
    });
});

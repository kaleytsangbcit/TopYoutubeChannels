import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlRanking = "http://localhost:3000/ranking";

test.use({
    browserName: "chromium",
    ...devices["iPhone XR"],
});

test.describe("Testing for mobile viewport for iPhone XR", () => {
    test("Testing for colours on iPhone XR", async ({ page }) => {
        await page.goto(urlHome);

        const mainContainer = page.locator("#colouring");

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color");
        });

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(62, 60, 60)");
    });

    test("Testing for button colors on iPhone XR", async ({ page }) => {
        await page.goto(urlHome);

        const button = page.locator("#btnColouring");

        const checkingButtonColour = await button.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color");
        });

        console.log(checkingButtonColour);
        expect(checkingButtonColour).toBe("rgb(238, 137, 137)");
    });
});

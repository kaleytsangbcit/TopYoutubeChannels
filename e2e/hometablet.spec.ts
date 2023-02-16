import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlRanking = "http://localhost:3000/ranking";

test.use({
    browserName: "chromium",
    ...devices["iPad Air"],
    viewport: { width: 820, height: 1180 },
});

test.describe("Testing for home Tablet", () => {
    
    test.describe('Main area', () => {
        test('Header Tag', async({ page }) => {
            await page.goto(urlHome)

            await expect(page.locator('h1')).toContainText('Most Subscribed 1000 Youtube Channels');
        })
    })

    test.describe('Check about page navigates to another page', () => {
        test('Should navigate to Ranking page from homepage', async ({ page}) => {
            await page.goto(urlHome);
            await page.click('text=See the Ranking');
            await expect(page).toHaveURL(urlRanking);
        })
    })
});
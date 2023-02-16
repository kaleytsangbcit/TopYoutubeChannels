import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlRanking = "http://localhost:3000/ranking";

test.use({
    browserName: "chromium",
    ...devices["iPad Air"],
    viewport: { width: 820, height: 1180 },
});

test.describe("Testing for home Tablet", () => {
    test("Count thead in table", async ({ page }) => {
        await page.goto(urlRanking);

        await expect(page.locator("table >  thead")).toHaveCount(1);
    });

    test("Count td in table", async ({ page }) => {
        await page.goto(urlRanking);

        await expect(page.locator("table > tbody")).toHaveCount(1);
    });
});

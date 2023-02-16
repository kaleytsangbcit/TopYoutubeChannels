import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlRanking = "http://localhost:3000/ranking";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});


test('The meta tag', async ({ page }) => { 
    await page.goto(urlRanking)
    
    const metaDescriptionOne = page.locator('meta[name="author"]')
    await expect(metaDescriptionOne).toHaveAttribute("content", "YouTube Rankings")
})

test.describe('Main area', () => {
    test('Header Tag', async({ page }) => {
        await page.goto(urlRanking)

        await expect(page.locator('h1')).toContainText('Top 1000 Youtube Channels');
    })
})


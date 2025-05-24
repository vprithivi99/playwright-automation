import { test, expect } from '@playwright/test';

test('Handling Dropdown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.locator("#country").selectOption({index:1}) // by dropdown index
    //await page.locator("#country").selectOption({label:'India'}) // by dropdown label
    //await page.locator("#country").selectOption({value:'india'}) // by dropdown value
    //await page.locator("#country").selectOption('india') // visible text
    await page.selectOption("#country", 'India')


    // assertions

    const options = await page.locator("#country option")
    await expect(options).toHaveCount(10)

    const options2 = await page.$$("#country option")
    console.log("count:", options2.length)
    await expect(options2.length).toBe(10)

    const contentText = await page.locator("#country").textContent()
    await expect(contentText.includes('Canada')).toBeTruthy();

    const optionValues = await page.$$("#country option")
    for (const optionValue of optionValues) {
        console.log(await optionValue.textContent())

    }

    await page.waitForTimeout(5000)

});


test('Handling Multi Select Dropdown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.selectOption("#colors", ['Blue', 'Red', 'yellow'])

    const options = await page.locator("#colors option")
    await expect(options).toHaveCount(7)

    const options2 = await page.$$("#colors option")
    console.log("count:", options2.length)
    await expect(options2.length).toBe(7)


    const optionValues = await page.$$("#colors option")
    for (const optionValue of optionValues) {
        console.log(await optionValue.textContent())

    }

    await page.waitForTimeout(5000)

});



test('Handling Auto Suggest Select Dropdown', async ({ page }) => {

    await page.goto("https://www.redbus.in/")

    await page.locator("#src").fill('chennai')

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    const ddOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")


    for (const option of ddOptions) {
        const value = await option.textContent()
        console.log(value)
        console.log("count:", option.length)
        if (value.includes('Pallavaram')) {
            await option.click()

        }

    }
    await page.waitForTimeout(5000)

});


test.only('Handling Hidden Dropdown', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


    await page.locator("input[placeholder='Username']").fill('Admin')
    await page.locator("input[placeholder='Password']").fill('admin123')
    await page.locator("button[type='submit']").click()

    const Dashboard = await page.locator("//h6[normalize-space()='Dashboard']")
    await expect(Dashboard).toBeVisible()

    await page.locator(".oxd-main-menu-item.active").click()
    
    await page.locator('form i').nth(2).click();
    await page.getByRole('option', { name: 'Content Specialist' }).click();
    await page.waitForTimeout(5000)

});





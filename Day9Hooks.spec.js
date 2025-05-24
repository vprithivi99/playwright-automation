import { test, expect } from '@playwright/test';

test.describe.only('Hooks Concept', () => {

    test.beforeEach(async ({ page }) => {

        //await browser.newpage()
        await page.goto("https://www.demoblaze.com/")
        //validate url
        await expect(page).toHaveURL("https://www.demoblaze.com/")
        // validate title
        await expect(page).toHaveTitle("STORE")

        await page.click('id=login2')
        await page.locator('//input[@id="loginusername"]').fill("prithivi1000")
        await page.locator('#loginpassword').fill("DubaiPolice")
        await page.click("//button[normalize-space()='Log in']")

        const Header = await page.locator("(//a[normalize-space()='PRODUCT STORE'])[1]")
        await expect(Header).toBeVisible();

        console.log('Successfully Logged in');
    });

    test.afterEach(async ({ page }) => {

        await page.click('#logout2')
        console.log('Successfully Logged out');
    });

    test('Home Page test', async ({ page }) => {

        const categories = await page.locator(".list-group")
        await expect(categories).toBeVisible();

        const items = page.locator(".hrefch");
        await expect(items).toHaveCount(9);
        // const count = await page.$$(".hrefch")
        //  await expect(count).toHaveLength(9)

        console.log('Home Page test Completed');
    });

    test('Product page ', async ({ page }) => {
        await page.click("//a[normalize-space()='Samsung galaxy s6']")

        const productName = await page.locator(".name")
        await expect(productName).toBeVisible();
        await expect(productName).toHaveText('Samsung galaxy s6');

        await page.click(".btn.btn-success.btn-lg")

        page.on('dialog', async dialog => {

            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('Product added.')
            await dialog.accept();
        })

        console.log('Product Added Successfully');
    });

    test('Cart page ', async ({ page }) => {

        await page.click("#cartur")

        // await page.waitForSelector('td:nth-child(2)');
        const productTitle = await page.locator("td:nth-child(2)")
        await expect(productTitle).toBeVisible();
        await expect(productTitle).toHaveText('Samsung galaxy s6');

        const productPrice = await page.locator("td:nth-child(3)")
        await expect(productPrice).toBeVisible();
        await expect(productPrice).toHaveText('360');

        await page.click("//a[normalize-space()='Delete']")

        console.log('Card page validated Successfully');
    });

});


test.describe('Tag Concept', () => {

    test('test1 @login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.waitForTimeout(2000)
        console.log('Login Page Executed');
    });

    test('test2 @register', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.waitForTimeout(2000)
        console.log('Register Page Executed');
    });

    test('test3 @login', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.waitForTimeout(2000)
        console.log('Login Page Executed');
    });

    test('test4 @register', async ({ page }) => {
        await page.goto('https://demo.automationtesting.in/Register.html');
        await page.waitForTimeout(2000)
        console.log('Register Page Executed');
    });

    test('test5 @login@register', async ({ page }) => {
        await page.goto('https://www.demoblaze.com/index.html');
        await page.waitForTimeout(2000)
        console.log('🧪 Login And register Page Executed');
    });

});

import { test, expect } from '@playwright/test';

test('Handling Input Box', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Register.html');

    const firstName = await page.locator("input[placeholder='First Name']")
    await expect(firstName).toBeEmpty()
    await expect(firstName).toBeVisible()
    await expect(firstName).toBeEditable()
    await expect(firstName).toBeEnabled()

    await firstName.fill('Thalaivan')
    await expect(firstName).toHaveValue('Thalaivan')


    const lastName = await page.locator("input[placeholder='Last Name']")
    await expect(lastName).toBeEmpty()
    await expect(lastName).toBeVisible()
    await expect(lastName).toBeEditable()
    await expect(lastName).toBeEnabled()

    await lastName.fill('Rajini')
    await expect(lastName).toHaveValue('Rajini')


    const emailAddress = await page.locator("input[type='email']")
    await expect(emailAddress).toBeEmpty()
    await expect(emailAddress).toBeVisible()
    await expect(emailAddress).toBeEditable()
    await expect(emailAddress).toBeEnabled()

    await emailAddress.fill('Dubai@gmail.com')
    await expect(emailAddress).toHaveValue('Dubai@gmail.com')

});


test('Handling Radio button', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Register.html');

    const male = await page.locator("input[value='Male']")
    const female = await page.locator("input[value='FeMale']")

    expect(male).not.toBeChecked()
    expect(female).not.toBeChecked()
    // expect(female.isChecked).toBeFalsy()

    male.check()
    expect(male).toBeChecked()
    expect(female.isChecked).toBeTruthy()

    await page.waitForTimeout(5000)

});

test('Handling Check box', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // single checkbox
    const monday = await page.locator("//input[@id='monday' and @type='checkbox']")
    const sunday = await page.locator("//input[@id='sunday' and @type='checkbox']")

    expect(monday).not.toBeChecked()
    expect(sunday).not.toBeChecked()

    monday.check()
    sunday.check()

    expect(monday).toBeChecked()
    expect(sunday).toBeChecked()

    // multible checkbox

    const checkBoxlocators = [

        "//input[@id='wednesday' and @type='checkbox']",
        "//input[@id='thursday' and @type='checkbox']",
        "//input[@id='friday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"

    ];

    for (const locators of checkBoxlocators) {
        await page.locator(locators).check()
    }

    await page.waitForTimeout(5000)

});

test('Handling Simple Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#alertBtn").click()
    await page.locator("#name").fill("yu77mi")


    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })
    await page.locator("#alertBtn").click()
    await page.waitForTimeout(5000)

});
test('Handling Confirm Alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
    })
    await page.locator("#confirmBtn").click()
    await expect(page.locator("#demo")).toBeVisible()
    await expect(page.locator("#demo")).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000)
});
test('Handling prompt Alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')

        await dialog.accept('Billa');
    })
    await page.locator("#promptBtn").click()
    await expect(page.locator("#demo")).toBeVisible()
    await expect(page.locator("#demo")).toHaveText('Hello Billa! How are you today?')
    await expect(page.locator("#demo")).toContainText('Billa')

    await page.waitForTimeout(5000)
});
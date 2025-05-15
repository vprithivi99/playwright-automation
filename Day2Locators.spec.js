import { test, expect } from '@playwright/test';

test('LOGIN ', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveURL("https://www.demoblaze.com/");

    await page.click('id=login2')     // property
    await page.locator('//input[@id="loginusername"]').fill("prithivi1000") //xpath
    await page.locator('#loginpassword').fill("DubaiPolice")  // css selector

    await page.click("//button[normalize-space()='Log in']")

    const logoutBtn = await page.locator('#logout2')
    await expect(logoutBtn).toBeVisible();

    await page.click('#logout2')

    await page.waitForTimeout(3000);
    /// Invalid Login 

    await page.click('id=login2')     // property
    await page.locator('//input[@id="loginusername"]').fill("kininnubuu") //xpath
    await page.locator('#loginpassword').fill("poburxezex")  // css selector

    await page.click("//button[normalize-space()='Log in']")

    page.on('dialog', async (dialog) => {
        console.log('Alert message:', dialog.message()); // Print alert text
        await dialog.accept(); // Accept the alert 
    });



});


test('amazon ', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' })
            .fill('iphone');
  await page.getByRole('button', { name: 'Go', exact: true })
            .click();
  await page.locator('#a-autoid-1-announce')
            .click();
  await page.locator('#a-autoid-2-announce').click();
  await page.locator('#a-autoid-3-announce').click();
  await page.getByRole('link', { name: 'items in cart' }).click();
  await page.getByRole('list', { name: 'Shopping Cart' }).click();
  await page.locator('#sc-active-cart-bottom-bar-subtotal-wrapper').getByText('Subtotal (3 items): ₹').click();
 
});


test.only('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('ODODOD');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('NJDDNLD');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('ODODOODODO');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('DMDMMDDMDMD');
  await page.locator('input[type="tel"]').click();
  await page.locator('input[type="tel"]').fill('9303083083');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.locator('#checkbox1').check();
  await page.locator('#checkbox2').check();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('treeitem', { name: 'Denmark' }).click();
});
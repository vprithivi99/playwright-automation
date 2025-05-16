import { test, expect } from '@playwright/test';

test('Hard Assertion test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');
  //validate url
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
// validate title
  await expect(page).toHaveTitle("nopCommerce demo store. Register")
//validate visible
  await expect(page.getByRole('link', { name: 'nopCommerce demo store' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
// validate text
  await expect(page.getByRole('heading')).toHaveText('Register');
  await expect(page.getByRole('heading')).toContainText('Regi');
// validate entered text
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('kfnfnfnnfnfnf');
  await expect(page.getByRole('textbox', { name: 'First name:' })).toHaveValue('kfnfnfnnfnfnf');
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('fnfnhfhfonif');
  await expect(page.getByRole('textbox', { name: 'Last name:' })).toHaveValue('fnfnhfhfonif');
// validate text
  await page.getByRole('checkbox', { name: 'Newsletter:' }).uncheck();


  await page.getByRole('checkbox', { name: 'Newsletter:' }).check();
  const checked =await page.getByRole('checkbox', { name: 'Newsletter:' })
  await expect(checked).toBeChecked()  
  // validate attribute
  const submitBtn =await page.getByRole('button', { name: 'Register' })
  await expect(submitBtn).toHaveAttribute('type','submit')
});



test('Soft Assertion test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');
  //validate url
  await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register")
// validate title
  await expect.soft(page).toHaveTitle("nopCommerce demo store")//////
//validate visible
  await expect.soft(page.getByRole('link', { name: 'nopCommerce demo store' })).toBeVisible();
  await expect.soft(page.getByRole('heading', { name: 'Register' })).toBeVisible();
// validate text
  await expect.soft(page.getByRole('heading')).toHaveText('Register');
  await expect.soft(page.getByRole('heading')).toContainText('Regi');
// validate entered text
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('kfnfnfnnfnfnf');
  await expect.soft(page.getByRole('textbox', { name: 'First name:' })).toHaveValue('kfnfnfnnfnfnf');
  await page.getByRole('textbox', { name: 'Last name:' }).click();
  await page.getByRole('textbox', { name: 'Last name:' }).fill('fnfnhfhfonif');
  await expect.soft(page.getByRole('textbox', { name: 'Last name:' })).toHaveValue('fnfnhfhfonif');
// validate text
  await page.getByRole('checkbox', { name: 'Newsletter:' }).uncheck();


  await page.getByRole('checkbox', { name: 'Newsletter:' }).check();
  const checked =await page.getByRole('checkbox', { name: 'Newsletter:' })
  await expect.soft(checked).toBeChecked()  
  // validate attribute
  const submitBtn =await page.getByRole('button', { name: 'Register' })
  await expect.soft(submitBtn).toHaveAttribute('type','submit')
});
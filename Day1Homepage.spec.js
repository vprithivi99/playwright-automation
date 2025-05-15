import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
//  Validate Title
const title = await page.title();
console.log('Page Title:', title);
if (title === 'STORE') {
  console.log('✅ Title is correct');
} else {
  console.log('❌ Title is incorrect');
}
await expect(page).toHaveTitle("STORE");
// Validate URL
const currentURL = page.url();
console.log('Current URL:', currentURL);
if (currentURL === 'https://www.demoblaze.com/') {
  console.log('✅ URL is correct');
} else {
  console.log('❌ URL is incorrect');
}

  
  await expect(page).toHaveURL("https://www.demoblaze.com/");
  await page.close();
});

 


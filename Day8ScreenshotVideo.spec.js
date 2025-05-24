import { test, expect } from '@playwright/test';


test('Screenshot', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // visible page 
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'visiblePage.png' })
    // full page 
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'fullPage.png', fullPage: true })
    // particular elemnt
    await page.locator("#HTML12").screenshot({ path: 'tests/screenshots/' + Date.now() + 'element.png' })

});

test('Screenshot 2', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    // visible page 
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'visiblePage.png' })
    // full page 
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'fullPage.png', fullPage: true })
    // particular elemnt
    await page.locator("._2j7a4R").screenshot({ path: 'tests/screenshots/' + Date.now() + 'element.png' })

});

test('video recording', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[placeholder='Username']").fill('Admin')
    await page.locator("input[placeholder='Password']").fill('admin123')    // admin123
    await page.locator("button[type='submit']").click()

    const Dashboard = await page.locator("//h6[normalize-space()='Dashboard']")
    await expect(Dashboard).toBeVisible()

    await page.waitForTimeout(5000)

});

test('Trace Viewer', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[placeholder='Username']").fill('Admin')
    await page.locator("input[placeholder='Password']").fill('admin12')    // admin123
    await page.locator("button[type='submit']").click()

    const Dashboard = await page.locator("//h6[normalize-space()='Dashboard']")
    await expect(Dashboard).toBeVisible()

    await page.waitForTimeout(5000)

});




test('IFrame', async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Frames.html")

    const frame1 = page.frame({ name: 'SingleFrame' }); // Access by name 
    // const frame1 = page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' }); 

    await frame1.fill("input[type='text']", 'Dubai'); // Interact inside the frame

    const homePage = await page.locator("a[href='Index.html']")
    await homePage.click()

    await expect(page.locator("#logo")).toBeVisible()

    await page.waitForTimeout(5000)

});



test('IFrame 2', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")
    const framecount = await page.frames()
    console.log(framecount.length)

    const frame1 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    await frame1.fill("input[name='mytext1']", 'Dubai');

    const frame2 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_2.html' });
    await frame2.fill("input[name='mytext2']", 'London');

    const frame4 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_4.html' });
    await frame4.fill("input[name='mytext4']", 'Washington');

    const frame5 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_5.html' });
    await frame5.fill("input[name='mytext5']", 'Wellingdon');

    await page.waitForTimeout(5000)

});

test.only('Inner Frame', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
    await frame3.fill("input[name='mytext3']", 'Rome');

    const childFrame = await frame3.childFrames()

    await childFrame[0].locator("div[id='i12'] div[class='AB7Lab Id5V1']").check()
    await page.waitForTimeout(5000)

});
import { test, expect } from '@playwright/test';


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

test('Handling Web Table', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // row and coulmn counts
    const table = await page.locator("#productTable")

    const columns = await table.locator("thead tr th")
    console.log("NO OF COLUMNS :", await columns.count())
    await expect(await columns.count()).toBe(4)

    const rows = await table.locator("tbody tr")
    console.log("NO OF ROWS ", await rows.count())
    await expect(await rows.count()).toBe(5)

    // SELEECT CHECKBOX WITH THE RELATED PRODUCT
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'laptop'


    })
    await matchedRow.locator('input').check()


    // SELEECT multiple CHECKBOX WITH THE RELATED PRODUCT

    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Smartwatch')
    await selectProduct(rows, page, 'Wireless Earbuds')



    await page.waitForTimeout(5000)
});

async function selectProduct(rows, page, name) {

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check()



}

test('Single File Upload', async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/FileUpload.html")

    await page.locator('#input-4')
        .setInputFiles('tests/uploadFile/PlayWright.txt')

    //await expect(page.locator("(//div[@title='New Text Document.txt'])[1]")).toHaveText('PlayWright.txt')

    await page.waitForTimeout(5000)

});


test('Multiple File Upload', async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.locator("#filesToUpload").setInputFiles([
        'tests/uploadFile/PlayWright.txt',
        'tests/uploadFile/new.txt'
    ])

    await expect(page.locator("div[class='main'] li:nth-child(1)")).toHaveText('PlayWright.txt')
    await expect(page.locator("div[class='main'] li:nth-child(2)")).toHaveText('new.txt')
    await page.waitForTimeout(5000)

});


test.only('Single And Multiple File Upload', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput')
        .setInputFiles('tests/uploadFile/PlayWright.txt')

    //await expect(page.locator("(//div[@title='New Text Document.txt'])[1]")).toHaveText('PlayWright.txt')

    await page.waitForTimeout(5000)
    await page.locator("#multipleFilesInput").setInputFiles([
        'tests/uploadFile/PlayWright.txt',
        'tests/uploadFile/new.txt'
    ])
    await page.waitForTimeout(5000)

});

test('Date Picker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator("#datepicker").fill("01/20/2022")

    const year = "2018"
    const month = "March"
    const day = "16"

    await page.click("#datepicker")
    while (true) {
        const defYear = await page.locator(".ui-datepicker-year").textContent()
        const defMonth = await page.locator(".ui-datepicker-month").textContent()
        if (defYear == year && defMonth == month) {
            break;
        }
        await page.click(".ui-icon.ui-icon-circle-triangle-w")
    }

    //await page.click("tbody tr:nth-child(3) td:nth-child(2) a:nth-child(1)")

    const dates = await page.$$(".ui-state-default")
    for (const dt of dates) {
        if (await dt.textContent() == day) {
            await dt.click()
            break;
        }
    }

    await page.waitForTimeout(5000)
});


test('Date Picker drop down', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const year = "2018"
    const month = "March"
    const day = "16"

    await page.click("#datepicker")
    while (true) {
        const defYear = await page.locator(".ui-datepicker-year").textContent()
        const defMonth = await page.locator(".ui-datepicker-month").textContent()
        if (defYear == year && defMonth == month) {
            break;
        }
        await page.click(".ui-icon.ui-icon-circle-triangle-w")
    }

    //await page.click("tbody tr:nth-child(3) td:nth-child(2) a:nth-child(1)")

    const dates = await page.$$(".ui-state-default")
    for (const dt of dates) {
        if (await dt.textContent() == day) {
            await dt.click()
            break;
        }
    }

    await page.waitForTimeout(5000)
});

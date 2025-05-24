import { test, expect } from '@playwright/test';


test('MouseHover Action', async ({ page }) => {

    await page.goto('https://demo.opencart.com.gr/');
    const desktop = await page.locator("//a[normalize-space()='Desktops']")
    const mac = await page.locator("//a[normalize-space()='Mac (1)']")

    //mouse hover 
    desktop.hover()
    mac.hover()
    await page.waitForTimeout(3000)
    mac.click()

    await expect(page.locator("div[id='logo'] h1 a")).toBeVisible()
    await page.waitForTimeout(5000)

});

test('MouseHover Action 2', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    const lists = await page.locator("span[class='nav-line-2 ']")
    const yourStyle = await page.locator("//span[normalize-space()='Discover Your Style']")

    //mouse hover 
    lists.hover()
    yourStyle.hover()
    await page.waitForTimeout(3000)
    yourStyle.click()

    await expect(page.locator(".landing-header-background-color")).toBeVisible()
    await page.waitForTimeout(5000)

});

test('Mouse Right Click', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

    const button = await page.locator(".context-menu-one.btn.btn-neutral")
    await button.click({ button: "right" })
    await expect(page.locator(".context-menu-list.context-menu-root")).toBeVisible()
    await page.waitForTimeout(3000)


    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('clicked: edit')
        await dialog.accept();
    })

    const editBtn = await page.locator(".context-menu-item.context-menu-icon.context-menu-icon-edit")
    await editBtn.click({ button: "right" })

    await page.waitForTimeout(3000)
});

test('Mouse Right Click 2', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/context-menu');

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('You selected a context menu')
        await dialog.accept();
    })

    const editBtn = await page.locator("#hot-spot")
    await editBtn.click({ button: "right" })

    await page.waitForTimeout(3000)
});


test('Mouse Double Click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const copyByn = await page.locator("button[ondblclick='myFunction1()']")
    await copyByn.dblclick()

    await expect(page.locator("#field2")).toHaveValue("Hello World!")
    await page.waitForTimeout(3000)


    await page.locator('#field1').fill("Test Engineer");
    const copyByn2 = await page.locator("button[ondblclick='myFunction1()']")
    await copyByn2.dblclick()

    const value1 = await page.locator('#field1').inputValue();
    const value2 = await page.locator('#field2').inputValue();

    // Validate both values are equal
    expect(value1).toBe(value2);

    await page.waitForTimeout(3000)
});

test('Mouse Double Click 2', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('You double clicked me.. Thank You..')
        await dialog.accept();
    })

    const editBtn = await page.locator("button[ondblclick='myFunction()']")
    await editBtn.dblclick()

    await page.waitForTimeout(3000)
});

test('Drag and Drop', async ({ page }) => {

    await page.goto('http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html#google_vignette');
    //Source
    const rome = await page.locator("(//div[@id='box6'])[1]")
    const seoul = await page.locator("(//div[@id='box5'])[1]")
    const washington = await page.locator("(//div[@id='box3'])[1]")

    //target
    const italy = await page.locator("(//div[@id='box106'])[1]")
    const southKorea = await page.locator("(//div[@id='box105'])[1]")
    const usa = await page.locator("(//div[@id='box103'])[1]")

    //action
    await rome.dragTo(italy)
    await seoul.dragTo(southKorea)
    await washington.dragTo(usa)


    // await expect(italy).toContainText('Rome');
    await expect(southKorea).toContainText('South KoreaSeoul');
    // await expect(usa).toContainText('washington');

    await page.waitForTimeout(5000)
});

test('Drag and Drop 2', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Source
    const draggable = await page.locator("//div[@id='draggable']")

    //target
    const droppable = await page.locator("#droppable")

    //action
    await draggable.dragTo(droppable)

    await expect(droppable).toContainText('Dropped!');


    await page.waitForTimeout(5000)
});


test.only('Scroll', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');
    // scroll into view
    await page.locator("//h2[normalize-space()='Scrolling DropDown']").scrollIntoViewIfNeeded();

    // scroll mouse wheel
    await page.mouse.wheel(0, 300); 

    // scroll top to bottom 
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(5000); 
    // Scroll back to top
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });

    await page.waitForTimeout(5000)
});


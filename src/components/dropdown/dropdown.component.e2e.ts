import { newE2EPage } from "@stencil/core/testing";

describe('brn-dropdown', () => {
    it('should create dropdown', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-dropdown></brn-dropdown>
        `);

        const el = await page.find('brn-dropdown');
        const divElement = await page.find('brn-dropdown > div');
        const buttonElement = await page.find('.brn-dropdown__button');
        const menuElement = await page.find('.brn-dropdown__menu');

        expect(el).toBeDefined();
        expect(divElement).not.toHaveClass('brn-dropdown--active');
        expect(buttonElement).toEqualText('');
        expect(menuElement).toEqualText('');
    });

    it('should open dropdown', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-dropdown>
                <div slot="button">
                    test
                </div>
                <div slot="menu">
                    test
                </div>
            </brn-dropdown>
        `);

        const divElement = await page.find('brn-dropdown > div');
        const buttonElement = await page.find('.brn-dropdown__button');
        const menuElement = await page.find('.brn-dropdown__menu');

        expect(buttonElement).toEqualText('test');
        expect(menuElement).toEqualText('test');

        await buttonElement.click();
        expect(divElement).toHaveClass('brn-dropdown--active');

        await buttonElement.click();
        expect(divElement).not.toHaveClass('brn-dropdown--active');

        await buttonElement.click();
        await menuElement.click();
        expect(divElement).not.toHaveClass('brn-dropdown--active');
    });

    it('should not close when click on menu', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-dropdown closeable="false">
                <div slot="button">
                    test
                </div>
                <div slot="menu">
                    test
                </div>
            </brn-dropdown>
        `);

        const divElement = await page.find('brn-dropdown > div');
        const buttonElement = await page.find('.brn-dropdown__button');
        const menuElement = await page.find('.brn-dropdown__menu');

        await buttonElement.click();
        expect(divElement).toHaveClass('brn-dropdown--active');

        await buttonElement.click();
        expect(divElement).not.toHaveClass('brn-dropdown--active');

        await buttonElement.click();
        await menuElement.click();
        expect(divElement).toHaveClass('brn-dropdown--active');
    });
});
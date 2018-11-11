import { newE2EPage } from "@stencil/core/testing";

describe('toggle-component', () => {
    it('should create toggle, uncheck by default', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-toggle></brn-toggle>
        `);

        const onChange = await page.spyOnEvent('changed');
        const el = await page.find('brn-toggle');
        const checkmark = await page.find('.brn-toggle__checkmark');

        expect(el).toBeDefined();
        expect(checkmark).toHaveClass('brn-toggle__checkmark--primary');

        el.click();
        await page.waitForEvent('click');

        expect(onChange).toHaveReceivedEvent();
    });

    it('should create toggle with style type', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-toggle type="secondary"></brn-toggle>
        `);

        const checkmark = await page.find('.brn-toggle__checkmark');

        expect(checkmark).toHaveClass('brn-toggle__checkmark--secondary');
    });
});
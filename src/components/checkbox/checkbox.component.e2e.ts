import { newE2EPage } from '@stencil/core/testing';

describe('checkbox-component', () => {
    it('should create checkbox, unchecked by default', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-checkbox></brn-checkbox>
        `);

        const onChange = await page.spyOnEvent('changed');
        const el = await page.find('brn-checkbox');
        const checkmark = await page.find('.brn-checkbox__checkmark');
        const text = await page.find('.brn-checkbox__text');

        expect(el).toBeDefined();
        expect(checkmark).toHaveClass('brn-checkbox__checkmark--primary');
        expect(text).toEqualHtml(`
            <span class=\"brn-checkbox__text\"></span>
        `);

        el.click();
        await page.waitForEvent('click');

        expect(onChange).toHaveReceivedEvent();
    });

    it('should create checkbox with style type', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-checkbox type="secondary"></brn-checkbox>
        `);

        const checkmark = await page.find('.brn-checkbox__checkmark');

        expect(checkmark).toHaveClass('brn-checkbox__checkmark--secondary');
    });
});
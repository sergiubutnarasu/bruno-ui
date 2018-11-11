import { newE2EPage } from '@stencil/core/testing';

describe('radio-component', () => {
    it('should create radio button, unckecked by default', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-radio></brn-radio>
        `);

        const onChange = await page.spyOnEvent('changed');
        const el = await page.find('brn-radio');
        const checkmark = await page.find('.brn-radio__checkmark');

        expect(el).toBeDefined();
        expect(checkmark).toHaveClass('brn-radio__checkmark--primary');

        el.click();
        await page.waitForEvent('click');

        expect(onChange).toHaveReceivedEvent();
    });

    it('chould create radio button with style type', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-radio type="secondary"></brn-radio>
        `);

        const checkmark = await page.find('.brn-radio__checkmark');

        expect(checkmark).toHaveClass('brn-radio__checkmark--secondary');
    });
});
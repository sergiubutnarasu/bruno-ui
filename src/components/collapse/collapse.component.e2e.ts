import { newE2EPage } from '@stencil/core/testing';

describe('collapse-component', () => {
    it('should be collapsed', async ()=> {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-collapse></brn-collapse>
        `);

        const collapseElement = await page.find('.brn-collapse');
        expect(collapseElement).not.toHaveClass('brn-collapse--active');
    });

    it('should be expand', async ()=> {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-collapse active="true"></brn-collapse>
        `);

        const collapseElement = await page.find('.brn-collapse');
        expect(collapseElement).toHaveClass('brn-collapse--active');
    });
});
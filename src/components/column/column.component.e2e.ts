import { newE2EPage } from '@stencil/core/testing';

describe('column-component', () => {
    it('should create column with width 0', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-column></brn-column>
        `);

        const el = await page.find('brn-column');

        const style = await el.getComputedStyle();
        expect(style.width).toEqual('0px');
    })

    it('should create column with width 50', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <div style="width: 100px;">
                <brn-column columns="1" total="2"></brn-column>
            </div>
        `);

        await page.waitForChanges();

        const el = await page.find('brn-column');

        const elWidth = (await el.getComputedStyle()).width;

        expect(elWidth).toEqual('50px');
    })
})
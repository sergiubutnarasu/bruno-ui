import { newE2EPage } from "@stencil/core/testing";

describe('brn-tab', () => {
    it('should create tab component with tabs wrapper', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-tab></brn-tab>
        `);

        const el = await page.find('brn-tab');
        const divElement = await page.find('brn-tab > div');

        expect(el).toBeDefined();
        expect(divElement).not.toHaveClass('brn-tab--active');

        await page.$eval('brn-tab', (elm: any) => {
            elm.active = true;
        });

        await page.waitForChanges();

        expect(divElement).toHaveClass('brn-tab--active');
    });

    it('should create active tab', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-tabs>
                <brn-tab name="test" active="true">
                    content
                </brn-tab>
            </brn-tabs>
        `);

        const onTabChanged = await page.spyOnEvent('tabChanged');
        const el = await page.find('brn-tab');
        const divElement = await page.find('brn-tab > div');

        expect(el).toBeDefined();
        expect(divElement).toHaveClass('brn-tab--active');
        expect(divElement).toEqualText('content');

        await page.$eval('brn-tab', (elm: any) => {
            elm.active = false;
        });

        await page.waitForChanges();

        expect(onTabChanged).toHaveReceivedEvent();
    });
});
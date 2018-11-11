import { newE2EPage } from "@stencil/core/testing";

describe('brn-tabs', () => {
    it('should create empty tabs component', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-tabs></btn-tabs>
        `);

        const el = await page.find('brn-tabs');
        const header = await page.find('.brn-tabs');
        const content = await page.find('.brn-tabs__content');

        expect(el).toBeDefined();
        expect(header).toEqualText('');
        expect(content).toEqualText('');
    });

    it('should create 3 tabs', async () => {
        const page = await newE2EPage();

        await page.setContent(`
            <brn-tabs>
                <brn-tab name="First">
                  Tab 1
                </brn-tab>

                <brn-tab name="Second" active="true">
                  Tab 2
                </brn-tab>

                <brn-tab name="Third">
                  Tab 3
                </brn-tab>
            </brn-tabs>
        `);

        const el = await page.find('brn-tabs');
        const header = await page.find('.brn-tabs');
        const content = await page.find('.brn-tabs__content');
        const tabs = await header.findAll('.brn-tabs__tab');

        let activeTab = await content.find('brn-tab div.brn-tab--active');

        expect(el).toBeDefined();
        expect(tabs.length).toBe(3);
        expect(tabs[0]).toEqualText('First');
        expect(tabs[1]).toEqualText('Second');
        expect(tabs[2]).toEqualText('Third');
        expect(tabs[1]).toHaveClass('brn-tabs__tab--active');
        expect(activeTab).toEqualText('Tab 2');

        await tabs[0].click();
        activeTab = await content.find('brn-tab div.brn-tab--active');

        expect(activeTab).toEqualText('Tab 1');
        expect(tabs[0]).toHaveClass('brn-tabs__tab--active');
    });
});
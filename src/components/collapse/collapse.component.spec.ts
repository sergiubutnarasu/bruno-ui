import { CollapseComponent } from './collapse.component';

describe('brn-collapse', () => {
    it('should toggle collapse', async () => {
        const collapseComponent = new CollapseComponent();
        collapseComponent.active = false;

        collapseComponent['Toggle']();
        expect(collapseComponent._active).toBe(true);
    });
});
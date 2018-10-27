import { ColumnComponent } from './column.component';

it ('should return 0', async () => {
    const columnComponent = new ColumnComponent();
    let width =  columnComponent['CalculateWidth']();

    expect(width).toBe(0);

    columnComponent.total = -1;
    width =  columnComponent['CalculateWidth']();
    
    expect(width).toBe(0);
});

it ('should return 50', async () => {
    const columnComponent = new ColumnComponent();
    columnComponent.columns = 1;
    columnComponent.total = 2

    let width =  columnComponent['CalculateWidth']();
    expect(width).toBe(50);
});
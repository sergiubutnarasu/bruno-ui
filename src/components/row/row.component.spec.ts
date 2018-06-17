import { TestWindow } from "@stencil/core/testing";
import { RowComponent } from "./row.component";

describe("brn-row", () => {
  it("should build", () => {
    expect(new RowComponent()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLBrnRowElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RowComponent],
        html: "<brn-row></brn-row>"
      });
    });

    it("should work without parameters", () => {
      expect(element).toBeTruthy();
    });
  });
});

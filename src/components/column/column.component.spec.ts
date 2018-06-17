import { TestWindow } from "@stencil/core/testing";
import { ColumnComponent } from "./column.component";

describe("brn-column", () => {
  it("should build", () => {
    expect(new ColumnComponent()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLBrnColumnElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ColumnComponent],
        html: "<brn-column></brn-column>"
      });
    });

    it("should work without parameters", () => {
      expect(element.style.width).toBe("0%");
    });

    it("should work with negative columns", async () => {
      element.columns = -1;
      await testWindow.flush();
      expect(element.style.width).toBe("0%");
    });

    it("should work with negative total", async () => {
      element.total = -1;
      await testWindow.flush();
      expect(element.style.width).toBe("0%");
    });

    it("should work with negative columns and total", async () => {
      element.columns = -1;
      element.total = -1;
      await testWindow.flush();
      expect(element.style.width).toBe("0%");
    });

    it("should work only with columns", async () => {
      element.columns = 2;
      await testWindow.flush();
      expect(element.style.width).toBe("0%");
    });

    it("should work only with total", async () => {
      element.total = 2;
      await testWindow.flush();
      expect(element.style.width).toBe("0%");
    });

    it("should work with columns and total", async () => {
      element.columns = 1;
      element.total = 2;
      await testWindow.flush();
      expect(element.style.width).toBe("50%");
    });
  });
});

import { TestWindow } from "@stencil/core/testing";
import { ToggleComponent } from "./toggle.component";

describe("brn-toggle", () => {
  it("should build", () => {
    expect(new ToggleComponent()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLBrnToggleElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ToggleComponent],
        html: "<brn-toggle></brn-toggle>"
      });
    });

    it("should work without parameters", () => {
      expect(element).toBeTruthy();
    });

    it("should work with check parameter", async () => {
      element.checked = true;
      await testWindow.flush();
      const target = element.getElementsByTagName("input")[0];
      expect(target.checked).toBe(true);
    });

    it("should work with type parameter", async () => {
      element.type = "primary";
      await testWindow.flush();
      const target = element.getElementsByClassName("brn-toggle__checkmark")[0];
      expect(target.classList).toContain("brn-toggle__checkmark--primary");
    });
  });

  describe("rendering without event changed", () => {
    let element: HTMLBrnToggleElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ToggleComponent],
        html: "<brn-toggle onChanged=''></brn-toggle>"
      });
    });

    it("should work without change event", async () => {
      let target: HTMLInputElement = element.getElementsByTagName("input")[0];
      target.checked = true;
      expect(element).toBeTruthy();
    });
  });

  describe("rendering with event changed", () => {
    let element: HTMLBrnToggleElement;
    let testWindow: TestWindow;
    let test = () => {};
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ToggleComponent],
        html: `<brn-toggle onChanged='${test()}'></brn-toggle>`
      });
    });

    it("should work with change event", async () => {
      let target: HTMLInputElement = element.getElementsByTagName("input")[0];
      target.checked = true
      expect(element).toBeTruthy();
    });
  });
});

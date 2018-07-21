import { TestWindow } from "@stencil/core/testing";
import { CheckboxComponent } from "./checkbox.component";

describe("brn-checkbox", () => {
  it("should build", () => {
    expect(new CheckboxComponent()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLBrnCheckboxElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CheckboxComponent],
        html: "<brn-checkbox></brn-checkbox>"
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
      const target = element.getElementsByClassName("brn-checkbox__checkmark")[0];
      expect(target.classList).toContain("brn-checkbox__checkmark--primary");
    });
  });

  describe("rendering without event changed", () => {
    let element: HTMLBrnCheckboxElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CheckboxComponent],
        html: "<brn-checkbox onChanged=''></brn-checkbox>"
      });
    });

    it("should work without change event", async () => {
      let target: HTMLInputElement = element.getElementsByTagName("input")[0];
      target.checked = true;
      expect(element).toBeTruthy();
    });
  });

  describe("rendering with event changed", () => {
    let element: HTMLBrnCheckboxElement;
    let testWindow: TestWindow;
    let test = () => {};
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CheckboxComponent],
        html: `<brn-checkbox onChanged='${test()}'></brn-checkbox>`
      });
    });

    it("should work with change event", async () => {
      let target: HTMLInputElement = element.getElementsByTagName("input")[0];
      target.checked = true
      expect(element).toBeTruthy();
    });
  });
});

import { TestWindow } from "@stencil/core/testing";
import { RadioButtonComponent } from "./radio.component";

describe("brn-radio", () => {
  it("should build", () => {
    expect(new RadioButtonComponent()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLBrnRadioElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadioButtonComponent],
        html: "<brn-radio></brn-radio>"
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

    it("should work with text parameter", async () => {
      element.text = "test";
      await testWindow.flush();
      const target = element.getElementsByClassName("text")[0];
      expect(target.innerHTML).toBe("test");
    });

    it("should work with type parameter", async () => {
      element.type = "primary";
      await testWindow.flush();
      const target = element.getElementsByClassName("checkmark")[0];
      expect(target.classList).toContain("primary");
    });

    it("should work with test parameter", async () => {
        element.name = "test";
        await testWindow.flush();
        const target = element.getElementsByTagName("input")[0];
        const name = target.getAttribute("name");
        expect(name).toBe("test");
      });
  });

  describe("rendering without event changed", () => {
    let element: HTMLBrnRadioElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadioButtonComponent],
        html: "<brn-radio onChanged=''></brn-radio>"
      });
    });

    it("should work without change event", async () => {
      let target: HTMLInputElement = element.getElementsByTagName("input")[0];
      target.checked = true;
      expect(element).toBeTruthy();
    });
  });

  describe("rendering with event changed", () => {
    let element: HTMLBrnRadioElement;
    let testWindow: TestWindow;
    let test = () => {};
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadioButtonComponent],
        html: `<brn-radio onChanged='${test()}'></brn-radio>`
      });
    });

    it("should work with change event", async () => {
      let target: HTMLInputElement = element.getElementsByTagName("input")[0];
      target.checked = true
      expect(element).toBeTruthy();
    });
  });
});

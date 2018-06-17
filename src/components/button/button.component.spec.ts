import { TestWindow } from "@stencil/core/testing";
import { ButtonComponent } from "./button.component";

describe("my-component", () => {
  it("should build", () => {
    expect(new ButtonComponent()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLBrnButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ButtonComponent],
        html: "<brn-button></brn-button>"
      });
    });

    it("should work without parameters", () => {
      const buttonDiv = element.getElementsByTagName("div")[0];
      expect(buttonDiv).toHaveClasses(["primary"]);
    });

    it("should work with type", async () => {
      element.type = "secondary";
      await testWindow.flush();
      const buttonDiv = element.getElementsByTagName("div")[0];
      expect(buttonDiv).toHaveClasses(["secondary"]);
    });

    it("should work with modifier", async () => {
      element.modifier = "outline";
      await testWindow.flush();
      const buttonDiv = element.getElementsByTagName("div")[0];
      expect(buttonDiv).toHaveClasses(["outline"]);
    });

    it("should work with type and modifier", async () => {
      element.type = "success";
      element.modifier = "outline";
      await testWindow.flush();
      const buttonDiv = element.getElementsByTagName("div")[0];
      expect(buttonDiv).toHaveClasses(["success", "outline"]);
    });

    it("should work with size", async () => {
      element.size = "small";
      await testWindow.flush();
      const buttonDiv = element.getElementsByTagName("div")[0];
      expect(buttonDiv).toHaveClasses(["small"]);
    });

    it("should work with type and size", async () => {
      element.type = "secondary";
      element.size = "small";
      await testWindow.flush();
      const buttonDiv = element.getElementsByTagName("div")[0];
      expect(buttonDiv).toHaveClasses(["secondary", "small"]);
    });

    it("should work with modifier and size", async () => {
      element.modifier = "outline";
      element.size = "large";
      await testWindow.flush();
      const buttonDiv = element.getElementsByTagName("div")[0];
      expect(buttonDiv).toHaveClasses(["outline", "large"]);
    });

    it("should work with type, modifier and size", async () => {
      element.type = "danger";
      element.modifier = "outline";
      element.size = "small";
      await testWindow.flush();
      const buttonDiv = element.getElementsByTagName("div")[0];
      expect(buttonDiv).toHaveClasses(["danger", "outline", "small"]);
    });
  });
});

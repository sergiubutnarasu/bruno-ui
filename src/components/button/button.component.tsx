import { Component, Prop } from "@stencil/core";
import { StyleType, SizeType } from "../../objects/types";

@Component({
  tag: "brn-button",
  styleUrl: "button.component.scss"
})
export class ButtonComponent {
  @Prop() text: string;
  @Prop() type: keyof StyleType = "primary";
  @Prop() modifier: string;
  @Prop() size: keyof SizeType;

  render() {
    const elementClass = this.GetElementClass();
    return <div class={elementClass}>{this.text}</div>;
  }

  private GetElementClass(): string {
    let elementClass = this.type;

    if (this.modifier) {
      elementClass += ` ${this.modifier}`;
    }

    if (this.size) {
      elementClass += ` ${this.size}`;
    }

    return elementClass;
  }
}

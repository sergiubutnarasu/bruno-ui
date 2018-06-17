import { Component, Prop, Event, EventEmitter } from "@stencil/core";
import { StyleType, SizeType } from "../../objects/types";

@Component({
  tag: "brn-button",
  styleUrl: "button.component.scss"
})
export class ButtonComponent {
  @Event() clicked: EventEmitter<MouseEvent>;
  @Prop() text: string;
  @Prop() type: keyof StyleType = "primary";
  @Prop() modifier: string;
  @Prop() size: keyof SizeType;

  render() {
    const elementClass = this.GetElementClass();
    return (
      <div class={elementClass} onClick={e => this.HandleClickEvent(e)}>
        {this.text}
      </div>
    );
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

  private HandleClickEvent(e: MouseEvent) {
    this.clicked.emit(e);
  }
}

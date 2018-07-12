import { Component, Prop, Event, EventEmitter } from "@stencil/core";
import { StyleType } from "../../objects/types";

@Component({
  tag: "brn-radio",
  styleUrl: "radio.component.scss"
})
export class RadioButtonComponent {
  @Event() changed: EventEmitter<boolean>;
  @Prop() checked: boolean;
  @Prop() text: string;
  @Prop() name: string;
  @Prop() type: keyof StyleType = "primary";

  render() {
    return (
      <label>
        <input
          type="radio"
          name={this.name}
          checked={this.checked}
          onChange={e => this.OnChangeHandler(e)}
        />
        <span class={`brn-radio__checkmark brn-radio__checkmark--${this.type}`} />
        <span class="brn-radio__text">{this.text}</span>
      </label>
    );
  }

  private OnChangeHandler(event: any): any {
    // TODO: Need test
    this.changed.emit(event.target.checked);
  }
}

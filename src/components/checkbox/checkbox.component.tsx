import { Component, Prop } from "@stencil/core";

@Component({
  tag: "brn-checkbox",
  styleUrl: "checkbox.component.scss"
})
export class CheckboxComponent {
  @Prop() checked: boolean;
  @Prop() text: string;

  render() {
    return (
      <label>
        <input type="checkbox" checked={this.checked} />
        <span class="checkmark" />
        <span class="text">{this.text}</span>
      </label>
    );
  }
}

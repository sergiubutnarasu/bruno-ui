import { Component } from "@stencil/core";

@Component({
  tag: "brn-row",
  styleUrl: "row.component.scss",
  shadow: true
})
export class RowComponent {
  render() {
    return (
      <div class="brn-row">
        <slot />
      </div>
    );
  }
}

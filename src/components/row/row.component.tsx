import { Component, h } from "@stencil/core";

@Component({
  tag: "brn-row",
  styleUrl: "row.component.scss",
})
export class RowComponent {
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}

import { Component, Prop, Element } from "@stencil/core";

@Component({
  tag: "brn-column",
  styleUrl: "column.component.scss",
  shadow: true
})
export class ColumnComponent {
  @Prop() columns: number;
  @Prop() total: number;

  @Element() private _el: HTMLElement;

  render() {
    this._el.style.width = `${this.CalculateWidth()}%`;

    return (
      <div class="brn-column">
        <div>
          <slot />
        </div>
      </div>
    );
  }

  private CalculateWidth() {
    return this.total > 0 && this.columns > 0
      ? (this.columns * 100) / this.total
      : 0;
  }
}

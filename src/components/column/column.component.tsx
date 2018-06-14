import { Component, Prop, Element } from "@stencil/core";

@Component({
  tag: "brn-column",
  styleUrl: "column.component.scss"
})
export class ColumnComponent {
  @Prop() columns: number;
  @Prop() total: number;

  @Element() private _el: HTMLElement;

  render() {
    this._el.style.width = `${this.CalculateWidth()}%`;

    return (
      <div>
        <slot />
      </div>
    );
  }

  private CalculateWidth() {
    return this.total > 0 ? (this.columns * 100) / this.total : 0;
  }
}

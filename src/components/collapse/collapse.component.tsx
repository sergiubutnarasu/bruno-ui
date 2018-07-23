import { Component, Prop, State, ComponentDidLoad, Watch } from "@stencil/core";

@Component({
  tag: "brn-collapse",
  styleUrl: "collapse.component.scss"
})
export class CollapseComponent implements ComponentDidLoad {
  @Prop() active: boolean = false;
  @State() _active: boolean = false;

  @Watch("active")
  ActiveWatchHandler() {
    this._active = this.active;
  }

  componentDidLoad() {
    this._active = this.active;
  }

  render() {
    return (
      <div class="brn-collapse">
        <div class={{
            "brn-collapse__header": true,
            "brn-collapse__header--active": this._active
          }}>
          <slot name="header" />
        </div>
        <div
          class={{
            "brn-collapse__body": true,
            "brn-collapse__body--active": this._active
          }}
        >
          <slot name="body" />
        </div>
      </div>
    );
  }
}

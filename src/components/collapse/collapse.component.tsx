import { Component, Prop, State, ComponentDidLoad, Watch } from "@stencil/core";

@Component({
  tag: "brn-collapse",
  styleUrl: "collapse.component.scss",
  shadow: true
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
      <div
        class={{ "brn-collapse": true, "brn-collapse--active": this._active }}
      >
        <div
          class="brn-collapse__header"
          onClick={() => {
            this.Toggle();
          }}
        >
          <slot name="header" />
        </div>
        <div class="brn-collapse__body">
          <slot name="body" />
        </div>
      </div>
    );
  }

  private Toggle() {
    this._active = !this._active;
  }
}

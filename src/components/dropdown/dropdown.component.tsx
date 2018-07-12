import {
  Component,
  Element,
  Prop,
  State,
  Watch,
  Listen,
  ComponentDidLoad
} from "@stencil/core";
import { AppHelper } from "../../helpers/app.helper";

@Component({
  tag: "brn-dropdown",
  styleUrl: "dropdown.component.scss"
})
export class DropdownComponent implements ComponentDidLoad {
  @Element() _element: HTMLElement;
  @Prop() active: boolean = false;
  @State() _active: boolean = false;

  @Watch("active")
  ActiveWatchHandler(newValue: boolean) {
    this._active = newValue;
  }

  private _id: string = AppHelper.GetIdWithPrefix("dropdown");

  componentDidLoad() {
    this._active = this.active;
  }

  @Listen("body:click")
  BodyClickHandler(event) {
    if (event.target.closest(`#${this._id}`)) return;

    this._active = false;
  }

  render() {
    return (
      <div class={{ active: this._active }} id={`${this._id}`}>
        <div
          class="dropdown-button"
          onClick={() => {
            this.Toggle();
          }}
        >
          <slot name="button" />
        </div>
        <div class="dropdown-menu">
          <slot name="menu" />
        </div>
      </div>
    );
  }

  private Toggle() {
    this._active = !this._active;
  }
}

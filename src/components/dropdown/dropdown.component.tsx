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
  @Prop() closeable: boolean = true;
  @Prop() active: boolean = false;
  @State() _active: boolean = false;

  @Watch("active")
  ActiveWatchHandler(newValue: boolean) {
    this._active = newValue;
  }

  private _id: string;
  private _menuId: string;

  constructor() {
    this._id = AppHelper.GetIdWithPrefix("dropdown");
    this._menuId = AppHelper.GetIdWithPrefix("dropdown__menu");
  }

  componentDidLoad() {
    this._active = this.active;
  }

  @Listen("window:click")
  WindowClickHandler(event) {
    this._active = this.IsCloseable(event);
  }

  render() {
    return (
      <div class={{ 'brn-dropdown': true, active: this._active }} id={`${this._id}`}>
        <div
          class="dropdown__button"
          onClick={() => {
            this.Toggle();
          }}
        >
          <slot name="button" />
        </div>
        <div class="dropdown__menu" id={`${this._menuId}`}>
          <slot name="menu" />
        </div>
      </div>
    );
  }

  private Toggle() {
    this._active = !this._active;
  }

  private IsCloseable(event: any): boolean {
    let result: boolean = false;
    if (this.closeable && event.target.closest(`#${this._menuId}`)) {
      result = false;
    } else if (event.target.closest(`#${this._id}`)) {
      result = this._active;
    }

    return result;
  }
}

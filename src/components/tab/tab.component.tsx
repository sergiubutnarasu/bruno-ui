import {
  Component,
  Prop,
  State,
  Watch,
  Event,
  EventEmitter,
  Element,
  ComponentWillLoad,
  ComponentDidLoad,
  h
} from "@stencil/core";
import { TabType } from "../../objects/types";
import { AppHelper } from "../../helpers/app.helper";

@Component({
  tag: "brn-tab",
  styleUrl: "tab.component.scss"
})
export class TabComponent implements ComponentWillLoad, ComponentDidLoad {
  @Element() _element: HTMLElement;
  @Event() tabLoaded: EventEmitter<TabType>;
  @Event() tabChanged: EventEmitter<TabType>;

  @Prop() name: string;
  @Prop() active: boolean = false;
  @State() _active: boolean = false;
  @State() _identifier: string;

  @Watch("active")
  ActiveChangeHandler(value: boolean) {
    this._active = value;
    this.TabChanged();
  }

  componentWillLoad() {
    this._identifier = AppHelper.GetId();
    this._active = this.active;
  }

  componentDidLoad() {
    const tab = this.GetTab();
    this.tabLoaded.emit(tab);
  }

  render() {
    return (
      <div class={{ 'brn-tab--active': this._active }}>
        <slot />
      </div>
    );
  }

  private TabChanged() {
    const tab = this.GetTab();
    this.tabChanged.emit(tab);
  }

  private GetTab() {
    const tab: TabType = {
      Identifier: this._identifier,
      Index: this.GetIndex(),
      Name: this.name,
      Active: this._active,
      OnActive: (value: boolean) => {
        this._active = value;
      }
    };

    return tab;
  }

  private GetIndex() {
    const parent = this._element.closest("brn-tabs");

    if (parent) {
      const tabs = parent.getElementsByTagName('brn-tab');
      return Array.prototype.indexOf.call(tabs, this._element);
    }

    console.warn('"brn-tab" components must be wrapped with "brn-tabs" component');
    return 0;
  }
}

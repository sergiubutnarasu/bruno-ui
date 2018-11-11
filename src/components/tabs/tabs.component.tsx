import { Component, State, ComponentWillLoad, Listen } from "@stencil/core";
import { TabType } from "../../objects/types";

@Component({
  tag: "brn-tabs",
  styleUrl: "tabs.component.scss"
})
export class TabsComponent implements ComponentWillLoad {
  @State() _tabs: Array<TabType>;

  componentWillLoad() {
    this._tabs = [];
  }

  @Listen("tabLoaded")
  TabLoadedHandler(event: CustomEvent) {
    const tab: TabType = event.detail as TabType;

    if (this._tabs.length - 1 < tab.Index) {
      this._tabs.length = tab.Index + 1;
    }

    this._tabs[tab.Index] = tab;

    this._tabs = [...this._tabs];
  }

  @Listen("tabChanged")
  TabChangedHandler(event: CustomEvent) {
    const tab: TabType = event.detail;

    let index = this._tabs.findIndex(x => x.Identifier == tab.Identifier);
    this._tabs[index] = tab;

    this._tabs = [...this._tabs];
  }

  render() {
    return (
      <div>
        <div class="brn-tabs">
          {this._tabs.filter(x => x).map(tab => {
            return (
              <div
                class={{ "brn-tabs__tab": true, 'brn-tabs__tab--active': tab.Active }}
                onClick={() => {
                  this.TabChangeHandler(tab);
                }}
              >
                {tab.Name}
              </div>
            );
          })}
        </div>

        <div class="brn-tabs__content">
          <slot />
        </div>
      </div>
    );
  }

  private TabChangeHandler(tab: TabType) {
    this.DeactivateAllTabs();

    tab.Active = true;
    tab.OnActive(true);

    this._tabs = [...this._tabs];
  }

  private DeactivateAllTabs() {
    this._tabs.map(x => {
      x.Active = false;
      x.OnActive(false);
    });
  }
}

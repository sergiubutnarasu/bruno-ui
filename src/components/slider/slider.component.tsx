import { Component, Listen, State, Element } from "@stencil/core";

@Component({
  tag: "brn-slider",
  styleUrl: "slider.component.scss"
})
export class SliderComponent {
  @Element()
  _element: HTMLElement;
  @State()
  _active: boolean = false;

  private handle: HTMLElement;

  @Listen("document:mousemove")
  MouseMoveHandler(e: MouseEvent) {
    if (this._active) {
      this.handle = this._element.getElementsByClassName(
        "slider__handle"
      )[0] as HTMLElement;

      this.handle.style.left = `${e.clientX - this._element.offsetLeft - (this.handle.clientWidth / 2)}px`;
    }
  }

  @Listen("document:mouseup")
  MouseUpHandler() {
    this._active = false;
  }

  render() {
    return (
      <div class="slider">
        <div
          class="slider__handle"
          onMouseDown={() => {
            this._active = true;
          }}
        />
      </div>
    );
  }
}

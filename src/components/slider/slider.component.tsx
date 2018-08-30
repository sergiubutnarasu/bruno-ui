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
      this.handle = this.GetHandle();
      this.SetHandlePosition(e);
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

  private GetHandle(): HTMLElement {
    return this._element.getElementsByClassName(
      "slider__handle"
    )[0] as HTMLElement;
  }

  private GetSlider(): HTMLElement {
    return this._element.getElementsByClassName("slider")[0] as HTMLElement;
  }

  private SetHandlePosition(e: MouseEvent) {
    let position = this.CalculatePosition(e);
    this.handle.style.left = `${position}px`;
  }

  private CalculatePosition(e: MouseEvent): number {
    let slider = this.GetSlider();
    let position =
      e.clientX - this._element.offsetLeft - this.handle.clientWidth / 2;

    if (position < this._element.offsetLeft) {
      position = 0;
    } else if (e.clientX > slider.offsetWidth) {
      position = slider.offsetWidth - this._element.offsetLeft - this.handle.clientWidth / 2;
    }

    return position;
  }
}

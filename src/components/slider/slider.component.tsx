import {
  Component,
  Listen,
  State,
  Element,
  ComponentDidLoad,
  h
} from "@stencil/core";

@Component({
  tag: "brn-slider",
  styleUrl: "slider.component.scss"
})
export class SliderComponent implements ComponentDidLoad {
  @Element()
  _element: HTMLElement;
  @State()
  _active: boolean = false;

  private handle: HTMLElement;

  @Listen("mousemove", { target: "document" })
  MouseMoveHandler(e: MouseEvent) {
    if (this._active) {
      this.SetHandlePosition(e);
    }
  }

  @Listen("mouseup", { target: "document" })
  MouseUpHandler() {
    this._active = false;
  }

  componentDidLoad() {
    this.handle = this.GetHandle();
  }

  render() {
    return (
      <div class="slider">
        <div
          class="slider__bar"
          onClick={e => {
            this.SetHandlePosition(e);
          }}
        />
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
      position =
        slider.offsetWidth -
        this._element.offsetLeft -
        this.handle.clientWidth / 2;
    }

    return position;
  }
}

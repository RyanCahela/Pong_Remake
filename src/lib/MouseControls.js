class MouseControls {
  constructor(container) {
    this.element = container || document.body;
    this.position = { x: 0, y: 0 };
    this.isDown = false;
    this.isPressed = false;
    this.isReleased = false;

    this.element.addEventListener("mousemove", (e) => this.handleMouseMove(e));
    this.element.addEventListener("mousedown", (e) => this.handleMouseDown(e));
    this.element.addEventListener("mouseup", (e) => this.handleMouseUp(e));
  }

  handleMouseMove(e) {
    this.setMousePositionFromEvent(e);
    console.log("mousePos", this.position);
  }

  handleMouseDown(e) {
    this.isPressed = true;
    this.isDown = true;
    this.isReleased = true;
    this.setMousePositionFromEvent(e);
  }

  handleMouseUp(e) {
    this.isDown = false;
    this.isPressed = false;
    this.isReleased = true;
    this.setMousePositionFromEvent(e);
  }

  setMousePositionFromEvent({ clientX, clientY }) {
    const { element, position } = this;
    const rect = element.getBoundingClientRect();
    position.x = clientX - rect.left;
    position.y = clientY - rect.top;
  }

  update() {
    this.isPressed = false;
    this.isReleased = false;
  }
}

export default MouseControls;

class Text {
  constructor(text = "", style = {}, initialPosition = { x: 0, y: 0 }) {
    this.position = initialPosition;
    this.style = style;
    this.text = text;
  }
}

export default Text;

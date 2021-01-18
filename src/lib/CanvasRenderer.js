import { Rectangle, Circle } from "/lib/index";

class CanvasRenderer {
  constructor(configObj) {
    const { width, height } = configObj;
    const canvas = document.createElement("canvas");
    this.width = canvas.width = width;
    this.height = canvas.height = height;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.textBaseline = "top";
  }

  render(container) {
    const { ctx, width, height } = this;
    const renderRecursive = (container) => {
      container.nodes.forEach((node) => {
        ctx.save();

        //move canvas to position
        if (node.position) {
          ctx.translate(
            Math.round(node.position.x),
            Math.round(node.position.y)
          );
        }

        if (node.text) {
          const { fill, align, font } = node.style;
          if (fill) ctx.fillStyle = fill;
          if (align) ctx.textAlign = align;
          if (font) ctx.font = font;
          ctx.fillText(node.text, 0, 0);
        }

        if (node instanceof Rectangle) {
          const { width, height, fillStyle } = node;
          ctx.fillStyle = fillStyle;
          ctx.fillRect(0, 0, width, height);
        }

        if (node instanceof Circle) {
          const { radius, fillStyle, position } = node;
          ctx.fillStyle = fillStyle;
          ctx.beginPath();
          ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }

        if (node.nodes) {
          //if container - render nodes
          renderRecursive(node);
        }
        ctx.restore();
      });
    };
    ctx.clearRect(0, 0, width, height);
    renderRecursive(container);
  }
}

export default CanvasRenderer;

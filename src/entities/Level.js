import { Container } from "/lib/index";

class Level extends Container {
  constructor(configObj) {
    super();
    const { width, height } = configObj;
    this.topBound = 0;
    this.leftBound = 0;
    this.rightBound = width;
    this.bottomBound = height;
  }

  flipDirectionX(node) {
    console.log("flipX");
    node.direction.x = -node.direction.x;
  }

  flipDirectionY(node) {
    console.log("flipY");
    node.direction.y = -node.direction.y;
  }

  update(deltaTime, currentTime) {
    const {
      leftBound,
      topBound,
      rightBound,
      bottomBound,
      flipDirectionX,
      flipDirectionY,
    } = this;
    this.nodes.forEach((node) => {
      if (node.position.x <= leftBound) flipDirectionX(node);
      if (node.position.x >= rightBound) flipDirectionX(node);
      if (node.position.y <= topBound) flipDirectionY(node);
      if (node.position.y >= bottomBound) flipDirectionY(node);
    });
    super.update(deltaTime, currentTime);
  }
}

export default Level;

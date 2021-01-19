import { Rectangle } from "../lib";
import { Container, Circle } from "/lib/index";

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
    node.direction.x = -node.direction.x;
  }

  flipDirectionY(node) {
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
      //circle collision detection
      if (node instanceof Circle) {
        //edge of map collision detection
        if (node.position.x <= leftBound) flipDirectionX(node);
        if (node.position.x >= rightBound) flipDirectionX(node);
        if (node.position.y <= topBound) flipDirectionY(node);
        if (node.position.y >= bottomBound) flipDirectionY(node);
      }

      //rectangle collision detection
      if (node instanceof Rectangle) {
        if (node.position.y <= topBound) {
          node.position.y = topBound;
        }
        if (node.position.y >= bottomBound - node.height) {
          node.position.y = bottomBound - node.height;
        }
      }
    });
    super.update(deltaTime, currentTime);
  }
}

export default Level;

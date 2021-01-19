import { Rectangle } from "/lib/index";

class Paddle extends Rectangle {
  constructor() {
    super({
      width: 20,
      height: 100,
      fillStyle: "blue",
      spawnPosition: { x: 0, y: 0 },
    });
  }
}

export default Paddle;

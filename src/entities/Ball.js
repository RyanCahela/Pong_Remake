import { Circle } from "/lib/index";

class Ball extends Circle {
  constructor() {
    super({
      fillStyle: "red",
      radius: 10,
      spawnPosition: { x: 10, y: 10 },
    });
    this.speed = 500;
    this.direction = { x: 1, y: 1 };
  }

  update(deltaTime, currentTime) {
    this.position.x += this.speed * this.direction.x * deltaTime;
    this.position.y += this.speed * this.direction.y * deltaTime;
  }
}

export default Ball;

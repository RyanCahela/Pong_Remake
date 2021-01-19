const defaltConfig = {
  fillStyle: "red",
  radius: 10,
  spawnPosition: { x: 10, y: 10 },
};

class Circle {
  constructor(configObj = defaltConfig) {
    const { radius, fillStyle, spawnPosition } = configObj;
    this.position = spawnPosition;
    this.radius = radius;
    this.fillStyle = fillStyle;
    this.scale = { x: 1, y: 1 };
  }
}

export default Circle;

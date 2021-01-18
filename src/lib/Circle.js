const defaltConfig = {
  fillStyle: "red",
  radius: 10,
  spawnPosition: { x: 100, y: 100 },
};

class Circle {
  constructor(configObj = defaltConfig) {
    const { radius, fillStyle, spawnPosition } = configObj;
    this.position = spawnPosition;
    this.radius = radius;
    this.fillStyle = fillStyle;
  }
}

export default Circle;

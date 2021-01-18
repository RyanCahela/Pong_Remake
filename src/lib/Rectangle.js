const defaultConfig = {
  width: 100,
  height: 200,
  fillStyle: "blue",
  spawnPosition: { x: 0, y: 0 },
};

class Rectangle {
  constructor(configObj = defaultConfig) {
    const { width, height, fillStyle, spawnPosition } = configObj;
    this.position = spawnPosition;
    this.width = width;
    this.height = height;
    this.fillStyle = fillStyle;
  }
}

export default Rectangle;

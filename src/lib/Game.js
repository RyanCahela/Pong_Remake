import { CanvasRenderer, Container } from "/lib/index";

class Game {
  constructor(configObj) {
    const { width, height, parentElementId } = configObj;
    this.width = width;
    this.height = height;
    this.renderer = new CanvasRenderer({
      width,
      height,
    });

    this.scene = new Container();
    document.getElementById(parentElementId).appendChild(this.renderer.view);

    this.deltaTime = 0;
    this.timeOfLastFrame = 0;
  }

  add(node) {
    return this.scene.add(node);
  }

  remove(node) {
    return this.scene.remove(node);
  }

  run(gameUpdate = () => {}) {
    const STEP = 1 / 60;
    const MAX_STEP = STEP * 5;
    const loop = (ms) => {
      requestAnimationFrame(loop);
      const currentTime = ms / 1000;
      this.deltaTime = Math.min(currentTime - this.timeOfLastFrame, MAX_STEP);
      this.timeOfLastFrame = currentTime;

      this.scene.update(this.deltaTime, currentTime);
      gameUpdate(this.deltaTime, currentTime);
      this.renderer.render(this.scene);
    };
    requestAnimationFrame(loop);
  }
}

export default Game;

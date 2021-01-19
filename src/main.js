import Container from "./lib/Container";
import { Level, Ball } from "/entities/index";
import { CanvasRenderer } from "/lib/index";

const WIDTH = 640;
const HEIGHT = 480;
const renderer = new CanvasRenderer({
  width: WIDTH,
  height: HEIGHT,
});
const board = document.getElementById("board");
board.appendChild(renderer.view);

const level = new Level({
  width: WIDTH,
  height: HEIGHT,
});
const ball = new Ball();
const scene = new Container();

level.add(ball);
scene.add(level);

console.log(scene);

let timeOfLastFrame = 0;
let deltaTime = 0;

function loop(ms) {
  requestAnimationFrame(loop);
  const currentTime = ms / 1000; //convert to seconds;
  deltaTime = currentTime - timeOfLastFrame;
  timeOfLastFrame = currentTime;

  level.update(deltaTime, currentTime);
  renderer.render(level);
}

requestAnimationFrame(loop);

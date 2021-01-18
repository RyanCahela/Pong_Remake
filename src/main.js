import { Circle } from "./lib";
import { Container, CanvasRenderer, Text, Rectangle } from "/lib/index";

const WIDTH = 640;
const HEIGHT = 480;
const scene = new Container();
const renderer = new CanvasRenderer({
  width: WIDTH,
  height: HEIGHT,
});
const board = document.getElementById("board");
board.appendChild(renderer.view);

const helloStyles = {
  fill: "red",
  align: "center",
  font: "20pt monospace",
};

const initialPosition = {
  x: WIDTH / 2,
  y: HEIGHT / 2,
};
const hello = new Text("Hello World!", helloStyles, initialPosition);
const player = new Rectangle();
const ball = new Circle();

scene.add(hello);
scene.add(player);
scene.add(ball);

let timeOfLastFrame = 0;
let deltaTime = 0;

function loop(ms) {
  requestAnimationFrame(loop);
  const currentTime = ms / 1000; //convert to seconds;
  deltaTime = currentTime - timeOfLastFrame;
  timeOfLastFrame = currentTime;

  scene.update(deltaTime, currentTime);
  renderer.render(scene);
}

requestAnimationFrame(loop);

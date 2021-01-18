import { Container, CanvasRenderer, Text } from "/lib/index";

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

scene.add(hello);

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

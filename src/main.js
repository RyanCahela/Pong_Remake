import { Game, MouseControls } from "/lib/index";
import { Level, Ball, Paddle } from "/entities/index";

const game = new Game({
  width: 640,
  height: 480,
  parentElementId: "board",
});

const level = new Level({
  width: game.width,
  height: game.height,
});

const ball = new Ball();
const playerPaddle = new Paddle();
const controls = new MouseControls(game.renderer.view);
level.add(ball);
level.add(playerPaddle);
game.add(level);

game.run((deltaTime, currentTime) => {
  playerPaddle.position.y = controls.position.y - 50;
});

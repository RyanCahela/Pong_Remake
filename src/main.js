import { Game } from "/lib/index";
import { Level, Ball } from "/entities/index";

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
level.add(ball);
game.add(level);

game.run();

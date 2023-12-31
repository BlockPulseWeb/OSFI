import { getRandom } from '@/utils/tools';

// @ts-ignore
import SimplexNoise from 'https://cdn.skypack.dev/simplex-noise@3.0.0';
// @ts-ignore
import * as PIXI from 'https://cdn.skypack.dev/pixi.js@5.x';

export default class Orb {
  public bounds;
  public x;
  public y;
  public scale;
  public fill;
  public radius;
  public xOff;
  public yOff;
  public inc;
  public graphics;
  public simplex;
  public pixiIns;

  // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')
  constructor(fill = 0x000000, dir?: 'left' | 'right') {
    this.simplex = new SimplexNoise();

    // bounds = the area an orb is "allowed" to move within
    this.bounds = this.setBounds(dir);
    // initialise the orb's { x, y } values to a random point within it's bounds
    this.x = getRandom(this.bounds['x'].min, this.bounds['x'].max);
    this.y = getRandom(this.bounds['y'].min, this.bounds['y'].max);

    // how large the orb is vs it's original radius (this will modulate over time)
    this.scale = 1;

    // what color is the orb?
    this.fill = fill;

    // the original radius of the orb, set relative to window height
    this.radius = getRandom(window.innerHeight / 6, window.innerHeight / 3);

    // starting points in "time" for the noise/self similar getRandom values
    this.xOff = getRandom(0, 1000);
    this.yOff = getRandom(0, 1000);
    // how quickly the noise/self similar getRandom values step through time
    this.inc = 0.002;

    // this.pixiIns = new PIXI
    // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas
    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.825;

    // 250ms after the last window resize event, recalculate orb positions.
    /* window.addEventListener(
      'resize',
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    ); */
  }

  setBounds(dir: 'left' | 'right') {
    // how far from the { x, y } origin can each orb move
    // const maxDist = window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5;
    const maxDist = window.innerWidth < 1000 ? window.innerWidth : window.innerWidth / 5;
    // the { x, y } origin for each orb (the bottom right of the screen)
    // const originX = window.innerWidth / 1.25;
    let originX = window.innerWidth / 1.1;
    let originY = window.innerWidth < 1000 ? window.innerHeight : window.innerHeight / 1.375;

    if (dir === 'left') {
      originX = 0;
      // originY = 0;
      originY = window.innerHeight / 1.5;
    } else {
      originX = window.innerWidth < 1000 ? window.innerWidth : window.innerWidth / 2;
      originY = window.innerHeight / 1.5;
    }

    // const originX = props.xDir ? window.innerWidth / +props.xDir : 0;
    // const originY = props.yDir ? window.innerHeight / +props.yDir : 0;

    // allow each orb to move x distance away from it's x / y origin
    return {
      x: {
        min: originX - maxDist,
        max: originX + maxDist,
      },
      y: {
        min: originY - maxDist,
        max: originY + maxDist,
      },
    };
  }

  // map a number from 1 range to another
  map(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  }

  update() {
    // self similar "psuedo-random" or noise values at a given point in "time"
    const xNoise = this.simplex.noise2D(this.xOff, this.xOff);
    const yNoise = this.simplex.noise2D(this.yOff, this.yOff);
    const scaleNoise = this.simplex.noise2D(this.xOff, this.yOff);

    // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
    this.x = this.map(xNoise, -1, 1, this.bounds['x'].min, this.bounds['x'].max);
    this.y = this.map(yNoise, -1, 1, this.bounds['y'].min, this.bounds['y'].max);
    // this.map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
    this.scale = this.map(scaleNoise, -1, 1, 0.5, 1);

    // step through "time"
    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render() {
    // update the PIXI.Graphics position and scale values
    // console.log('this.graphics...', this.graphics);
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    // clear anything currently drawn to graphics
    this.graphics.clear();

    // tell graphics to fill any shapes drawn after this with the orb's fill color
    this.graphics.beginFill(this.fill);
    // draw a circle at { 0, 0 } with it's size set by this.radius
    this.graphics.drawCircle(0, 0, this.radius);
    // let graphics know we won't be filling in any more shapes
    this.graphics.endFill();
  }

  destroy() {
    this.graphics.destroy();
  }
}

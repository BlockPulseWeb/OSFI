import { getRandom } from '@/utils/tools';
// @ts-ignore;
import hsl from 'https://cdn.skypack.dev/hsl-to-hex';

export default class ColorPalette {
  constructor(color?: string) {
    this.color = color;
    this.setColors();
    this.setCustomProperties();
  }

  public hue: number;
  public complimentaryHue1: number;
  public complimentaryHue2: number;
  public saturation: number;
  public lightness: number;
  public baseColor: number;
  public complimentaryColor1: number;
  public complimentaryColor2: number;
  public colorChoices: string[];
  public color: string;

  setColors() {
    // pick a random hue somewhere between 220 and 360
    this.hue = ~~getRandom(220, 360);
    this.complimentaryHue1 = this.hue + 30;
    this.complimentaryHue2 = this.hue + 60;
    // define a fixed saturation and lightness
    this.saturation = 95;
    this.lightness = 50;

    // define a base color
    this.baseColor = hsl(this.hue, this.saturation, this.lightness);
    // define a complimentary color, 30 degress away from the base
    this.complimentaryColor1 = hsl(this.complimentaryHue1, this.saturation, this.lightness);
    // define a second complimentary color, 60 degrees away from the base
    this.complimentaryColor2 = hsl(this.complimentaryHue2, this.saturation, this.lightness);

    // store the color choices in an array so that a getRandom one can be picked later
    // this.colorChoices = [this.baseColor, this.complimentaryColor1, this.complimentaryColor2];
    // this.colorChoices = ['#1E46D4', '#E942B4'];
  }

  randomColor() {
    // pick a getRandom color
    // return this.colorChoices[~~getRandom(0, this.colorChoices.length - 1)].replace('#', '0x');
    return this.color.replace('#', '0x');
  }

  setCustomProperties() {
    // set CSS custom properties so that the colors defined here can be used throughout the UI
    // document.documentElement.style.setProperty('--hue', this.hue);
    // document.documentElement.style.setProperty('--hue-complimentary1', this.complimentaryHue1);
    // document.documentElement.style.setProperty('--hue-complimentary2', this.complimentaryHue2);
  }
}

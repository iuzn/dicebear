import Random from '../../helper/random';
import Color from '../../model/color';
import ColorSet from '../../model/colorSet';

export default class BrighterOrDarkerThan extends ColorSet {
  private referenceColor: ColorSet;
  private differenceBrightness: number;
  private differenceDarkness: number;

  /**
   * @param colors
   * @param referenceColor
   * @param differenceBrightness
   * @param differenceDarkness
   */
  constructor(
    colors: Color[] | ColorSet,
    referenceColor: ColorSet,
    differenceBrightness: number,
    differenceDarkness: number
  ) {
    super(colors);

    this.referenceColor = referenceColor;

    this.differenceBrightness = differenceBrightness ? differenceBrightness / 100 : 0;
    this.differenceDarkness = differenceDarkness ? differenceDarkness / 100 : 0;
  }

  /**
   * Returns a color
   *
   * @param random
   * @param callback
   */
  getColor(random: Random) {
    return Promise.all([super.getColor(random), this.referenceColor.getColor(random)]).then(
      ([color, referenceColor]) => {
        let hslColor = color.hsl();
        let hslReferenceColor = color.clone().hsl();

        let lightness = hslColor.lightness();
        let referenceLightness = hslReferenceColor.lightness();
        let minBrightness = referenceLightness + this.differenceBrightness;
        let minDarkness = referenceLightness - this.differenceDarkness;

        if (
          this.differenceBrightness &&
          minBrightness > lightness &&
          (0 == this.differenceDarkness || referenceLightness < lightness)
        ) {
          hslColor = hslColor.lightness(minBrightness);
        }

        if (
          this.differenceDarkness &&
          minDarkness < lightness &&
          (0 == this.differenceBrightness || referenceLightness > lightness)
        ) {
          hslColor = hslColor.lightness(minDarkness);
        }

        return new Color(hslColor.hex());
      }
    );
  }
}
declare class Utils {
  language: string;
  /**
   *
   * @param {String} language - This specifies the language to use in this package. Use the official language strings.
   */
  constructor(language: string);
  /**
   * @returns Returns every supported language.
   */
  languages: string[];
  /**
   *
   * @param {Date} date1
   * @param {Date} date2
   * @returns
   */
  compareDates(date1: any, date2: any): string;
  /**
   *
   * @param {Number} num - Number you would like to convert
   * @returns Returs a number like this: 8000 => 8k
   */
  intToString(num: any): any;
  /**
   *
   * @param {Boolean} numbers - Should your id include numbers?
   * @param {Boolean} small -Should your id include small letters?
   * @param {Boolean} big - Should your id include BIG letters?
   * @param {Number} length - The length of the returned id
   * @returns A Id string with the components you chooses and the length you defined!
   */
  generateId(
    numbers: boolean,
    small: boolean,
    big: boolean,
    length: number
  ): string;
  randomColor(): string;
}
export default Utils;

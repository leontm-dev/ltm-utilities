export class Utilities {
  language: string;
  /**
   *
   * @param {String} language - This specifies the language to use in this package. Just en and de supported!
   */
  constructor(language: string): void {
    if (language.toUpperCase() === "EN" || language.toUpperCase() === "DE") {
      this.language = language;
    } else {
      throw new Error("Language must be en or de");
    }
  }
  /**
   * @returns Returns every supported language.
   */
  languages = ["de", "en"];
  /**
   *
   * @param {Date} date1
   * @param {Date} date2
   * @returns
   */
  compareDates(date1: any, date2: any): string {
    const diff = Math.abs(date1 - date2);

    const milliseconds = diff;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

    let result = "";

    if (weeks > 0) {
      result += weeks + (weeks === 1 ? " Woche " : " Wochen ");
    }
    if (days > 0) {
      result += days + (days === 1 ? " Tag " : " Tage ");
    }
    if (hours > 0) {
      result += hours + (hours === 1 ? " Stunde " : " Stunden ");
    }
    if (minutes > 0) {
      result += minutes + (minutes === 1 ? " Minute " : " Minuten ");
    }
    if (seconds > 0) {
      result += seconds + (seconds === 1 ? " Sekunde " : " Sekunden ");
    }
    if (milliseconds > 0) {
      result +=
        milliseconds +
        (milliseconds === 1 ? " Millisekunde " : " Millisekunden ");
    }

    return result.trim();
  }
  /**
   *
   * @param {Number} num - Number you would like to convert
   * @returns Returs a number like this: 8000 => 8k
   */
  intToString(num: any): string {
    num = num.toString().replace(/[^0-9.]/g, "");
    if (num < 1000) {
      return num;
    }
    let si = [
      { v: 1e3, s: "K" },
      { v: 1e6, s: "M" },
      { v: 1e9, s: "B" },
      { v: 1e12, s: "T" },
      { v: 1e15, s: "P" },
      { v: 1e18, s: "E" },
    ];
    let index: any;
    for (index = si.length - 1; index > 0; index--) {
      if (num >= si[index].v) {
        break;
      }
    }
    return (
      (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
      si[index].s
    );
  }
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
  ): string {
    let parts: string[] = [];
    const parts_G = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const parts_K: string[] = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const parts_Z: string[] = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    let id: string = "";
    if (numbers === true) {
      parts = parts.concat(parts_Z);
    }
    if (small === true) {
      parts = parts.concat(parts_K);
    }
    if (big === true) {
      parts = parts.concat(parts_G);
    }
    for (let i = 0; i < length; i++) {
      id += parts[Math.floor(Math.random() * parts.length)];
    }
    return id;
  }
  /**
   *
   * @returns A random color string
   */
  randomColor(): string {
    const parts: string[] = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    let color: string = "#";
    for (let i: number = 0; i < 6; i++) {
      color += parts[Math.floor(Math.random() * parts.length)];
    }
    return color;
  }
}

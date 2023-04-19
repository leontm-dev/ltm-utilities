class Utils {
    /**
     * 
     * @param {String} language - This specifies the language to use in this package. Use the official language strings.
     */
    constructor(language) {
        if (this.languages.includes(language)) {
            this.language = language;
        } else {
            return new Error("ValueError: given language string does not match any of the supported strings.");
        }
    };
    /**
     * @returns Returns every supported language.
     */
    languages = [ "en-US", "en-AU", "en-CA", "en-BZ", "en-CA", "en-029", "en-IE", "en-JM", "en-NZ", "en-ZA", "en-TT", "en-GB", "de-AT", "de-LI", "de-LU", "de-CH", "en-IE", "de-DE" ];
    /**
     * 
     * @param {Date} date1 
     * @param {Date} date2 
     * @returns 
     */
    getDifferenceInDates(date1, date2) {
        // Diff in MS
        const diffInMs = Math.abs(date2 - date1);
        let ergebnis = diffInMs / (1000 * 60 * 60 * 24);
        if (ergebnis >= 1 && ergebnis < 2) {
            if (this.language.includes("en")) {
                return String(ergebnis + " day")
            } else if (this.language.includes("de")) {
                return String(ergebnis + " Tag");
            }
        } else if(ergebnis >= 2) {
            if (this.language.includes("en")) {
                return String(ergebnis + " days")
            } else if (this.language.includes("de")) {
                return String(ergebnis + " Tage");
            }
        } else if (ergebnis < 1) {
          ergebnis = diffInMs / (1000 * 60 * 60);
          if (ergebnis >= 1 && ergebnis < 2) {
            if (this.language.includes("en")) {
                return String(ergebnis + " hour")
            } else if (this.language.includes("de")) {
                return String(ergebnis + " Stunde");
            }
          } else if (ergebnis >= 2) {
            if (this.language.includes("en")) {
                return String(ergebnis + " hours")
            } else if (this.language.includes("de")) {
                return String(ergebnis + " Stunden");
            }
          } else if (ergebnis < 1) {
              ergebnis = diffInMs / (1000 * 60);
              if (ergebnis >= 1 && ergebnis <=2) {
                if (this.language.includes("en")) {
                    return String(ergebnis + " minute")
                } else if (this.language.includes("de")) {
                    return String(ergebnis + " Minute");
                }
              } else if (ergebnis >= 2) {
                if (this.language.includes("en")) {
                    return String(ergebnis + " minutes")
                } else if (this.language.includes("de")) {
                    return String(ergebnis + " Minuten");
                }
              } else if (ergebnis < 1) {
                  ergebnis = diffInMs / 1000;
                  if (ergebnis >=1 && ergebnis < 2) {
                    if (this.language.includes("en")) {
                        return String(ergebnis + " Second")
                    } else if (this.language.includes("de")) {
                        return String(ergebnis + " Sekunde");
                    }
                  } else if (ergebnis >= 2) {
                    if (this.language.includes("en")) {
                        return String(ergebnis + " Seconds")
                    } else if (this.language.includes("de")) {
                        return String(ergebnis + " Sekunden");
                    }
                  } else if (ergebnis < 1) {
                    if (this.language.includes("en")) {
                        return String(ergebnis + " Milliseconds")
                    } else if (this.language.includes("de")) {
                        return String(ergebnis + " Millisekunden");
                    }
                  }
              }
          }
        }
    };
    /**
     * 
     * @param {Number} num - Number you would like to convert
     * @returns Returs a number like this: 8000 => 8k
     */
    intToString(num) {
        num = num.toString().replace(/[^0-9.]/g, '');
        if (num < 1000) {
            return num;
        }
        let si = [
          {v: 1E3, s: "K"},
          {v: 1E6, s: "M"},
          {v: 1E9, s: "B"},
          {v: 1E12, s: "T"},
          {v: 1E15, s: "P"},
          {v: 1E18, s: "E"}
          ];
        let index;
        for (index = si.length - 1; index > 0; index--) {
            if (num >= si[index].v) {
                break;
            }
        }
        return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
    };
    generateId(numbers, small, big, length) {
        let parts = [];
        const parts_G = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
        ];
        const parts_K = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ];
        const parts_Z = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
        ];
        let id = "";
        if (numbers === true) {
            parts = parts.concat(parts_Z);
            console.log(parts);
        };
        if (small === true) {
            parts = parts.concat(parts_K);
        };
        if (big === true) {
            parts = parts.concat(parts_G);
        };
        for (let i = 0; i < length;i++) {
            id+=parts[Math.floor(Math.random()*parts.length)];
        };
        console.log(parts);
        return id;
    };
};
module.exports = Utils;
const ga = new Utils("de-DE");
console.log(ga.generateId(true, true, true, 202));
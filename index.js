class Utils {
    /**
     * 
     * @param {String} language - This specifies the language to use in this package. Use the official language strings.
     */
    constructor(language) {
        this.language = language;
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
}
module.exports = Utils;
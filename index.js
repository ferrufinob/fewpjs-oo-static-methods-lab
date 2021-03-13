class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-z- ']/gi, "");
  }

  static titleize(string) {
    let arr = string.split(" ");
    let titleizeString = arr
      .map(function (el) {
        if (
          el !== "the" &&
          el !== "a" &&
          el !== "an" &&
          el !== "but" &&
          el !== "of" &&
          el !== "and" &&
          el !== "for" &&
          el !== "at" &&
          el !== "by" &&
          el !== "from"
        ) {
          return Formatter.capitalize(el);
        } else {
          return el;
        }
      })
      .join(" ");
    return Formatter.capitalize(titleizeString);
  }
}

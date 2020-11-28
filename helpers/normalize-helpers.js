export const normalizeDescription = (str) => {
  // return str;
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "").replace(/(\\n|\\t|&nbsp|;)+/gi, " ");
};

export const formatPrice = (str) => {
  let num = str.slice(0, str.length - 5).concat("000");
  let s = "";
  let count = 0;
  while (num > 0) {
    s += String(num % 10);
    num = Math.floor(num / 10);
    count++;
    if (count % 3 == 0 && num > 0) {
      s += ",";
    }
  }
  const tmp = s.split("");
  tmp.reverse();
  return tmp.join("");
};

export const normalizeName = (name) => {
  const words = name.split(" ");
  const modifiedWords = words.map((word) => {
    return String(word[0]).toUpperCase() + word.slice(1);
  });
  return modifiedWords.join(" ");
};

export const rateFromNum = (num) => {
  if (num > 10) {
    if (num / 10 < 5) return "Tệ";
    if (num / 10 >= 5 && num / 10 < 6) return "Hài lòng";
    if (num / 10 >= 6 && num / 10 < 7) return "Tốt";
    if (num / 10 >= 7 && num / 10 < 8) return "Rất tốt";
    if (num / 10 >= 8 && num / 10 < 9) return "Tuyệt vời";
    if (num / 10 >= 9 && num / 10 <= 10) return "Trên cả tuyệt vời";
  } else {
    if (num < 5) return "Tệ";
    if (num >= 5 && num < 6) return "Hài lòng";
    if (num >= 6 && num < 7) return "Tốt";
    if (num >= 7 && num < 8) return "Rất tốt";
    if (num >= 8 && num < 9) return "Tuyệt vời";
    if (num >= 9 && num <= 10) return "Trên cả tuyệt vời";
  }
};

export const shortName = (name, length) => {
  if (name.length > length) {
    return name.slice(0, length) + "...";
  }
  return name;
};

export default function formatPrice(num) {
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
}

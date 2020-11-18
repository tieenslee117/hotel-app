export default function rateFromNum(num) {
  if (num < 4) return "Bad";
  else if (num >= 4 && num < 6) return "So so";
  else if (num >= 6 && num < 8) return "Good";
  else if (num >= 8 && num < 9) return "Excellent";
  else if (num >= 9 && num <= 10) return "Perfect";
}

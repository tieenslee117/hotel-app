export default function rateFromNum(num) {
  if (num / 10 < 4) return "Tệ";
  else if (num / 10 >= 4 && num / 10 < 6) return "Bình Thường";
  else if (num / 10 >= 6 && num / 10 < 8) return "Tốt";
  else if (num / 10 >= 8 && num / 10 < 9) return "Xuất sắc";
  else if (num / 10 >= 9 && num / 10 <= 10) return "Trên cả xuất sắc";
}

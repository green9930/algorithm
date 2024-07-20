function solution(phone_number) {
  return phone_number.slice(-4).padStart(phone_number.length, "*");
}

solution("01033334444"); // "*******4444"
solution("027778888"); // "*****8888"

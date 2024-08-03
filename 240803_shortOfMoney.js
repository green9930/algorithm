function solution(price, money, count) {
  console.log(Math.max(price * ((count * (count + 1)) / 2) - money, 0));
  return Math.max(price * ((count * (count + 1)) / 2) - money, 0);
}

solution(3, 20, 4); // 10
solution(1, 500, 10); // 10

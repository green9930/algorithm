function solution(a, b, n) {
  let total = n;
  const ansArr = [];

  while (total >= a) {
    ansArr.push(Math.floor(total / a) * b);
    total = (total % a) + Math.floor(total / a) * b;
  }

  // console.log(
  //   "answer",
  //   ansArr.reduce((acc, cur) => acc + cur, 0)
  // );
  return ansArr.reduce((acc, cur) => acc + cur, 0);
}

solution(2, 1, 20); // 19
solution(3, 1, 20); // 9
solution(8, 1, 20); // 2
solution(3, 2, 20); // 36
solution(3, 1, 7); // 3

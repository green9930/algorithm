function solution(x, n) {
  let answer = [];

  return Array.from({ length: n }, (_, i) => x * (i + 1));

  // for (let i = 1; i < n + 1; i++) {
  //   answer.push(x * i);
  // }

  // return answer;
}

solution(2, 5); // [2,4,6,8,10]
solution(4, 3); // [4,8,12]
solution(-4, 2); // [-4, -8]

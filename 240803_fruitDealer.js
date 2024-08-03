function solution(k, m, score) {
  const arr = score
    .sort((a, b) => b - a)
    .slice(0, score.length - (score.length % m));
  let res = 0;

  for (let i = 1; i <= arr.length / m; i++) {
    res += arr[m * i - 1];
  }

  // console.log(res, res * m);

  return res * m;
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1]); // 8
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]); // 33

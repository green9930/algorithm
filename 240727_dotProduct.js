function solution(a, b) {
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i] * b[i]);
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]); // 3
solution([-1, 0, 1], [1, 0, -1]); // -2

function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, i) => acc + (signs[i] ? cur : cur * -1),
    0
  );
}

solution([4, 7, 12], [true, false, true]); // 9
solution([1, 2, 3], [false, false, true]); // 0

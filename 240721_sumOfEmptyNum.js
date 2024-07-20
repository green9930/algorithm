function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

solution([1, 2, 3, 4, 6, 7, 8, 0]); // 14
solution([5, 8, 4, 0, 6, 7, 9]); // 6

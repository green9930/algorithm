function solution(n) {
  let answer = Array.from({ length: n }, () => Array(n).fill(0));

  console.log("answer", answer);
  // 0: right | 1: bottom | 2: left | 3: top
  let direction = 0;
  let val = 1;
  let row = 0;
  let col = 0;

  while (val <= n * n) {
    answer[row][col] = val++; // 숫자 채우기

    // 오른쪽으로 이동
    if (direction === 0) {
      if (col === n - 1 || answer[row][col + 1] !== 0) {
        // column 맨 끝이거나 이미 값이 채워졌다면 아래로 이동
        direction = 1;
        row++;
      } else {
        // 오른쪽으로 값 채우기
        col++;
      }
    } else if (direction === 1) {
      if (row === n - 1 || answer[row + 1][col] !== 0) {
        // row 맨 끝이거나 이미 값이 채워졌다면 왼쪽으로 이동
        direction = 2;
        col--;
      } else {
        // 아래쪽으로 값 채우기
        row++;
      }
    } else if (direction === 2) {
      if (col === 0 || answer[row][col - 1] !== 0) {
        // row 첫 줄이거나 이미 값이 채워졌다면 위로 이동
        direction = 3;
        row--;
      } else {
        // 왼쪽으로 값 채우기
        col--;
      }
    } else if (direction === 3) {
      if (row === 0 || answer[row - 1][col] !== 0) {
        // col 첫 줄이거나 이미 값이 채워졌다면 오른쪽으로 이동
        direction = 0;
        col++;
      } else {
        // 위쪽으로 값 채우기
        row--;
      }
    }
  }

  console.log(answer);
  return answer;
}

solution(4); // [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
solution(5); // [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]

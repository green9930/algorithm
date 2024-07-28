function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        number[i] + number[j] + number[k] === 0 ? (count += 1) : count;
      }
    }
  }

  console.log(count);

  return count;
}

solution([-2, 3, 0, 2, -5]); // 2
solution([-3, -2, -1, 0, 1, 2, 3]); // 5
solution([-1, 1, -1, 1]); // 0

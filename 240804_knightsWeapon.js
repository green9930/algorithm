function solution(number, limit, power) {
  const arr = [];

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        count++;
        if (j * j !== i) count++; // 제곱근 제외 *2
      }
    }
    if (count > limit) count = power;
    arr.push(count);
  }

  // console.log(
  //   arr,
  //   arr.reduce((acc, cur) => acc + cur, 0)
  // );
  return arr.reduce((acc, cur) => acc + cur, 0);
}

solution(5, 3, 2); // 10
solution(10, 3, 2); // 21
solution(9, 3, 2); // 19
solution(18, 4, 2); // 47

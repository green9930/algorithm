function solution(a, b) {
  let answer = 0;
  // const arr = [a, b].sort((a, b) => a - b);

  // if (arr[0] === arr[1]) answer = arr[0];
  // else {
  //   const numArr = [];
  //   for (let i = arr[0]; i <= arr[1]; i++) {
  //     numArr.push(i);
  //   }
  //   answer = numArr.reduce((acc, cur) => acc + cur, 0);
  // }

  answer = ((Math.abs(a - b) + 1) * (a + b)) / 2;
  console.log(answer);
  return answer;
}

solution(3, 5); // 12
solution(3, 3); // 3
solution(5, 3); // 12

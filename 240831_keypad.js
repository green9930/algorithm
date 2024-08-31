function solution(numbers, hand) {
  const nums = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };
  const coord = numbers.map((val) => nums[val]);
  let answer = "";

  for (let i = 0; i < numbers.length; i++) {
    if (coord[i][1] === 0) answer += "L";
    else if (coord[i][1] === 2) answer += "R";
    else {
      const left =
        answer.lastIndexOf("L") === -1
          ? [3, 0]
          : coord[answer.lastIndexOf("L")];
      const right =
        answer.lastIndexOf("R") === -1
          ? [3, 2]
          : coord[answer.lastIndexOf("R")];

      const distL =
        Math.abs(left[0] - coord[i][0]) + Math.abs(left[1] - coord[i][1]);
      const distR =
        Math.abs(right[0] - coord[i][0]) + Math.abs(right[1] - coord[i][1]);
      answer +=
        distL === distR
          ? hand === "left"
            ? "L"
            : "R"
          : distL < distR
          ? "L"
          : "R";
    }
  }

  console.log(answer);
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"); // "LRLLLRLLRRL"
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"); // "LRLLRRLLLRR"
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"); // "LLRLLRLLRL"

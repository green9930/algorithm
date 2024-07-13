function solution(dots) {
  let answer = 0;

  const getSlope = (dot1, dot2) => {
    return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
  };

  const slopeArr = [
    getSlope(dots[0], dots[1]),
    getSlope(dots[0], dots[2]),
    getSlope(dots[0], dots[3]),
    getSlope(dots[1], dots[2]),
    getSlope(dots[1], dots[3]),
    getSlope(dots[2], dots[3]),
  ];

  if (
    slopeArr[0] === slopeArr[5] ||
    slopeArr[1] === slopeArr[4] ||
    slopeArr[2] === slopeArr[3]
  ) {
    answer = 1;
  }

  console.log("answer", answer);
  return answer;
}

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]); // 1

solution([
  [3, 5],
  [4, 1],
  [2, 4],
  [5, 10],
]); // 0

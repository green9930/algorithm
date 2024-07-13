function solution(lines) {
  let answer = 0;
  const lineArr = [];

  // 각 선분 내 좌표로 이루어진 배열 만들기
  for (let i = 0; i < lines.length; i++) {
    lineArr.push(
      Array.from(
        { length: lines[i][1] - lines[i][0] + 1 },
        (_, idx) => lines[i][0] + idx
      )
    );
  }

  let overlappedArr = [];

  overlappedArr.push(lineArr[0].filter((val) => lineArr[1].includes(val))); // 1번과 2번 배열 사이 중복 배열
  overlappedArr.push(lineArr[0].filter((val) => lineArr[2].includes(val))); // 1번과 3번 배열 사이 중복 배열
  overlappedArr.push(lineArr[1].filter((val) => lineArr[2].includes(val))); // 2번과 3번 배열 사이 중복 배열
  overlappedArr = overlappedArr
    .filter((val) => val.length > 1) // length === 0 : 좌표만 겹침
    .flat()
    .sort((a, b) => a - b);

  const overlappedLength = [...new Set(overlappedArr)];
  // console.log("overlappedLength", overlappedLength);

  const resultArr = [];
  let temp = [overlappedLength[0]];
  // 연속된 값으로 이루어진 배열로 쪼개기
  for (let j = 1; j < overlappedLength.length; j++) {
    if (overlappedLength[j] === overlappedLength[j - 1] + 1) {
      temp.push(overlappedLength[j]);
    } else {
      resultArr.push(temp);
      temp = [overlappedLength[j]];
    }
  }

  resultArr.push(temp);

  resultArr.forEach((val) => (answer += val.length - 1));

  console.log(answer);
  return answer;
}

solution([
  [0, 1],
  [2, 5],
  [3, 9],
]); // 2;
solution([
  [-1, 1],
  [1, 3],
  [3, 9],
]); // 0
solution([
  [0, 5],
  [3, 9],
  [1, 10],
]); // 8
solution([
  [1, 2],
  [2, 3],
  [3, 4],
]); // 0

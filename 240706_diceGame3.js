function solution(a, b, c, d) {
  let answer = 0;

  const arr = [a, b, c, d];
  const counts = {}; // 요소 별 개수
  arr.forEach((val) => (counts[val] = (counts[val] || 0) + 1));

  const countsArr = Object.values(counts).sort((a, b) => b - a);

  let p = 0;
  let q = 0;
  let r = 0;

  switch (countsArr[0]) {
    case 4:
      p = Object.keys(counts)[0];
      answer = p * 1111;
      break;

    case 3:
      for (let key in counts) {
        if (counts[key] === 3) p = Number(key);
        if (counts[key] === 1) q = Number(key);
      }
      answer = (10 * p + q) ** 2;
      break;

    case 2:
      for (let key in counts) {
        if (counts[key] === 2) {
          p === 0 ? (p = Number(key)) : (q = Number(key));
        }
        if (counts[key] === 1) {
          q === 0 ? (q = Number(key)) : (r = Number(key));
        }
      }
      answer = r === 0 ? (p + q) * Math.abs(p - q) : q * r;
      break;

    case 1:
      p = Object.keys(counts).sort((a, b) => a - b)[0];
      answer = Number(p);
      break;

    default:
      break;
  }

  console.log("ANSWER : ", answer);
  return answer;
}

solution(2, 2, 2, 2); // 2222
solution(4, 1, 4, 4); // 1681
solution(6, 3, 3, 6); // 27
solution(2, 5, 2, 6); // 30
solution(6, 4, 2, 5); // 2

function solution(numer1, denom1, numer2, denom2) {
  let answer = [];

  const denomArr = [denom1, denom2].sort((a, b) => b - a);

  /* 1 분모 간 최대공약수 구하기 (유클리드 호제법) */
  const getGCD = (a, b) => {
    return b === 0 ? a : getGCD(b, a % b);
  };

  const gcd = getGCD(denomArr[0], denomArr[1]);

  /* 분모 간 최소 공배수 구하기 */
  const lcm = (denom1 * denom2) / gcd;
  /* 분자 더하기 */
  const numer = (numer1 * lcm) / denom1 + (numer2 * lcm) / denom2;
  const answerGCD = getGCD(numer, lcm);

  answer = [numer / answerGCD, lcm / answerGCD];
  console.log("answer", answer);
  return answer;
}

solution(1, 2, 3, 4); // [5, 4]
solution(9, 2, 1, 3); // [29, 6]

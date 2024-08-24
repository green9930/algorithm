function solution(survey, choices) {
  let ans = "";
  const mbti = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] === 4) continue;
    choices[i] > 4
      ? (mbti[survey[i][1]] += Math.abs(4 - choices[i]))
      : (mbti[survey[i][0]] += Math.abs(4 - choices[i]));
  }

  mbti.R === mbti.T ? (ans += "R") : (ans += mbti.R > mbti.T ? "R" : "T");
  mbti.C === mbti.F ? (ans += "C") : (ans += mbti.C > mbti.F ? "C" : "F");
  mbti.J === mbti.M ? (ans += "J") : (ans += mbti.J > mbti.M ? "J" : "M");
  mbti.A === mbti.N ? (ans += "A") : (ans += mbti.A > mbti.N ? "A" : "N");

  console.log(ans);
  return ans;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]); // "TCMA"
solution(["TR", "RT", "TR"], [7, 1, 3]); // "RCJA"
solution(["AN"], [7]); // "RCJN"

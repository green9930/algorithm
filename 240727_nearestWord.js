function solution(s) {
  const answer = [];
  const stringArr = [];

  for (let i = 0; i < s.length; i++) {
    if (stringArr.includes(s[i])) {
      answer.push(i - stringArr.lastIndexOf(s[i]));
    } else {
      answer.push(-1);
    }
    stringArr.push(s[i]);
  }

  console.log(answer);
  return answer;
}

solution("banana"); // [-1, -1, -1, 2, 2, 2]
solution("foobar"); // [-1, -1, 1, -1, -1, -1]

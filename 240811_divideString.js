function solution(s) {
  let sLength = s.length;
  let target = "";
  let targetLength = 0;
  let othersLength = 0;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    // 문자열이 1개 남았거나, target문자열만 남았을 경우
    if (sLength === 1 || i === s.length - 1) return answer + 1;

    if (target === "") {
      target = s[i];
      targetLength = 1;
    } else {
      s[i] === target ? (targetLength += 1) : (othersLength += 1);
      if (targetLength === othersLength) {
        sLength = s.length - (i + 1);
        target = "";
        targetLength = 0;
        othersLength = 0;
        answer++;
      }
    }
  }

  // console.log("answer", answer);

  return answer;
}

solution("banana"); // 3
solution("abracadabra"); // 6
solution("aaabbaccccabba"); // 3
solution("aaabbbccc"); // 2

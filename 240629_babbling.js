function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"];
  // 발음 가능한 단어 개수
  let answer = 0;

  for (let word of babbling) {
    for (let target of arr) {
      if (word.includes(target)) {
        // 발음 가능한 단어가 제외되었을 때
        word = word.replace(target, " ");
      }
    }

    if (word.trim().length === 0) answer++;
  }

  console.log(answer);
  return answer;
}

solution(["aya", "yee", "u", "maa", "wyeoo"]);
solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);

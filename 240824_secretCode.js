function solution(s, skip, index) {
  const arr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
  skip.split("").forEach((v) => arr.splice(arr.indexOf(v), 1));
  let word = "";

  for (let i = 0; i < s.length; i++) {
    word += arr[(arr.indexOf(s[i]) + index) % arr.length];
  }
  // console.log(word);
  return word;
}

solution("aukks", "wbqd", 5); // "happy"
solution("z", "a", 1); // "b"
solution("z", "abcdefghij", 20); // "n"

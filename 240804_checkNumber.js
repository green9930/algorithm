function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i]))) return false;
    }
    return true;
  } else return false;
}

solution("a234"); // false
solution("1234"); // true

function solution(t, p) {
  let res = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    Number(t.substring(i, i + p.length)) <= Number(p) && res++;
  }

  // console.log(res);
  return res;
}

solution("3141592", "271"); // 2
solution("500220839878", "7"); // 8
solution("10203", "15"); // 3

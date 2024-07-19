// function solution(s) {
//   let answer = true;
//   const arr = s.toLowerCase().split("");

//   const countP = arr.filter((val) => val === "p").length;
//   const countY = arr.filter((val) => val === "y").length;
//   answer = countP === countY;

//   console.log(answer);
//   return answer;
// }

function solution(s) {
  const arr = s.toLowerCase();
  answer = arr.split("p").length === arr.split("y").length;

  return answer;
}

solution("pPoooyY"); // true
solution("Pyy"); // false

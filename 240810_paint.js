function solution(n, m, section) {
  let count = 0;
  const arr = [...section];

  while (arr.length > 0) {
    const val = arr.indexOf(arr.find((v) => arr[0] + m - 1 < v));
    val === -1 ? arr.splice(0) : arr.splice(0, val);
    count++;
  }

  console.log("count", count);
  return count;
}

// function solution(n, m, sections) {
//   let answer = 0;
//   let painted = 0;
//   for (let section of sections) {
//     if (painted < section) {
//       answer++;
//       painted = section + m - 1;
//     }
//   }

//   console.log(answer);
//   return answer;
// }

solution(8, 4, [2, 3, 6]); // 2
solution(5, 4, [1, 3]); // 1
solution(4, 1, [1, 2, 3, 4]); // 4

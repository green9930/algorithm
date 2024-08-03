function solution(k, score) {
  const answer = [];
  const arr = [];

  for (let i = 0; i < score.length; i++) {
    if (arr.length < k) {
      arr.push(score[i]);
    } else if (score[i] > arr[k - 1]) {
      arr[k - 1] = score[i];
    }
    arr.sort((a, b) => b - a);
    answer.push(arr[arr.length - 1]);
  }

  console.log(answer);
  return answer;
}

solution(3, [10, 100, 20, 150, 1, 100, 200]); // [10, 10, 10, 20, 20, 100, 100]
solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]

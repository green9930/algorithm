function solution(board) {
  let answer = 0;
  let zone = [...board];
  const danger = "d";

  for (let i = 0; i < zone.length; i++) {
    for (let j = 0; j < zone[i].length; j++) {
      if (zone[i][j] === 1) {
        if (i > 0) {
          if (j > 0) zone[i - 1][j - 1] !== 1 && (zone[i - 1][j - 1] = danger);
          if (j < zone[i].length - 1)
            zone[i - 1][j + 1] !== 1 && (zone[i - 1][j + 1] = danger);
          zone[i - 1][j] !== 1 && (zone[i - 1][j] = danger);
        }
        if (i < zone.length - 1) {
          if (j > 0) zone[i + 1][j - 1] !== 1 && (zone[i + 1][j - 1] = danger);
          if (j < zone[i].length - 1)
            zone[i + 1][j + 1] !== 1 && (zone[i + 1][j + 1] = danger);
          zone[i + 1][j] !== 1 && (zone[i + 1][j] = danger);
        }
        if (j > 0) zone[i][j - 1] !== 1 && (zone[i][j - 1] = danger);
        if (j < zone[i].length - 1)
          zone[i][j + 1] !== 1 && (zone[i][j + 1] = danger);
      }
    }
  }

  answer = zone.flat().filter((val) => val !== danger && val !== 1).length;

  return answer;
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]); // 16
solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
]); // 13
solution([
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
]); // 0

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i][0] === "K") {
      if (seoul[i][1] === "i") {
        if (seoul[i][2] === "m") return `김서방은 ${i}에 있다`;
      }
    }
  }
}

solution(["Jane", "Kim"]); // "김서방은 1에 있다"

function solution(food) {
  const foodArr = food.map((val) => (val % 2 ? val - 1 : val));
  const arr = [];

  for (let i = 1; i < food.length; i++) {
    arr.push(`${i}`.repeat(foodArr[i] / 2).split(""));
  }

  return arr.flat().join("") + "0" + arr.flat().reverse().join("");
}

solution([1, 3, 4, 6]); // "1223330333221"
solution([1, 7, 1, 2]); // "111303111"

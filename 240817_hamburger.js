function solution(ingredient) {
  const stack = [];
  const order = "1231";
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.length >= 4 && stack.slice(-4).join("") === order) {
      stack.splice(-4);
      count++;
    }
  }

  console.log(count);
  return count;
}

// 1 빵
// 2 야채
// 3 고기
// 빵-야채-고기-빵 1231

solution([2, 1, 1, 2, 3, 1, 2, 3, 1]); // 2
solution([1, 3, 2, 1, 2, 1, 3, 1, 2]); // 0

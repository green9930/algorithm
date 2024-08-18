function solution(X, Y) {
  const arrX = Array(10).fill(0);
  const arrY = Array(10).fill(0);
  const targetArr = [];

  for (let i of X) {
    arrX[i]++;
  }
  for (let i of Y) {
    arrY[i]++;
  }

  for (let i = 9; i >= 0; i--) {
    if (Math.min(arrX[i], arrY[i]) > 0) {
      targetArr.push(i.toString().repeat(Math.min(arrX[i], arrY[i])).split(""));
    }
  }

  targetArr.flat();

  return targetArr.length
    ? targetArr.flat()[0] === "0"
      ? "0"
      : targetArr.flat().join("")
    : "-1";
}

solution("100", "2345"); // -1
solution("100", "203045"); //	"0"
solution("100", "123450"); // "10"
solution("12321", "42531"); //	"321"
solution("5525", "1255"); // "552"
solution("111", "1111"); // "111"

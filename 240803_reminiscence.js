function solution(name, yearning, photo) {
  const obj = {};
  name.forEach((val, i) => (obj[val] = yearning[i]));

  return photo.map((val) =>
    val.map((v) => obj[v] ?? 0).reduce((acc, cur) => acc + cur, 0)
  );
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
); // [19, 15, 6]
solution(
  ["kali", "mari", "don"],
  [11, 1, 55],
  [
    ["kali", "mari", "don"],
    ["pony", "tom", "teddy"],
    ["con", "mona", "don"],
  ]
); // [67, 0, 55]

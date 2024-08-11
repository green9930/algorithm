function solution(cards1, cards2, goal) {
  const goalStr = [...goal];

  for (const word of goal) {
    if (word !== cards1[0] && word !== cards2[0]) {
      return "No";
    }

    if (word === cards1[0]) cards1.splice(0, 1);
    else if (word === cards2[0]) cards2.splice(0, 1);
    goalStr.splice(0, 1);

    if (goalStr.length === 0) {
      return "Yes";
    }
  }
}

solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
); // "Yes"
solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
); // "No"

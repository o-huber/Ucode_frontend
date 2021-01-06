function triangle(length) {
  let res = "";
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
      res += `*`;
    }
    res += "\n";
  }
  alert(res);
}

triangle(prompt("Enter the length od a triangle:"));

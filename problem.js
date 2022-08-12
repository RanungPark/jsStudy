function pow(x, n) {
  let num = x;
  for(let i = 0; i < n; i++) {
    num = num * x;
  }
  return num;
}
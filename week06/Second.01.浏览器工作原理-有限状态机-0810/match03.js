// 在一个字符串中，找到字符串'abcdef'

// winter
function match (string) {
  let foundA = false;
  for (let c of string) {
    if (c == 'a')
      foundA = true;
    else if (foundA && c == 'b')
      return true;
    else
      foundA = false; // 牛逼，我想不到
  }
  return false;
}
console.log(match('i avbm an boy'))

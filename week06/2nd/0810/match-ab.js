// 在一个字符串中，找到字符串'ab'

// winter
function match (string) {
  let foundA = false;
  for (let c of string) {
    if (c == 'a')
      foundA = true;
    else if (foundA && c == 'b')
      return true;
  }
  return false;
}

console.log(match('i abm an boy'))

// 上面有个bug，string为 acb时
function match2 (string) {
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
console.log(match2('i avbm an boy'))

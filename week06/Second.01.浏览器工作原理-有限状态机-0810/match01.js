// 在一个字符串中，找到字符串'a'

// 我的第一反应的answer
function test (string) {
  return string.indexOf('a') > -1;
}

// 课堂其他同学的answer
function test (string) {
  return /a/g.test(string)
}

// winter
function match (string) {
  for (let c of string) {
    if (c == 'a')
      return true;
  }
  return false;
}

match('i am an boy')
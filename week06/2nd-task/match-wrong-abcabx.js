/**
 * match abcabx
 * this is wrong version
 */

function match (string) {
  let state = start;
  for (let c of string)
    state = state(c)
  
  return state === end
}
function start(c){
  if (c === 'a') return foundA;
  return start;
}
function end(c) {
  return end;
}
// to do
function foundA(c) {
  if (c === 'b') return foundB;
  return start(c);
}
function foundB(c) {
  if (c === 'c') return foundC;
  return start(c);
}
function foundC(c) {
  if (c === 'a') return foundA2;
  return start(c);
}
function foundA2 (c) {
  if (c === 'b') return foundB2;
  return start(c);
}
function foundB2 (c) {
  if (c === 'x') return end;
  return foundB(c);
}

{
  let string = 'abcabcabx';
  log(string, match(string))

  // 错误的原因在于：
  // foundC()时，不应该return start，应该return foundA2
}

{
  let string = 'abcabaabbabcabcabx';
  log(string, match(string))
}

function log(key, desc) {
  console.log(`${key}: ${desc}`)
}

{
  let string = 'abcabx';
  log(string, match(string))
}

{
  let string = 'abccccabcabx';
  log(string, match(string))
}
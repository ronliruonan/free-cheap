
function match (string) {
  let state = start;
  for(let c of string) {
    state = state(c);
  }

  return state === end;
}

function start(c) {
  if (c === 'a') return foundA;
  return start;
}
function end(c) {
  return end;
}

function foundA(c) {
  if (c === 'b') return foundBc;
  return start;
}
function foundBc(c) {
  if (c === 'c') return foundA2;
  return start;
}

function foundA2(c) {
  if (c === 'a') return foundB2;
  return start;
}
function foundB2(c) {
  if (c === 'b') return foundX;
  return start;
}
function foundX(c) {
  if (c === 'x') return end;
  return start;
}

function log(key, desc) {
  console.log(`${key}: ${desc}`)
}
{
  let string = 'abcabx';
  log(string, match(string))
}
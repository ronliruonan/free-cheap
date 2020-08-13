function match (string) {
  let state = start;
  for (let c of string) {
    state = state(c);
  }
  return state === end;
}

function start (c) {
  if (c === 'a') return foundA;
  return start;
}
function end (c) {
  return end;
}
function foundA (c) {
  if (c === 'b') return foundB;
  return start;
}
function foundB (c) {
  if (c === 'a') return foundA2;
  return foundA(c);
}
function foundA2 (c) {
  if (c === 'b') return foundB2;
  return foundB(c);
}
function foundB2 (c) {
  if (c === 'a') return foundA3;
  return foundA2(c);
}
function foundA3 (c) {
  if (c === 'b') return foundB3;
  return foundB2(c);
}
function foundB3 (c) {
  if (c === 'x') return end;
  return foundA3(c);
}
{
  let string = 'abababx';
  console.log(string, ': ', match(string))
}
{
  let string = 'abababababababcababcabababx';
  console.log(string, ': ', match(string))
}
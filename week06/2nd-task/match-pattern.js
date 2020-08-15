// match pattern

let startChar = '';
function match (pattern, string) {
  startChar = pattern[0];
  let state = start;
  for (let c of string) {
    state = state(c);
  }
  return state === end;
}
function start (c) {
  if (c === startChar) return end;
  return start;
}
function end (c) {
  return end;
}


{
  let pattern = 'ab';
  let string = 'i am ac'
  console.log('pattern:', pattern, '\nstring:', string, '\nresult:', match(pattern, string));
  console.log('indexOf: ', string.indexOf(pattern) > -1)
}
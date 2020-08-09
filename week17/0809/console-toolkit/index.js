// var tty = require('tty')
var ttys = require('ttys')
// var rl = require('readline')

var stdin = ttys.stdin;
var stdout = ttys.stdout;

stdout.write('[hello world~\n');
stdout.write("\033[1A")
stdout.write("ronan\n")

stdout.write('[x]vue\n')
stdout.write("\033[1A")
stdout.write('[ ')

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// async function ask (question) {
//   return new Promise((resolve, reject) => {
//     rl.question('question', (answer) => {
//       resolve(answer)
//     });
//   })
// }

// void async function() {
//   console.log(await ask('asdfasdf'))
// }();
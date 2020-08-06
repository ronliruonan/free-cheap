const compiler = require('@vue/compiler-sfc');

let output = compiler.compileTemplate(
  { file: 'examp.vue', source: '<div>hello world</div' }
)

console.log(output);
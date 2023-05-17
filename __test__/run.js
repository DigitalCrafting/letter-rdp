const {Parser} = require('../src/Parser');

const parser = new Parser();

const program = `   
 // Numbers:
 42;   
 /*
 * Documentation comment
 */
 "hello";
 
  `;

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));
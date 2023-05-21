const {Parser} = require('../src/Parser');
const assert = require("assert");

/* List of tests */
const tests = [
    require('./literals-test'),
    require('./statement-list-test'),
    require('./block-test'),
    require('./empty-statement-test'),
    require('./math-test')
];

const parser = new Parser();

function test(program, expected) {
    const ast = parser.parse(program);
    assert.deepStrictEqual(ast, expected);
}

function exec() {

    const program = `
         2 * 2 * 2 * 2 * 2;
  `;

    const ast = parser.parse(program);

    console.log(JSON.stringify(ast, null, 2));
}

/* Manual test */
exec();

/* Automated tests */
tests.forEach(testRun => testRun(test));

console.log("All assertions passed!")
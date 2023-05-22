const {Parser} = require('../src/Parser');
const assert = require("assert");

/* List of tests */
const tests = [
    require('./literals-test'),
    require('./statement-list-test'),
    require('./block-test'),
    require('./empty-statement-test'),
    require('./math-test'),
    require('./assignment-test'),
    require('./variable-test')
];

const parser = new Parser();

function test(program, expected) {
    const ast = parser.parse(program);
    assert.deepStrictEqual(ast, expected);
}

function exec() {

    const program = `
        let y;
        let a, b;
        let c, d = 10;
        let x = 42;
  `;

    const ast = parser.parse(program);

    console.log(JSON.stringify(ast, null, 2));
}

/* Manual test */
exec();

/* Automated tests */
tests.forEach(testRun => testRun(test));

console.log("All assertions passed!")
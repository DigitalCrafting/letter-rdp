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
    require('./variable-test'),
    require('./if-test'),
    require('./relational-test'),
    require('./equality-test'),
    require('./logical-test'),
    require('./unary-test'),
];

const parser = new Parser();

function test(program, expected) {
    const ast = parser.parse(program);
    assert.deepStrictEqual(ast, expected);
}

function exec() {

    const program = `
        !(x > 5 || y < 10);
    `;

    const ast = parser.parse(program);

    console.log(JSON.stringify(ast, null, 2));
}

/* Manual test */
exec();

/* Automated tests */
tests.forEach(testRun => testRun(test));

console.log("All assertions passed!")
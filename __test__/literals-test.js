module.exports = test => {
    // NumericLiteral
    test(`42;`, {
        type: 'Program',
        body: [{
            type: 'ExpressionStatement',
            expression: {
                type: 'NumericLiteral',
                value: 42
            }
        }]
    })

    // StringLiteral
    test(`"hello";`, {
        type: 'Program',
        body: [{
            type: 'ExpressionStatement',
            expression: {
                type: 'StringLiteral',
                value: "hello"
            }
        }]
    })

    // StringLiteral
    test(`'hi';`, {
        type: 'Program',
        body: [{
            type: 'ExpressionStatement',
            expression: {
                type: 'StringLiteral',
                value: 'hi'
            }
        }]
    })


};
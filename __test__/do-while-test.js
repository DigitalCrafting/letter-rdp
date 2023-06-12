module.exports = test => {
    test(
        `
        do {
            x -= 1;
        } while (x > 10);
        `,
        {
            type: 'Program',
            body: [
                {
                    type: 'DoWhileStatement',
                    test: {
                        type: 'BinaryExpression',
                        operator: '>',
                        left: {
                            type: 'Identifier',
                            name: 'x',
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 10
                        }
                    },
                    body: {
                        type: 'BlockStatement',
                        body: [
                            {
                                type: 'ExpressionStatement',
                                expression: {
                                    type: 'AssignmentExpression',
                                    operator: '-=',
                                    left: {
                                        type: 'Identifier',
                                        name: 'x'
                                    },
                                    right: {
                                        type: 'NumericLiteral',
                                        value: 1
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        }
    );
};
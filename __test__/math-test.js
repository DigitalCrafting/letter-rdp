module.exports = test => {
    // Addition
    test(
        `2 + 2;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'BinaryExpression',
                        operator: '+',
                        left: {
                            type: 'NumericLiteral',
                            value: 2
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 2
                        }
                    }
                }
            ]
        }
    );

    // Nested addition
    // Left: 3 + 2
    // Right: 2
    test(
        `3 + 2 - 2;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'BinaryExpression',
                        operator: '-',
                        left: {
                            type: 'BinaryExpression',
                            operator: '+',
                            left: {
                                type: 'NumericLiteral',
                                value: 3
                            },
                            right: {
                                type: 'NumericLiteral',
                                value: 2
                            }
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 2
                        }
                    }
                }
            ]
        }
    );

    // Multiplication
    test(
        `2 * 2;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'BinaryExpression',
                        operator: '*',
                        left: {
                            type: 'NumericLiteral',
                            value: 2
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 2
                        }
                    }
                }
            ]
        }
    );

    // Nested multiplication
    test(
        `2 * 2 * 2;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'BinaryExpression',
                        operator: '*',
                        left: {
                            type: 'BinaryExpression',
                            operator: '*',
                            left: {
                                type: 'NumericLiteral',
                                value: 2
                            },
                            right: {
                                type: 'NumericLiteral',
                                value: 2
                            }
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 2
                        }
                    }
                }
            ]
        }
    );

    // Operator precedence
    test(
        `2 + 2 * 2;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'BinaryExpression',
                        operator: '+',
                        left: {
                            type: 'NumericLiteral',
                            value: 2
                        },
                        right: {
                            type: 'BinaryExpression',
                            operator: '*',
                            left: {
                                type: 'NumericLiteral',
                                value: 2
                            },
                            right: {
                                type: 'NumericLiteral',
                                value: 2
                            }
                        }
                    }
                }
            ]
        }
    );

    test(
        `(2 + 2) * 2;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'BinaryExpression',
                        operator: '*',
                        left: {
                            type: 'BinaryExpression',
                            operator: '+',
                            left: {
                                type: 'NumericLiteral',
                                value: 2
                            },
                            right: {
                                type: 'NumericLiteral',
                                value: 2
                            }
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 2
                        }
                    }
                }
            ]
        }
    );
};
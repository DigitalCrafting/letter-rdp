module.exports = test => {
    test(`
            {
                42;
                "hello";
            }
        `,
        {
            type: 'Program',
            body: [{
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'NumericLiteral',
                            value: 42
                        }
                    },
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'StringLiteral',
                            value: "hello"
                        }
                    }
                ]
            }]
        }
    );

    test(`
            {
            }
        `,
        {
            type: 'Program',
            body: [{
                type: 'BlockStatement',
                body: []
            }]
        }
    );

    test(`
            {
                "hello there";
                {
                    42;
                }
                {
                    "general Kenobi";
                }
            }
        `,
        {
            type: 'Program',
            body: [{
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'StringLiteral',
                            value: "hello there"
                        }
                    },
                    {
                        type: 'BlockStatement',
                        body: [
                            {
                                type: 'ExpressionStatement',
                                expression: {
                                    type: 'NumericLiteral',
                                    value: 42
                                }
                            }
                        ]
                    }, {
                        type: 'BlockStatement',
                        body: [
                            {
                                type: 'ExpressionStatement',
                                expression: {
                                    type: 'StringLiteral',
                                    value: "general Kenobi"
                                }
                            }
                        ]
                    }
                ]
            }]
        }
    );
}
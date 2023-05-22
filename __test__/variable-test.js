module.exports = test => {
    // Variable declaration, with initializer
    test(
        `let x = 42;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'VariableStatement',
                    declarations: [
                        {
                            type: 'VariableDeclaration',
                            id: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            init: {
                                type: 'NumericLiteral',
                                value: 42
                            }
                        }
                    ]
                }

            ]
        }
    );

    // Variable declaration, not init
    test(
        `let x;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'VariableStatement',
                    declarations: [
                        {
                            type: 'VariableDeclaration',
                            id: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            init: null
                        }
                    ]
                }

            ]
        }
    );

    // Multiple variable declarations, not init
    test(
        `let x, y;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'VariableStatement',
                    declarations: [
                        {
                            type: 'VariableDeclaration',
                            id: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            init: null
                        },
                        {
                            type: 'VariableDeclaration',
                            id: {
                                type: 'Identifier',
                                name: 'y'
                            },
                            init: null
                        }
                    ]
                }

            ]
        }
    );

    // Multiple variable declarations
    test(
        `let x, y = 42;`,
        {
            type: 'Program',
            body: [
                {
                    type: 'VariableStatement',
                    declarations: [
                        {
                            type: 'VariableDeclaration',
                            id: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            init: null
                        },
                        {
                            type: 'VariableDeclaration',
                            id: {
                                type: 'Identifier',
                                name: 'y'
                            },
                            init: {
                                type: 'NumericLiteral',
                                value: 42
                            }
                        }
                    ]
                }

            ]
        }
    );
};
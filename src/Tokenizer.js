const Spec = [
    /* ---------------------------------- */
    /* Whitespaces */
    [/^\s+/, null],

    /* ---------------------------------- */
    /* Comments */
    // Single-line comments
    [/^\/\/.*/, null],
    // Multi-line comments
    [/^\/\*[\s\S]*?\*\//, null],

    /* ---------------------------------- */
    /* Symbol delimiters */
    [/^;/, ';'],
    [/^\{/, '{'],
    [/^}/, '}'],
    [/^\(/, '('],
    [/^\)/, ')'],
    [/^,/, ','],

    /* ---------------------------------- */
    /* Keywords */
    [/^\blet\b/, 'let'],
    [/^\bif\b/, 'if'],
    [/^\belse\b/, 'else'],
    [/^\btrue\b/, 'true'],
    [/^\bfalse\b/, 'false'],
    [/^\bnull\b/, 'null'],
    [/^\bwhile\b/, 'while'],
    [/^\bdo\b/, 'do'],
    [/^\bfor\b/, 'for'],

    /* ---------------------------------- */
    /* Numbers */
    [/^\d+/, 'NUMBER'],

    /* ---------------------------------- */
    /* Identifiers: */
    [/^\b\w+\b/, 'IDENTIFIER'],

    /* ---------------------------------- */
    /* Equality operators: ==, != */
    [/^[=!]=/, 'EQUALITY_OPERATOR'],

    /* ---------------------------------- */
    /* Assignment operators: =, +=, -=, *=, /= */
    [/^=/, 'SIMPLE_ASSIGN'],
    [/^[+\-*\/]=/, 'COMPLEX_ASSIGN'],

    /* ---------------------------------- */
    /* Math operators: +, -, *, / */
    [/^[+\-]/, 'ADDITIVE_OPERATOR'],
    [/^[*\/]/, 'MULTIPLICATIVE_OPERATOR'],

    /* ---------------------------------- */
    /* Relational operators: >, >=, <, <= */
    [/^[<>]=?/, 'RELATIONAL_OPERATOR'],

    /* ---------------------------------- */
    /* Equality operators: ==, != */
    [/^&&/, 'LOGICAL_AND'],
    [/^\|\|/, 'LOGICAL_OR'],
    [/^!/, 'LOGICAL_NOT'],

    /* ---------------------------------- */
    /* Strings */
    [/"[^"]*"/, 'STRING'],
    [/'[^']*'/, 'STRING'],
];

class Tokenizer {
    init(string) {
        this._string = string;
        this._cursor = 0;
    }

    hasMoreTokens() {
        return this._cursor < this._string.length;
    }

    getNextToken() {
        if (!this.hasMoreTokens()) {
            return null;
        }

        const string = this._string.slice(this._cursor);

        for (const [regex, tokenType] of Spec) {
            const tokenValue = this._match(regex, string);

            if (tokenValue == null) {
                continue;
            }

            /* Skip f.e. whitespaces */
            if (tokenType == null) {
                return this.getNextToken();
            }

            return {
                type: tokenType,
                value: tokenValue
            };
        }

        throw new SyntaxError(`Unexpected token: "${string[0]}"`);
    }

    isEOF() {
        return this._cursor === this._string.length;
    }

    _match(regex, string) {
        const matched = regex.exec(string);
        if (matched == null) {
            return null;
        }
        this._cursor += matched[0].length;
        return matched[0];
    }
}

module.exports = {
    Tokenizer
}
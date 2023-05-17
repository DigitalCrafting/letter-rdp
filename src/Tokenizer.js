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

        // Numbers:
        if (!Number.isNaN(Number(this._string[this._cursor]))) {
            let number = '';
            while (this.hasMoreTokens() && !Number.isNaN(this._string[this._cursor])) {
                number += this._string[this._cursor++];
            }
            return {
                type: 'NUMBER',
                value: number
            }
        }

        //String
        if (this._string[this._cursor] === '"' || this._string[this._cursor] === '\'') {
            let quote = this._string[this._cursor];
            let s = '';
            do {
                s += this._string[this._cursor++];
            } while (this._string[this._cursor] !== quote && !this.isEOF());
            this._cursor++; // consume " or '
            s += quote;
            return {
                type: 'STRING',
                value: s
            }
        }


    }

    isEOF() {
        return this._cursor === this._string.length;
    }
}

module.exports = {
    Tokenizer
}
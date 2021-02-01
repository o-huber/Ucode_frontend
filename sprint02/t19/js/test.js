describe("checkBrackets", function() {

    describe("Correct cases", function() { //correct cases

        it("With the string: '1)()(())2(()'", function() {
            assert.equal(checkBrackets('1)()(())2(()'), 2);
        });

        it("With NaN", function() {
            assert.equal(checkBrackets(NaN), -1);
        });

        it("With '(((('", function() {
            assert.equal(checkBrackets('(((('), 4);
        });

        it("With ')'", function() {
            assert.equal(checkBrackets(')'), 1);
        });

        it("With '(()()))(()(('", function() {
            assert.equal(checkBrackets('(()()))(()(('), 2);
        });
    })

    describe("InCorrect cases", function() { //incorrect cases

        it("With NaN", function() {
            assert.equal(checkBrackets(NaN), 2);
        });

        it("With the string: '1)()(())2(()'", function() {
            assert.equal(checkBrackets('1)()(())2(()'), 0);
        });

        it("With ')'", function() {
            assert.equal(checkBrackets(')'), -1);
        });

        it("With '(()()))(()(('", function() {
            assert.equal(checkBrackets('(()()))(()(('), 5);
        });

        it("With '(((('", function() {
            assert.equal(checkBrackets('(((('), 0);
        });

        it("With '((()()()()()()()()))'", function() {
            assert.equal(checkBrackets('((()()()()()()()()))'), 2);
        });

        it("With NaN", function() {
            assert.equal(checkBrackets(NaN), 8);
        });

        it("With NaN", function() {
            assert.equal(checkBrackets(NaN), 10);
        });

        it("With NaN", function() {
            assert.equal(checkBrackets(NaN), -3);
        });

        it("With NaN", function() {
            assert.equal(checkBrackets(NaN), 7);
        });
    })
});
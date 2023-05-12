const concatOdds = require("../concatOdds");

describe('Concatenation of odd numbers take the two arrays', () => {
    it('concatenation of odds', () => {
        expect(concatOdds([3, 2, 1],
            [9, 1, 1, 1, 4, 15, -1]))
            .toEqual([-1, 1, 3, 9, 15]);
    });
});


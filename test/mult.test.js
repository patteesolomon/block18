const mult = require("../mult");


describe('properly multiplies two numbers', () => {
    it('mult in usage', () => {
        expect(mult(1,3)).toEqual(3);
        console.log(mult(1,3));
    });
});
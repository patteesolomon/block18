const l = [];

const forL = (a = []) => {
    a.forEach(e => {
        if (e % 2 != 0 && !l.includes(e)) {
            l.push(e);
        }
    });
};

const concatOdds = (a = [], b = []) =>
{
    forL(a);
    forL(b);
    l.sort((a, b) => a - b);
    return l;
};

module.exports = concatOdds;
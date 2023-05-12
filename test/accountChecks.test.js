const accData = require('../accountChecks');
/*
    account data checks
*/
// check for the name

function checkOut(acc = accData) {
    // obj data check
    for (i = 0; i < acc.length; i++) {
        if(acc[i].user == false)
        {
            delete acc[i];
        }
    }
    return acc.sort();
}

// couldn't read the values of the item quantity
function checkOutII(acc = accData)
{
    for (i = 0; i < acc.length; i++) {
        switch(acc[i].itemc)
        {
            case 0:
                acc[i] += {cart: true};
                break;
            default:
                break;
        }
    }
    console.log(acc.at(2).itemc);
    return acc.sort();
}

function checkOutIII(acc = []) {
    for (i = 0; i < acc.length; i++) {
        if(acc[i].password.length < 6)
        {   
            delete acc[i];
        }
    }
    return acc.sort();
}

// removal of account data
describe('accountData', () => { 
    it("this is the removal function", () =>{
        expect(checkOut(accData)).toEqual
        (
            [
                {user: true, itemc: 1, password: "Op$ecC7ber"},
                {user: true, itemc: 0, password: "c&lLin"}
            ]
        );
    });
});

// password work
describe('password work', () =>{
    it("password needs to be 6 chars or more. Else the user is false.", ()=>
    {
        expect(checkOutIII(accData)).toEqual(
            [
                {user: true, itemc: 1, password: "Op$ecC7ber"},
                {user: true, itemc: 0, password: "c&lLin"}
            ]
        )
    })
});

describe('accountData items', () => { 
    it("items cart ", () =>{
        expect(checkOutII(accData)).toEqual
        (
            [
                {user: true, itemc: 1, password: "Op$ecC7ber", cart: false},
                {user: true, itemc: 0, password: "c&lLin", cart: true}
            ]
        );
    });
});
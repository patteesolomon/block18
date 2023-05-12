/*
1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. 

    a. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
    
    Setup the account data
    
    b. What should happen if the cart is empty?
    What needs to be shown to the user at each step of check out?
*/ 

// user acc data boolean being true or false
// The name is the name of the user
// if false the username will be rejected as a banned user or otherwise
// items in cart are of quantity 
// passwords are saved here too but for some reason not encrypted.
// they also have cool names 
// as they should
const accounts = [
    {user: true, itemc: 1, password: "Op$ecC7ber"},
    {user: false, itemc: 0, password: "Y^iOnline9"},
    {user: true, itemc: 0, password: "c&lLin"}
];

module.exports = accounts;

var firstname = "Koding";
var secondName = "Kahawa";


// concatinating a string
var myCommunity = firstname + secondName;

console.log(myCommunity);


function nameChecker (firstname) {
    // console.log(firstname)
    if (firstname === "Koding"){
        console.log("True, the name does exit");
    } else {
        console.log("False, the name doesn't exit");
    }
    
}

nameChecker(firstname); //passing a value from a variable to a function
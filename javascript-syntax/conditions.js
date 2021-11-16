//top function 

let firstName = "koding1";
let lastName = "Kahawa1";

function myNames(firstName, lastName) {

    if ( firstName ===  "koding" && lastName === "Kahawa") {
        //do something
        console.log("The Names of the Organisation:", firstName + lastName)
    } 
    else if ( firstName === "koding" || lastName === "Kahawa") {
        //do something
        console.log("The FirstName or the Secondname of the organisation")
    }
    else {
        //this value
        console.log('Error, the name is false')
    }
}

myNames(firstName,lastName);

let amount = 8000;

function myBalance (myAccount){
    // if (myAccount >= 3000){
    //      console.log("Your can Proceed with the service",myAccount)
    // }
    // else {
    //     console.log("You have insufficient funds for this service, your balance is:",myAccount)
    // }

     return console.log( myAccount ? 3000 : "You have insufficient funds for this service" )
}

myBalance(amount);
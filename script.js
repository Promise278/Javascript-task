let adashi = [];


function addUsers(name,amount) {
    let newUser = {
        name: name,
        age: age,
        gender: gender,
        amount: amount,
    }
    adashi.push(newUser)
    console.log("users added to the adashi business", adashi);
}

addUsers("promise", '$0')
addUsers("phebe",  '$0')
addUsers("timothy", '$0')
addUsers("grace",  '$0')
addUsers("pius", '$0')
addUsers("philip", '$0')

function deleteUser() {
    let removedUser = adashi.splice(1, 1);
    console.log("user deleted from the database", removedUser)
    console.log("after removing a user from the database", adashi)
}

deleteUser(adashi)


function updateUser() {
    
}

function withdrawAmount(amount) {
    let Amountwithdraw = amount;

    console.log("amount withdrwan from the person", Amountwithdraw)
}

withdrawAmount()
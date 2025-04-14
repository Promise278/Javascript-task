let adashi = [];


function addUsers(name,age,gender,amount) {
    let newUser = {
        name: name,
        age: age,
        gender: gender,
        amount: amount,
    }
    adashi.push(newUser)
    console.log("users added to the adashi business", adashi);
}

addUsers("promise", 32, 'male', '$0')
addUsers("phebe", 22, 'female', '$0')
addUsers("timothy", 52, 'male', '$0')
addUsers("grace", 42, 'female', '$0')
addUsers("pius", 72, 'male', '$0')
addUsers("philip", 12, 'male', '$0')

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
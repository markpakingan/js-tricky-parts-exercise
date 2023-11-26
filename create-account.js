function createAccount(pin, amount = 0) {

    let currentPin = "1234";
    let currentBalance = 350;


    if (pin !== currentPin){
        return "invalid PIN!"
    }

    return{
        checkBalance: function(pin) {
            return pin === currentPin? `Your balance is $${currentBalance}` : 
            "invalid pin!"},

        deposit: function(pin, amount){
            let newBalance = currentBalance + amount;
            return `Your current balance is ${newBalance}`}, 

        withdraw: function(pin, amount){

            if (pin === currentPin){
                if(currentBalance < amount){
                    return "insufficient amount!"
                }else{
                    let newBalance = currentBalance - amount;
                    currentBalance = newBalance;
                    return `Successfully withdew new ${newBalance}`
                }
            } else {
                return "invalid PIN!"
            }
         
        },
        changePin: function(pin, newPin) {
            if(pin === currentPin){
                currentPin = newPin; 
                return ("PIN successfully changed")
            } else {
                return ("Invalid pin!")
            };
        }
    };
}

// module.exports = { createAccount };


let account = createAccount("1234", 100);


account.checkBalance("1234");
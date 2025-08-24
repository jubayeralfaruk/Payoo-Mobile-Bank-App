// bank-account | amount | user-pin-number | add-money-btn

    const userPin = 1234;
    
// // add money feature
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = document.getElementById("bank-name").value;
    
    const bankAccount = document.getElementById("bank-account").value;

    const inputAmount = parseInt(document.getElementById("amount").value);

    const addMoneyPin = parseInt(document.getElementById("add-money-pin-number").value);

    if (bankName === "Select bank") {
        alert("Select A Bank.")
        return;
    }
    if (bankAccount.length !== 11 || userPin !== addMoneyPin) {
        alert("Please, User Valid Account & Password")
        return;
    }
    if (inputAmount < 50) {
        alert("Minimum Amount $50.")
    }

    const currentAmount = parseInt(document.getElementById("current-amount").innerText);
    const newAccountAmount = currentAmount + inputAmount;

    document.getElementById("current-amount").innerText = newAccountAmount
    
    document.getElementById("user-pin-number").value = '';
    document.getElementById("amount").value = '';
    
})

// // cash out feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const agentNumber = document.getElementById("agent-number").value
    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value)
    const withdrawPinNumber = parseInt(document.getElementById("withdraw-pin-number").value)
    
    if (agentNumber.length !== 11) {
        alert("Enter 11 digit valid agent number.")
        return;
    }

    if (withdrawAmount < 5) {
        alert("Enter Valid Amount.")
        return;
    }

    if (withdrawPinNumber !== userPin) {
        alert("Invalid Pin number");
    }

    const currentAmount = parseInt(document.getElementById("current-amount").innerText);
    const newBalance = currentAmount - withdrawAmount
    if (currentAmount>=newBalance) {
        document.getElementById("current-amount").innerText = newBalance;
    }
    alert("Insufficient Balance");
})






// // Toggling feature
document.getElementById('add-money').addEventListener("click", function () {
    document.getElementById('cashOutForm').style.display = "none";
    document.getElementById('addMoneyForm').style.display = "block";
})

document.getElementById('cashout').addEventListener("click", function () {  
    document.getElementById('addMoneyForm').style.display = "none";
    document.getElementById('cashOutForm').style.display = "block";
})




// bank-account | amount | user-pin-number | add-money-btn


document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const userPin = 1234;
    const bankName = document.getElementById("bank-name").value;
    
    const bankAccount = document.getElementById("bank-account").value;

    const inputAmount = parseInt(document.getElementById("amount").value);

    const inputPin = parseInt(document.getElementById("user-pin-number").value);

    if (bankName === "Select bank") {
        alert("Select A Bank.")
        return;
    }
    if (bankAccount.length !== 11 || userPin !== inputPin) {
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


document.getElementById('add-money').addEventListener("click", function () {
    document.getElementById('cashOutForm').style.display = "none";
    document.getElementById('addMoneyForm').style.display = "block";
})

document.getElementById('cashout').addEventListener("click", function () {  
    document.getElementById('addMoneyForm').style.display = "none";
    document.getElementById('cashOutForm').style.display = "block";
})
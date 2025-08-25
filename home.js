
// Value to Covert number function
function getIdValueNumber(id) {
    const idCovertNumber = parseInt(document.getElementById(id).value);
    return idCovertNumber;
}

// value to default Function
function getIdValueDefault(id) {
    const idCovertNumber = document.getElementById(id).value;
    return idCovertNumber;
}

// innerText Function
function getIdInnerText(id) {
    const idText = parseInt(document.getElementById(id).innerText)
}

    const userPin = 1234;
    
// // add money feature-----------------------------------------------------------

document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = getIdValueDefault("bank-name")
    
    const bankAccount = getIdValueDefault("bank-account")

    const inputAmount = getIdValueNumber("amount")

    const addMoneyPin = getIdValueNumber("add-money-pin-number")

    if (bankName === "Select bank") {
        alert("Select A Bank.")
        return;
    }
    if (bankAccount.length !== 11 || userPin !== addMoneyPin) {
        alert("Please, User Valid Account & Password")
        return;
    }
    if (inputAmount < 50) {
        alert("Minimum Amount $50.");
        return;
    }

    const currentAmount = Number(document.getElementById("current-amount").innerText);
    console.log(currentAmount);
    const newAccountAmount = currentAmount + inputAmount;

    document.getElementById("current-amount").innerText = newAccountAmount
    
    document.getElementById("add-money-pin-number").value = '';
    document.getElementById("amount").value = '';

    const addTransactions = document.getElementById("addTransactions")
    addTransactions.innerHTML = `
    <div class=" bg-white mx-6 px-7 py-6 m-auto rounded-3xl">
            <h1>hi</h1>
    </div>
    `    
    
})

// // cash out feature----------------------------------------------------------------

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const agentNumber = getIdValueDefault("agent-number")
    const withdrawAmount = getIdValueNumber("withdraw-amount")
    const withdrawPinNumber = getIdValueNumber("withdraw-pin-number")
    
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

    const currentAmount = Number(document.getElementById("current-amount").innerText);
    const newBalance = currentAmount - withdrawAmount;

    document.getElementById("withdraw-pin-number").value = '';
    document.getElementById("withdraw-amount").value = '';

    if (currentAmount > 0 && currentAmount >= withdrawAmount) {
        document.getElementById("current-amount").innerText = newBalance;
        return
    }

    alert("Insufficient Balance");
    
})

// // Transfer Money feature

document.getElementById("send-now-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const accountNumber = getIdValueDefault("send-now-user-number")
    const amount = getIdValueNumber("send-now-amount")
    const pinNumber = getIdValueNumber("send-now-pin-number")
    
    if (accountNumber.length !== 11) {
        alert("Enter 11 digit valid user account.")
        return;
    }

    if (amount < 5) {
        alert("Enter Valid Amount.")
        return;
    }

    if (pinNumber !== userPin) {
        alert("Invalid Pin number");
    }

    const currentAmount = Number(document.getElementById("current-amount").innerText);
    const newBalance = currentAmount - amount
    

    document.getElementById("send-now-pin-number").value = '';
    document.getElementById("send-now-amount").value = '';

    if (currentAmount > 0 && currentAmount >= amount) {
        document.getElementById("current-amount").innerText = newBalance;
        return;
    }
    alert("Insufficient Balance");
    
})
    
// // Pay Bill feature-----------------------------------------------------------

document.getElementById("pay-now-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = getIdValueDefault("pay-now-bank-name")
    
    const bankAccount = getIdValueDefault("pay-now-account")

    const inputAmount = getIdValueNumber("pay-now-amount")

    const addMoneyPin = getIdValueNumber("pay-now-pin-number")

    if (bankName === "Select bank") {
        alert("Select A Bank.")
        return;
    }
    if (bankAccount.length !== 11 || userPin !== addMoneyPin) {
        alert("Please, User Valid Account & Password")
        return;
    }

    const currentAmount = Number(document.getElementById("current-amount").innerText);
    console.log(currentAmount);
    const newAccountAmount = currentAmount - inputAmount;
    
    document.getElementById("pay-now-pin-number").value = '';
    document.getElementById("pay-now-amount").value = '';

    if (currentAmount > 0 && currentAmount >= inputAmount) {
        document.getElementById("current-amount").innerText = newAccountAmount;
        return;
    }
    alert("Insufficient Balance");    
    
})






















//---------------------------------------------------------------------------------------------

// Toggling Function
function allTransferMute(classes) {
    const allClass = document.getElementsByClassName(classes)
    for(const item of allClass){
        item.style.display = "none"
    }
}

// Toggling Function Style
function styleChange(classes) {
    const allClass = document.getElementsByClassName(classes)
    for(const item of allClass){
        item.classList.remove('border-[#0874F2]','bg-[#F3F8FE]');
        item.classList.add('border-gray-300');

        item.children[1].classList.add('text-gray-600');
        item.children[1].classList.remove('text-[#0874F2]');
    }
}

// // Toggling feature
// add-money
document.getElementById('add-money').addEventListener("click", function () {
    allTransferMute("toggle-btn")
    document.getElementById("addMoneyForm").style.display = "block";

    styleChange("toggle-btn-style")

    document.getElementById("add-money").classList.remove('border-gray-300');
    document.getElementById("add-money").classList.add('border-[#0874F2]','bg-[#F3F8FE]');

    document.getElementById("add-money").children[1].classList.add('text-[#0874F2]');
    document.getElementById("add-money").children[1].classList.remove('text-gray-600');
    
})

// cashout
document.getElementById('cashout').addEventListener("click", function () {  
    allTransferMute("toggle-btn")
    document.getElementById("cashOutForm").style.display = "block"

    styleChange("toggle-btn-style")

    document.getElementById("cashout").classList.remove('border-gray-300');
    document.getElementById("cashout").classList.add('border-[#0874F2]','bg-[#F3F8FE]');

    document.getElementById("cashout").children[1].classList.add('text-[#0874F2]');
    document.getElementById("cashout").children[1].classList.remove('text-gray-600');
})

// transfer-money
document.getElementById('transfer-money').addEventListener("click", function () {  
    allTransferMute("toggle-btn")
    document.getElementById("transferMoneyForm").style.display = "block"

    styleChange("toggle-btn-style")

    document.getElementById("transfer-money").classList.remove('border-gray-300');
    document.getElementById("transfer-money").classList.add('border-[#0874F2]','bg-[#F3F8FE]');

    document.getElementById("transfer-money").children[1].classList.add('text-[#0874F2]');
    document.getElementById("transfer-money").children[1].classList.remove('text-gray-600');
})

// get-bonus
document.getElementById('get-bonus').addEventListener("click", function () {  
    allTransferMute("toggle-btn")
    document.getElementById("getBonusForm").style.display = "block"

    styleChange("toggle-btn-style")

    document.getElementById("get-bonus").classList.remove('border-gray-300');
    document.getElementById("get-bonus").classList.add('border-[#0874F2]','bg-[#F3F8FE]');

    document.getElementById("get-bonus").children[1].classList.add('text-[#0874F2]');
    document.getElementById("get-bonus").children[1].classList.remove('text-gray-600');
})

// pay-bill
document.getElementById('pay-bill').addEventListener("click", function () {  
    allTransferMute("toggle-btn")
    document.getElementById("payBillForm").style.display = "block"

    styleChange("toggle-btn-style")

    document.getElementById("pay-bill").classList.remove('border-gray-300');
    document.getElementById("pay-bill").classList.add('border-[#0874F2]','bg-[#F3F8FE]');

    document.getElementById("pay-bill").children[1].classList.add('text-[#0874F2]');
    document.getElementById("pay-bill").children[1].classList.remove('text-gray-600');
})

// transactions
document.getElementById('transactions').addEventListener("click", function () {  
    allTransferMute("toggle-btn")
    document.getElementById("transactionsForm").style.display = "block"

    styleChange("toggle-btn-style")

    document.getElementById("transactions").classList.remove('border-gray-300');
    document.getElementById("transactions").classList.add('border-[#0874F2]','bg-[#F3F8FE]');

    document.getElementById("transactions").children[1].classList.add('text-[#0874F2]');
    document.getElementById("transactions").children[1].classList.remove('text-gray-600');
})




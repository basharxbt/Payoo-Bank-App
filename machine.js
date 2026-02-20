function getValueFromInput(id) {

    const input = document.getElementById(id)
    const value = input.value
    return value;

}

function getbalance() {
    const balanceInput = document.getElementById('balance')
    const balance = balanceInput.innerText
    return balance;
}

function setBalance(value) {
    const balanceElement = document.getElementById('balance')
    balanceElement.innerText = value;

}

function getBankAcc() {
    const bankAcc = document.getElementById("bank-account")
    bank = bankAcc.value

    return bank;

}
function getPayAcc() {
    const payAcc = document.getElementById("paybill")
    bill = payAcc.value

    return bill;

}

function showOnly(id) {


    const addMoney = document.getElementById('addMoney')
    const cashout = document.getElementById('cashout')
    const transferMoney = document.getElementById('transfer-money')
    const transaction = document.getElementById('transaction')
    const paybill = document.getElementById('paybill')
    const bonus = document.getElementById('bonus')

    addMoney.classList.add('hidden')
    cashout.classList.add('hidden')
    transferMoney.classList.add('hidden')
    transaction.classList.add('hidden')
    paybill.classList.add('hidden')
    bonus.classList.add('hidden')


    const selected = document.getElementById(id);

    selected.classList.remove('hidden')
}


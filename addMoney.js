document.getElementById('addMoney-btn')
    .addEventListener('click', function () {

        const bank = getBankAcc()
        if (bank == 'Select Bank') {
            alert('Please Select Bank First')
        }
        console.log(bank);
        const accountNumber = getValueFromInput('bank-number')
        if (accountNumber.length !== 11) {
            alert('Invalid Bank Number')
        }
        console.log(accountNumber)
        const addAmmount = getValueFromInput('add-ammount');
        console.log(addAmmount)

        const currentBalance = getbalance()

        const newBalance = Number(addAmmount) + Number(currentBalance)

        console.log(newBalance)

        const pin = getValueFromInput('pin-input');
        if (pin == '1234') {
            alert(`Add Money ${addAmmount}BDT from ${bank} at ${new Date()} is Successful`)
            setBalance(newBalance);

            const history = document.getElementById('transaction');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
             <div class="transaction-card p-5 bg-base-200 py-5 rounded-lg">
             Add Money ${addAmmount} BDT from ${bank}, Acc no-${accountNumber} at ${new Date()} is Successful

            </div>
            `
            history.append(newHistory);
        }
        else (

            alert('Invalid pin')
        )

    })
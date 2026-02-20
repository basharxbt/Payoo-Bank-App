document.getElementById('paybill-btn')
    .addEventListener('click', function () {

        const pay = getPayAcc()
        if (pay == 'Select back') {
            alert('Please Select where to First')
        }
        console.log(pay);
        const accountNumber = getValueFromInput('biller-number')
        if (accountNumber.length !== 11) {
            alert('Invalid Bank Number')
            return;
        }
        console.log(accountNumber)
        const addAmmount = getValueFromInput('pay-ammount');
        console.log(addAmmount)

        const currentBalance = getbalance()

        const newBalance = Number(currentBalance) - Number(addAmmount)

        console.log(newBalance)

        const pin = getValueFromInput('bill-pin');
        console.log(pin)
        if (pin == '1234') {
            alert(`Add Money ${addAmmount}BDT from ${pay} at ${new Date()} is Successful`)
            setBalance(newBalance);

            const history = document.getElementById('transaction');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
             <div class="transaction-card p-5 bg-base-200 py-5 rounded-lg">
             Add Money ${addAmmount} BDT from ${pay}, Acc no-${accountNumber} at ${new Date()} is Successful

            </div>
            `
            history.append(newHistory);
        }
        else (

            alert('Invalid pin')
        )

    })
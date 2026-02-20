document.getElementById('transfer-btn')
    .addEventListener('click', function () {

        const transferNumber = getValueFromInput('transfer-number-input')
        console.log(transferNumber)
        if (transferNumber.length !== 11) {
            alert('Invalid User Account Number')
            return;
        }
        const ammount = getValueFromInput('transfer-ammount-input')
        console.log(ammount)
        // const balanceInput = document.getElementById('balance')
        // const balance = balanceInput.innerText
        const balance = getbalance()


        const newBalance = Number(balance) - Number(ammount);
        console.log(newBalance)
        if (newBalance < 0) {
            alert('Invalid Balance')
            return;
        }

        const pin = getValueFromInput('transfer-pin-input')
        if (pin == '1234') {
            alert('Transfer Successful')
            setBalance(newBalance);
        }
        else {
            alert('Invalid Pin')
        }
    })

document.getElementById('withdraw-btn')
    .addEventListener('click', function () {

        const cashoutNumber = getValueFromInput('number-input')
        console.log(cashoutNumber)
        if (cashoutNumber.length !== 11) {
            alert('Invalid Agent Number')
            return;
        }
        const ammount = getValueFromInput('ammount-input')
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

        const pin = getValueFromInput('pin-input')
        if (pin == '1234') {
            alert('Cash out Successful')
            setBalance(newBalance);
        }
        else (
            alert('invalid pin')
        )





        // const ammountInput = document.getElementById('ammount-input')
        // const ammount = ammountInput.value

        // const balanceInput = document.getElementById('balance')
        // const balance = balanceInput.innerText

        // const newBalance = Number(balance) - Number(ammount);
        // console.log(newBalance)
        // if (newBalance < 0) {
        //     alert('Invalid Balance')
        //     return;
        // }



        // const pinInput = document.getElementById('pin-input')
        // const pin = pinInput.value

        // if (pin == '1234') {
        //     alert('Cash out Successful')
        //     balanceInput.innerText = newBalance
        // }
        // else (
        //     alert('invalid pin')
        // )
    })








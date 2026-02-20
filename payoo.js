



document.getElementById("login-btn")
    .addEventListener('click', function () {
        const pinInput = document.getElementById('pin-input')
        const number = document.getElementById('number-input')
        const contactNumber = number.value
        const pin = pinInput.value
        if (contactNumber == '01647367225' && pin == '1234') {
            alert('Login successfully');
            window.location.assign("/home.html")
        }





    })
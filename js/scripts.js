var closeButton = document.getElementsByClassName('close'),
    closeAdvertise = function () {
        var advertiseElement = document.getElementById('js-advertise');
        advertiseElement.className = "hide";
    },
    formValidate = function (form) {
        var isFormValid = (form.username.value == 'test') && (form.password.value == '123456');
        if (!isFormValid) {
            alert('Username or password invalid');
        } else {
            alert('Username and password are correct');
        }
        return isFormValid;
    },
    showDetailsButtons = document.getElementsByTagName('button'),
    showDetailsClick = function (event) {
        var button = event.currentTarget;
        alert(button.title);
    };

for (var i = 0; i < showDetailsButtons.length; i++) {
    var button = showDetailsButtons[i];
    if (button.name == 'gallery') {
        button.addEventListener('click', showDetailsClick);
    }
}

closeButton && closeButton[0] && closeButton[0].addEventListener('click', closeAdvertise);
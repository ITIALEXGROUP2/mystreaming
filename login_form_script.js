var personInformationArr = [];
var counterCheck = 0;
var CharacterCheck = '';
var flag1 = 0,
    flag2 = 0,
    flag3 = 0,
    flag4 = 0;

function getPersonInformation() {
    var personInformationObj = {};
    personInformationObj.name = document.getElementById("username").value;
    personInformationObj.password = document.getElementById("password").value;
    personInformationArr.push(personInformationObj);
}

function showPassword() {
    if (document.getElementById("password").type === "password") {
        document.getElementById("password").type = "text";
    } else {
        document.getElementById("password").type = "password";
    }
}

document.getElementById("password").onfocus = function () {
    document.getElementById("message").style.display = "block";
}

document.getElementById("password").onmouseover = function () {
    document.getElementById("message").style.display = "block";
}
document.getElementById("login").onmouseover = function () {
    document.getElementById("message").style.display = "none";
}

function passwordValidation() {
    getPersonInformation();
    counterCheck = 0;
    CharacterCheck = '';
    while (counterCheck < personInformationArr[0].password.length) {
        CharacterCheck = personInformationArr[0].password.charAt(counterCheck);
        if (!isNaN(CharacterCheck)) {
            flag1++
        } else {}
        if (CharacterCheck == CharacterCheck.toUpperCase() && isNaN(CharacterCheck)) {
            flag2++;
        } else {}
        if (CharacterCheck == CharacterCheck.toLowerCase() && isNaN(CharacterCheck)) {
            flag3++;
        } else {}
        if (personInformationArr[0].password.length >= 8) {
            flag4++;
        } else {}
        counterCheck++;
    }
    if ((flag1 && flag2 && flag3 && flag4) != 0) {
        return true;
    } else if ((flag1 && flag2 && flag3 && flag4) == 0) {
        location.reload();
        return false;
    }
}

document.getElementById("password").onkeyup = function () {
    if (document.getElementById("password").value.match(/[0-9]/g)) {
        document.getElementById("number").classList.remove("invalid");
        document.getElementById("number").classList.add("valid");
    } else {
        document.getElementById("number").classList.remove("valid");
        document.getElementById("number").classList.add("invalid");
    }
    if (document.getElementById("password").value.match(/[A-Z]/g)) {
        document.getElementById("capital").classList.remove("invalid");
        document.getElementById("capital").classList.add("valid");
    } else {
        document.getElementById("capital").classList.remove("valid");
        document.getElementById("capital").classList.add("invalid");
    }
    if (document.getElementById("password").value.match(/[a-z]/g)) {
        document.getElementById("lower").classList.remove("invalid");
        document.getElementById("lower").classList.add("valid");
    } else {
        document.getElementById("lower").classList.remove("valid");
        document.getElementById("lower").classList.add("invalid");
    }
    if (document.getElementById("password").value.length >= 8) {
        document.getElementById("length").classList.remove("invalid");
        document.getElementById("length").classList.add("valid");
    } else {
        document.getElementById("length").classList.remove("valid");
        document.getElementById("length").classList.add("invalid");
    }
    counterCheck++;
}
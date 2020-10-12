// JavaScript source code
"use strict";
document.addEventListener("DOMContentLoaded", main);

function main() {
    redirection();
    inputEmail();
    fillForm();
    document.querySelector("button").addEventListener("click", saveClick);
    document.querySelector("#exit").addEventListener("click", exit);
}

function inputEmail() {
    if (location.search.indexOf("@") !== -1) {
        let email = location.search.slice(1);
        localStorage.setItem("e-mail", email);
    }
    let p = document.querySelector("p");
    p.innerHTML += localStorage.getItem("e-mail") + " " + "<span id=\"exit\">exit</span>";
}

function saveClick(event) {
    setLocalStorageData();
}

function exit(event) {
    localStorage.clear();
    redirection("exit");
}

function redirection(command = "") {
    if (localStorage.getItem("e-mail") === null && location.search.indexOf("@") === -1 || command === "exit") {
        localStorage.clear();
        location.href = "Registration.html";
    }
}

function setLocalStorageData() {
    localStorage.setItem("First Name", frm2.elements[0].value);
    localStorage.setItem("Second Name", frm2.elements[1].value);
    localStorage.setItem("Birth", frm2.elements[2].value);
    localStorage.setItem("Gender", frm2.elements[3].value);
    localStorage.setItem("Phone number", frm2.elements[4].value);
    localStorage.setItem("Skype", frm2.elements[5].value);
}

function fillForm() {
    frm2.elements[0].value = localStorage.getItem("First Name");
    frm2.elements[1].value = localStorage.getItem("Second Name");
    frm2.elements[2].value = localStorage.getItem("Birth");
    frm2.elements[3].value = localStorage.getItem("Gender");
    frm2.elements[4].value = localStorage.getItem("Phone number");
    frm2.elements[5].value = localStorage.getItem("Skype");
}

//check inputs warnings!
$('input').on('input invalid', function () {
    this.setCustomValidity('')
    if (this.validity.valueMissing) {
        this.setCustomValidity("Please press your name! ")
    }
    else if (this.validity.patternMismatch) {
        this.setCustomValidity("Only letters!");
    }
})

$('input[type="text"]').on('input invalid', function () {
    this.setCustomValidity('')
    if (this.validity.valueMissing) {
        this.setCustomValidity("Please press your second name! ")
    }
    else if (this.validity.patternMismatch) {
        this.setCustomValidity("Only letters!!");
    }
})

$('input[type="date"]').on('input invalid', function () {
    this.setCustomValidity('')
    if (this.validity.valueMissing) {
        this.setCustomValidity("Please enter your birth date! ")
    }
})

$('input[type="tel"]').on('input invalid', function () {
    this.setCustomValidity('')
    if (this.validity.patternMismatch) {
        this.setCustomValidity("possible numbers, space, parentheses, hyphen;!");
    }
})

$('#skype').on('input invalid', function () {
    this.setCustomValidity('')
    if (this.validity.patternMismatch) {
        this.setCustomValidity("letters, numbers, hyphen, point!");
    }
})
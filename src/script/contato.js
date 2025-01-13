let telefoneInput = document.getElementById("telefone");
let telefoneHelper = document.getElementById("telefone-helper");

let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

let mensageInput = document.getElementById("mensagem");
let mensageHelper = document.getElementById("mensage-helper");

// Função de validação de telefone
telefoneInput.addEventListener("change", (event) => {
    const valor = event.target.value.trim();
    const telefonePattern = /^[0-9]{10,11}$/;
    if (!valor) {
        telefoneInput.classList.remove("correct", "error");
        telefoneHelper.innerText = "Campo obrigatório";
        telefoneHelper.classList.add("visible");
    } else if (!telefonePattern.test(valor)) {
        telefoneInput.classList.remove("correct");
        telefoneInput.classList.add("error");
        telefoneHelper.innerText = "Digite um celular válido";
        telefoneHelper.classList.add("visible");
    } else {
        telefoneInput.classList.remove("error");
        telefoneHelper.classList.remove("visible");
        telefoneHelper.innerText = "";
        telefoneInput.classList.add("correct");
    }
});

// Função de validação de e-mail
emailInput.addEventListener("change", (event) => {
    const valor = event.target.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!valor) {
        emailInput.classList.remove("correct", "error");
        emailHelper.innerText = "Campo obrigatório";
        emailHelper.classList.add("visible");
    } else if (!emailPattern.test(valor)) {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Digite um e-mail válido";
        emailHelper.classList.add("visible");
    } else {
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailHelper.innerText = "";
        emailInput.classList.add("correct");
    }
});


// Função de validação de mensagem
mensageInput.addEventListener("change", (event) => {
    const valor = event.target.value.trim();
    if (!valor) {
        mensageInput.classList.remove("correct", "error");
        mensageHelper.innerText = "Campo obrigatório";
        mensageHelper.classList.add("visible");
    } else if (valor.length < 10) {
        mensageInput.classList.remove("correct");
        mensageInput.classList.add("error");
        mensageHelper.innerText = "Mínimo: 10 caracteres";
        mensageHelper.classList.add("visible");
    } else {
        mensageInput.classList.remove("error");
        mensageHelper.classList.remove("visible");
        mensageHelper.innerText = "";
        mensageInput.classList.add("correct");
    }
});

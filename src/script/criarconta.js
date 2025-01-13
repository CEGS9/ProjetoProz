// Obtendo os elementos dos campos
let form = document.getElementById('form');
let usernameInput = document.getElementById("username");
let usernameHelper = document.getElementById("username-helper");
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");
let passwordInput = document.getElementById("password");
let passwordHelper = document.getElementById("password-helper");
let passwordConfirmationInput = document.getElementById("password-confirmation");
let passwordConfirmationHelper = document.getElementById("password-confirmation-helper");

// Validação do nome de usuário
usernameInput.addEventListener("change", (event) => {
    const valor = event.target.value.trim();
    if (!valor) {
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Campo obrigatório";
        usernameHelper.classList.add("visible");
    } else if (valor.length < 5) {
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Nome deve ter pelo menos 5 caracteres";
        usernameHelper.classList.add("visible");
    } else {
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
    }
});

// Validação de email
emailInput.addEventListener("change", (event) => {
    const email = event.target.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
        emailInput.classList.add("error");
        emailHelper.innerText = "Campo obrigatório";
        emailHelper.classList.add("visible");
    } else if (!emailRegex.test(email)) {
        emailInput.classList.add("error");
        emailHelper.innerText = "Digite um email válido";
        emailHelper.classList.add("visible");
    } else {
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
    }
});

// Validação de senha
passwordInput.addEventListener("change", (event) => {
    const senha = event.target.value.trim();
    if (!senha) {
        passwordInput.classList.add("error");
        passwordHelper.innerText = "Campo obrigatório";
        passwordHelper.classList.add("visible");
    } else if (senha.length < 6) {
        passwordInput.classList.add("error");
        passwordHelper.innerText = "Senha deve ter pelo menos 6 caracteres";
        passwordHelper.classList.add("visible");
    } else {
        passwordInput.classList.remove("error");
        passwordHelper.classList.remove("visible");
    }
});

// Validação de confirmação de senha
passwordConfirmationInput.addEventListener("change", (event) => {
    const senhaConfirmada = event.target.value.trim();
    const senhaOriginal = passwordInput.value.trim();
    if (!senhaConfirmada) {
        passwordConfirmationInput.classList.add("error");
        passwordConfirmationHelper.innerText = "Campo obrigatório";
        passwordConfirmationHelper.classList.add("visible");
    } else if (senhaConfirmada !== senhaOriginal) {
        passwordConfirmationInput.classList.add("error");
        passwordConfirmationHelper.innerText = "Senhas não coincidem";
        passwordConfirmationHelper.classList.add("visible");
    } else {
        passwordConfirmationInput.classList.remove("error");
        passwordConfirmationHelper.classList.remove("visible");
    }
});

// Prevenção do envio do formulário se houver erro
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar se há erros em qualquer campo
    if (usernameHelper.classList.contains("visible") ||
        emailHelper.classList.contains("visible") ||
        passwordHelper.classList.contains("visible") ||
        passwordConfirmationHelper.classList.contains("visible")) {
        alert("Por favor, corrija os erros antes de enviar.");
    } else {
        alert("Formulário enviado com sucesso!");
        form.submit();
    }
});

// CAPTURA DE TITULO
let titulo = document.querySelector("h2");
titulo.style.color = "var(--color-6)";
titulo.style.fontSize = "1.5rem";

// CAPTURA DOS CAMPOS E ELEMENTOS DE AJUDA
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

let assuntoInput = document.getElementById("assunto");
let assuntoLabel = document.querySelector('label[for="assunto"]');
let assuntoHelper = document.getElementById("assunto-helper");

let messageTextarea = document.getElementById("message");
let messageLabel = document.querySelector('label[for="message"]');
let messageHelper = document.getElementById("message-helper");

const btnSubmit = document.querySelector('button[type="submit"]');
const successMessage = document.getElementById("successMessage");

// Objeto para armazenar o status de validação dos campos
let inputsCorretos = {
    username: false,
    email: false,
    assunto: false,
    message: false
};

// FUNÇÃO MOSTRAR/OCULTAR POPUP CAMPO OBRIGATORIO
function mostrarPopup(input, label, helper) {
    input.addEventListener("focus", function() {
        label.classList.add("required-popup");
    });
    input.addEventListener("blur", function() {
        label.classList.remove("required-popup");
    });
}

// Validação dos campos
mostrarPopup(usernameInput, usernameLabel);
mostrarPopup(emailInput, emailLabel);
mostrarPopup(assuntoInput, assuntoLabel);
mostrarPopup(messageTextarea, messageLabel);

// VALIDACAO DO USERNAME
usernameInput.addEventListener("change", function(event) {
    let valor = event.target.value;
    if (valor.length < 3) {
        usernameHelper.innerText = "O nome precisa ter pelo menos 3 letras";
        usernameInput.classList.add("error");
        usernameInput.classList.remove("correct");
        usernameHelper.classList.add("visible");
        inputsCorretos.username = false;
    } else {
        usernameInput.classList.add("correct");
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        inputsCorretos.username = true;
    }
    verificaCampos();
});

// VALIDACAO DO EMAIL
emailInput.addEventListener("change", function(event) {
    let valor = event.target.value;
    if (valor.includes("@") && valor.includes(".com")) {
        emailInput.classList.add("correct");
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        inputsCorretos.email = true;
    } else {
        emailHelper.innerText = "Por favor, insira um endereço de email válido";
        emailInput.classList.add("error");
        emailInput.classList.remove("correct");
        emailHelper.classList.add("visible");
        inputsCorretos.email = false;
    }
    verificaCampos();
});

// VALIDACAO DO ASSUNTO
assuntoInput.addEventListener("change", function(event) {
    let valor = event.target.value;
    if (valor.length < 5) {
        assuntoHelper.innerText = "O assunto precisa ter pelo menos 5 letras";
        assuntoInput.classList.add("error");
        assuntoInput.classList.remove("correct");
        assuntoHelper.classList.add("visible");
        inputsCorretos.assunto = false;
    } else {
        assuntoInput.classList.add("correct");
        assuntoInput.classList.remove("error");
        assuntoHelper.classList.remove("visible");
        inputsCorretos.assunto = true;
    }
    verificaCampos();
});

// VALIDACAO DA MENSAGEM
messageTextarea.addEventListener("change", function(event) {
    let valor = event.target.value;
    if (valor.length < 10) {
        messageHelper.innerText = "A mensagem precisa ter pelo menos 10 letras";
        messageTextarea.classList.add("error");
        messageTextarea.classList.remove("correct");
        messageHelper.classList.add("visible");
        inputsCorretos.message = false;
    } else {
        messageTextarea.classList.add("correct");
        messageTextarea.classList.remove("error");
        messageHelper.classList.remove("visible");
        inputsCorretos.message = true;
    }
    verificaCampos();
});

// Função para habilitar ou desabilitar o botão de submit
function verificaCampos() {
    const allValid = Object.values(inputsCorretos).every(value => value === true);
    btnSubmit.disabled = !allValid;
}

// Inicialmente, desativa o botão de submit
btnSubmit.disabled = true;

// Função para remover as classes de validação dos campos
function resetInputStyles() {
    usernameInput.classList.remove("correct", "error");
    emailInput.classList.remove("correct", "error");
    assuntoInput.classList.remove("correct", "error");
    messageTextarea.classList.remove("correct", "error");
}

// Evento para exibir a mensagem de sucesso e resetar o formulário
btnSubmit.addEventListener("click", function(event) {
    event.preventDefault();  // Impede o envio real do formulário
    
    // Oculta o formulário e exibe a mensagem de sucesso
    document.getElementById("contactForm").style.display = "none";
    successMessage.style.display = "block"; 

    setTimeout(() => {
        // Esconde a mensagem de sucesso e exibe o formulário novamente
        successMessage.style.display = "none";
        document.getElementById("contactForm").style.display = "flex"; // Retorna o display do formulário
        
        // Reseta o formulário e o status dos inputs
        document.getElementById("contactForm").reset();
        resetInputStyles();
        inputsCorretos = {
            username: false,
            email: false,
            assunto: false,
            message: false
        };
        btnSubmit.disabled = true; // Desativa o botão de submit novamente

    }, 5000); // Esconde a mensagem e reaparece o formulário após 5 segundos
});

function fecharPagina() {
    window.close();
}
// -------------------- Validação no Envio do Formulário -------------------- //

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const msgErrorNome = document.getElementById("msgErrorName");
    const msgErrorEmpresa = document.getElementById("msgErrorEmpresa");
    const msgErrorEndereco = document.getElementById("msgErrorEndereco");
    const msgErrorTelefone = document.getElementById("msgErrorTelefone");

    const nomeValido = validacaoNomeEmpresaEndereco(nome, msgErrorNome);
    const empresaValida = validacaoNomeEmpresaEndereco(empresa, msgErrorEmpresa);
    const enderecoValido = validacaoNomeEmpresaEndereco(endereco, msgErrorEndereco);
    const telefoneValido = validacaoTelefone(telefone, msgErrorTelefone);
    const emailValido = validacaoEmail(email, msgAjudaEmail);

    if (!nomeValido || !empresaValida || !enderecoValido || !telefoneValido || !emailValido) {
        e.preventDefault();
        alert("Preencha todos os campos corretamente antes de enviar o formulário!");
    } else {
        alert("Formulário enviado com sucesso!");
    }
});

// -------------------- Funções de Estilo para Erro e Sucesso -------------------- //

function aplicarErro(p, input, mensagem) {
    p.classList.remove("hidden");
    p.innerText = mensagem;
    p.classList.add("errorText");
    input.classList.remove("inputSuccess");
    input.classList.add("inputError");
}

function aplicarSucesso(p, input) {
    p.classList.add("hidden");
    p.classList.remove("errorText");
    input.classList.add("inputSuccess");
    input.classList.remove("inputError");
}

// -------------------- VALIDAÇÃO DOS CAMPOS: NOME, EMPRESA E ENDEREÇO -------------------- //

let nome = document.getElementById("nome");
let empresa = document.getElementById("empresa");
let endereco = document.getElementById("endereco");

function validacaoNomeEmpresaEndereco(input, p) {
    if (input.value.length <= 3) {
        aplicarErro(p, input, "Este campo deve conter mais do que três caracteres.");
        return false;
    } else {
        aplicarSucesso(p, input);
        return true;
    }
}

nome.addEventListener("input", () => {
    let msgError = document.getElementById("msgErrorName");
    validacaoNomeEmpresaEndereco(nome, msgError);
});

empresa.addEventListener("input", () => {
    let msgAjudaEmpresa = document.getElementById("msgErrorEmpresa");
    validacaoNomeEmpresaEndereco(empresa, msgAjudaEmpresa);
});

endereco.addEventListener("input", () => {
    let msgAjudaEndereco = document.getElementById("msgErrorEndereco");
    validacaoNomeEmpresaEndereco(endereco, msgAjudaEndereco);
});

// -------------------- VALIDAÇÃO DO CAMPO TELEFONE -------------------- //

let telefone = document.getElementById("telefone");

function validacaoTelefone(input, p) {
    const isValid = input.value.replace(/\D/g, "").length >= 10;
    if (!isValid) {
        aplicarErro(p, input, "Este campo deve conter ao menos dez dígitos.");
        return false;
    } else {
        aplicarSucesso(p, input);
        return true;
    }
}

telefone.addEventListener("input", (e) => {
    let input = e.target.value.replace(/\D/g, '');

    if (input.length > 2 && input.length <= 6) {
        input = `(${input.slice(0, 2)}) ${input.slice(2)}`;
    } else if (input.length > 6 && input.length <= 10) {
        input = `(${input.slice(0, 2)}) ${input.slice(2, 6)}-${input.slice(6)}`;
    } else if (input.length > 10) {
        input = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7, 11)}`;
    }

    e.target.value = input;

    let msgAjudaTelefone = document.getElementById("msgErrorTelefone");
    validacaoTelefone(telefone, msgAjudaTelefone);
});

// -------------------- VALIDAÇÃO DO CAMPO EMAIL -------------------- //

let email = document.getElementById("email");
let msgAjudaEmail = document.getElementById("msgErrorEmail");

function validacaoEmail(input, p) {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    const isValid = regex.test(input.value);
    if (!isValid) {
        aplicarErro(p, input, "Este campo deve conter um @ e um ponto!");
        return false;
    } else {
        aplicarSucesso(p, input);
        return true;
    }
}

email.addEventListener("input", () => {
    validacaoEmail(email, msgAjudaEmail);
});
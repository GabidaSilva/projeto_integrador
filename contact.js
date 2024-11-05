let titulo = document.querySelector("h2")
console.log(titulo)

titulo.style.color = "#3F77BF"
titulo.style.fontSize = "1.5rem"


document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Impede o envio do formulário
    event.preventDefault();

    // Seleciona os campos do formulário
    const nome = document.querySelector('input[name="nome"]');
    const email = document.querySelector('input[name="email"]');
    const assunto = document.querySelector('input[name="assunto"]');
    const mensagem = document.querySelector('textarea[name="mensagem"]');
    const successMessage = document.getElementById('successMessage');

    // Expressão regular para validar o e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se os campos estão preenchidos
    if (nome.value.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        nome.focus();
        return false;
    }

    if (email.value.trim() === '') {
        email.setCustomValidity('Por favor, preencha o campo email.');
        email.reportValidity();
        email.focus();
        return false;
    } else if (!emailRegex.test(email.value)) {
        email.setCustomValidity('Por favor, insira um endereço de email válido.');
        email.reportValidity();
        email.focus();
        return false;
        } else {
        email.setCustomValidity(''); // Reseta a mensagem de erro personalizada
    }

    if (assunto.value.trim() === '') {
        alert('Por favor, preencha o campo Assunto.');
        assunto.focus();
        return false;
    }

    if (mensagem.value.trim() === '') {
        alert('Por favor, preencha o campo Mensagem.');
        mensagem.focus();
        return false;
    }

    // Se todos os campos estiverem preenchidos, exibe a mensagem de sucesso
    successMessage.style.display = 'block';

    //Limpa os campos do formulário
    nome.value = '';
    email.value = '';
    assunto.value = '';
    mensagem.value = '';
});
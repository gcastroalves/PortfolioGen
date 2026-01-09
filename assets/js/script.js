// Expressão regular usada para validar o formato do e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Adiciona um evento que será disparado quando o formulário for enviado
let formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', function (event) {

     // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    const campoNome = document.querySelector('#name');     //Seleciona o campo de nome no HTML
    const errNome = document.querySelector('#errNome'); // Seleciona o elemento onde será exibida a mensagem de erro do nome

    // Verifica se o nome digitado tem menos de 3 caracteres
    if (campoNome.value.length < 3) {
        errNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
        campoNome.focus();   // Coloca o cursor novamente no campo nome
        return;   // Interrompe a execução do código se a validação falhar
    } else {  
        errNome.innerHTML = ''; // Limpa a mensagem de erro se a validação for bem-sucedida
    }

    // Validação do campo E-mail
    const campoEmail = document.querySelector('#email'); //Seleciona o campo de e-mail
    const errEmail = document.querySelector('#errEmail'); // elemento de erro do e-mail

    // Verifica se o valor do e-mail NÃO corresponde ao regex
    if (!campoEmail.value.match(emailRegex)) {
        errEmail.innerHTML = 'Digite um E-mail válido.';
        campoEmail.focus();
        return;
    } else {
        errEmail.innerHTML = '';
    }

    // Validação do campo Assunto
    const campoSubject = document.querySelector('#subject');
    const errSubject = document.querySelector('#errSubject');

    if (campoSubject.value.length < 5) {
        errSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
        campoSubject.focus();
        return;
    } else {
        errSubject.innerHTML = '';
    }
  
    // Se todas as validações forem bem-sucedidas, exibe uma mensagem de sucesso
    const campoMessage = document.querySelector('#message');

    window.alert("Formulário Enviado com Sucesso!");

    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMessage.value = '';

});
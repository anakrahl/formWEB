function formulario(event) {
    event.preventDefault();
    var nomeForm = document.getElementById('nome').value;
    var emailForm = document.getElementById('email').value;
    var senhaForm = document.getElementById('senha').value;

    var regexSimb = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexSimb.test(emailForm)) {
        alert('Informe um e-mail válido')
        return false;
    }

    if (senhaForm.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres');
        return false;
    }

    if (nomeForm != '' || emailForm != '' || senhaForm != '') {
        var mensagem = alert(`Formulário enviado!\nNome: ${nomeForm}\nEmail: ${emailForm}\nSenha: ${senhaForm}`);
    }
    return true;
}
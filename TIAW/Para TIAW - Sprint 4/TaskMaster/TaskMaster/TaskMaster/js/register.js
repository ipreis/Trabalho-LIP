var usuariosLS = {};
var usuariosExistentes = localStorage.getItem('usuariosLS');
var contaAtual = {};


onload = () => {
    if (contaAtual.fundoAtual=='branco')
        document.body.style.backgroundColor = '';
    else if (contaAtual.fundoAtual=='vermelho')
        document.body.style.backgroundColor = 'red';
    else if (contaAtual.fundoAtual=='azul')
        document.body.style.backgroundColor = 'blue';
    else if (contaAtual.fundoAtual=='verde')
        document.body.style.backgroundColor = 'green';
    else if (contaAtual.fundoAtual=='amarelo')
        document.body.style.backgroundColor = 'yellow';
    
    if (contaAtual.fonteAtual=='preta')
        document.body.style.color = '';
    else if (contaAtual.fonteAtual=='vermelha')
        document.body.style.color = 'red';
    else if (contaAtual.fonteAtual=='azul')
        document.body.style.color = 'blue';
    else if (contaAtual.fonteAtual=='verde')
        document.body.style.color = 'green';
    else if (contaAtual.fonteAtual=='amarela')
        document.body.style.color = 'yellow';

    if (contaAtual.fonteFAtual=='default')
        document.body.style.fontFamily = '';
    else if (contaAtual.fonteFAtual=='arial')
        document.body.style.fontFamily = 'Arial';
    else if (contaAtual.fonteFAtual=='times')
        document.body.style.fontFamily = 'Times';
    else if (contaAtual.fonteFAtual=='impact')
        document.body.style.fontFamily = 'impact';
}

//--criar conta--//
const novoUsuario = document.querySelector('#username-reg'),
      novoNome = document.querySelector('#name-reg'),
      novoEmail = document.querySelector('#email-reg'),
      novaSenha = document.querySelector('#password-reg'),
      novaSenha2 = document.querySelector('#password2-reg'),
      criarContaBtn = document.querySelector('#enviar');
      
    
criarContaBtn.addEventListener('click', event => {
    event.preventDefault();
    
    for(let i = 0; i < usuariosLS.usuarios.length; i++){
        if(novoUsuario.value == usuariosLS.usuarios[i].user){
            alert('Email já está em uso!!');
            return;
        }
    }
    
    if(novaSenha.value != novaSenha2.value){
        alert('Confirmação de senha inválida!!');
        return;
    }

    let coordenada = usuariosLS.usuarios.length;
    let empty = [];

    var novaConta = {
        'user': novoUsuario.value,
        'name': novoNome.value,
        'email': novoEmail.value,
        'pwd': novaSenha.value,
        'coordenada': coordenada,
        'taskpoints': 0,
        'recompensas': objRecompensas.recompensas,
        'fundoAtual': 'branco',
        'fonteAtual': 'preta',
        'fonteFAtual': 'default',
        'tarefas': empty,
        'eventos': empty
    }
    usuariosLS.usuarios.push(novaConta);
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));

    sessionStorage.setItem('contaAtual', JSON.stringify(novaConta));
    location.href = '../pages/perfil.html';
});


function iniciar(){
    sessionStorage.clear();
    if(!usuariosExistentes){ 
        usuariosLS = contaPrincipal;
        localStorage.setItem('usuariosLS', JSON.stringify(contaPrincipal));
    }else{
        usuariosLS = JSON.parse(usuariosExistentes);

        if(!usuariosLS.usuarios[0].recompensas){
            localStorage.clear();
            localStorage.setItem('usuariosLS', JSON.stringify(contaPrincipal));
        }
    }
}


iniciar();
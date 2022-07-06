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


//--Login--//
const usuario = document.querySelector('#username'),
      senha = document.querySelector('#password'),
      login = document.querySelector('#enviar');


login.addEventListener('click', event => {
    event.preventDefault();

    for(let i = 0; i < usuariosLS.usuarios.length; i++){
        if(usuario.value == usuariosLS.usuarios[i].user && senha.value == usuariosLS.usuarios[i].pwd){
            contaAtual.user = usuariosLS.usuarios[i].user;
            contaAtual.email = usuariosLS.usuarios[i].email;
            contaAtual.name = usuariosLS.usuarios[i].name;
            contaAtual.pwd = usuariosLS.usuarios[i].pwd;
            contaAtual.coordenada = i;
            contaAtual.taskpoints = usuariosLS.usuarios[i].taskpoints;
            contaAtual.fundoAtual = usuariosLS.usuarios[i].fundoAtual;
            contaAtual.fonteAtual = usuariosLS.usuarios[i].fonteAtual;
            contaAtual.fonteFAtual = usuariosLS.usuarios[i].fonteFAtual;
            contaAtual.recompensas = usuariosLS.usuarios[i].recompensas;
            contaAtual.tarefas = usuariosLS.usuarios[i].tarefas;
            contaAtual.eventos = usuariosLS.usuarios[i].eventos;
            sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
            location.href='../pages/perfil.html';
            //alert ('login funciona');
            return;
        }
    }
    alert ('Usuário e/ou senha inválidos!');
});


iniciar();
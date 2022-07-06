var contaAtual = JSON.parse(sessionStorage.getItem('contaAtual'));

onload = () => {
    if(contaAtual){
        document.getElementById('primeiraLinha').innerHTML = `
            <div class="col-5 col-sm-4 col-md-5">
            <p><a href="index.html">TaskMaster <i class="fa-solid fa-pen-to-square" id="taskMaster"></i></a></p>
            </div>
            <div class="col-7 col-sm-8 col-md-7">
            <p id="login"><a href="perfil.html"><i class="fa-solid fa-user" id="userIcon"></i> ${contaAtual.name}</a></p>
            </div>
        `
    }

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
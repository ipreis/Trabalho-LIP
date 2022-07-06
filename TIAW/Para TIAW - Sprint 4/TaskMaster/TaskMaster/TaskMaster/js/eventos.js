var contaAtual = JSON.parse(sessionStorage.getItem('contaAtual'));
var usuariosLS = JSON.parse(localStorage.getItem('usuariosLS'));

// Função principal: ao carregar a página
window.onload = () => {
    if(!contaAtual){
        location.href = '../pages/login.html';
        return;
    }

    document.getElementById('primeiraLinha').innerHTML = `
        <div class="col-5 col-sm-4 col-md-5">
            <p><a href="index.html">TaskMaster <i class="fa-solid fa-pen-to-square" id="taskMaster"></i></a></p>
        </div>
        <div class="col-7 col-sm-8 col-md-7">
            <p id="login"><a href="perfil.html"><i class="fa-solid fa-user" id="userIcon"></i> ${contaAtual.name}</a></p>
        </div>
        `

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
    
    // Lê os dados do localStorage
    objEventos = leDados();
    
    // Imprime na tela eventos armazenados
    imprimeTela();

    // Aciona quando formulário de cadastro é enviado
    formCadastro.onsubmit = () => {
        // Cria novo evento c/dados enviados
        let novoEvento = {
            "nome": nome.value,
            "categoria": categoria.value,
            "descricao": descricao.value,
            "dia": dia.value,
            "horarioIn": horarioIn.value,
            "horarioTe": horarioTe.value,
            "frequencia": frequencia.value,
            "local": local.value
        };
        
        // Adiciona novoEvento ao objeto JSON e salva dados no localStorage
        contaAtual.eventos.push(novoEvento);
        sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
        usuariosLS.usuarios[contaAtual.coordenada] = contaAtual;
        localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
        
        // Imprime na tela eventos armazenados
        imprimeTela();
    }
    
    // Executa função cliqueEvento quando um dos eventos é clicado
    let listaEventos = document.querySelectorAll('div.evento');
    listaEventos.forEach((evento) => cliqueEvento(evento)); 
}

function leDados(){
    // Armazena dados no objeto
    if(contaAtual){
        objDados = contaAtual.eventos;
    }else{
        objDados = objEventos;
    }

    return objDados;
}

function imprimeTela(){
    // Referencia a div onde os eventos serão impressos
    let tela = document.getElementById('telaEventos');
    let strHtml = '';

    // Preenche a div com os eventos armazenados no objEventos
    for(i = 0; i < contaAtual.eventos.length; i++){
        strHtml += `
                    <div class="col-3 evento" id="${i}">
                        <h5 class="nome">${contaAtual.eventos[i].nome}</h5>
                        <p class="categoria">${contaAtual.eventos[i].categoria}</p>
                        <p class="descricao"><i>${contaAtual.eventos[i].descricao}</i></p>
                        <ul>
                            <li class="dia">${contaAtual.eventos[i].dia}</li>
                            <li class="horario">De ${contaAtual.eventos[i].horarioIn} às ${contaAtual.eventos[i].horarioTe}</li>
                            <li class="frequencia">${contaAtual.eventos[i].frequencia}</li>
                            <li class="local">${contaAtual.eventos[i].local}</li>
                        </ul>
                    </div>
                    `;
    }

    tela.innerHTML = strHtml;

    // Imprime qtd de pontos 
    qtdPontos.innerText = `${contaAtual.taskpoints}`;
}

// Variáveis que serão utilizadas na próxima função
var divEvento = [];
var id = [];

function cliqueEvento(evento) {
    // Evento é clicado
    evento.onclick = () => {

        if(id.indexOf(evento.id) == -1){
            id.push(evento.id);
            divEvento.push(document.getElementById(evento.id));
        }

        // Aplicando o estilo de borda no último elemento do array (último clicado)
        divEvento[divEvento.length-1].style.borderStyle = "solid";

        // Utilizando função setAttribute() para adicionar atributos ao botão
        if(id.length == 1){
            document.getElementById('btnAlterar').setAttribute('data-bs-toggle', 'modal');
            document.getElementById('btnAlterar').setAttribute('data-bs-target', '#modal');
        } else{
            document.getElementById('btnAlterar').removeAttribute('data-bs-toggle');
            document.getElementById('btnAlterar').removeAttribute('data-bs-target');
        }
        
        let botaoExcluir = document.getElementById('btnExcluir');
        let botaoAlterar = document.getElementById('btnAlterar');
        let botaoConcluir = document.getElementById('btnConcluir');

        // Botão Excluir clicado
        botaoExcluir.onclick = () => {
            // Removendo todos os eventos que estão selecionados
            while(id.length > 0) {
                contaAtual.eventos = arrayRemove(contaAtual.eventos, contaAtual.eventos[id[id.length-1]]);
                id.splice(id.length-1, 1);
            }

            // Utilizando função removeAttribute() para remover atributos do botão, impedindo que ele seja utilizado após excluir o elemento.
            document.getElementById('btnAlterar').removeAttribute('data-bs-toggle');
            document.getElementById('btnAlterar').removeAttribute('data-bs-target');

            // Salva no localStorage e imprime na tela
            sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
            usuariosLS.usuarios[contaAtual.coordenada] = contaAtual;
            localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
            imprimeTela();

            // Recarregar a página após excluir qualquer evento
            location.reload();
        }

        // Botão Alterar clicado
        botaoAlterar.onclick = () => {
            if(id.length == 1){
                let antigoEvento = contaAtual.eventos[id[0]];

                // Condição para verificar se o elemento existe no objEventos.
                if(antigoEvento){
                    labelCadastrar.innerText = "Alterar";
                    tituloModal.innerText = "Alterar evento";

                    // Mostra os campos do formulário com as atuais informações do evento
                    formCadastro.nome.value = antigoEvento.nome;
                    formCadastro.categoria.value = antigoEvento.categoria;
                    formCadastro.descricao.value = antigoEvento.descricao;
                    formCadastro.dia.value = antigoEvento.dia; 
                    formCadastro.horarioIn.value = antigoEvento.horarioIn;
                    formCadastro.horarioTe.value = antigoEvento.horarioTe;
                    formCadastro.frequencia.value = antigoEvento.frequencia;
                    formCadastro.local.value = antigoEvento.local;

                    // Formulário enviado
                    formCadastro.onsubmit = () => {
                        // Cria novo evento c/dados enviados
                        let novoEvento = {
                            "nome": nome.value,
                            "categoria": categoria.value,
                            "descricao": descricao.value,
                            "dia": dia.value,
                            "horarioIn": horarioIn.value,
                            "horarioTe": horarioTe.value,
                            "frequencia": frequencia.value,
                            "local": local.value
                        };

                        // Substitui as antigas informações do evento pelas novas
                        antigoEvento.nome = novoEvento.nome;
                        antigoEvento.categoria = novoEvento.categoria;
                        antigoEvento.descricao = novoEvento.descricao;
                        antigoEvento.dia = novoEvento.dia; 
                        antigoEvento.horarioIn = novoEvento.horarioIn;
                        antigoEvento.horarioTe = novoEvento.horarioTe;
                        antigoEvento.frequencia = novoEvento.frequencia;
                        antigoEvento.local = novoEvento.local;

                        // Salva no localStorage e imprime na tela
                        sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
                        usuariosLS.usuarios[contaAtual.coordenada] = contaAtual;
                        localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
                        imprimeTela();
                    }
                }
            }
        }

        // Botão Concluir clicado
        botaoConcluir.onclick = () => {
            // Removendo todos os eventos que estão selecionados
            while(id.length > 0) {
                contaAtual.eventos = arrayRemove(contaAtual.eventos, contaAtual.eventos[id[id.length-1]]);
                id.splice(id.length-1, 1);

                // Soma pontos para as atividades concluídas
                contaAtual.taskpoints += 10;
            }

            // Salva pontos no localStorage
            sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
            usuariosLS.usuarios[contaAtual.coordenada] = contaAtual;

            // Utilizando função removeAttribute() para remover atributos do botão, impedindo que ele seja utilizado após excluir o elemento.
            document.getElementById('btnAlterar').removeAttribute('data-bs-toggle');
            document.getElementById('btnAlterar').removeAttribute('data-bs-target');

            // Salva no localStorage e imprime na tela
            localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
            imprimeTela();

            // Recarregar a página após excluir qualquer evento
            location.reload();
        }
    }

    // Clique-duplo em um evento
    evento.ondblclick = () => {
        let index = id.indexOf(evento.id);

        // Aplicando o estilo de borda no elemento que recebeu a interação
        divEvento[index].style.borderStyle = "none";
        id.splice(index, 1);
        divEvento.splice(index, 1);

        if (id.length == 1) {
            document.getElementById('btnAlterar').setAttribute('data-bs-toggle', 'modal');
            document.getElementById('btnAlterar').setAttribute('data-bs-target', '#modal');
        }
    }
}

function arrayRemove(array, value) {
    
    return array.filter(function(geeks){
        return geeks != value;
    });
}
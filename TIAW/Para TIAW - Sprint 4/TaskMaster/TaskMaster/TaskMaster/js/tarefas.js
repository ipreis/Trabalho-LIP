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
    objTarefas = leDados();
    
    // Imprime na tela tarefas armazenadas
    imprimeTela();

    // Aciona quando formulário de cadastro é enviado
    formCadastro.onsubmit = () => {
        // Cria nova tarefa c/dados enviados
        let novaTarefa = {
            "nome": nome.value,
            "categoria": categoria.value,
            "descricao": descricao.value,
            "data": data.value,
            "horario": horario.value,
            "prioridade": prioridade.value,
            "local": local.value
        };
        
        // Adiciona novaTarefa ao objeto JSON e salva dados no localStorage
        contaAtual.tarefas.push(novaTarefa);
        sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
        usuariosLS.usuarios[contaAtual.coordenada] = contaAtual;
        localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
        
        // Imprime na tela tarefas armazenadas
        imprimeTela();
    }
    
    // Executa função cliqueTarefa quando uma das tarefas é clicada
    let listaTarefas = document.querySelectorAll('div.tarefa');
    listaTarefas.forEach((tarefa) => cliqueTarefa(tarefa)); 
}

function leDados(){
    // Armazena dados no objeto
    if(contaAtual){
        objDados = contaAtual.tarefas;
    }else{
        objDados = objTarefas;
    }

    return objDados;
}

function imprimeTela(){
    // Referencia a div onde os tarefas serão impressos
    let tela = document.getElementById('telaTarefas');
    let strHtml = '';

    // Preenche a div com as tarefas armazenadas no objTarefas
    for(i = 0; i < contaAtual.tarefas.length; i++){
        strHtml += `
                    <div class="col-3 tarefa" id="${i}">
                        <h5 class="nome">${contaAtual.tarefas[i].nome}</h5>
                        <p class="categoria">${contaAtual.tarefas[i].categoria}</p>
                        <p class="descricao"><i>${contaAtual.tarefas[i].descricao}</i></p>
                        <ul>
                            <li class="data">${contaAtual.tarefas[i].data}</li>
                            <li class="horario">${contaAtual.tarefas[i].horario}</li>
                            <li class="prioridade">${contaAtual.tarefas[i].prioridade}</li>
                            <li class="local">${contaAtual.tarefas[i].local}</li>
                        </ul>
                    </div>
                    `;
    }

    tela.innerHTML = strHtml;

    // Imprime qtd de pontos 
    qtdPontos.innerText = `${contaAtual.taskpoints}`;
}

// Variáveis que serão utilizadas na próxima função
var divTarefa = [];
var id = [];

function cliqueTarefa(tarefa) {
    // Tarefa é clicada
    tarefa.onclick = () => {

        if(id.indexOf(tarefa.id) == -1){
            id.push(tarefa.id);
            divTarefa.push(document.getElementById(tarefa.id));
        }

        // Aplicando o estilo de borda no último elemento do array (último clicado)
        divTarefa[divTarefa.length-1].style.borderStyle = "solid";

        // Utilizando função setAttribute() para adicionar atributos ao botão
        if(id.length == 1){
            document.getElementById('btnAlterar').setAttribute('data-bs-toggle', 'modal');
            document.getElementById('btnAlterar').setAttribute('data-bs-target', '#modal');
        }else{
            document.getElementById('btnAlterar').removeAttribute('data-bs-toggle');
            document.getElementById('btnAlterar').removeAttribute('data-bs-target');
        }
        
        let botaoExcluir = document.getElementById('btnExcluir');
        let botaoAlterar = document.getElementById('btnAlterar');
        let botaoConcluir = document.getElementById('btnConcluir');

        // Botão Excluir clicado
        botaoExcluir.onclick = () => {
            // Removendo todas as tarefas que estão selecionados
            while(id.length > 0) {
                contaAtual.tarefas = arrayRemove(contaAtual.tarefas, contaAtual.tarefas[id[id.length-1]]);
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

            // Recarregar a página após excluir qualquer tarefa
            location.reload();
        }

        // Botão Alterar clicado
        botaoAlterar.onclick = () => {
            if(id.length == 1){
                let antigaTarefa = contaAtual.tarefas[id[0]];

                // Condição para verificar se o elemento existe no objTarefas.
                if(antigaTarefa){
                    labelCadastrar.innerText = "Alterar";
                    tituloModal.innerText = "Alterar tarefa";

                    // Mostra os campos do formulário com as atuais informações da tarefa
                    formCadastro.nome.value = antigaTarefa.nome;
                    formCadastro.categoria.value = antigaTarefa.categoria;
                    formCadastro.descricao.value = antigaTarefa.descricao;
                    formCadastro.data.value = antigaTarefa.data; 
                    formCadastro.horario.value = antigaTarefa.horario;
                    formCadastro.prioridade.value = antigaTarefa.prioridade;
                    formCadastro.local.value = antigaTarefa.local;

                    // Formulário enviado
                    formCadastro.onsubmit = () => {
                        // Cria nova tarefa c/dados enviados
                        let novaTarefa = {
                            "nome": nome.value,
                            "categoria": categoria.value,
                            "descricao": descricao.value,
                            "data": data.value,
                            "horario": horario.value,
                            "prioridade": prioridade.value,
                            "local": local.value
                        };

                        // Substitui as antigas informações da tarefa pelas novas
                        antigaTarefa.nome = novaTarefa.nome;
                        antigaTarefa.categoria = novaTarefa.categoria;
                        antigaTarefa.descricao = novaTarefa.descricao;
                        antigaTarefa.data = novaTarefa.data; 
                        antigaTarefa.horario = novaTarefa.horario;
                        antigaTarefa.prioridade = novaTarefa.prioridade;
                        antigaTarefa.local = novaTarefa.local;

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
            // Removendo todas as tarefas que estão selecionados
            while(id.length > 0) {
                contaAtual.tarefas = arrayRemove(contaAtual.tarefas, contaAtual.tarefas[id[id.length-1]]);
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

            // Recarregar a página após excluir qualquer tarefa
            location.reload();
        }
    }

    // Clique-duplo em uma tarefa
    tarefa.ondblclick = () => {
        let index = id.indexOf(tarefa.id);

        // Aplicando o estilo de borda no elemento que recebeu a interação
        divTarefa[index].style.borderStyle = "none";
        id.splice(index, 1);
        divTarefa.splice(index, 1);

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
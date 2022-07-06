let objTarefas = {
    "tarefas": [
        {
            "nome": "TIAW - Sprint 3",
            "categoria": "Entrega de trabalho",
            "descricao": "Entrega da Sprint 3 da matéria de TIAW",
            "data": "2022-06-12",
            "horario": "23:59",
            "prioridade": "Alta",
            "local": "Canvas"
        },
        {
            "nome": "Tarefa 12 - Cálculo I",
            "categoria": "Entrega de trabalho",
            "descricao": "Entrega do questionário 12 da matéria de Cálculo I",
            "data": "2022-06-11",
            "horario": "23:59",
            "prioridade": "Baixa",
            "local": "Canvas"
        },
        {
            "nome": "Comprar presente para namorada",
            "categoria": "Data comemorativa",
            "descricao": "Ir ao shopping comprar o vestido para namorada",
            "data": "2022-06-11",
            "horario": "20:00",
            "prioridade": "Alta",
            "local": "BH Shopping"
        },
        {
            "nome": "Tarefa inglês - Cursinho",
            "categoria": "Extracurricular",
            "descricao": "Tarefa de inglês para entregar na aula",
            "data": "2022-07-05",
            "horario": "23:59",
            "prioridade": "Baixa",
            "local": "Cursinho de inglês (online)"
        },
        {
            "nome": "AEDs I - ED12",
            "categoria": "Entrega de trabalho",
            "descricao": "Entrega do ED12 da matéria AEDs I",
            "data": "2022-06-12",
            "horario": "23:59",
            "prioridade": "Alta",
            "local": "Canvas"
        },
        {
            "nome": "Arrumar casa",
            "categoria": "Casa",
            "descricao": "Ao chegar em casa, arrumá-la",
            "data": "2022-06-14",
            "horario": "17:00",
            "prioridade": "Média",
            "local": "Casa"
        }
    ]
};


let objEventos = {
    "eventos": [
        {
            "nome": "TIAW",
            "categoria": "Universidade",
            "descricao": "Aula de Trabalho Interdisciplinar: Aplicações Web, matéria da Ciência da Computação na PUC",
            "dia": "Segunda, Quarta",
            "horarioIn": "10:40",
            "horarioTe": "12:20",
            "frequencia": "Semanal",
            "local": "PUC Coreu"
        },
        {
            "nome": "Basquete",
            "categoria": "Extracurricular",
            "descricao": "Treino de basquete no Complexo Esportivo",
            "dia": "Quarta, Sábado",
            "horarioIn": "18:30",
            "horarioTe": "20:00",
            "frequencia": "Semanal",
            "local": "Complexo Esportivo da PUC Coreu"
        },
        {
            "nome": "Inglês",
            "categoria": "Extracurricular",
            "descricao": "Aula do cursinho de língua inglesa",
            "dia": "Terça, Quinta",
            "horarioIn": "14:00",
            "horarioTe": "16:00",
            "frequencia": "Quinzenal",
            "local": "Escola de Inglês"
        },
        {
            "nome": "Aula inaugural ICEI/ICEG",
            "categoria": "Universidade",
            "descricao": "A transformação digital no modelo de negócio das organizações",
            "dia": "26/04/22",
            "horarioIn": "19:00",
            "horarioTe": "21:00",
            "frequencia": "Não se repete",
            "local": "PUC Coreu"
        },
        {
            "nome": "Meu aniversário",
            "categoria": "Aniversários",
            "descricao": "Completo X anos",
            "dia": "19/09",
            "horarioIn": "00:00",
            "horarioTe": "23:59",
            "frequencia": "Anual",
            "local": "Indefinido"
        },
        {
            "nome": "Visitar minha avó",
            "categoria": "Lazer",
            "descricao": "Passar a tarde na casa da minha avó",
            "dia": "Sábado ou Domingo",
            "horarioIn": "15:00",
            "horarioTe": "17:00",
            "frequencia": "Mensal",
            "local": "Casa da minha avó"
        }
    ]
};


let objRecompensas = {
    'recompensas': [{
        'fundoVermelho': false,
        'fundoAzul': false,
        'fundoVerde': false,
        'fundoAmarelo': false,
        'fonteVermelha': false,
        'fonteAzul': false,
        'fonteVerde': false,
        'fonteAmarela': false,
        'fonteArial': false,
        'fonteTimes': false,
        'fonteImpact': false
    }]
}


const contaPrincipal = {
    'usuarios': [{
        'user':'fulano',
        'name':'Fulano',
        'email':'fulano@email.com',
        'pwd':'senha123',
        'coordenada': 0,
        'taskpoints': 2500,
        'recompensas': objRecompensas.recompensas,
        'fundoAtual': 'branco',
        'fonteAtual': 'preta',
        'fonteFAtual': 'default',
        'tarefas': objTarefas.tarefas,
        'eventos': objEventos.eventos
    }]
};
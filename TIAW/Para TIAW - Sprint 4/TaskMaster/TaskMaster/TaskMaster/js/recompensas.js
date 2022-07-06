var contaAtual = JSON.parse(sessionStorage.getItem('contaAtual'));

window.onload = () => {
    if(!sessionStorage.getItem('contaAtual')){
        location='login.html';
        return;
    }

    document.getElementById('primeiraLinha').innerHTML = `
        <div class="row" style="text-align: justify;">
            <div class="col">
                <a href="index.html">TaskMaster <i class="fa-solid fa-pen-to-square" id="taskMaster"></i></a>
            </div>
            <div class="col-auto" style="float: right;">
                <p id="login"><a href="perfil.html"><i class="fa-solid fa-user" id="userIcon"></i>${contaAtual.name}</a></p>
            </div>
        </div>
        `
    
    document.getElementById('pontos').innerHTML=contaAtual.taskpoints;
    var tudoDesbloqueado = (contaAtual.recompensas[0].fundoVermelho==true &&
                            contaAtual.recompensas[0].fundoAzul==true && 
                            contaAtual.recompensas[0].fundoVerde==true && 
                            contaAtual.recompensas[0].fundoAmarelo==true &&
                            contaAtual.recompensas[0].fonteVermelha==true &&
                            contaAtual.recompensas[0].fonteAmarela==true &&
                            contaAtual.recompensas[0].fonteVerde==true &&
                            contaAtual.recompensas[0].fonteAmarela==true &&
                            contaAtual.recompensas[0].fonteArial==true &&
                            contaAtual.recompensas[0].fonteTimes==true &&
                            contaAtual.recompensas[0].fonteImpact==true);

    if (contaAtual.taskpoints<250 || tudoDesbloqueado)
        $('#buy').attr('class', 'btn btn-secondary disabled');
    if (contaAtual.recompensas[0].fundoVermelho==true)
        $('#fundoVermelho').attr('class', 'btn btn-danger');
    else
        $('#fundoVermelho').attr('class', 'btn btn-danger disabled');
    if (contaAtual.recompensas[0].fundoAzul==true)
        $('#fundoAzul').attr('class', 'btn btn-primary');
    else
        $('#fundoAzul').attr('class', 'btn btn-primary disabled');
    if (contaAtual.recompensas[0].fundoVerde==true)
        $('#fundoVerde').attr('class', 'btn btn-success');
    else
        $('#fundoVerde').attr('class', 'btn btn-success disabled');
    if (contaAtual.recompensas[0].fundoAmarelo==true)
        $('#fundoAmarelo').attr('class', 'btn btn-warning');
    else
        $('#fundoAmarelo').attr('class', 'btn btn-warning disabled');
    if (contaAtual.recompensas[0].fonteVermelha==true)
        $('#fonteVermelha').attr('class', 'btn btn-danger');
    else
        $('#fonteVermelha').attr('class', 'btn btn-danger disabled');
    if (contaAtual.recompensas[0].fonteAzul==true)
        $('#fonteAzul').attr('class', 'btn btn-primary');
    else
        $('#fonteAzul').attr('class', 'btn btn-primary disabled');
    if (contaAtual.recompensas[0].fonteVerde==true)
        $('#fonteVerde').attr('class', 'btn btn-success');
    else
        $('#fonteVerde').attr('class', 'btn btn-success disabled');
    if (contaAtual.recompensas[0].fonteAmarela==true)
        $('#fonteAmarela').attr('class', 'btn btn-warning');
    else
        $('#fonteAmarela').attr('class', 'btn btn-warning disabled');
    if (contaAtual.recompensas[0].fonteArial==true)
        $('#fonteArial').attr('class', 'btn btn-secondary');
    else
        $('#fonteArial').attr('class', 'btn btn-secondary disabled');
    if (contaAtual.recompensas[0].fonteTimes==true)
        $('#fonteTimes').attr('class', 'btn btn-secondary');
    else
        $('#fonteTimes').attr('class', 'btn btn-secondary disabled');
    if (contaAtual.recompensas[0].fonteImpact==true)
        $('#fonteImpact').attr('class', 'btn btn-secondary');
    else
        $('#fonteImpact').attr('class', 'btn btn-secondary disabled');

    if (contaAtual.fundoAtual=='branco')
        $('body').css('background-color', '');
    else if (contaAtual.fundoAtual=='vermelho')
        $('body').css('background-color', 'red');
    else if (contaAtual.fundoAtual=='azul')
        $('body').css('background-color', 'blue');
    else if (contaAtual.fundoAtual=='verde')
        $('body').css('background-color', 'green');
    else if (contaAtual.fundoAtual=='amarelo')
        $('body').css('background-color', 'yellow');
    
    if (contaAtual.fonteAtual=='preta')
        $('body').css('color', '');
    else if (contaAtual.fonteAtual=='vermelha')
        $('body').css('color', 'red');
    else if (contaAtual.fonteAtual=='azul')
        $('body').css('color', 'blue');
    else if (contaAtual.fonteAtual=='verde')
        $('body').css('color', 'green');
    else if (contaAtual.fonteAtual=='amarela')
        $('body').css('color', 'yellow');

    if (contaAtual.fonteFAtual=='default')
        $('body').css('font-family', '');
    else if (contaAtual.fonteFAtual=='arial')
        $('body').css('font-family', 'Arial');
    else if (contaAtual.fonteFAtual=='times')
        $('body').css('font-family', 'Times');
    else if (contaAtual.fonteFAtual=='impact')
        $('body').css('font-family', 'impact');
}

$('#padrao').click(function(){
    $('body').css('background-color', '');
    $('body').css('color', '');
    $('body').css('font-family', '');
    contaAtual.fundoAtual='branco';
    contaAtual.fonteAtual='preta';
    contaAtual.fonteFAtual='default';

    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});

$('#fundoVermelho').click(function(){
    $('body').css('background-color', 'red');
    contaAtual.fundoAtual='vermelho';

    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));

    if (contaAtual.fonteAtual=='amarela')
        alert ('Communism!');
});
$('#fundoAzul').click(function(){
    $('body').css('background-color', 'blue');
    contaAtual.fundoAtual='azul';

    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});
$('#fundoVerde').click(function(){
    $('body').css('background-color', 'green');
    contaAtual.fundoAtual='verde';

    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});
$('#fundoAmarelo').click(function(){
    $('body').css('background-color', 'yellow');
    contaAtual.fundoAtual='amarelo';

    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});

$('#fonteVermelha').click(function(){
    $('body').css('color', 'red');
    contaAtual.fonteAtual='vermelha';

    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});
$('#fonteAzul').click(function(){
    $('body').css('color', 'blue');
    contaAtual.fonteAtual='azul';

    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});
$('#fonteVerde').click(function(){
    $('body').css('color', 'green');
    contaAtual.fonteAtual='verde';

    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});
$('#fonteAmarela').click(function(){
    $('body').css('color', 'yellow');
    contaAtual.fonteAtual='amarela';

    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
    
    if (contaAtual.fundoAtual=='vermelho')
    alert ('Communism!');
});

$('#fonteArial').click(function(){
    $('body').css('font-family', 'Arial');
    contaAtual.fonteFAtual='arial';
    
    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});
$('#fonteTimes').click(function(){
    $('body').css('font-family', 'Times');
    contaAtual.fonteFAtual='times';
    
    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});
$('#fonteImpact').click(function(){
    $('body').css('font-family', 'Impact');
    contaAtual.fonteFAtual='impact';
    
    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});

$('#buy').click(function(){
    while (true){
        let rand=Math.floor(Math.random()*11);
        
        if (rand==0 && contaAtual.recompensas[0].fundoVermelho==false){
            contaAtual.recompensas[0].fundoVermelho=true;
            $('#fundoVermelho').attr('class', 'btn btn-danger');
            break;
        }
        else if (rand==1 && contaAtual.recompensas[0].fundoAzul==false){
            contaAtual.recompensas[0].fundoAzul=true;
            $('#fundoAzul').attr('class', 'btn btn-primary');
            break;
        }
        else if (rand==2 && contaAtual.recompensas[0].fundoVerde==false){
            contaAtual.recompensas[0].fundoVerde=true;
            $('#fundoVerde').attr('class', 'btn btn-success');
            break;
        }
        else if (rand==3 && contaAtual.recompensas[0].fundoAmarelo==false){
            contaAtual.recompensas[0].fundoAmarelo=true;
            $('#fundoAmarelo').attr('class', 'btn btn-warning');
            break;
        }
        else if (rand==4 && contaAtual.recompensas[0].fonteVermelha==false){
            contaAtual.recompensas[0].fonteVermelha=true;
            $('#fonteVermelha').attr('class', 'btn btn-danger');
            break;
        }
        else if (rand==5 && contaAtual.recompensas[0].fonteAzul==false){
            contaAtual.recompensas[0].fonteAzul=true;
            $('#fonteAzul').attr('class', 'btn btn-primary');
            break;
        }
        else if (rand==6 && contaAtual.recompensas[0].fonteVerde==false){
            contaAtual.recompensas[0].fonteVerde=true;
            $('#fonteVerde').attr('class', 'btn btn-success');
            break;
        }
        else if (rand==7 && contaAtual.recompensas[0].fonteAmarela==false){
            contaAtual.recompensas[0].fonteAmarela=true;
            $('#fonteAmarela').attr('class', 'btn btn-warning');
            break;
        }
        else if (rand==8 && contaAtual.recompensas[0].fonteArial==false){
            contaAtual.recompensas[0].fonteArial=true;
            $('#fonteArial').attr('class', 'btn btn-secondary');
            break;
        }
        else if (rand==9 && contaAtual.recompensas[0].fonteTimes==false){
            contaAtual.recompensas[0].fonteTimes=true;
            $('#fonteTimes').attr('class', 'btn btn-secondary');
            break;
        }
        else if (rand==10 && contaAtual.recompensas[0].fonteImpact==false){
            contaAtual.recompensas[0].fonteImpact=true;
            $('#fonteImpact').attr('class', 'btn btn-secondary');
            break;
        }
    }

    contaAtual.taskpoints-=250;
    sessionStorage.setItem('contaAtual', JSON.stringify(contaAtual));
    document.getElementById('pontos').innerHTML=contaAtual.taskpoints;
    
    let tudoDesbloqueado = (contaAtual.recompensas[0].fundoVermelho==true &&
                            contaAtual.recompensas[0].fundoAzul==true && 
                            contaAtual.recompensas[0].fundoVerde==true && 
                            contaAtual.recompensas[0].fundoAmarelo==true &&
                            contaAtual.recompensas[0].fonteVermelha==true &&
                            contaAtual.recompensas[0].fonteAmarela==true &&
                            contaAtual.recompensas[0].fonteVerde==true &&
                            contaAtual.recompensas[0].fonteAmarela==true &&
                            contaAtual.recompensas[0].fonteArial==true &&
                            contaAtual.recompensas[0].fonteTimes==true &&
                            contaAtual.recompensas[0].fonteImpact==true);

    if (tudoDesbloqueado || contaAtual.taskpoints<250){
        $('#buy').attr('class', 'btn btn-secondary disabled');
    }

    var usuariosLS=JSON.parse(localStorage.getItem('usuariosLS'));
    usuariosLS.usuarios[contaAtual.coordenada]=JSON.parse(sessionStorage.getItem('contaAtual'));
    localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
});
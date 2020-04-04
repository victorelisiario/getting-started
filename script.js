var palpite = document.querySelector("input");
    var numerosSecretos = [];

        // FUNCAO PARA ESCOLHER OS NUMEROS ADIVINHADOS
    function sorteiaNumeros(){

        var contadorInclui = 0;
       
        while (contadorInclui < 5) {
            var numerotemp = Math.round(Math.random() * 10);
            var existe = false;

            for ( var contadorTesta = 0; contadorTesta < 5; contadorTesta++){
                if (numerotemp == numerosSecretos[contadorTesta]) {
                    existe = true;
                    break;
                }
            }
            
            if ((existe == false) && (numerotemp != 0)) {
                numerosSecretos.push(numerotemp);
                contadorInclui++;
            }
        }

        console.log(numerosSecretos);

    }
 
        // FUNCAO PARA VERIFICAR SE VOCE GANHOU OU NAO
    function verificacao () {
        var errou = true;
        for (contador = 0; contador < 5; contador++) {
            if (palpite.value == numerosSecretos[contador]){
                alert("Você ACERTOU!!");
                errou = false;
                break;
            }
        }
        if (errou == true){
            alert("Você ERROU!!")
        }
        palpite.value = "";
        palpite.focus();
    }

        // FUNCAO PARA ESCOLHER OS NUMEROS NOVAMENTE
        function resortear () {
            numerosSecretos = [];
            sorteiaNumeros();
            
            palpite.value = "";
            palpite.focus();
        }

    palpite.focus();
    sorteiaNumeros()
    var botaoIr = document.querySelector("button#ir");
    botaoIr.onclick = verificacao;
    var botaoAtualizar = document.querySelector("button#atualizar");
    botaoAtualizar.onclick = resortear;


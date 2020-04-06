    var palpite = document.querySelector("input");
    var numerosSecretos = [];


    // FUNCOES PARA ESCONDER A ABA DE RESPOSTA
    function esconderResultado () {
        document
            .querySelector(".resultado")
            .classList
            .toggle("hide")
    }

    function esconderAcertou () {
        document
            .querySelector(".acertou")
            .classList
            .toggle("hide")
    }

    function esconderErrou () {
        document
            .querySelector(".errou")
            .classList
            .toggle("hide")
    }

    function esconderInvalido () {
        document
            .querySelector(".invalido")
            .classList
            .toggle("hide")
    }

    function enfase (){
        palpite.value = "";
        palpite.focus();
    }

    function esconderInput () {
        document
            .querySelector(".input")
            .classList
            .toggle("hide")
    }

    esconderAcertou();
    esconderErrou();
    esconderInvalido();

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
      
        if (isNaN(palpite)){
            if (palpite.value > 0 && palpite.value < 11) {

                var errou = true;
                for (contador = 0; contador < 5; contador++) {
                    if (palpite.value == numerosSecretos[contador]){
                        esconderResultado();
                        esconderAcertou();
                        setTimeout(esconderAcertou, 800);
                        setTimeout(esconderResultado, 800);
                        errou = false;
                        break;
                    }
                }
                
                if (errou == true) {
                    esconderResultado();
                    esconderErrou();
                    setTimeout(esconderErrou,800);
                    setTimeout(esconderResultado, 800);   
                }


                palpite.value = "";
                palpite.focus();  
            
            } else {
                esconderInput();
                esconderInvalido();
                setTimeout(esconderInput, 800);
                setTimeout(esconderInvalido, 800);
                setTimeout(enfase, 800);
            }               
        }
    }
        

        // FUNCAO PARA ESCOLHER OS NUMEROS NOVAMENTE
        function resortear () {
            numerosSecretos = [];
            sorteiaNumeros();
            
            enfase();
        }

    palpite.focus();
    sorteiaNumeros()
    var botaoIr = document.querySelector("button#ir");
    botaoIr.onclick = verificacao;
    var botaoAtualizar = document.querySelector("button#atualizar");
    botaoAtualizar.onclick = resortear;


    

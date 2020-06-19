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

    function esconderInput () {
        document
            .querySelector(".input")
            .classList
            .toggle("hide")
    }

    function esconderEasterEgg () {
        document
            .querySelector(".easter")
            .classList
            .toggle("hide")
    }

    function enfase (){
        palpite.value = "";
        palpite.focus();
    }

    esconderAcertou();
    esconderErrou();
    esconderInvalido();
    esconderEasterEgg();

            // FUNCAO PARA ESCOLHER OS NUMEROS ADIVINHADOS
    function sorteiaNumeros(){

        var contadorInclui = 0;
       
        while (contadorInclui < 2) {
            var numerotemp = Math.round(Math.random() * 10);
            var existe = false;

            for ( var contadorTesta = 0; contadorTesta < 2; contadorTesta++){
                if (numerotemp == numerosSecretos[contadorTesta]) {
                    existe = true;
                    break;
                }
            }
            
            if ((existe == false) && (numerotemp < 10)) {
                numerosSecretos.push(numerotemp);
                contadorInclui++;
            }
        }

        console.log(numerosSecretos);

    }
 
            // FUNCAO PARA VERIFICAR SE VOCE GANHOU OU NAO
    function verificacao () {
        var senha = palpite.value.toUpperCase();
       
        if ((senha == "MIGUEL")) {

            esconderResultado();
            esconderEasterEgg();
            setTimeout(esconderResultado, 400);
            setTimeout(esconderEasterEgg, 400);

            setTimeout(esconderResultado, 800);
            setTimeout(esconderEasterEgg, 800);
            setTimeout(esconderResultado, 1200);
            setTimeout(esconderEasterEgg, 1200);

            setTimeout(enfase, 1200);

        } else {
            if (isNaN(palpite)){
                if (palpite.value >= 0 && palpite.value < 10) {

                    var errou = true;
                    for (contador = 0; contador < 2; contador++) {
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


    


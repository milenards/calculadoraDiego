function calcula(){
    //Captura valores tela
    var numUm = parseFloat(document.querySelector('#primeiroNumero').value);
    var numDois = parseFloat(document.querySelector('#segundoNumero').value);
    var operador = document.querySelector('#operacao').value;
   
    //Variável que vai trazer o resultado
    var resultado = '';
    
    //Chama função calculadora
    resultado = calculadora(operador, numUm, numDois);
    
    validaCorResultado(resultado);

    //Seta resultado no elemendo de ID "resultadoFinal"
    document.getElementById("resultadoFinal").innerHTML = resultado;
}

function calculadora(operacao, numUm, numDois) {
   
   if(operacao === "selecione"){
        return "";
    }

    if(operacao === 'soma'){
        return soma(numUm, numDois);
        }
    
    if(operacao === 'subtracao'){
        return subtrai(numUm, numDois);
    }

    if(operacao === 'multiplicacao'){
        return multiplica(numUm, numDois);
    }
    
    if(operacao === 'divisao'){
        return divide(numUm, numDois);
    }

}

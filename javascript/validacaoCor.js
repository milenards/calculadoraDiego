function validaCorResultado(resultado){

    const elementoResultado = document.getElementById("resultadoFinal");
    
    resultado >= 0 ? elementoResultado.style.color = "green": elementoResultado.style.color = "red"; 
}


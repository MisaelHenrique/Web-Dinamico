//1
function media(){
    let n1 = Number(document.querySelector(".n1").value);
    let n2 = Number(document.querySelector(".n2").value);
    let n3 = Number(document.querySelector(".n3").value);
    let media = Number((n1 + n2 + n3) / 3);
    let result = document.querySelector(".msg")
    result.innerText = media.toFixed(2);
    //console.log(media)
    
}

//2
function salario(){

    let nome = document.querySelector(".name").value;
    let salario = Number (document.querySelector(".salario").value);

    let acrescimo = Number(salario * 0.10 + salario);
    let aumento = document.querySelector(".aumento")
    aumento.innerText = acrescimo.toFixed(2)

    let colab = document.querySelector(".funcionario")
    colab.innerText = nome;
    // console.log(acrescimo)
    // console.log(nome)


}

//3
function calcular(){

    let numero1 = Number(document.querySelector("#n1").value);
    let numero2 = Number(document.querySelector("#n2").value);
    let numero3
    console.log(numero1, numero2)
    if (numero1 === numero2) {

        numero3 = numero1 + numero2;
        console.log(numero3)
        
    }else{

        numero3 = numero1 * numero2;
    
    }

    let result = document.querySelector(".result")
    result.innerText = numero3
    console.log(numero3)

}

//4
function parcelar(){

    

}

//5
function mediaAluno(){

}

//6
function calcularCodigo(){

}


//7
function grau(){

}


//8
function positivo(){

}


//9
function negativo(){

}

//10
function idade(){

}




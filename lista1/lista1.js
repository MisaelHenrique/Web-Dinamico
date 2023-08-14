//1
function media(){
    let n1 = Number(document.querySelector(".n1").value);
    let n2 = Number(document.querySelector(".n2").value);
    let n3 = Number(document.querySelector(".n3").value);
    let media = (n1 + n2 + n3) / 3;
    let result = document.querySelector(".msg")
    result.innerText = media.toFixed(2);
    //console.log(media)
    
}

//2
function salario(){

    let nome = document.querySelector(".name").value;
    let salario = Number(document.querySelector(".salario").value);

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

    if (numero1 === numero2) {

        numero3 = numero1 + numero2;
        
    }else{

        numero3 = numero1 * numero2;
    
    }

    let result = document.querySelector(".result")
    result.innerText = numero3
    console.log(numero3)

}

//4
function parcelar(){

    let preco = Number(document.querySelector(".preco").value);
    let parcela
    let total
    if (document.querySelector("#par3").checked){

        total = preco * 0.1 + preco;
        parcela = total / 3;
    }else if (document.querySelector("#par5").checked){

        total =  preco * 0.2 + preco
        parcela = total / 5
    }

        let par = document.querySelector("#parcela");
        let totalParcela = document.querySelector("#total");

        par.innerText = parcela.toFixed(2)
        totalParcela.innerText = total.toFixed(2)

        
}

//5
function mediaAluno(){

    let aluno = document.querySelector("#aluno").value;
    let nota1 = Number(document.querySelector("#nota1").value);
    let nota2 = Number(document.querySelector("#nota2").value);
    let nota3 = Number((document.querySelector("#nota3").value));
    let situacao = document.querySelector("#situation")
    
    let media = (nota1 + nota2 + nota3)/3

    if(media >= 8){

        let total = document.querySelector("#media");
        total.innerText = media.toFixed(2)

        situacao.innerText = "APROVADO"
        situacao.style.color = "green" 

    }else{

        let total = document.querySelector("#media");
        total.innerText = media.toFixed(2)

        situacao.innerText = "REPROVADO"
        situacao.style.color = "red" 
    }

    let nomeAluno = document.querySelector("#nome")
        nomeAluno.innerText = aluno;



}

//6
function calcularCodigo(){

    let option = document.querySelector("#codigo");

    let opt  = Number(option.value);

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




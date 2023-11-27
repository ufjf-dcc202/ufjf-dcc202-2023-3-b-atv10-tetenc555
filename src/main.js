import {deJoaoParaMaria,deMariaParaJoao,getMaria,getJoao,setMaria,setJoao} from "/src/joaoEMaria.js";
//cria vetor span
const spans = document.querySelectorAll("span");

//define maria e joao
let maria= getMaria();
let joao= getJoao();

//imprime valor de Maria e Joao no Console
console.log("Maria possui ", maria, " maçãs e João possui ", joao, " maçãs.")
//iguala spans a valor de joao e maria
spans[0].textContent=joao;
spans[1].textContent=maria;

//define botao para chamar a funcao de doacao
const botao =document.querySelector("button")
botao.addEventListener("click",fazDoacao);

//funcao doacao
function fazDoacao() {
    setMaria(maria+joao);
    setJoao(0);
    maria=getMaria();
    joao=getJoao();
    spans[0].textContent=joao;
    spans[1].textContent=maria;
    console.log("João deu todas suas maçãs para Maria e agora possui ",joao," maçãs. Por sua vez, Maria possui ",maria," maçãs.")
}
import {deJoaoParaMaria,deMariaParaJoao,getMaria,getJoao,setMaria,setJoao} from "/src/joaoEMaria.js";

//define maria e joao
let maria= getMaria();
let joao= getJoao();

//imprime valor de Maria e Joao no Console
console.log("Maria possui", maria, "maçãs e João possui", joao, "maçãs.")

//funcao doacao
function fazDoacao() {
    setMaria(maria+joao);
    setJoao(0);
    maria=getMaria();
    joao=getJoao();
    console.log("João deu todas suas maçãs para Maria e agora possui",joao,"maçãs. Por sua vez, Maria possui",maria,"maçãs.")
}

fazDoacao();
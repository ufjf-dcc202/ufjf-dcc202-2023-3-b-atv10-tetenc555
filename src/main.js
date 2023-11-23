import {deJoaoParaMaria,deMariaParaJoao,getMaria,getJoao,setMaria,setJoao} from "src/joaoEMaria.js";

let JoaoValor = getJoao();
let MariaValor = getMaria();

console.log("Joao tem ", JoaoValor, "maçãs e Maria tem ", MariaValor ,"maçãs.");

deJoaoParaMaria();
JoaoValor = getJoao();
MariaValor = getMaria();

console.log("João deu todas suas maçãs para maria, agora Maria tem ", MariaValor, "maçãs.");

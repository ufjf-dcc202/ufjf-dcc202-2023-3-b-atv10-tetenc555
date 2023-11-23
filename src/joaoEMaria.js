let joao=1;
let maria=2;
function deJoaoParaMaria()
{
    setMaria(maria+joao);
    setJoao(0);
}

function deMariaParaJoao()
{
    setJoao(maria+joao);
    setMaria(0);
}

function getMaria()
{
    return maria;
}

function getJoao()
{
    return joao;
}
function setMaria(valor)
{
    if (valor>0)
    {
        maria=valor;
    }
    else
    {
        maria=0;
    }
}
function setJoao(valor)
{
    if (valor>0)
    {
        joao=valor;
    }
    else
    {
        joao=0;
    }
}
export{deJoaoParaMaria,deMariaParaJoao,getMaria,getJoao,setMaria,setJoao};
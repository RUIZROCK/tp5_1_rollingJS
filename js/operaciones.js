const secreto=Math.floor(Math.random()*10)+1;

verificarNumero=()=>{
    return parseInt(document.getElementById('num').value)===secreto? 
    document.getElementById('resultado').innerHTML='Adivinaste!':
    document.getElementById('resultado').innerHTML='Intentalo otra vez!';
}

limpiar=()=>{
    let i=document.getElementById('num')
    i.value=''
}
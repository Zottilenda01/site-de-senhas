const numeroSenha=document.querySelector('.parametro-senha-texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('.parametro-senha-botao');
const campoSenha=document.querySelector('#campo-senha');
const letrasMaiusculas="ABCDEFGHIJKLMNOPQRSTUVWXYZÇ"
botoes[0].onclick=aumentarTamanho;
botoes[1].onclick=diminuirTamanho;
geraSenha();
function diminuirTamanho(){
    if(tamanhoSenha>=5){    tamanhoSenha=tamanhoSenha-1;
        numeroSenha.textContent=tamanhoSenha;}
}
function aumentarTamanho(){
    if(tamanhoSenha<=20){    tamanhoSenha=tamanhoSenha+1;
        numeroSenha.textContent=tamanhoSenha;}
}
function geraSenha(){
    let senha=" ";
    for(let  i=0; i<tamanhoSenha;i++){
    let numeroAleatorio=Math.random()*letrasMaiusculas.length;
    numeroAleatorio=Math.floor(numeroAleatorio);
    senha=senha+letrasMaiusculas[numeroAleatorio];
}
campoSenha.value=senha;
}
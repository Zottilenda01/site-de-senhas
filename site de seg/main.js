const numeroSenha=document.querySelector('.parametro-senha-texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('.parametro-senha-botao');
botoes[0].onclick=aumentarTamanho;
botoes[1].onclick=diminuirTamanho;
function diminuirTamanho(){
    if(tamanhoSenha>=5){    tamanhoSenha=tamanhoSenha-1;
        numeroSenha.textContent=tamanhoSenha;}
}
function aumentarTamanho(){
    if(tamanhoSenha<=20){    tamanhoSenha=tamanhoSenha+1;
        numeroSenha.textContent=tamanhoSenha;}
}
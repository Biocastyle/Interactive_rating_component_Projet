//Selecionar o botão
//alterar a cor caso passe o mouse
// trocar a cor para laranja caso a pessoa click e alterar tambem o botao se envio
// alterar pagina por ter clicado no botao
const botaoNota = document.querySelectorAll('.nota');
const tela1 = document.querySelector('.opcoes');
const tela2 = document.querySelector('.final');
const opesc = document.getElementById('opselec');
var result = 0;

botaoNota.forEach((nota) => {
    nota.addEventListener('mouseover', () => {
        const botaos = document.querySelector('.selecionado');
        if (botaos != null) {
            botaos.classList.remove('selecionado');
            nota.classList.add('selecionado');
        }
        else {
            nota.classList.add('selecionado');
        }
    })
    nota.addEventListener('mouseout', () => {
        nota.classList.remove('selecionado');
    })

})
botaoNota.forEach((nota) => {
    nota.addEventListener('click', () => {
        const botaoc = document.querySelector('.click');
        if (botaoc != null) {
            botaoc.classList.remove('click');
            nota.classList.add('click');
        }
        else {
            nota.classList.add('click');
        }
    })
})

const selecao1 = () =>{
    result = 1;
}

const selecao2 = () =>{
    result = 2;
}

const selecao3 = () =>{
    result = 3;
}

const selecao4 = () =>{
    result = 4;
}

const selecao5 = () =>{
    result = 5;
}

const submit = ()=>{
    if (result == 1) {
        tela1.style.display = 'none'
        tela2.style.display = 'flex'
        opesc.innerText = 'You selected 1 out of 5'
    }else if(result == 2 ) {
        tela1.style.display = 'none'
        tela2.style.display = 'flex'
        opesc.innerText = 'You selected 2 out of 5'
    }else if(result == 3){
        tela1.style.display = 'none'
        tela2.style.display = 'flex'
        opesc.innerText = 'You selected 3 out of 5'
    }
    else if(result == 4){
        tela1.style.display = 'none'
        tela2.style.display = 'flex'
        opesc.innerText = 'You selected 4 out of 5'
    }
    else if(result == 5){
        tela1.style.display = 'none'
        tela2.style.display = 'flex'
        opesc.innerText = 'You selected 5 out of 5'
    }
}
//Selecionar o botão
//alterar a cor caso passe o mouse
// trocar a cor para laranja caso a pessoa click e alterar tambem o botao se envio
// alterar pagina por ter clicado no botao
const botaoNota = document.querySelectorAll('.nota');
botaoNota.forEach((nota) => {
    nota.addEventListener('mouseenter', () => {
        const botaos = document.querySelector('.selecionado');
        console.log(botaos)
        //botaos.classList.remove('selecionado');
        nota.classList.add('selecionado');
        console.log(botaoNota);
    })
    nota.addEventListener('mouseout',() => {
        const botaos = document.querySelector('.selecionado');
        botaos.classList.remove('selecionado');
    })
})
botaoNota.forEach((nota) => {
    nota.addEventListener('click', () => {
        const botaoc = document.querySelector('.clicado');
        const botaosend = document.getElementsByClassName('butao');
        botaoc.classList.remove('clicado');
        nota.classList.add('clicado');
    })
})

//const botaoSelec = document.querySelector('.selecionada');
/*   botaoSelec.classList.remove('selecionada');
   botaoSelec.classList.add()*/
//Selecionar o botão
//alterar a cor caso passe o mouse
// trocar a cor para laranja caso a pessoa click e alterar tambem o botao se envio
// alterar pagina por ter clicado no botao
const botaoNota = document.querySelectorAll('.nota');
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

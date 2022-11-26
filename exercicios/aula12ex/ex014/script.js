function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'foto-manha.png'
        document.body.style.background = '#bfac82'
    } else if (hora < 18) {
        // BOA TARDE
        img.src = 'foto-tarde.png'
        document.body.style.background = '#9f6a40'
    } else {
        // BOA NOITE
        img.src = 'foto-noite.png'
        document.body.style.background = '#032c42'
    }
}
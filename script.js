function carregar () {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        foto.src = 'aula012imagem/pexels-umarandrabi-20409903.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        alert('Te amo neguinha')
        //Boa tarde!
        foto.src = 'aula012imagem/pexels-oandremoura-11264148.jpg'
        document.body.style.background = '#b9846f'
    }
        else {
        //Boa noite!
        foto.src = 'aula012imagem/pexels-bertellifotografia-1144690.jpg'
        document.body.style.background = '#515154'
    }
}
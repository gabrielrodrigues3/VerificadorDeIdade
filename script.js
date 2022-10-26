function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formularioAno.value == 0 || formularioAno.value > ano) {
        window.alert('{ERRO] Verifique o ano digitado e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - formularioAno.value
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.padding = '20px'
        if (idade == 1) {
            res.innerHTML = `<b>${genero} com ${idade} ano</b> <br>`
            res.appendChild(img)
        } else {
            res.innerHTML = `<b>${genero} com ${idade} anos</b> <br>`
            res.appendChild(img)
        }
            
    }
}
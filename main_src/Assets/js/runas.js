function teste(){
    console.log("OK")
}

function showDiv(runa) {
    let divs = document.querySelectorAll('.runa-desativada');
    divs.forEach(div => div.classList.remove('runa-ativada'));
    console.log("Olá")
    switch (runa) {
        case 'arvoreRunaPrincipal':
            document.getElementById('arvoreRunaPrincipal').classList.add('runa-ativada');
            break;
        case 'arvoreRunaSecundaria':
            document.getElementById('arvoreRunaSecundaria').classList.add('runa-ativada');
            break;
        case 'none':
        default:
            break;
    }
}
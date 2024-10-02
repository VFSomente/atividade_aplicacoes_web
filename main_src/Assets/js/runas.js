
function showDiv(runa) {
    let divs = document.querySelectorAll('.runa-desativada, .runa-ativada');
    divs.forEach(div => div.classList.remove('runa-ativada')); // Remove 'runa-ativada' de todas
    divs.forEach(div => div.classList.add('runa-desativada')); // Adiciona 'runa-desativada' em todas
 
    switch (runa) {
       case 'arvore-principal-runas':
          document.getElementById('arvore-principal-runas').classList.add('runa-ativada');
          document.getElementById('arvore-principal-runas').classList.remove('runa-desativada');
          break;
       case 'arvore-secundaria-runas':
          document.getElementById('arvore-secundaria-runas').classList.add('runa-ativada');
          document.getElementById('arvore-secundaria-runas').classList.remove('runa-desativada');
          break;
       default:
          break;
    }
 }

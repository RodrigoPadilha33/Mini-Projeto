document.addEventListener('DOMContentLoaded', inicializar);


function inicializar() {    
    TotalAcoes()
    dados()
    
}

function TotalAcoes() {
   const quantidade = localStorage.getItem('quantidade');

   if (quantidade) {
        const getElementById = document.getElementById('ArvoresPlantadas');
        
        if (getElementById) {
            getElementById.textContent +=` ${quantidade}`;
        } else {
            console.log('Elemento com ID "ArvoresPlantadas" não encontrado.');
        }
    
        
    }else {
        console.log('Quantidade nao encontrada.');
    }
}


function dados() {
    const identificacao = localStorage.getItem('Nome');
    
    if (identificacao) {

        const getElementById = document.getElementById('Nome-perfil');

        if (getElementById) {
            getElementById.textContent +=` ${identificacao}`;
        } else {
        console.log('Elemento com ID "Nome" nao encontrado.');
        }
    }
}

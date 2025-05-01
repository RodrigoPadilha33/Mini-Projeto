document.addEventListener('DOMContentLoaded', inicializar);


function inicializar() {    
    TotalAcoes()
    dados()
    TrocaAvatar()
    salvarbio()
    carregarbio()
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

function TrocaAvatar() {
    const quantidade = parseInt(localStorage.getItem('quantidade'));
    console.log(quantidade);
    const avatar= document.getElementById('img-avatar');
    
    if (quantidade >= 1500){
        avatar.src = 'images/adulta-brasilavatar.jpg';
    }else if (quantidade >= 700) {
        avatar.src = 'images/jovem-brasilavatar.jpg';
    }else if (quantidade >= 300) {
        avatar.src = 'images/broto-brasilavatar.jpg';
    } else if (quantidade >= 100) {
        avatar.src = 'images/semente-brasilavatar.jpg';
    }else {
        console.log('Quantidade nao encontrada.');
    };  
    

}


    
function salvarbio() {
    const salvar = document.getElementById('button-salvar');
    
    if(salvar) {
        salvar.addEventListener('click', (e) => {
                        
            const bio = document.getElementById('digitebio').textContent;

            if (bio){
                localStorage.setItem('Bio', bio);
            }
                     
                        
            alert('Bio salva com sucesso.');
            
            console.log("bio Armazenada: ",bio);
        });
        
    }
}    


function carregarbio() {
    const bio = localStorage.getItem('Bio');
    document.getElementById('digitebio').textContent = bio;
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

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
    const temaSelecionado = localStorage.getItem('temaselecionado'); // Obtém o tema salvo
    
    const avatar = document.getElementById('img-avatar');

        const temas = {
        'pauBrasil': {
            1500: 'images/adulta-brasilavatar.jpg',
            700: 'images/jovem-brasilavatar.jpg',
            300: 'images/broto-brasilavatar.jpg',
            100: 'images/semente-brasilavatar.jpg'
        },'castanheira': {
            1500: 'images/adulta-avatarcastanheira.jpg',
            700: 'images/joven-avatarcastanheira.jpg',
            300: 'images/broto-avatarcastanheira.jpg',
            100: 'images/semente-avatarcastanheira.jpg'
        }
        
    };

    if (quantidade && temas[temaSelecionado]) {
        if (quantidade >= 1500) {
            avatar.src = temas[temaSelecionado][1500];
        } else if (quantidade >= 700) {
            avatar.src = temas[temaSelecionado][700];
        } else if (quantidade >= 300) {
            avatar.src = temas[temaSelecionado][300];
        } else if (quantidade >= 100) {
            avatar.src = temas[temaSelecionado][100];
        } else {
            console.log('Quantidade não encontrada.');

        }
    }
}
function salvarbio() {
    const salvar = document.getElementById('button-salvar');
    
    if(salvar) {
        salvar.addEventListener('click', (e) => {
        
        if(salvar) {
            e.preventDefault();
        }
                        
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

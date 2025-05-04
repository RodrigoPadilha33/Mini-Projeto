document.addEventListener('DOMContentLoaded', inicializar);

function inicializar() {    
    destaque();
} 

import { registros } from './Relatorios.js';

function destaque() {
    const container = document.getElementById('DadosDestaques');
    const temaSelecionado = localStorage.getItem('temaselecionado'); // Pegando o tema escolhido

    const temas = {
        'pauBrasil': {
            1500: 'images/adulta-brasilavatar.jpg',
            700: 'images/jovem-brasilavatar.jpg',
            300: 'images/broto-brasilavatar.jpg',
            100: 'images/semente-brasilavatar.jpg'
        },
        'castanheira': {
            1500: 'images/adulta-avatarcastanheira.jpg',
            700: 'images/joven-avatarcastanheira.jpg',
            300: 'images/broto-avatarcastanheira.jpg',
            100: 'images/semente-avatarcastanheira.jpg'
        }
    };

    const registrosOrdenados = registros.sort((a, b) => b.quantidadePlantada - a.quantidadePlantada).slice(0, 3);
    
    registrosOrdenados.forEach(registro => {        
        let avatarSrc = 'images/avatar-base.jpg'; // Imagem padrão

        // Agora usamos `temaSelecionado` para garantir que pegamos as imagens do tema escolhido
        if (temas[temaSelecionado]) { 
            if (registro.quantidadePlantada >= 1500) {
                avatarSrc = temas[temaSelecionado][1500];
            } else if (registro.quantidadePlantada >= 700) {
                avatarSrc = temas[temaSelecionado][700];
            } else if (registro.quantidadePlantada >= 300) {
                avatarSrc = temas[temaSelecionado][300];
            } else if (registro.quantidadePlantada >= 100) {
                avatarSrc = temas[temaSelecionado][100];
            }
        }

        container.innerHTML += `
            <div>
                <h3>${registro.nome}</h3>
                <strong>Árvores plantadas:</strong> ${registro.quantidadePlantada} <br>                
                <img src="${avatarSrc}" alt="Avatar do tema ${temaSelecionado}" width="100">
            </div>
        `;
    });
}

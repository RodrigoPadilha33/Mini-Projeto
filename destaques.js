import { registros } from './Relatorios.js';




const registrosOrdenados = registros.sort((a, b) => b.quantidadePlantada - a.quantidadePlantada).slice(0, 3);

const container = document.getElementById('DadosDestaques');

registrosOrdenados.forEach(registro => {container.innerHTML += "<div>" + "<h3>" + registro.nome + "</h3>" + "<br>" + "<Strong>" + "Árvores plantadas: " + "</Strong>" + registro.quantidadePlantada + "<br>" + "<strong>" + " Tipo: " + "</strong>" + registro.tipoArvore + "</div>";
});





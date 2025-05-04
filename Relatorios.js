
function inicializar() {    
     filtronome()
    
}   

document.addEventListener('DOMContentLoaded', inicializar);



const registros = [
    { nome: "Rodrigo", quantidadePlantada: 15, tipoArvore: "Ipês" },
    { nome: "Maria", quantidadePlantada: 10, tipoArvore: "Angicos" },
    { nome: "Carlos", quantidadePlantada: 700, tipoArvore: "Aroeiras" },
    { nome: "Ana", quantidadePlantada: 8, tipoArvore: "Jequitibás" },
    { nome: "Fernando", quantidadePlantada: 12, tipoArvore: "Peroba do Campo" },
    { nome: "Carla", quantidadePlantada: 1600, tipoArvore: "Ipês" },
    { nome: "José", quantidadePlantada: 200, tipoArvore: "Angicos" },
    { nome: "Paula", quantidadePlantada: 7, tipoArvore: "Aroeiras" },
    { nome: "Gustavo", quantidadePlantada: 14, tipoArvore: "Jequitibás" },
    { nome: "Sofia", quantidadePlantada: 9, tipoArvore: "Peroba do Campo" }


];

export { registros };


function filtronome() {
    const relatorios = document.getElementById("botao-relatorios");

    if (relatorios) {
        relatorios.addEventListener('click', (e) => {            
        e.preventDefault();
                        
        const usuarioInput = document.getElementById("usuario").value.toLowerCase();
        const ArvoreInput = document.getElementById("tipoArvore").value.toLowerCase();
            
        const resultado = registros.filter(registro => registro.nome.toLowerCase().includes(usuarioInput) && registro.tipoArvore.toLowerCase().includes(ArvoreInput));

        const nome = document.getElementById("resultado");

        let detalhes = resultado.map(registro =>" 🌳 " + registro.nome + " - " + registro.tipoArvore + " : " + registro.quantidadePlantada + " Árvores").join('<br>'); 
            
        nome.innerHTML = detalhes;            
            
        });
    }
            
}   
 




function preenchernomes(){
    const nomes=document.getElementById("usuario");
    registros.forEach(registro => {
        const option = document.createElement("option");
        option.value = registro.nome;
        option.textContent = registro.nome;
        nomes.appendChild(option);
    })    

}





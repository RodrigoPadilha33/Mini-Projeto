

const registros = [
    { nome: "Rodrigo", quantidadePlantada: 15, tipoArvore: "Ipês" },
    { nome: "Maria", quantidadePlantada: 10, tipoArvore: "Angicos" },
    { nome: "Carlos", quantidadePlantada: 20, tipoArvore: "Aroeiras" },
    { nome: "Ana", quantidadePlantada: 8, tipoArvore: "Jequitibás" },
    { nome: "Fernando", quantidadePlantada: 12, tipoArvore: "Peroba do Campo" },
    { nome: "Carla", quantidadePlantada: 25, tipoArvore: "Ipês" },
    { nome: "José", quantidadePlantada: 18, tipoArvore: "Angicos" },
    { nome: "Paula", quantidadePlantada: 7, tipoArvore: "Aroeiras" },
    { nome: "Gustavo", quantidadePlantada: 14, tipoArvore: "Jequitibás" },
    { nome: "Sofia", quantidadePlantada: 9, tipoArvore: "Peroba do Campo" }
];



document.addEventListener('DOMContentLoaded', inicializar);

function inicializar() {    
        preenchernomes()
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





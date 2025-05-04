document.addEventListener('DOMContentLoaded', inicializar);


function inicializar() {    
    Acoes()
    

}



function Acoes() {
    const submit= document.getElementById('botao-acoes');

    if (submit) {
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            
            const Arvores = document.getElementById('Arvores').value;
            const quantidade = document.getElementById('quantidade').value;


            if (Arvores  && quantidade) {
                
                const dadosManejo = {
                    Arvores,
                    quantidade,
                };
                
                const QtdAtual = parseInt(localStorage.getItem('quantidade')) || 0;
                const NovaQuantidade = parseInt(quantidade);
                
                if (NovaQuantidade) {
                    const somaquantidade = QtdAtual + NovaQuantidade;
                    localStorage.setItem('quantidade',somaquantidade);
                    console.log(somaquantidade);
                    
                }else {
                    console.log('Quantidade nao encontrada.');
                }
                
                alert("Quantidade enviada com sucesso.");
                console.log('Dados do Manejo:', dadosManejo);
                console.log('Json String:', JSON.stringify(dadosManejo));
                console.log('Quantidade enviada :', quantidade);
                console.log ('Quantidade total:', localStorage.getItem('quantidade'));
                
                
            }else {
                alert("Preencha os campos.");
            };


     
        });
    }
}







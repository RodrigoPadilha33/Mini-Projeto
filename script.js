

//TROCA DE TEMA INICIO
const temas = {
    'pauBrasil': {
        '--background-color': 'rgba(165, 42, 42, 0.5)',
        '--color-text': 'rgb(9, 255, 0)',
        '--cor-quaternaria': '#DC3545',
        '--background-img': 'url("images/pau-Brasil.jpg")',
    },
    'castanheira': {
        '--background-color': 'rgba(139, 69, 19, 0.5)',
        '--color-text': 'rgb(35, 58, 44)',
        '--cor-terciaria': '#28A745',
        '--cor-quaternaria': '#DC3545',
        '--background-img': 'url("images/castanheira.jpg")',
    }, 
    'perobaRosa': {
        '--background-color': 'rgba(248, 139, 157, 0.5) ',
        '--color-text': 'rgb(3, 3, 3)',
        '--cor-terciaria': '#28A745',
        '--cor-quaternaria': '#DC3545',
        '--background-img': 'url("images/peroba-rosa.jpg")',
    }
};

// Inicializa as configurações ao carregar a página
document.addEventListener('DOMContentLoaded', inicializar);


// Função principal para inicializar as configurações
function inicializar() {
    aplicarTemaSalvo();
    configurarBotoesDeTema();  
    FormularioInput()


}


// Função para configurar os botões de troca de tema
function configurarBotoesDeTema() {
    const botoes = document.querySelectorAll('.theme input[type="radio"]');
    botoes.forEach((btn) => {
        btn.addEventListener('click', () => {
            const tema = btn.dataset.theme;
            salvartema(tema);
            aplicarTemaSalvo();
        });
    });
}

//função salvar tema
function salvartema(tema) {
    localStorage.setItem('temaselecionado', tema);
}

// Função para aplicar o tema salvo
function aplicarTemaSalvo() {
    const temaSelecionado = localStorage.getItem('temaselecionado');
    if (temaSelecionado && temas[temaSelecionado]) {
        const tema = temas[temaSelecionado];
        for (let variavel in tema) {
            if (variavel.startsWith('--')) {
                document.documentElement.style.setProperty(variavel, tema[variavel]);
            }
        }
        
    }
}

//TROCA TEMA FIM



// funcion LOGAR INICIO



  
//funcion LOGAR FIM


//formulario login INICIO

function FormularioInput() {
    const submit = document.getElementById('botao-cadastrar');

    if (submit) {
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            const username = document.getElementById('Nome').value;
            const password = document.getElementById('Senha').value;
            const theme = localStorage.getItem('temaselecionado');
            const checked = document.querySelector('input[type="radio"]:checked');

            if (username  && password  && checked) {
                window.location.href = "Acoes.html";
                const dadosLogin = {
                    username,
                    password,
                    SelectedTheme: theme
                };
                console.log(username)

                const nome =localStorage.setItem('Nome', username);
                console.log(nome);
                
      
                console.log('Dados do Login:', dadosLogin);
                console.log('Json String:', JSON.stringify(dadosLogin));

            } else {
              alert("Usuário ou senha incorretos, ou tema não selecionado.");
            }

            
        });
    }
}

//formulario login FIM
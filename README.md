
**🚀 Projeto Front-End – Consumo de API com JavaScript.**  
**Projeto desenvolvido como parte da disciplina de Programação de Sítios Internet - FATEC.**

Prof. Fernando Leonid – 2026


🎯 Objetivo - Criar uma aplicação web utilizando JavaScript puro (Vanilla JS) para consumir dados de uma API pública, exibindo os resultados de forma dinâmica em uma interface amigável.

💡 Funcionalidades  
✔️ Campo de busca por nome  
✔️ Consumo de API com fetch()  
✔️ Exibição de resultados em formato de cards  
✔️Manipulação do DOM  
✔️Tratamento de erros  
✔️Interface organizada e responsiva  

🛠️ Tecnologias Utilizadas  
HTML  
CSS  
JavaScript (Vanilla JS)

🔗 Acesse o Projeto  
💻 GitHub: (https://github.com/Jessica-Silvestre)  
🌐 GitHub Pages: (https://jessica-silvestre.github.io/p1-Programa-o-de-S-tios-Internet-FATEC-2026/)

📚 Sobre o Projeto:   
    API de receitas   
● Padrão de Design: Separação total. O HTML é a estrutura, o CSS é a estética e o JavaScript  

    Estrutura Semântica (HTML)  
● header: Para o título e o campo de busca.  
● main: Onde os resultados aparecem.  
● input e button: Os controles de entrada do usuário.  

    JavaScript
● Uso clique no botão ou a tecla Enter.  
● **Usei replaceChildren()** para apagar os resultados da busca anterior antes de mostrar os novos.  
● forEach() para passar por cada prato recebido.    
    DOM - Para cada prato, o JavaScript executa estas sub-etapas:  
● **createElement('div'):**  Cria a "caixa" do card.  
● **createElement('img'):**  Cria o espaço da foto e define o src.  
● **createElement('h3'):** Cria o título com o nome da comida.  
● **append():** Organiza quem vai dentro de quem (a foto dentro do card, o título dentro do card).  


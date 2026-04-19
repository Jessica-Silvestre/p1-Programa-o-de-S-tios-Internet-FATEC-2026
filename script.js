'use strict'

function criarCard(comida) {
    const galeria = document.getElementById('galeria')
    
    const card = document.createElement('div')
    card.classList.add('card-repositorio')

    const imagem = document.createElement('img')
    imagem.classList.add('imagem-prato')
    imagem.src = comida.strMealThumb
    imagem.alt = comida.strMeal

    const titulo = document.createElement('h3')
    titulo.classList.add('titulo')
    titulo.textContent = comida.strMeal

    const categoria = document.createElement('p')
    categoria.classList.add('descricao')
    categoria.textContent = `Categoria: ${comida.strCategory || "Geral"}`

    const link = document.createElement('a')
    link.classList.add('link-repo')
    
    link.href = comida.strYoutube || `https://www.youtube.com/results?search_query=${comida.strMeal}`
    link.target = "_blank"
    link.textContent = "Ver Passo a Passo"

    card.append(imagem, titulo, categoria, link)

    galeria.append(card)
}

/** * Função de busca */
async function carregarComidas() {
    const busca = document.getElementById('termoBusca').value.trim()
    const galeria = document.getElementById('galeria')

    if (!busca) return alert("Por favor, digite um ingrediente ou prato!")

    // API TheMealDB - endpoint de busca por nome
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${busca}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        galeria.replaceChildren()

        if (data.meals) {
            data.meals.slice(0, 6).forEach(criarCard)
        } else {
            alert("Nenhum prato encontrado! Tente termos em inglês como 'Chicken', 'Cake' ou 'Pasta'.")
        }

    } catch (error) {
        alert("Erro ao conectar com a base de dados de receitas!")
        console.error(error)
    }
}

document.getElementById('pesquisar').addEventListener('click', carregarComidas)

// Busca ao apertar Enter
document.getElementById('termoBusca').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') carregarComidas()
})
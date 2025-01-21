const texto = document.getElementById('descricao')
const numeroDoConselho = document.getElementById('numero-conselho')

document.getElementById('gerar-conselho').addEventListener('click', () => {
    buscandoConselhoAleatorio()
    
    
    async function buscandoConselhoAleatorio() {
        try {
            const url = "https://api.adviceslip.com/advice"
            const resposta = await fetch(url)
            if(!resposta.ok){
                throw new Error('Deu erro na busca do conselho da API')
            }
            const json = await resposta.json()         
            return texto.innerText = json.slip.advice,
            numeroDoConselho.innerText = json.slip.id
        } catch (error) {
            console.log(error);
        }
    }
})

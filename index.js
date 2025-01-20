document.getElementById('gerar-conselho').addEventListener('click', () => {
    buscandoConselhoAleatorio()
    
    
    async function buscandoConselhoAleatorio() {
        try {
            const url = "https://api.adviceslip.com/advice"
            const resposta = await fetch(url)
            const json = await resposta.json()
            return document.getElementById('descricao').innerText = json.slip.advice
        } catch (error) {
            console.log(error);
        }
    }
})

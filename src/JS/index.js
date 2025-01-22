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
            const idDoConselho = json.slip.id;  
            const conselhoGerado = json.slip.advice;      
            let numeroDoConselho = document.getElementById('numero-conselho')
            let texto = document.getElementById('descricao')

            numeroDoConselho.innerText = `ADVICE  #${idDoConselho}`
            texto.innerText = `${conselhoGerado}`
            

        } catch (error) {
            console.log(error);
        }
    }
})

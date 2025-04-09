//Cotação de moeda:
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const amount = document.getElementById ("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form") //obtendo os elementos do formulário
const footer = document.querySelector("main footer")
const description = document.getElementById("drscription")
const result = document.getElementById("result")

//Manipulando o input amount para receber somente números:
amount.addEventListener("input",(event)=>
{
    //na inspeção da pág. aqui ele apenas nos mostra o conteúdo que está sendo digitado:
    //console.log(amount.value);

    //Esse padrão regex verifica caracteres do tipo texto:
    const hasCharactersRegex = /\D+/g

    /*Nessa linha ela pega o que foi digitado e compara com o pedrão que a gente passou
    caso ele encontre alguma letra em meio de números, ele vai substituir a letra por nada/vaziu:
    (estamos atribuindo um novo valor, mas um novo valor com os textos removidos -> substituido por nada)
    */ 
    amount.value = amount.value.replace (hasCharactersRegex,"")
})

//Estamos capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) =>
{
    //para não regarregar a página:
    event.preventDefault()

    //para vermos que conseguimos pegar o valor selecionado:
    //console.log(currency.value)

    //identificar qual a moeda que será selecionada:
    switch(currency.valeu)
    {
        case "USD":
            convertCurrency(amount.value,USD,"US$")
        break;
        case "EUR":
        convertCurrency(amount.value,EUR,"€")
        break;
        case "GBP":
            convertCurrency(amount.value,GBP,"£")
        break;
    }
}

//Função para converter a moeda:
function convertCurrency(amount,price,symbol)
{
    //Só para a gente ver o que ele está nos retornando:
    //console.log (amount,price,symbol);

    try
    {
        //exibindo a cotação da moeda coletada :
        description.textContent= `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        // Calculando, garantindo que o total é um número, formatando e exibindo o resultado total:
        let total = amount * price
        
        is (isNaN(total))
        {
            return alert ("Por favor digite o valor corretamente")
        }

        total = formatCurrencyBRL(total).replace("R$", "");
        result.textContent = `${total} Reais `;

        //Aplica a classe que exibe o footer para mostrar o resultado 
        footer.classList.add(show-result); 
    }
    catch(error)
    {
        //Remove a classe do footer na tela:
        footer.classList.remove("show-result");

        console.log(error);
        alert ("Não foi possível converter. Tente novamente mais tarde");
    }
}

/*Essa função pega o valor, transforma ele para número para eu conseguir usar o toLocaleString
e falamos que queremos formatar essa moeda para pt-BR e já retornamos o valor formatado.
*/
function formatCurrencyBRL(value)
{
    return Number(value).toLocaleString("pt-BR" , {style:"currency" , currency: "BRL"});

}

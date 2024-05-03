const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
 

function convertValues  () {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
  const currencyValueConverted = document.querySelector(".currency-value") //outras moedas

  const dolarToday = 5.0
  const euroToday = 5.4
  const libraToday = 6.3
  const bitcoinToday = 357.0
   //const data = fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())
  
   //.log(data)

   if (currencySelect.value == "dolar") {
    // se o select estiver selecionado em dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"

    }).format(inputCurrencyValue / dolarToday)

}

if (currencySelect.value == "euro") {
  // se o select estiver selecionado em euro, entre aqui
  currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"

  }).format(inputCurrencyValue / euroToday)

}

if (currencySelect.value == "libra") {
    // se o select estiver selecionado em libra, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"

    }).format(inputCurrencyValue / libraToday)
  }

  if (currencySelect.value == "bitcoin") {
    // se o select estiver selecionado em bitcoin, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("XBT", {
      style: "currency",
      currency: "BTC"

    }).format(inputCurrencyValue / bitcoinToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"

  }).format(inputCurrencyValue)

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
  
    if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dolar americano"
      currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
      }
    
      if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
      }
      if (currencySelect.value == "bitcoin") {
        //currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
      }
  
      convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
const converter = document.getElementById('converter')

const balanca = document.getElementById('balanca')



async function convertendo() {


  const tiposMoedas = document.querySelector(".tiposDeMoedas").value

  const moedasBase = document.querySelector(".moedasBase").value

  const valorReal = document.querySelector('#valorReal').value

  let valorBase = document.querySelector('#valorBase')

  let valorConvertido = document.querySelector('#valorConvertido')


  const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json());

  console.log(data)


  if (moedasBase == "real") {

    const dollarAtual = data.USDBRL.ask

    const euroAtual = data.EURBRL.ask

    const bitcoin = data.BTCBRL.ask

    const realAtual = 1




    if (tiposMoedas == "dollar") {

      valorConvertido.innerHTML = valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal / dollarAtual);

    }

    if (tiposMoedas == "euro") {

      valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal / euroAtual);

    }

    if (tiposMoedas == "bitcoin") {

      valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valorReal / bitcoin);

    }

    if (tiposMoedas == "real") {

      valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal * realAtual);

    }

    valorBase.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal);
  }
 
  if (moedasBase == "dollar") {

    const dollarAtual = 1

    const euroAtual = data.EURBRL.ask

    const bitcoin = data.BTCBRL.ask

    const realAtual = data.USDBRL.ask




    if (tiposMoedas == "dollar") {

     valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal * dollarAtual);

    }

    if (tiposMoedas == "euro") {

      valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal*realAtual/euroAtual);

    }

    if (tiposMoedas == "bitcoin") {

      valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valorReal*realAtual / bitcoin);

    }

    if (tiposMoedas == "real") {

      valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal * realAtual);

    }

    valorBase.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal);


  }

  if (moedasBase == "euro") {

    const dollarAtual = data.USDBRL.ask

    const euroAtual = 1

    const bitcoin = data.BTCBRL.ask

    const realAtual = data.EURBRL.ask




    if (tiposMoedas == "dollar") {

     valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal*realAtual/ dollarAtual);

    }

    if (tiposMoedas == "euro") {

      valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal*euroAtual);

    }

    if (tiposMoedas == "bitcoin") {

      valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valorReal*realAtual / bitcoin);

    }

    if (tiposMoedas == "real") {

      valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal * realAtual);

    }

    valorBase.innerHTML =new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal);


  }

  if (moedasBase == "bitcoin") {

    const dollarAtual = data.USDBRL.ask

    const euroAtual = data.EURBRL.ask

    const bitcoin = 1

    const realAtual = data.BTCBRL.ask




    if (tiposMoedas == "dollar") {

     valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal*realAtual/ dollarAtual);

    }

    if (tiposMoedas == "euro") {

      valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal*realAtual/euroAtual);

    }

    if (tiposMoedas == "bitcoin") {

      valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valorReal*bitcoin);

    }

    if (tiposMoedas == "real") {

      valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal * realAtual);

    }

    valorBase.innerHTML =new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valorReal);


  }

    balanca.src = "./assets/balanca.png"
  
  }



  converter.addEventListener("click", convertendo);
const converter = document.getElementById('converter')

const bob = document.getElementById('bob')


function convertendo() {


    const tiposMoedas = document.querySelector(".tiposDeMoedas").value

    const moedasBase = document.querySelector(".moedasBase").value

    const valorReal = document.querySelector('#valorReal').value

    let valorBase = document.querySelector('#valorBase')

    let valorConvertido = document.querySelector('#valorConvertido')


    if (moedasBase == "real") {

        const dollarAtual = 0.20

        const euroAtual = 0.19

        const libraAtual = 0.16

        const yenAtual = 30.35

        const realAtual = 1



        if (tiposMoedas == "dollar") {

            valorConvertido.innerHTML = valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal * dollarAtual);

        }

        if (tiposMoedas == "euro") {

            valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal * euroAtual);

        }

        if (tiposMoedas == "libras") {

            valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valorReal * libraAtual);

        }

        if (tiposMoedas == "yen") {

            valorConvertido.innerHTML = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(valorReal * yenAtual);

        }

        if (tiposMoedas == "real") {

            valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal * realAtual);

        }

        valorBase.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal);

    }

    if (moedasBase == "dollar") {

        const dollarAtual = 1

        const euroAtual = 0.92

        const libraAtual = 0.79

        const yenAtual = 150.49

        const realAtual = 4.96



        if (tiposMoedas == "dollar") {

            valorConvertido.innerHTML = valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal * dollarAtual);

        }

        if (tiposMoedas == "euro") {

            valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal * euroAtual);

        }

        if (tiposMoedas == "libras") {

            valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valorReal * libraAtual);

        }

        if (tiposMoedas == "yen") {

            valorConvertido.innerHTML = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(valorReal * yenAtual);

        }

        if (tiposMoedas == "real") {

            valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal * realAtual);

        }

        valorBase.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal);

    }

    if (moedasBase == "euro") {

        const dollarAtual = 1.08

        const euroAtual = 1

        const libraAtual = 0.85

        const yenAtual = 163.07

        const realAtual = 5.37



        if (tiposMoedas == "dollar") {

            valorConvertido.innerHTML = valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal * dollarAtual);

        }

        if (tiposMoedas == "euro") {

            valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal * euroAtual);

        }

        if (tiposMoedas == "libras") {

            valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valorReal * libraAtual);

        }

        if (tiposMoedas == "yen") {

            valorConvertido.innerHTML = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(valorReal * yenAtual);

        }

        if (tiposMoedas == "real") {

            valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal * realAtual);

        }

        valorBase.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal);

    }

    if (moedasBase == "libras") {

        const dollarAtual = 1.27

        const euroAtual = 1.17

        const libraAtual = 1

        const yenAtual = 190.80

        const realAtual = 6.29



        if (tiposMoedas == "dollar") {

            valorConvertido.innerHTML = valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal * dollarAtual);

        }

        if (tiposMoedas == "euro") {

            valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal * euroAtual);

        }

        if (tiposMoedas == "libras") {

            valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valorReal * libraAtual);

        }

        if (tiposMoedas == "yen") {

            valorConvertido.innerHTML = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(valorReal * yenAtual);

        }

        if (tiposMoedas == "real") {

            valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal * realAtual);

        }

        valorBase.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valorReal);

    }

    if (moedasBase == "yen") {

        const dollarAtual = 0.0066

        const euroAtual = 0.0061

        const libraAtual = 0.0052

        const yenAtual = 1

        const realAtual = 0.033



        if (tiposMoedas == "dollar") {

            valorConvertido.innerHTML = valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorReal * dollarAtual);

        }

        if (tiposMoedas == "euro") {

            valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorReal * euroAtual);

        }

        if (tiposMoedas == "libras") {

            valorConvertido.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valorReal * libraAtual);

        }

        if (tiposMoedas == "yen") {

            valorConvertido.innerHTML = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(valorReal * yenAtual);

        }

        if (tiposMoedas == "real") {

            valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal * realAtual);

        }


        valorBase.innerHTML = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(valorReal);

    }

    bob.src = "./assets/balanca.png"
}


converter.addEventListener("click", convertendo)
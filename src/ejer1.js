let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida;

textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2)
{
    let returnValue = texto1 + texto2;
    let inverso = "";
    for(let i = returnValue.length -1; i >= 0; i--)
    {
        inverso += returnValue[i]
    }
    return inverso;
}

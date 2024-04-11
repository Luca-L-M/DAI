import { getCurrencyAbbreviation,getCountryByAbbreviation  } from 'currency-map-country';
let monedaDelPais, codigoPais;

console.clear()
codigoPais = 'AR';
monedaDelPais = Moneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = Moneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function Moneda(abreviacion)
{
    let pais = getCountryByAbbreviation(abreviacion)
    let moneda = getCurrencyAbbreviation(pais)
    if(pais == undefined)
    {
        moneda = null;
    }
    return moneda
}
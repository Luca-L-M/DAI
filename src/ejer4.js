import fs from 'fs';

const ARCHIVO_ENTRADA = "./src/Entrada.txt";
const ARCHIVO_SALIDA = "./src/Salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino)
{
    let datos = fs.readFileSync(origen)
    fs.writeFileSync(destino, datos)
}

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA)
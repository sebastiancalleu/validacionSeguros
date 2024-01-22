let placas = 

let placasExtracted = 




/////////////////////////////////////////////////// NO TOCAR ///////////////////////////////////////////////////////

placasExtracted = JSON.stringify(placasExtracted);

placasExtracted = JSON.parse(placasExtracted)

const placasUnicas = [...new Set(placasExtracted.map((placa) => placa.placa))];

const placasVacias = placasUnicas.filter((placa) => placa === '');

console.log("cantidad de placas alimentadas: ", placas.length)
console.log("placas Extraidas: ", placasExtracted.length)
console.log("placas Unicas: ", placasUnicas.length)

const placasMissing = placas.filter((placa) => !placasUnicas.includes(placa.toUpperCase().trim()))

if (placasExtracted.length !== placasUnicas.length) {
    console.log('CUIDADO, HAY PLACAS REPETIDAS')
}

if (placasVacias.length) {
    console.log('CUIDADO, HAY PLACAS VACIAS')
}

if (placasMissing.length) {
    console.log('CUIDADO, FALTAN PLACAS')
    console.log("numero de placas faltantes: ", placasMissing.length)
    console.log('las placas faltantes son las siguientes: ')
    console.log(placasMissing)

}

const placasRepetidasEntrada = []

for (let placa of placas) {
    if (!placasRepetidasEntrada.includes(placa.toUpperCase().trim())) {
        placasRepetidasEntrada.push(placa.toUpperCase().trim())
    } else if (placa.placa !== '') {
        console.log("placa repetida entrada = ", placa)
    }
}

const placasNormalizada = []
const infoPlacasNormalizadas = []

for (let placa of placasExtracted) {
    if (!placasNormalizada.includes(placa.placa) && placa.placa !== "") {
        placasNormalizada.push(placa.placa)
        infoPlacasNormalizadas.push(placa)
    } else {
        console.log(placa.cedula)
    }
}

const fs = require('node:fs');

fs.writeFile('./INFORMACION_EXTRAIDA_LISTA.js', JSON.stringify(infoPlacasNormalizadas, null, 4), err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Los datos han sido extraidos al archivo INFORMACION_EXTRAIDA_LISTA.js")
  }
});
const celdaInicial = 5801
const celdaFinal = 5942



/////////////////////////////////////////////////// NO TOCAR ///////////////////////////////////////////////////////


const Excel = require('exceljs');
const workbook = new Excel.Workbook();
const fs = require('node:fs');


const executeImport = async () => {
    const placas = []

    await workbook.xlsx.readFile('seguros.xlsx')

    for (let index = celdaInicial; index <= celdaFinal; index++ ) {
        var worksheet = workbook.getWorksheet(1);
        var row = worksheet.getRow(index);
        const placa = row.getCell(1).value
        placas.push(placa);
    }

    console.log(`placas desde la celda ${celdaInicial} hasta la celda ${celdaFinal}`)

    const fs = require('node:fs');

    fs.writeFile('./PLACAS_EXCEL.js', JSON.stringify(placas, null, 4), err => {
    if (err) {
        console.error(err);
    } else {
        console.log("Los datos han sido extraidos al archivo PLACAS_EXCEL.js")
    }
    });
}


executeImport();
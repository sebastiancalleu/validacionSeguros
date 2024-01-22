const celdaInicial = 3601
const celdaFinal = 3700



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
    console.log(placas)
}


executeImport();
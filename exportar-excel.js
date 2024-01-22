var Excel = require('exceljs');
var workbook = new Excel.Workbook();
const { dataPlacas } = require('./INFORMACION_LISTA_EXPORTACION');

workbook.xlsx.readFile('seguros.xlsx')
    .then(function() {
        let count = 0;
        for (let index = 2; index < 5000; index++ ) {
            var worksheet = workbook.getWorksheet(1);
            var row = worksheet.getRow(index);
            const placa = row.getCell(1).value
            const placaFinded = dataPlacas.find((infoPlaca) => infoPlaca.placa === placa.toUpperCase().trim());
            if (placaFinded) {
                row.getCell(2).value = Number(placaFinded.modelo);
                row.getCell(6).value = placaFinded.nombres;
                if(Number(placaFinded.cedula) !== row.getCell(7).value) {
                    row.getCell(8).value = 'X';
                    row.getCell(11).value = 'X';
                    row.getCell(12).value = 'X';
                    row.getCell(13).value = 'X';
                    row.getCell(14).value = 'X';
                }
                row.getCell(7).value = Number(placaFinded.cedula);
                row.getCell(9).value = placaFinded.compañia;
                row.getCell(10).value = placaFinded.finvigencia;
                row.commit();
                count += 1;
            } else {
                if (index < 3700) {
                    console.log(placa)
                }
            }
        }

        console.log(count)
        return workbook.xlsx.writeFile('new3700.xlsx');
    })
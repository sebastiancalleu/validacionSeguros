placas = 



/////////////////////////////////////////////////// NO TOCAR ///////////////////////////////////////////////////////


wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

placaInfo = []

executeAllPlacas = async() => {
    for (let placa of placas) {
        document.querySelector('[id="frmConsultaSisa:placaId"]').value = placa
        document.querySelector('[id="frmConsultaSisa:btnAceptarFiltro"]').click()

        await wait(6000);

        tablaPoliza = document.querySelector('[id="frmConsultaSisa:listaHistoricoPoliza:tb"]')

        if (tablaPoliza) {
            fechas = [];
            
            rows = tablaPoliza.querySelectorAll('tr')
            
            if (tablaPoliza && rows.length) {
                for (let row of rows) {
                    fechas.push(row.querySelectorAll('td')[3].innerText)
                }
            }
            
            fechas = fechas.map((fecha) => {
                fechaArray = fecha.split('/')
                fechaArray.reverse()
                fechaArray[1] -= 1;
                return new Date(...fechaArray)
            })
            
            
            fechaMayor = fechas.reduce(
                (fechaPrev, Current) => fechaPrev > Current ? fechaPrev : Current,
                '01/01/1900'
            )
    
            targetedRow = rows[fechas.indexOf(fechaMayor)]
    
            targetedRow.querySelectorAll('td')[5].querySelector('input').click()
    
            await wait(4000);
            
            const infoPlaca = {
                compañia: document.querySelectorAll('[class="panelInfo"]')[4].querySelectorAll('[class=" Table_B_01"]')[0].innerText,
                finvigencia: document.querySelectorAll('[class="panelInfo"]')[4].querySelectorAll('[class=" Table_B_01"]')[5].innerText,
                placa: document.querySelectorAll('[class="panelInfo"]')[5].querySelectorAll('[class=" Table_B_01"]')[0].innerText,
                modelo: document.querySelectorAll('[class="panelInfo"]')[5].querySelectorAll('[class=" Table_B_01"]')[6].innerText,
                cedula: document.querySelectorAll('[class="panelInfo"]')[6].querySelectorAll('[class=" Table_B_01"]')[1].innerText,
                nombres: document.querySelectorAll('[class="panelInfo"]')[6].querySelectorAll('[class=" Table_B_01"]')[2].innerText,
            }
            placaInfo.push(infoPlaca);
            document.querySelector('[id="frmConsultaSisa:frmHistoriaPolizaSisa:historialSisaPane_header_controls"]').querySelector('img').click()
    
            await wait(1000)

        } else {
            console.log("placa no existe: ", placa)
            continue
        }

        console.log(placaInfo);
        console.log(placaInfo.length);
    }
    console.log(placaInfo)
}

executeAllPlacas();









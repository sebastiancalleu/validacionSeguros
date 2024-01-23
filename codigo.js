placas = [
    "Ghy540",
    "Jps455 ",
    "Gwz032 ",
    "Jzk000 ",
    "Jos440",
    "JPT468",
    "FQS064",
    "Miq558 ",
    "FGV936",
    "ICZ675",
    "DSU893",
    "Iy0544 ",
    "FIS896",
    "Cpv680",
    "KHH064",
    "DEW622",
    "EOX436",
    "Jqu758 ",
    "Mnk380",
    "HAL813",
    "Mfy938",
    "MTS604",
    "Gik289 ",
    "KMS418",
    "EOX148",
    "HXT683",
    "MTZ966",
    "Igx118 ",
    "DSZ237",
    "IEY870",
    "HYS245",
    "GWY303",
    "Jox201 ",
    "DHY519",
    "Kpq959",
    "FHP027",
    "Iav490 ",
    "JOP542",
    "FSX330",
    "Ghy760",
    "JZO932",
    "RHT494",
    "Hfk269",
    "JOQ189",
    "JOT363",
    "Jqr488",
    "EIN593",
    "EGX395",
    "HZU518",
    "KIZ973",
    "Rkk382",
    "GRN580",
    "Urp355",
    "FUM557",
    "Dfy628 ",
    "Jqr071 ",
    "EIL006",
    "USV130",
    "Muk328 ",
    "Jhn582 ",
    "JDO184",
    "Msr346",
    "Jzm751 ",
    "MUK041",
    "Hvu345",
    "EGM012",
    "USY132",
    "Ejn369 ",
    "Jbn192",
    "KHH356",
    "Kkt997 ",
    "JYZ438",
    "Fqp680 ",
    "DJK926",
    "ZXW479",
    "JYR373",
    "HZV790",
    "EIN332",
    "Joq951 ",
    "Djk935 ",
    "GRR628",
    "MHL051",
    "KHK974",
    "Hnz581",
    "Dop521 ",
    "JDV999",
    "Jix918 ",
    "MNR922",
    "JSV344",
    "EFV342",
    "EIO309",
    "LAX452",
    "MOT066",
    "KOO767",
    "FSX910",
    "KBW123",
    "CDN034",
    "RIF579",
    "HDV875",
    "JHV182",
    "EON100",
    "JCR505",
    "DER637",
    "JCS325",
    "ELU309",
    "USX397",
    "IVM273",
    "FAP438",
    "EDW227",
    "JKK940",
    "BXQ204",
    "GZM482",
    "FGI403",
    "Jco829",
    "DTX410",
    "HWT208",
    "FQX270",
    "FQQ339",
    "KBU946",
    "BXU165",
    "EPU918",
    "FHA193",
    "HXZ027",
    "Epm372",
    "BLN428",
    "HAK358",
    "FHM205",
    "EOV515",
    "DFR445",
    "BXB032",
    "FQU143",
    "RDZ435",
    "JYT346",
    "MOT264",
    "EPP464",
    "JHR620",
    "GJN267",
    "HVW018",
    "MIL840",
    "FQT219",
    "BZH629",
    "MCW180"
]


/////////////////////////////////////////////////// NO TOCAR ///////////////////////////////////////////////////////


wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

placaInfo = []

executeAllPlacas = async() => {
    for (let placa of placas) {
        document.querySelector('[id="frmConsultaSisa:placaId"]').value = placa
        document.querySelector('[id="frmConsultaSisa:btnAceptarFiltro"]').click()

        await wait(5000);

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
    
            await wait(3000);
            
            const infoPlaca = {
                compañia: document.querySelectorAll('[class="panelInfo"]')[4].querySelectorAll('[class=" Table_B_01"]')[0].innerText,
                finvigencia: document.querySelectorAll('[class="panelInfo"]')[4].querySelectorAll('[class=" Table_B_01"]')[5].innerText,
                placa: document.querySelectorAll('[class="panelInfo"]')[5].querySelectorAll('[class=" Table_B_01"]')[0].innerText,
                modelo: document.querySelectorAll('[class="panelInfo"]')[5].querySelectorAll('[class=" Table_B_01"]')[6].innerText,
                cedula: document.querySelectorAll('[class="panelInfo"]')[6].querySelectorAll('[class=" Table_B_01"]')[1].innerText,
                nombres: document.querySelectorAll('[class="panelInfo"]')[6].querySelectorAll('[class=" Table_B_01"]')[2].innerText,
                marca: document.querySelectorAll('[class="panelInfo"]')[5].querySelectorAll('[class=" Table_B_01"]')[2].innerText,
                vehiculo: document.querySelectorAll('[class="panelInfo"]')[5].querySelectorAll('[class=" Table_B_01"]')[5].innerText,
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









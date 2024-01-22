const dataPlacas = [
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "09/06/2022",
    placa: "UCK206",
    modelo: "2015",
    cedula: "1152446374",
    nombres: "TORRES SERNA ALEJANDRO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "31/05/2023",
    placa: "DHS914",
    modelo: "2013",
    cedula: "71779356",
    nombres: "JUAN DAVID MURILLO LONDOÑO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "05/05/2019",
    placa: "ISU654",
    modelo: "2017",
    cedula: "28423401",
    nombres: "ELENA GARNICA DE BLANCO",
  },
  {
    compañia: "SBS",
    finvigencia: "10/06/2024",
    placa: "JCN235",
    modelo: "2017",
    cedula: "1128481362",
    nombres: "AGUDELO PALACIOS, ANDRES FELIPE",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "27/01/2023",
    placa: "DES094",
    modelo: "2011",
    cedula: "43472870",
    nombres: "Angela Patricia Cardona Silva",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "26/01/2025",
    placa: "EOT083",
    modelo: "2018",
    cedula: "1216726580",
    nombres: "MATEO PAREJA RAMIREZ",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "04/07/2019",
    placa: "IFK184",
    modelo: "2016",
    cedula: "72225334",
    nombres: "MOLINA ESTRADA ORLANDO ANTONIO",
  },
  {
    compañia: "SBS",
    finvigencia: "25/08/2024",
    placa: "JIW059",
    modelo: "2017",
    cedula: "71611136",
    nombres: "TORRES RODRIGUEZ, MARIO DE JESUS",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "31/12/2023",
    placa: "MVU849",
    modelo: "2014",
    cedula: "43972860",
    nombres: "MARIA ALEJANDRA GOMEZ GOMEZ",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "11/04/2023",
    placa: "KIZ806",
    modelo: "2011",
    cedula: "1128417349",
    nombres: "EDISON TORRES ALZATE",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "10/02/2023",
    placa: "GEL396",
    modelo: "2019",
    cedula: "25808263",
    nombres: "TORRES ARCIA, ROSA AYDA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/07/2024",
    placa: "FIS746",
    modelo: "2019",
    cedula: "70512243",
    nombres: "JOSE IGNACIO LOPEZ BETANCUR",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "31/12/2024",
    placa: "IOS203",
    modelo: "2016",
    cedula: "3401238",
    nombres: "HURNALDO DE JESUS MAZO GARCIA",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "08/06/2024",
    placa: "JVN642",
    modelo: "2021",
    cedula: "80400835",
    nombres: "AREVALO TORRES,TITO SAUL",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/06/2021",
    placa: "JOX992",
    modelo: "2021",
    cedula: "16627333",
    nombres: "FERNANDO PAZ MERA",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2023",
    placa: "HGU190",
    modelo: "2013",
    cedula: "32403009",
    nombres: "ORREGO BOLIVAR, MARTHA LUCIA.",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/07/2019",
    placa: "KIH411",
    modelo: "2011",
    cedula: "30275130",
    nombres: "JUANITA RIVAS DURAN",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "14/03/2022",
    placa: "MIY044",
    modelo: "2013",
    cedula: "10268870",
    nombres: "GOMEZ GOMEZ, JUAN CARLOS",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "18/04/2023",
    placa: "JIV707",
    modelo: "2017",
    cedula: "1020431510",
    nombres: "JUAN DAVID LOPEZ",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/07/2022",
    placa: "JOQ722",
    modelo: "2021",
    cedula: "1035863970",
    nombres: "ALVARO JOSE TORRADO SALINAS",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "07/12/2019",
    placa: "MVT905",
    modelo: "2013",
    cedula: "1128444352",
    nombres: "VIVIANA PEINADO TORDECILLA",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "10/06/2024",
    placa: "FXS034",
    modelo: "2020",
    cedula: "43878477",
    nombres: "KATERINE OSORIO CARVAJAL",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "05/04/2024",
    placa: "KPQ335",
    modelo: "2022",
    cedula: "1152213742",
    nombres: "Juan Diego Escobar Sanchez",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "22/06/2024",
    placa: "GRM754",
    modelo: "2020",
    cedula: "42751362",
    nombres: "HURTADO CANO, LUZ PIEDAD",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "07/06/2024",
    placa: "UEM626",
    modelo: "2015",
    cedula: "41922075",
    nombres: "CLAUDIA MARIA ARIAS HOYOS",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "31/08/2024",
    placa: "RHS265",
    modelo: "2011",
    cedula: "1152184663",
    nombres: "SAMUEL DAVID VALENCIA GRISALES",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "15/05/2024",
    placa: "JZO650",
    modelo: "2021",
    cedula: "21854765",
    nombres: "FARLEY XIOMARA AMAYA",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/12/2024",
    placa: "JBR153",
    modelo: "2017",
    cedula: "71732841",
    nombres: "CESAR ARTURO GUTIERREZ AGUDELO",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "10/06/2024",
    placa: "UEK457",
    modelo: "2015",
    cedula: "43430996",
    nombres: "CAICEDO ZAPATA, LUZ BETTY",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "10/06/2023",
    placa: "JOT879",
    modelo: "2021",
    cedula: "36951745",
    nombres: "YANETH LUCIA DAVILA ERIRA",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "13/06/2024",
    placa: "JZO939",
    modelo: "2022",
    cedula: "19420980",
    nombres: "GUILLERMO CAICEDO MENDEZ",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "19/12/2024",
    placa: "JCS098",
    modelo: "2017",
    cedula: "1041228887",
    nombres: "ELIZABET CHAVERRA HINCAPIE",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/11/2022",
    placa: "JZO022",
    modelo: "2022",
    cedula: "1232394284",
    nombres: "NEYLER ALEJANDRO ESCALANTE CARRILLO",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "30/09/2023",
    placa: "HTR543",
    modelo: "2014",
    cedula: "1152188617",
    nombres: "GIRALDO TRUJILLO SARA",
  },
  {
    compañia: "ESTADO",
    finvigencia: "10/06/2022",
    placa: "UEK568",
    modelo: "2015",
    cedula: "43875471",
    nombres: "JOHANNA DEL SOCORRO CASTRILLON CASTAÑEDA",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "09/08/2024",
    placa: "EHL418",
    modelo: "2017",
    cedula: "71332199",
    nombres: "Alejandro Arboleda Avila",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "10/06/2024",
    placa: "JZN160",
    modelo: "2022",
    cedula: "1015437837",
    nombres: "PAULA ANDREA BETANCOURT ANGEL",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "22/02/2025",
    placa: "IYO233",
    modelo: "2016",
    cedula: "1017127129",
    nombres: "MADRIGAL RUIDIAZ, JAQUELINE",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "11/01/2025",
    placa: "EFU825",
    modelo: "2018",
    cedula: "1018222835",
    nombres: "SAMUEL ALVAREZ BEDOYA",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "06/12/2024",
    placa: "HNU199",
    modelo: "2014",
    cedula: "43006831",
    nombres: "LUZ MERY CALLE RODAS",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "10/06/2024",
    placa: "JOP642",
    modelo: "2020",
    cedula: "71686297",
    nombres: "CANO CARDONA, ELKIN DE JESUS",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "02/06/2024",
    placa: "UEL113",
    modelo: "2015",
    cedula: "43927709",
    nombres: "LEIDY JOHANA HERNANDEZ RAMIREZ",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "31/05/2022",
    placa: "IYO859",
    modelo: "2017",
    cedula: "2756576",
    nombres: "WILFREDO ANTONIO RODRIGUEZ ARROYO",
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "27/07/2023",
    placa: "DBY140",
    modelo: "2009",
    cedula: "43539756",
    nombres: "SANDRA YOLIMA GIRALDO GIL",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "05/08/2024",
    placa: "ZYR383",
    modelo: "2015",
    cedula: "71715876",
    nombres: "CESAR AUGUSTO BOTERO ZULUAGA",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/04/2024",
    placa: "IYU032",
    modelo: "2017",
    cedula: "42993663",
    nombres: "SANCHEZ TORRES, MAGDA CECILIA",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "10/01/2023",
    placa: "IUA862",
    modelo: "2013",
    cedula: "70508311",
    nombres: "HERRERA AGUIRRE, HECTOR RODRIG",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "26/01/2022",
    placa: "MWX844",
    modelo: "2014",
    cedula: "1130649508",
    nombres: "FREDDY HERNANDO RODRIGUEZ DE J",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/11/2022",
    placa: "KMS374",
    modelo: "2012",
    cedula: "1017243882",
    nombres: "STEFANIA CARVAJAL GUISAO",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "27/09/2024",
    placa: "FQT261",
    modelo: "2019",
    cedula: "1036609720",
    nombres: "RESTREPO ORTIZ LILIANA MARCELA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/05/2024",
    placa: "UEO169",
    modelo: "2015",
    cedula: "15435524",
    nombres: "JUAN PABLO TAMAYO CORDOBA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "21/06/2022",
    placa: "GEX329",
    modelo: "2020",
    cedula: "71361375",
    nombres: "EDWIN ARLEY CRUZ CASTRO",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "12/12/2024",
    placa: "JIV268",
    modelo: "2017",
    cedula: "70097692",
    nombres: "EUSSE TOLEDO, RICARDO LEON",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "10/06/2024",
    placa: "JZP181",
    modelo: "2021",
    cedula: "71319453",
    nombres: "GRACIANO TORRES JOHN ARLEY",
  },
  {
    compañia: "SBS",
    finvigencia: "11/06/2024",
    placa: "DJP883",
    modelo: "2012",
    cedula: "71364924",
    nombres: "RENDON LOAIZA, ANDERSON",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "11/06/2024",
    placa: "IHP703",
    modelo: "2016",
    cedula: "43735754",
    nombres: "VELASQUEZ RAIGOSA ANA",
  },
  {
    compañia: "SBS",
    finvigencia: "19/02/2024",
    placa: "JSV644",
    modelo: "2021",
    cedula: "42985612",
    nombres: "GONZALEZ VAHOS, MARIA CELMIRA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "BXQ759",
    modelo: "2011",
    cedula: "43496759",
    nombres: "GLORIA IVONNE MESA DURANGO",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "06/04/2024",
    placa: "GEW706",
    modelo: "2019",
    cedula: "17070195",
    nombres: "SALAZAR RUIZ, ENRIQUE",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "11/06/2022",
    placa: "USZ271",
    modelo: "2016",
    cedula: "71749159",
    nombres: "OROZCO ECHEVERRY WILDER GERMAN",
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "16/08/2024",
    placa: "KHH671",
    modelo: "2011",
    cedula: "21778438",
    nombres: "DUQUE PARRA GLORIA AMPARO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/02/2024",
    placa: "EPU265",
    modelo: "2018",
    cedula: "32480972",
    nombres: "BEATRIZ ELENA HOYOS HENAO",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "21/07/2024",
    placa: "LAW520",
    modelo: "2015",
    cedula: "1038063899",
    nombres: "JUAN FERNANDO JARAMILLO GIRALD",
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "11/06/2024",
    placa: "DTZ068",
    modelo: "2018",
    cedula: "32297197",
    nombres: "PAULA ANDREA RAM?REZ ECHEVERRY",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "19/07/2024",
    placa: "USV050",
    modelo: "2016",
    cedula: "1152222139",
    nombres: "RUIZ LOPEZ JUAN",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "11/01/2025",
    placa: "RJO817",
    modelo: "2011",
    cedula: "1030535978",
    nombres: "RIVERA ANDRADE ELKYN MARTIN",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "02/12/2024",
    placa: "JHP856",
    modelo: "2017",
    cedula: "900538351",
    nombres: "VANGELO SAS",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "11/06/2024",
    placa: "DLZ865",
    modelo: "2012",
    cedula: "70434840",
    nombres: "ELKIN DE JESUS MONROY GOEZ",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "15/03/2024",
    placa: "JIZ122",
    modelo: "2018",
    cedula: "3351444",
    nombres: "GIRALDO ZULUAGA, ROBERTO ANTONIO",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "14/12/2024",
    placa: "JSR235",
    modelo: "2020",
    cedula: "42899749",
    nombres: "LINA MARIA ECHAVARRIA BETANCUR",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "02/08/2021",
    placa: "JZK278",
    modelo: "2022",
    cedula: "1000764322",
    nombres: "TOMAS KOOSE GARCIA",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/12/2019",
    placa: "EHZ242",
    modelo: "2018",
    cedula: "1020755529",
    nombres: "GUERRERO SILVA JULIANA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "16/11/2024",
    placa: "IYP410",
    modelo: "2016",
    cedula: "43011448",
    nombres: "LUZ STELLA PINEDA CARVAJAL",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "11/06/2022",
    placa: "RIN756",
    modelo: "2011",
    cedula: "71274593",
    nombres: "GIRALDO ARREDONDO, HAMILTON",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "13/10/2024",
    placa: "HFN383",
    modelo: "2014",
    cedula: "43602514",
    nombres: "BLANCA MONICA OLAYA",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "11/06/2024",
    placa: "JOQ488",
    modelo: "2021",
    cedula: "43998993",
    nombres: "NATALIA ANDREA VELASQUEZ VALEN",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "11/06/2024",
    placa: "JKM597",
    modelo: "2018",
    cedula: "53141271",
    nombres: "MARIN RIVEROS LINA MARCELA",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "31/03/2024",
    placa: "KLP724",
    modelo: "2011",
    cedula: "1193598462",
    nombres: "GUZMAN PATI?O VALENTINA",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/05/2024",
    placa: "EFY900",
    modelo: "2017",
    cedula: "1022414096",
    nombres: "PEREZ GOMEZ, CRISTHIAN ROBERTO",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/04/2024",
    placa: "DSU073",
    modelo: "2017",
    cedula: "1020421915",
    nombres: "SALAZAR ALZATE,LEYDI VIVIANA",
  },
  {
    compañia: "SBS",
    finvigencia: "14/01/2025",
    placa: "JIZ334",
    modelo: "2017",
    cedula: "43257340",
    nombres: "RIVERA RAMIREZ, MARLYN JANET",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "21/09/2021",
    placa: "DGU248",
    modelo: "2016",
    cedula: "21526283",
    nombres: "ERIKA JULIETH GOMEZ OSORIO",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "07/01/2024",
    placa: "JSQ390",
    modelo: "2021",
    cedula: "1102813191",
    nombres: "DIANA MARCELA MONTES MERI?O",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "12/06/2024",
    placa: "LAW391",
    modelo: "2015",
    cedula: "1037577368",
    nombres: "BERRIO HERNANDEZ, DEISY YOLIMA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "21/03/2024",
    placa: "GWY778",
    modelo: "2020",
    cedula: "32459510",
    nombres: "OLGA HELENA GONZALEZ DE VILLEGAS",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "20/09/2022",
    placa: "EIM959",
    modelo: "2018",
    cedula: "1047412579",
    nombres: "ALEXANDER GIOVANNI TORRES PEREZ",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/04/2024",
    placa: "GVO143",
    modelo: "2020",
    cedula: "1152702057",
    nombres: "ELIANA AGUDELO MEJIA",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "30/09/2023",
    placa: "MTZ796",
    modelo: "2012",
    cedula: "1018349054",
    nombres: "BRAVO ECHAVARRIA, SEBASTIAN",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "01/03/2024",
    placa: "DLZ683",
    modelo: "2013",
    cedula: "39175226",
    nombres: "RAMIREZ VALENCIA DIANA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/06/2024",
    placa: "MTZ881",
    modelo: "2013",
    cedula: "1152718128",
    nombres: "JUAN MANUEL JARAMILLO TAPIAS",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "12/06/2022",
    placa: "FUQ686",
    modelo: "2019",
    cedula: "2754606",
    nombres: "MARTINEZ SUAREZ, CESAR FERNAND",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "12/12/2022",
    placa: "GEL728",
    modelo: "2019",
    cedula: "43795219",
    nombres: "VARGAS MORALES, CLAUDIA DEL PI",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/07/2024",
    placa: "GEY116",
    modelo: "2020",
    cedula: "15956931",
    nombres: "MAYA MAYA NELSON DE JESUS",
  },
  {
    compañia: "SBS",
    finvigencia: "12/06/2023",
    placa: "MWY068",
    modelo: "2014",
    cedula: "1020405533",
    nombres: "SALDARRIAGA RAMIREZ, JUAN PABLO",
  },
  {
    compañia: "SBS",
    finvigencia: "12/06/2024",
    placa: "FGX514",
    modelo: "2008",
    cedula: "43061304",
    nombres: "CALDERON CEBALLO, MERCEDES EMILIA",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "25/09/2024",
    placa: "DSY465",
    modelo: "2018",
    cedula: "1020827670",
    nombres: "SOTO MONTERO DIANA SOFIA",
  },
  {
    compañia: "ESTADO",
    finvigencia: "23/01/2024",
    placa: "GRN328",
    modelo: "2020",
    cedula: "21394166",
    nombres: "MARIA EUGENIA ZAPATA PALACIO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "12/07/2024",
    placa: "DMS934",
    modelo: "2017",
    cedula: "1037591566",
    nombres: "ANDREA MAZO OSORIO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/05/2022",
    placa: "IDM222",
    modelo: "2015",
    cedula: "43400099",
    nombres: "LICENIA MARIA DIOSA USUGA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/05/2024",
    placa: "EOU264",
    modelo: "2018",
    cedula: "43866973",
    nombres: "AURA MARIA PALACIO GONZALEZ",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "21/12/2024",
    placa: "FUM657",
    modelo: "2019",
    cedula: "1016004566",
    nombres: "Cindy Paola Guerra Medina",
  },
  {
    compañia: "ZURICH-QBE",
    finvigencia: "10/04/2023",
    placa: "JZM081",
    modelo: "2022",
    cedula: "1020407705",
    nombres: "Juanfernando Perezvargas",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/08/2024",
    placa: "MOM960",
    modelo: "2009",
    cedula: "71269075",
    nombres: "ALVAREZ LOPEZ WILMAR ALEXANDER",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/03/2024",
    placa: "GWY338",
    modelo: "2020",
    cedula: "1128404691",
    nombres: "FRANCISCO RAFAEL HENAO GIL",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "07/07/2024",
    placa: "ZYS826",
    modelo: "2014",
    cedula: "1130606054",
    nombres: "VERGARA ZAMARRA, VERGARA ZAMARRA,SANT",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "JOT635",
    modelo: "2020",
    cedula: "1152685192",
    nombres: "DIANA CAROLINA MENDEZ ROBLEDO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/09/2024",
    placa: "JZN225",
    modelo: "2021",
    cedula: "19054007",
    nombres: "ALBERTO SERNA HURTADO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/11/2024",
    placa: "EGX552",
    modelo: "2018",
    cedula: "71786244",
    nombres: "JUAN DAVID ARBELAEZ RESTREPO",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "12/05/2024",
    placa: "JYS608",
    modelo: "2021",
    cedula: "42876855",
    nombres: "CALLEGA VERGARA, OLGA PATRICIA",
  },
  {
    compañia: "PREVISORA",
    finvigencia: "03/09/2023",
    placa: "JZO753",
    modelo: "2022",
    cedula: "1048021357",
    nombres: "URAN QUICENO EDINSON FERNANDO",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/05/2024",
    placa: "JHU964",
    modelo: "2018",
    cedula: "71707799",
    nombres: "MAURICIO ALBERTO RESTREPO BUSTAMANTE",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "13/07/2024",
    placa: "RNP935",
    modelo: "2012",
    cedula: "98665255",
    nombres: "LOPEZ LOPEZ, ROBINSON ARLEY",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/03/2023",
    placa: "JSV082",
    modelo: "2019",
    cedula: "32241638",
    nombres: "LINA BOLIVAR",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "30/03/2020",
    placa: "FQW597",
    modelo: "2019",
    cedula: "1094903007",
    nombres: "VALENCIA DURANGO JOHANA MARIA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/09/2023",
    placa: "JSV191",
    modelo: "2021",
    cedula: "43099626",
    nombres: "GLORIA ISABEL SALAZAR FRANCO",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "12/11/2024",
    placa: "EPR427",
    modelo: "2019",
    cedula: "1128407275",
    nombres: "JUAN CARLOS REYES YANQUEN",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/10/2023",
    placa: "HDX989",
    modelo: "2014",
    cedula: "71756845",
    nombres: "JORGE HERNAN CANO PUERTA",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "13/07/2024",
    placa: "FQP895",
    modelo: "2019",
    cedula: "31324404",
    nombres: "SARASSA MORENO, JACLYN DENNIERE",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/02/2024",
    placa: "IAX506",
    modelo: "2015",
    cedula: "70697007",
    nombres: "CARLOS ALBERTO SALDARRIAGA PINEDA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "14/02/2024",
    placa: "FXQ631",
    modelo: "2019",
    cedula: "1035850136",
    nombres: "JUAN CAMILO AYALA CARMONA",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/05/2024",
    placa: "JKK763",
    modelo: "2017",
    cedula: "1143862420",
    nombres: "RODRIGUEGUEZ LAURA JIMENA",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "12/06/2024",
    placa: "HGW557",
    modelo: "2014",
    cedula: "32539810",
    nombres: "ANGELA MARIA PEREZ CONTRERAS",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "10/09/2023",
    placa: "DAH725",
    modelo: "2009",
    cedula: "8156288",
    nombres: "Julian David Galeano Ca?as",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "12/06/2024",
    placa: "INR629",
    modelo: "2017",
    cedula: "43153811",
    nombres: "DUQUE PAOLA ANDREA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/09/2024",
    placa: "JHR257",
    modelo: "2017",
    cedula: "71318795",
    nombres: "JUAN GONZALO TORO VELASQUEZ",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "12/06/2024",
    placa: "KKK783",
    modelo: "2012",
    cedula: "1037639649",
    nombres: "SEBASTIAN HOYOS GALLON",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/11/2023",
    placa: "FXM258",
    modelo: "2019",
    cedula: "1127340737",
    nombres: "EDUIN RICARDO QUINTERO CAMPILLO",
  },
  {
    compañia: "ESTADO",
    finvigencia: "03/05/2024",
    placa: "EIL321",
    modelo: "2018",
    cedula: "79902713",
    nombres: "CARLOS LEONARDO HINESTROZA OLAVE",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "23/09/2022",
    placa: "MTY677",
    modelo: "2013",
    cedula: "71770439",
    nombres: "VASQUEZ BUSTAMANTE ALEXANDER",
  },
  {
    compañia: "SBS",
    finvigencia: "01/03/2024",
    placa: "FSX423",
    modelo: "2019",
    cedula: "71391010",
    nombres: "VELEZ CANO, WILTON DE JESUS",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "18/12/2024",
    placa: "KAP232",
    modelo: "2012",
    cedula: "42885728",
    nombres: "ANA ISABEL TORO",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "21/06/2022",
    placa: "HEY571",
    modelo: "2013",
    cedula: "98538972",
    nombres: "PABLO ANDRES GARCES VASQUEZ",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/11/2024",
    placa: "MST248",
    modelo: "2013",
    cedula: "70114652",
    nombres: "ALONSO GALEANO BOTERO",
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2023",
    placa: "GVQ086",
    modelo: "2020",
    cedula: "1152472506",
    nombres: "DANILO ARIAS CASTAÑO",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2024",
    placa: "JKP092",
    modelo: "2018",
    cedula: "3506952",
    nombres: "MOLINA ARANGO, EDISSON GIOVANNY",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "05/03/2023",
    placa: "JQT178",
    modelo: "2021",
    cedula: "43869935",
    nombres: "BALBINA MILENA CHAVES HOLGUIN",
  },
  {
    compañia: "ESTADO",
    finvigencia: "13/06/2023",
    placa: "GEW922",
    modelo: "2019",
    cedula: "74080968",
    nombres: "CESAR JULIAN GUITIERREZ SILVA",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "12/03/2024",
    placa: "EOU840",
    modelo: "2019",
    cedula: "43827673",
    nombres: "ARIAS SEPULVEDA LIBIA CRISTINA",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "30/11/2024",
    placa: "EGZ883",
    modelo: "2018",
    cedula: "70906623",
    nombres: "ZULUAGA AGUDELO DUBERNEY",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/01/2022",
    placa: "KJA609",
    modelo: "2011",
    cedula: "37927566",
    nombres: "MARTHA DEL SOCORRO MADARIAGA MARIN",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/07/2024",
    placa: "JYQ369",
    modelo: "2021",
    cedula: "1040748348",
    nombres: "GERALDINE RAMIREZ SANCHEZ",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "23/09/2024",
    placa: "FSO154",
    modelo: "2020",
    cedula: "13884371",
    nombres: "MARQUEZ SAMUEL SALCEDO",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "13/06/2024",
    placa: "ELY853",
    modelo: "2018",
    cedula: "1013627609",
    nombres: "CARLOS ANDRES RAMIREZ VERGARA",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/05/2024",
    placa: "EGK543",
    modelo: "2018",
    cedula: "1020432442",
    nombres: "MONICA TATIANA SALDARRIAGA CAS",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/10/2022",
    placa: "GEZ499",
    modelo: "2020",
    cedula: "1152206540",
    nombres: "JOSE DANIEL MEJIA ZULUAGA",
  },
  {
    compañia: "SBS",
    finvigencia: "13/06/2024",
    placa: "HPL551",
    modelo: "2015",
    cedula: "8294097",
    nombres: "GUZMAN ISAZA, JORGE LUIS",
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "13/06/2024",
    placa: "DIL666",
    modelo: "2011",
    cedula: "1037574118",
    nombres: "HENAO CUARTAS ANDRES",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "03/06/2023",
    placa: "IYU570",
    modelo: "2017",
    cedula: "1037601248",
    nombres: "DANIELA TABORDA VARGAS",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/04/2024",
    placa: "MTZ080",
    modelo: "2014",
    cedula: "43061943",
    nombres: "GLORIA MARIA MEDINA ESTRADA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "12/08/2022",
    placa: "EPR638",
    modelo: "2019",
    cedula: "1152201422",
    nombres: "RICARDO STIVEN MEJIA BOLIVAR",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "16/06/2023",
    placa: "DSU564",
    modelo: "2018",
    cedula: "70519224",
    nombres: "FRANCO SALAZAR ORLANDO DE JESU",
  },
  {
    compañia: "ESTADO",
    finvigencia: "26/11/2024",
    placa: "ENZ964",
    modelo: "2019",
    cedula: "1020426593",
    nombres: "KATERINE ROXANA ARBOLEDA YATE",
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "DQP876",
    modelo: "2018",
    cedula: "41780968",
    nombres: "PATRICIA DOMINGUEZ VELEZ",
  },
  {
    compañia: "SBS",
    finvigencia: "14/04/2024",
    placa: "EIO564",
    modelo: "2019",
    cedula: "72252508",
    nombres: "CORREA MARTINEZ, JUAN PABLO",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "16/06/2024",
    placa: "IEY729",
    modelo: "2015",
    cedula: "24310938",
    nombres: "BOTERO GLORIA INES",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "02/09/2024",
    placa: "IIZ306",
    modelo: "2015",
    cedula: "52904089",
    nombres: "MORON OLIS NIDIA ESMERALDA",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "14/06/2024",
    placa: "EON476",
    modelo: "2019",
    cedula: "98694608",
    nombres: "FERNANDEZ VALENCIA, ANDRES FEL",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/04/2024",
    placa: "FXO037",
    modelo: "2019",
    cedula: "71774247",
    nombres: "DANIEL JIMENEZ LOPEZ DE MESA",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "11/09/2024",
    placa: "USY377",
    modelo: "2016",
    cedula: "32295488",
    nombres: "ARENAS GOEZ, NATALIA ANDREA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/08/2024",
    placa: "JYU046",
    modelo: "2022",
    cedula: "39169192",
    nombres: "LUZ DARY OSPINA OSPINA",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "03/12/2024",
    placa: "GLV871",
    modelo: "2020",
    cedula: "1037570312",
    nombres: "DIANA MARIA ALVAREZ MUNOZ",
  },
  {
    compañia: "SBS",
    finvigencia: "14/06/2022",
    placa: "DLZ808",
    modelo: "2012",
    cedula: "98491448",
    nombres: "CASTA?O ORREGO, JOS? NICOL?S",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "17/04/2024",
    placa: "GVP587",
    modelo: "2020",
    cedula: "52809427",
    nombres: "CLAUDIA MIREYA RUIZ RINCON",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "30/08/2024",
    placa: "EOL578",
    modelo: "2019",
    cedula: "79801956",
    nombres: "BUITRAGO MU?OZ,GABRIEL EDUARDO",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "14/06/2024",
    placa: "EFX513",
    modelo: "2018",
    cedula: "8407919",
    nombres: "BUILES MONSALVE, HECTOR RAUL",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "17/06/2024",
    placa: "JSV543",
    modelo: "2021",
    cedula: "98701682",
    nombres: "MONTOYA CUARTAS, JULIAN MAURICIO",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "29/09/2024",
    placa: "EIN629",
    modelo: "2018",
    cedula: "98529861",
    nombres: "JARAMILLO JARAMILLO, ALEXANDER DE JESUS",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "03/02/2025",
    placa: "FUM148",
    modelo: "2019",
    cedula: "1037617324",
    nombres: "MATEO GAVIRIA VALENCIA",
  },
  {
    compañia: "SBS",
    finvigencia: "30/11/2024",
    placa: "JIW714",
    modelo: "2017",
    cedula: "43875366",
    nombres: "CALDERON AGUIRRE, DIANA MARCELA",
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "22/09/2022",
    placa: "HGZ248",
    modelo: "2014",
    cedula: "1036599160",
    nombres: "GIRALDO LOPEZ, JUAN CAMILO",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "14/07/2024",
    placa: "IHS696",
    modelo: "2016",
    cedula: "71214018",
    nombres: "JOHN FREDDY CHAVERRA CASTRILLON, .",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2024",
    placa: "JCR241",
    modelo: "2017",
    cedula: "8150831",
    nombres: "MIRA MURIEL,JHON JAIRO",
  },
  {
    compañia: "ESTADO",
    finvigencia: "29/11/2023",
    placa: "FQW556",
    modelo: "2019",
    cedula: "42897865",
    nombres: "JANNET DEL PILAR RESTREPO BUSTAMANTE",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "06/08/2023",
    placa: "EIL945",
    modelo: "2018",
    cedula: "52452114",
    nombres: "ESPINOSA AFANADOR SANDRA PATRICIA",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "21/10/2023",
    placa: "JPV167",
    modelo: "2021",
    cedula: "1128462621",
    nombres: "PIEDRAHITA ROJAS CRISTIAN ALEXIS",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/07/2024",
    placa: "ISR017",
    modelo: "2016",
    cedula: "43640219",
    nombres: "LINA MARCELLA LOPEZ CADAVID",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "27/02/2025",
    placa: "FXQ759",
    modelo: "2019",
    cedula: "71677548",
    nombres: "ORTIZ GIRALDO GUSTAVO ALBERTO",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "16/03/2024",
    placa: "GVO830",
    modelo: "2020",
    cedula: "19087106",
    nombres: "CRUZ RODRIGUEZ PEDRO PABLO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/08/2024",
    placa: "GIK611",
    modelo: "2020",
    cedula: "15349228",
    nombres: "ASDRUBAL ARMANDO MORENO RENDON",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "24/09/2022",
    placa: "IYR100",
    modelo: "2017",
    cedula: "8161370",
    nombres: "BECERRA CALDERON,JAIME ANDRES",
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "07/12/2024",
    placa: "EPQ300",
    modelo: "2018",
    cedula: "10242103",
    nombres: "GAVIRIA LONDOO, FERNANDO",
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2024",
    placa: "GEL935",
    modelo: "2019",
    cedula: "1037642283",
    nombres: "SARA MANUELA HIGUITA RODRIGUEZ",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "09/02/2025",
    placa: "GHZ398",
    modelo: "2021",
    cedula: "43715443",
    nombres: "ERIKA YISEL LOPEZ HENAO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/11/2024",
    placa: "JOR934",
    modelo: "2019",
    cedula: "71223561",
    nombres: "CARLOS ENRIQUE CORREA RAMIREZ",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/06/2024",
    placa: "EOU682",
    modelo: "2018",
    cedula: "43157873",
    nombres: "PAULA ANDREA PAMPLONA GUZMAN",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "05/03/2024",
    placa: "USX907",
    modelo: "2016",
    cedula: "1017222381",
    nombres: "DANIELA HERRERA ARBELAEZ",
  },
  {
    compañia: "SBS",
    finvigencia: "31/01/2024",
    placa: "IST398",
    modelo: "2016",
    cedula: "1040752230",
    nombres: "PEREZ MONTOYA, YEFERSON ANDRES",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "14/02/2023",
    placa: "JSV515",
    modelo: "2021",
    cedula: "43973905",
    nombres: "MARILUZ AGUDELO VILLADA",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/05/2020",
    placa: "GEX876",
    modelo: "2019",
    cedula: "32402482",
    nombres: "LILIA MARGARITA PELAEZ DE RESTREPO",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "15/11/2024",
    placa: "IAU400",
    modelo: "2013",
    cedula: "25284948",
    nombres: "MARIA CECILIA MARIN PATI?O",
  },
  {
    compañia: "ESTADO",
    finvigencia: "02/02/2024",
    placa: "GVO380",
    modelo: "2020",
    cedula: "1035435049",
    nombres: "LAURA ISABEL DEL RIO PULGARIN",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "22/02/2025",
    placa: "GEL938",
    modelo: "2020",
    cedula: "10122812",
    nombres: "BEDOYA SANCHEZ DURLEY DE JESUS",
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/03/2022",
    placa: "JYS990",
    modelo: "2022",
    cedula: "43501959",
    nombres: "RESTREPO RAMIREZ PIEDAD MARIA",
  },
  {
    compañia: "SBS",
    finvigencia: "18/11/2024",
    placa: "MUT566",
    modelo: "2013",
    cedula: "43728456",
    nombres: "MARTINEZ DUQUE, MARIA VICTORIA",
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/10/2022",
    placa: "IST533",
    modelo: "2016",
    cedula: "70092884",
    nombres: "JOHN JAIRO ZULUAGA OROZCO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "12/12/2021",
    placa: "CZC716",
    modelo: "2009",
    cedula: "42891929",
    nombres: "CLARA ISABEL DE LAS MERCEDES BOHORQUEZ ORTIZ",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "20/04/2022",
    placa: "FSY278",
    modelo: "2019",
    cedula: "1128276252",
    nombres: "CRISTIAN JOAN CASTELLANOS GOMEZ",
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "21/08/2024",
    placa: "HYU081",
    modelo: "2017",
    cedula: "43090208",
    nombres: "GONZALEZ PEREZ MARIA GIRLESA",
  },
  {
    compañia: "SBS",
    finvigencia: "28/12/2023",
    placa: "JYU008",
    modelo: "2022",
    cedula: "1053809929",
    nombres: "OSPINA, SANTIAGO HENAO",
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/02/2024",
    placa: "JYZ307",
    modelo: "2021",
    cedula: "1128415105",
    nombres: "YULIETH PAOLA MARQUEZ REALES"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "02/03/2024",
    placa: "IYQ602",
    modelo: "2016",
    cedula: "43107747",
    nombres: "FLOREZ HURTADO, ANA MARIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "IHT744",
    modelo: "2016",
    cedula: "21994506",
    nombres: "ORFA NELLY DE LOS DOLORES ARANGO LOPERA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/09/2024",
    placa: "EIO125",
    modelo: "2017",
    cedula: "3347887",
    nombres: "SANDOR KEPES MESA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "28/07/2024",
    placa: "GFK429",
    modelo: "2020",
    cedula: "43255006",
    nombres: "KATALINA GONZALEZ RESTREPO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "15/02/2022",
    placa: "UST865",
    modelo: "2016",
    cedula: "43163947",
    nombres: "SANDRA MILENA SANMARTIN ROJAS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/09/2024",
    placa: "USY511",
    modelo: "2015",
    cedula: "71277402",
    nombres: "JAIME ALEJANDRO SANCHEZ CASTAÑO"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "14/07/2022",
    placa: "HFL377",
    modelo: "2014",
    cedula: "39328003",
    nombres: "LUZ CRISTINA SOTO AGUDELO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/11/2018",
    placa: "JHS282",
    modelo: "2018",
    cedula: "8110117798",
    nombres: "RENTING COLOMBIA S.A.S."
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "18/12/2024",
    placa: "JLY127",
    modelo: "2021",
    cedula: "1037582220",
    nombres: "PULGARIN MADRIGAL SINDY"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "24/07/2024",
    placa: "GEZ134",
    modelo: "2019",
    cedula: "1152450470",
    nombres: "MARIANA MONTOYA VILLA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "15/06/2024",
    placa: "JIW220",
    modelo: "2017",
    cedula: "1128264893",
    nombres: "ANDRES FELIPE WILKIN VELASQUEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/02/2025",
    placa: "DSZ386",
    modelo: "2017",
    cedula: "1110460347",
    nombres: "CINDY ALEJANDRA MANRIQUE SANTO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "19/06/2024",
    placa: "MTT879",
    modelo: "2022",
    cedula: "1035851938",
    nombres: "ARROYAVE SIERRA VERONICA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/12/2024",
    placa: "FXM525",
    modelo: "2019",
    cedula: "32105638",
    nombres: "SAIDA MILENA SANCHEZ NA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "06/07/2024",
    placa: "EOW010",
    modelo: "2019",
    cedula: "43537065",
    nombres: "ESCOBAR SIERRA, DIANA MARCELA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "21/10/2021",
    placa: "KHU178",
    modelo: "2018",
    cedula: "98657569",
    nombres: "AGUDELO HERNANDEZ,ANDRES"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "15/06/2024",
    placa: "IEX524",
    modelo: "2015",
    cedula: "42893248",
    nombres: "LUZ DARY ARIAS CUERVO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "21/12/2024",
    placa: "JOT626",
    modelo: "2021",
    cedula: "1128418755",
    nombres: "HERERRA MU?OZ, ERIKA JULIETH"
  },
  {
    compañia: "ESTADO",
    finvigencia: "15/06/2022",
    placa: "JLQ285",
    modelo: "2020",
    cedula: "52702359",
    nombres: "SANDRA VIVIANA URIBE PUCHE"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "19/05/2024",
    placa: "HZK295",
    modelo: "2015",
    cedula: "32561064",
    nombres: "DUQUE ROLDAN ALEXA LILIANA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/11/2024",
    placa: "FXR478",
    modelo: "2019",
    cedula: "71649778",
    nombres: "LUIS EDUARDO CUERVO TAFUR"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "14/08/2024",
    placa: "EHL175",
    modelo: "2018",
    cedula: "43972041",
    nombres: "DEISY JOHANA PIEDRAHITA BERRIO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/10/2024",
    placa: "JKM970",
    modelo: "2017",
    cedula: "8319702",
    nombres: "JOSE LEONARDO LOPEZ MARTINEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/11/2024",
    placa: "EOK102",
    modelo: "2019",
    cedula: "1075655611",
    nombres: "WILLIAM GIOVANNY PINZON VEGA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "25/09/2024",
    placa: "FIT635",
    modelo: "2020",
    cedula: "1089290384",
    nombres: "ARAUJO MORAN MARIA INES"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "07/02/2025",
    placa: "UEL734",
    modelo: "2015",
    cedula: "71786413",
    nombres: "JUAN DAVID ECHEVERRI DEL RIO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "06/08/2024",
    placa: "JPT293",
    modelo: "2020",
    cedula: "71681080",
    nombres: "ACEVEDO MONTOYA CARLOS MARIO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "15/02/2022",
    placa: "HAL383",
    modelo: "2014",
    cedula: "1128390722",
    nombres: "ALEXANDER SALAZAR LOAIZA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "10/08/2024",
    placa: "IHQ628",
    modelo: "2015",
    cedula: "1017246963",
    nombres: "LAURA CORDOBA CORDOBA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "05/12/2024",
    placa: "GRM414",
    modelo: "2020",
    cedula: "1097396752",
    nombres: "MARTINEZ CASTRO JUAN ALBERTO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "16/06/2024",
    placa: "KIX155",
    modelo: "2011",
    cedula: "1037579921",
    nombres: "FELIPE MEJIA GARCIA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "20/08/2024",
    placa: "JCQ664",
    modelo: "2017",
    cedula: "44002278",
    nombres: "RESTRPO MAYO LUISA FERNANDA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/09/2024",
    placa: "MFX890",
    modelo: "2013",
    cedula: "71762417",
    nombres: "JOHN FREDY GUTIERREZ ALVAREZ"
  },
  {
    compañia: "ESTADO",
    finvigencia: "30/09/2024",
    placa: "EPR885",
    modelo: "2018",
    cedula: "43661171",
    nombres: "DELSY ANAYA BARRIENTOS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "14/09/2023",
    placa: "EGZ793",
    modelo: "2018",
    cedula: "71266993",
    nombres: "ALBERTO JULIAN"
  },
  {
    compañia: "ZURICH-QBE",
    finvigencia: "17/11/2023",
    placa: "LAX594",
    modelo: "2019",
    cedula: "32475281",
    nombres: "Maria Dilia Ramirez Hincapie"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "16/06/2022",
    placa: "FHD598",
    modelo: "2008",
    cedula: "1023748888",
    nombres: "GONZALEZ SANCHEZ DIEGO FERNANDO"
  },
  {
    compañia: "SBS",
    finvigencia: "01/09/2024",
    placa: "FQU489",
    modelo: "2019",
    cedula: "19202644",
    nombres: "GASCA RODRIGUEZ, ISMAEL YUBEL"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "23/03/2024",
    placa: "IYP175",
    modelo: "2016",
    cedula: "39267787",
    nombres: "GONZALEZ CORREA, MARIA MAGDALE"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "16/06/2024",
    placa: "FAY962",
    modelo: "2005",
    cedula: "42795282",
    nombres: "QUINTERO JARAMILLO ALBA LUZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "28/06/2024",
    placa: "MOR775",
    modelo: "2010",
    cedula: "21700705",
    nombres: "PEREZ RESTREPO, ZENAIDA MARIA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "23/06/2018",
    placa: "HAN778",
    modelo: "2015",
    cedula: "22025679",
    nombres: "CASTRILLON GIRALDO, GLORIA PAT"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "24/02/2025",
    placa: "MST889",
    modelo: "2013",
    cedula: "8164030",
    nombres: "CARLOS ALBERTO GONZALEZ PEREZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/11/2024",
    placa: "EPU781",
    modelo: "2019",
    cedula: "71579201",
    nombres: "RICARDO ENRIQUE MARTELO MEDINA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/12/2024",
    placa: "JYT917",
    modelo: "2021",
    cedula: "11255737",
    nombres: "Andres Fernando Moya Cubillos"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "16/06/2024",
    placa: "GEX753",
    modelo: "2020",
    cedula: "1037601306",
    nombres: "JOHN ANDERSON SIERRA RODRIGUEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "31/05/2024",
    placa: "JZO743",
    modelo: "2021",
    cedula: "1140852344",
    nombres: "JHON EDUARD LAVADO ARBOLEDA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/05/2021",
    placa: "EOX209",
    modelo: "2018",
    cedula: "21839594",
    nombres: "BLANCA LIBIA OSORIO TORO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/09/2024",
    placa: "MIY813",
    modelo: "2012",
    cedula: "43560276",
    nombres: "DIANA MARCELA RAMIREZ DELGADO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/02/2024",
    placa: "DSX011",
    modelo: "2018",
    cedula: "43826308",
    nombres: "MARIA ADELAIDA ALVAREZ ARIAS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "27/01/2025",
    placa: "JJY802",
    modelo: "2018",
    cedula: "75070476",
    nombres: "SANTA HOYOS JOSE FERNANDO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/08/2022",
    placa: "KHJ070",
    modelo: "2011",
    cedula: "80749456",
    nombres: "STEEWAR VALENCIA IZQUIERDO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/07/2024",
    placa: "JKL293",
    modelo: "2017",
    cedula: "70413585",
    nombres: "SANCHEZ BUITRAGO, HECTOR DARIO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/01/2024",
    placa: "HYZ758",
    modelo: "2014",
    cedula: "1128282027",
    nombres: "NATALIA DIAZ CANO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "13/03/2025",
    placa: "DWN205",
    modelo: "2018",
    cedula: "43734995",
    nombres: "ALVAREZ HOLGUIN LINA MARIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/08/2024",
    placa: "KIZ448",
    modelo: "2011",
    cedula: "19491705",
    nombres: "HUMBERTO ANIBAL RESTREPO VELEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "07/09/2023",
    placa: "HZK422",
    modelo: "2015",
    cedula: "71642051",
    nombres: "MAURICIO DE JESUS GIL SUAZA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/10/2022",
    placa: "EGK217",
    modelo: "2017",
    cedula: "43970803",
    nombres: "SANDRA MILENA ARBOLEDA ROJAS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "07/06/2023",
    placa: "JSS668",
    modelo: "2021",
    cedula: "1152448636",
    nombres: "MONSALVE RODRIGUEZ SILVANNA"
  },
  {
    compañia: "SBS",
    finvigencia: "11/04/2024",
    placa: "IHS185",
    modelo: "2016",
    cedula: "52264466",
    nombres: "BELTRAN LEAL MONICA,"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "16/08/2024",
    placa: "HFL317",
    modelo: "2014",
    cedula: "15534865",
    nombres: "CARVAJAL GUTIERREZ, JHON JAIME"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/10/2024",
    placa: "JPW085",
    modelo: "2021",
    cedula: "1214734382",
    nombres: "JESENIA GARZON ESTRADA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "10/02/2023",
    placa: "JHT008",
    modelo: "2018",
    cedula: "70053917",
    nombres: "CASTILLO JIMENEZ, LUIS ALEJAND"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "05/08/2024",
    placa: "EOS174",
    modelo: "2018",
    cedula: "98558244",
    nombres: "GOMEZ GOMEZ, PABLO EDGAR"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "28/05/2023",
    placa: "UEO623",
    modelo: "2016",
    cedula: "1152451587",
    nombres: "REGINO DIEGO ANDRES"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "11/01/2025",
    placa: "EPS770",
    modelo: "2019",
    cedula: "43109500",
    nombres: "ZULUAGA RUIZ,LINA MARIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/09/2022",
    placa: "DCL871",
    modelo: "2009",
    cedula: "98562666",
    nombres: "JUAN ALEJANDRO PEREZ SALAZAR"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "30/08/2024",
    placa: "HPW210",
    modelo: "2020",
    cedula: "51701785",
    nombres: "MARIA ISABEL QUIMBAYA TRUJILLO TRUJILLO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "16/12/2024",
    placa: "KPP942",
    modelo: "2022",
    cedula: "1128265859",
    nombres: "Alejandra Bustamante Suarez"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "16/03/2023",
    placa: "EGW784",
    modelo: "2018",
    cedula: "94265335",
    nombres: "SAUL ENRIQUE PEREZ PEREZ"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2023",
    placa: "GHV749",
    modelo: "2020",
    cedula: "1130605855",
    nombres: "XIOMARA PALACIOS PALACIOS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "16/07/2024",
    placa: "JZO573",
    modelo: "2022",
    cedula: "70094441",
    nombres: "GONZALEZ RENDON RAUL"
  },
  {
    compañia: "SBS",
    finvigencia: "16/06/2024",
    placa: "MFX760",
    modelo: "2013",
    cedula: "98589833",
    nombres: "PALACIO GARCES, DIEGO ALEXANDER"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "11/06/2024",
    placa: "MFT609",
    modelo: "2013",
    cedula: "19212571",
    nombres: "SALGUERO VERA FERNANDO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/12/2024",
    placa: "UEN647",
    modelo: "2015",
    cedula: "39440961",
    nombres: "MARIA EUGENIA LONDOÑO BETANCUR"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "16/06/2024",
    placa: "DLZ586",
    modelo: "2012",
    cedula: "43054559",
    nombres: "GARZON OSORIO CRUZ ELENA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "30/08/2024",
    placa: "HPW210",
    modelo: "2020",
    cedula: "51701785",
    nombres: "MARIA ISABEL QUIMBAYA TRUJILLO TRUJILLO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "31/01/2023",
    placa: "JOP053",
    modelo: "2020",
    cedula: "1094861693",
    nombres: "NARANJO NARANJO, IRVIRIS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/05/2024",
    placa: "HXT337",
    modelo: "2014",
    cedula: "1152196672",
    nombres: "MARIA CAMILA VALDERRAMA GARCES"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "07/09/2024",
    placa: "INR282",
    modelo: "2016",
    cedula: "1128425251",
    nombres: "JHOAN ESTEBAN TEJADA CASTA?O"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "16/06/2024",
    placa: "KHP370",
    modelo: "2011",
    cedula: "43724003",
    nombres: "CASTRO LLANO MARTHA LUZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "17/06/2024",
    placa: "EOW067",
    modelo: "2018",
    cedula: "13253055",
    nombres: "PRADA QUINTANA RAFAEL ALFONSO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "27/01/2024",
    placa: "RMW208",
    modelo: "2012",
    cedula: "51789963",
    nombres: "CALDERON AGUILA, CAROLINA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/05/2024",
    placa: "KKR571",
    modelo: "2011",
    cedula: "71269674",
    nombres: "LONDO?O TAPIAS, DIEGO ALEJANDRO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "21/10/2024",
    placa: "JOT290",
    modelo: "2021",
    cedula: "43721746",
    nombres: "ANGELA MARIA TOBON PATIÑO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "17/06/2022",
    placa: "IAS663",
    modelo: "2015",
    cedula: "43164731",
    nombres: "SAIRA MARDELLY ACEVEDO HOYOS"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "17/06/2022",
    placa: "CGO468",
    modelo: "2012",
    cedula: "98697815",
    nombres: "RUIZ HOLGUIN, YORGUIN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "21/10/2024",
    placa: "JOT290",
    modelo: "2021",
    cedula: "43721746",
    nombres: "ANGELA MARIA TOBON PATIÑO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/11/2024",
    placa: "HMN319",
    modelo: "2014",
    cedula: "8357284",
    nombres: "JAIRO ALBERTO TALERO PADILLA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "11/08/2024",
    placa: "EFU636",
    modelo: "2018",
    cedula: "1001010753",
    nombres: "KATIANA CASTRILLON CORREA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "17/06/2024",
    placa: "GEN019",
    modelo: "2020",
    cedula: "6785323",
    nombres: "JULIO GILDARDO BUSTAMANTE ORTI"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "17/06/2024",
    placa: "GEY335",
    modelo: "2019",
    cedula: "8111478",
    nombres: "CARTAGENA ECHAVARRIA, FABIAN"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "20/01/2025",
    placa: "IHP339",
    modelo: "2016",
    cedula: "98620929",
    nombres: "RIVEROS PINILLA GLORIA JOHANA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "11/04/2024",
    placa: "URW067",
    modelo: "2015",
    cedula: "71264662",
    nombres: "Juan Diego Marin"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "17/06/2023",
    placa: "IAU414",
    modelo: "2015",
    cedula: "1035427813",
    nombres: "VALENCIA SOLARTE LIZETH"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "23/10/2024",
    placa: "IIY888",
    modelo: "2016",
    cedula: "1105361806",
    nombres: "JUAN ALEJANDRO PEREZ ARIAS"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "17/06/2024",
    placa: "IIX100",
    modelo: "2015",
    cedula: "1039446895",
    nombres: "GARZON LOPEZ, ANA MARIA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "28/11/2024",
    placa: "UUQ485",
    modelo: "2016",
    cedula: "71771757",
    nombres: "VILLA SEPULVEDA CESAR AUGUSTO"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "24/12/2024",
    placa: "HAK388",
    modelo: "2014",
    cedula: "43921043",
    nombres: "GUTIERREZ RIOS KAREN YESIKA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "17/06/2024",
    placa: "HZK099",
    modelo: "2014",
    cedula: "1128436794",
    nombres: "VANEGAS VALENCIA CHRISTIAN ALB"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/06/2022",
    placa: "JOP102",
    modelo: "2020",
    cedula: "12402024",
    nombres: "JOSE LUIS ALVARINO VASQUEZ"
  },
  {
    compañia: "SBS",
    finvigencia: "21/10/2024",
    placa: "GRO652",
    modelo: "2020",
    cedula: "52837245",
    nombres: "BORDA ALDANA, CAROLINA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "13/12/2024",
    placa: "MXZ321",
    modelo: "2013",
    cedula: "42878959",
    nombres: "LILIANA TABARES RUA"
  },
  {
    compañia: "SBS",
    finvigencia: "19/09/2024",
    placa: "JYZ853",
    modelo: "2021",
    cedula: "1000896350",
    nombres: "TAMAYO MARTINEZ, JUAN DAVID"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "11/08/2024",
    placa: "GRR043",
    modelo: "2020",
    cedula: "1144073762",
    nombres: "MONTES FERNANDEZ,NATALIA EUGENIA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "22/02/2023",
    placa: "INS278",
    modelo: "2016",
    cedula: "1130667047",
    nombres: "JIMMY ALEXANDER NAVIA NAVIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "31/01/2024",
    placa: "EPT839",
    modelo: "2019",
    cedula: "43183565",
    nombres: "JACKELINE ZULUAGA SALAZAR"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "27/01/2024",
    placa: "FXS019",
    modelo: "2019",
    cedula: "73084566",
    nombres: "ROMERO MASSA, DAVID"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "18/05/2024",
    placa: "JHR895",
    modelo: "2017",
    cedula: "21610845",
    nombres: "QUICENO LUZ DARY"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "14/02/2025",
    placa: "USV106",
    modelo: "2016",
    cedula: "1037613511",
    nombres: "ANDREA BETANCUR ARANGO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "17/06/2023",
    placa: "GRN736",
    modelo: "2020",
    cedula: "98584696",
    nombres: "CASTRO HOYOS MARTIN EMILIO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "02/12/2024",
    placa: "JST282",
    modelo: "2021",
    cedula: "1037592750",
    nombres: "ALZATE NIETO,OSCAR ALEJANDRO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "01/12/2022",
    placa: "GFK787",
    modelo: "2019",
    cedula: "71261909",
    nombres: "SALAZAR VALCARCEL, DIEGO ARMAN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/10/2024",
    placa: "ISQ282",
    modelo: "2016",
    cedula: "76090182",
    nombres: "HIGINIO RENGIFO VELASCO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "18/07/2022",
    placa: "JPS310",
    modelo: "2020",
    cedula: "1232395760",
    nombres: "VIVAS MONSALVE, ASTRIX CAROLIN"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "18/06/2024",
    placa: "DLZ262",
    modelo: "2012",
    cedula: "8126119",
    nombres: "DUQUE RAMIREZ, JOHN ALEJANDRO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/11/2024",
    placa: "RCW240",
    modelo: "2011",
    cedula: "1128444408",
    nombres: "YEISSON GUTIERREZ HOLGUIN"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "18/01/2025",
    placa: "RJT084",
    modelo: "2011",
    cedula: "52213652",
    nombres: "Sandra Bibiana Cely Ortegon"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "18/06/2022",
    placa: "GEZ268",
    modelo: "2020",
    cedula: "1017123705",
    nombres: "VALLE VELEZ, WILSON DE JESUS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "DSY329",
    modelo: "2018",
    cedula: "1039456214",
    nombres: "YULIANA MARIA PEREZ DEL REAL"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "18/11/2024",
    placa: "EFY956",
    modelo: "2018",
    cedula: "10555574",
    nombres: "Fernando Orejuela Guevara"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "12/03/2023",
    placa: "GHZ374",
    modelo: "2020",
    cedula: "1020462011",
    nombres: "OSCAR DANIEL VARELA CARVAJAL"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "18/06/2024",
    placa: "JYT777",
    modelo: "2022",
    cedula: "24325768",
    nombres: "URIBE HENAO MARGARITA MARIA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "05/06/2021",
    placa: "LAV226",
    modelo: "2012",
    cedula: "32322471",
    nombres: "BERNAL LOPEZ, CLARA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "12/07/2022",
    placa: "DFV111",
    modelo: "2012",
    cedula: "42888946",
    nombres: "ADRIANA MARIA ARCILA GARCIA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "18/06/2023",
    placa: "RJZ711",
    modelo: "2011",
    cedula: "71319321",
    nombres: "ARRIETA GIRALDO JUAN"
  },
  {
    compañia: "ESTADO",
    finvigencia: "18/06/2023",
    placa: "IAQ520",
    modelo: "2015",
    cedula: "7473236",
    nombres: "SIXTO ANTONIO JIMENEZ MEZA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "27/09/2024",
    placa: "JHS555",
    modelo: "2018",
    cedula: "70546918",
    nombres: "GUILLERMO LOPEZ RAMIREZ"
  },
  {
    compañia: "SBS",
    finvigencia: "02/04/2023",
    placa: "IAR343",
    modelo: "2015",
    cedula: "1152206076",
    nombres: "DURANGO ZAPATA MELISSA ESMERALDA,"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "27/01/2022",
    placa: "ISP473",
    modelo: "2017",
    cedula: "72204145",
    nombres: "CORDOBA MOLINA JAVIER ENRIQUE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/03/2021",
    placa: "MUL606",
    modelo: "2013",
    cedula: "1020472035",
    nombres: "JULIANA ANDREA CASTRILLON GOEZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "18/06/2024",
    placa: "EOU344",
    modelo: "2018",
    cedula: "43222361",
    nombres: "GOMEZ PALACIO,DEYSI JOHANNA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "18/06/2023",
    placa: "MVV067",
    modelo: "2014",
    cedula: "71218508",
    nombres: "EDILSON DE JESUS ESCUDERO USUGA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "18/06/2024",
    placa: "FSY503",
    modelo: "2019",
    cedula: "43522440",
    nombres: "AYLIN MARIA VELEZ MACIAS"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "07/09/2024",
    placa: "JBK801",
    modelo: "2017",
    cedula: "43909406",
    nombres: "Liseth Johanna Gil Goez"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/04/2024",
    placa: "JOS996",
    modelo: "2021",
    cedula: "43626280",
    nombres: "CLAUDIA MARIA MAYA FRANCO"
  },
  {
    compañia: "SBS",
    finvigencia: "22/10/2024",
    placa: "JPV171",
    modelo: "2021",
    cedula: "71587190",
    nombres: "GOMEZ GARCIA, SERGIO LEON"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "20/02/2024",
    placa: "HEX695",
    modelo: "2013",
    cedula: "94070395",
    nombres: "GRANDE JARAMILLO, ANDRES IVAN"
  },
  {
    compañia: "ESTADO",
    finvigencia: "15/09/2024",
    placa: "INQ512",
    modelo: "2016",
    cedula: "1017257533",
    nombres: "KEVIN ZULUAGA OSPINA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "16/03/2023",
    placa: "HFN327",
    modelo: "2014",
    cedula: "1017220991",
    nombres: "ANDRES FELIPE ALZATE GOMEZ"
  },
  {
    compañia: "SBS",
    finvigencia: "06/08/2024",
    placa: "GEL273",
    modelo: "2019",
    cedula: "16755667",
    nombres: "SANCHEZ PISSA, HAROLD ALONSO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "19/06/2024",
    placa: "KPR313",
    modelo: "2022",
    cedula: "1036608796",
    nombres: "YISELY MORA ESCOBAR"
  },
  {
    compañia: "SBS",
    finvigencia: "16/05/2024",
    placa: "UEX492",
    modelo: "2016",
    cedula: "78703330",
    nombres: "VERGARA GOMEZ, JORGE MARIO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2024",
    placa: "JHO893",
    modelo: "2015",
    cedula: "1081398294",
    nombres: "VILLAR OSPINA, DIEGO FERNANDO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "31/10/2023",
    placa: "JYQ903",
    modelo: "2021",
    cedula: "1128404612",
    nombres: "MONTOYA MONSALVE, TATIANA ANDREA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "09/03/2023",
    placa: "BXW552",
    modelo: "2011",
    cedula: "93356715",
    nombres: "PABLO GALINDO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "12/07/2023",
    placa: "MIX258",
    modelo: "2013",
    cedula: "1036659971",
    nombres: "JUAN DAVID AGUDELO RAMIREZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "11/08/2021",
    placa: "LAX394",
    modelo: "2018",
    cedula: "71210755",
    nombres: "JUVER ALTOVER GONZALEZ GONZALEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "14/10/2023",
    placa: "HAO468",
    modelo: "2014",
    cedula: "1018457889",
    nombres: "YULY TATIANA RUIZ AMEZQUITA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/08/2020",
    placa: "UEM106",
    modelo: "2015",
    cedula: "1036603432",
    nombres: "CARLOS ERNESTO SERNA CHANCI"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "15/09/2022",
    placa: "IOS021",
    modelo: "2016",
    cedula: "98629719",
    nombres: "GOMEZ HENAO, JAMES ADOLFO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/09/2023",
    placa: "GRO044",
    modelo: "2020",
    cedula: "1000203152",
    nombres: "JUAN SIMON CIFUENTES ARCILA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "30/08/2024",
    placa: "MCR118",
    modelo: "2012",
    cedula: "843090",
    nombres: "MARTINEZ MARMOLE HENRY EDUARDO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "18/11/2024",
    placa: "EFV783",
    modelo: "2018",
    cedula: "10033452",
    nombres: "VALENCIA BUITRAGO DEIBY JESUS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "02/05/2024",
    placa: "MIZ180",
    modelo: "2013",
    cedula: "1017193432",
    nombres: "COCK ARISTIZABAL, SERGIO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "25/02/2025",
    placa: "JOS207",
    modelo: "2020",
    cedula: "1017257912",
    nombres: "DIAZ DIAZ,ELKIN DARIO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "20/09/2024",
    placa: "MVR689",
    modelo: "2013",
    cedula: "71314670",
    nombres: "JUAN FERNANDO OCAMPO ECHAVARRI"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "03/06/2024",
    placa: "JOP929",
    modelo: "2021",
    cedula: "21402187",
    nombres: "CALDAS DE ALVAREZ, ESPERANZA"
  },
  {
    compañia: "SBS",
    finvigencia: "23/01/2024",
    placa: "IYR372",
    modelo: "2017",
    cedula: "1017194989",
    nombres: "RIVAS TIRADO, JONATAN ANDRES"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "02/08/2024",
    placa: "GFK182",
    modelo: "2019",
    cedula: "18617758",
    nombres: "RAMIREZ LADINO, JOHN DAVID"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/10/2024",
    placa: "DLX154",
    modelo: "2012",
    cedula: "43059020",
    nombres: "GLADYS ADRIANA CALLE JARAMILLO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "06/05/2023",
    placa: "JBL753",
    modelo: "2017",
    cedula: "528765",
    nombres: "LOPEZ RAMON EMILIO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2024",
    placa: "EGZ174",
    modelo: "2018",
    cedula: "43438825",
    nombres: "MIRA SANCHEZ, YENI EUNICE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/12/2021",
    placa: "GWU550",
    modelo: "2020",
    cedula: "98715086",
    nombres: "ANDERSON VASCO OQUENDO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "05/11/2021",
    placa: "JSR805",
    modelo: "2021",
    cedula: "71264123",
    nombres: "ALEJANDRO EMILIO ZAPATA GARCIA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "23/11/2024",
    placa: "JPW055",
    modelo: "2021",
    cedula: "1040744630",
    nombres: "CATALINA P?REZ LONDO?O"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "19/06/2024",
    placa: "GDN754",
    modelo: "2019",
    cedula: "31955437",
    nombres: "CAICEDO QUINTERO ROSMERY"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "30/10/2024",
    placa: "USX174",
    modelo: "2015",
    cedula: "15480742",
    nombres: "DURANGO DURAN, NELSON"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "19/06/2024",
    placa: "GEZ539",
    modelo: "2020",
    cedula: "37817034",
    nombres: "SONIA ISMENIA MARTINEZ DURAN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/03/2024",
    placa: "LAX903",
    modelo: "2022",
    cedula: "1020458713",
    nombres: "SANTIAGO ESPINAL TABORDA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/06/2024",
    placa: "GEK903",
    modelo: "2020",
    cedula: "32515539",
    nombres: "FERNANDEZ ROLDAN, LUZ ELENA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "22/10/2024",
    placa: "JOS356",
    modelo: "2021",
    cedula: "12959155",
    nombres: "RODRIGUEZ SALAZAR MARCO TULIO"
  },
  {
    compañia: "PREVISORA",
    finvigencia: "30/09/2024",
    placa: "LAX695",
    modelo: "2019",
    cedula: "1004690426",
    nombres: "CAIPE RIVERA WILLIAM FERNANDO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "19/06/2024",
    placa: "JOM814",
    modelo: "2020",
    cedula: "10263296",
    nombres: "PEREZ CASTAÑO, KID RIGOBERTO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/06/2024",
    placa: "KHI611",
    modelo: "2011",
    cedula: "98648739",
    nombres: "JOHN FREDY HURTADO PEÑA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "28/04/2024",
    placa: "JSS193",
    modelo: "2020",
    cedula: "71633202",
    nombres: "JOSE ARMANDO GOMEZ CORREA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/08/2024",
    placa: "DJL144",
    modelo: "2012",
    cedula: "39359711",
    nombres: "PAOLA ANDREA HURTADO MENESES"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "28/06/2024",
    placa: "JCS186",
    modelo: "2017",
    cedula: "15389338",
    nombres: "JAIRO ALBER ARANGO HERNANDEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "19/05/2024",
    placa: "MAW395",
    modelo: "2012",
    cedula: "43920769",
    nombres: "NATALIA CATALINA MONA MEJIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/02/2022",
    placa: "IHU484",
    modelo: "2016",
    cedula: "43746580",
    nombres: "ALVAREZ ,ASTRID MARITZA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "19/06/2024",
    placa: "JYU054",
    modelo: "2022",
    cedula: "39754127",
    nombres: "ALDANA MEDINA, NORMA CONSTANZA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "20/04/2024",
    placa: "JOQ947",
    modelo: "2020",
    cedula: "1036627173",
    nombres: "GRISALES GARCIA EDISON ALEXAND"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "11/07/2022",
    placa: "HXV950",
    modelo: "2014",
    cedula: "1152199484",
    nombres: "VELASQUEZ MUÑOZ, DAVID"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/12/2024",
    placa: "GVK794",
    modelo: "2020",
    cedula: "73076464",
    nombres: "TONY HERNANDEZ MURILLO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/02/2018",
    placa: "JFN557",
    modelo: "2017",
    cedula: "31420920",
    nombres: "VERGARA IDARRAGA ANGELA MARIA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/08/2024",
    placa: "GMR548",
    modelo: "2020",
    cedula: "1101815105",
    nombres: "RAMIRO ALFONSO VELILLA ZABALA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "27/07/2023",
    placa: "KHK583",
    modelo: "2011",
    cedula: "1020435809",
    nombres: "JUAN CAMILO HERNANDEZ TAMAYO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "11/07/2019",
    placa: "ENY921",
    modelo: "2018",
    cedula: "1036647716",
    nombres: "DAVID ARANGO MOLINA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "28/03/2024",
    placa: "DSR835",
    modelo: "2017",
    cedula: "98556415",
    nombres: "FIGUEROA GALLEGO, GUSTAVO ADOLFO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2024",
    placa: "GWV895",
    modelo: "2020",
    cedula: "43677837",
    nombres: "MU?OZ AGUIRRE, DIANA MARCELA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/12/2024",
    placa: "JZM848",
    modelo: "2022",
    cedula: "71334521",
    nombres: "ALZATE MARIN JOHN ALEJANDRO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "21/07/2023",
    placa: "EFV210",
    modelo: "2018",
    cedula: "44001131",
    nombres: "RAMIREZ TABORDA, SARA CAROLINA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/10/2022",
    placa: "RBP376",
    modelo: "2011",
    cedula: "98621476",
    nombres: "FERNANDO GUTIERREZ LEMA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "10/11/2024",
    placa: "UES321",
    modelo: "2016",
    cedula: "71645260",
    nombres: "OSCAR HERNAN TOBON CAMPUZANO"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "20/06/2024",
    placa: "BXQ544",
    modelo: "2011",
    cedula: "1020444497",
    nombres: "LICETH VANESSA LONDO?O OLARTE"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/12/2024",
    placa: "JHS013",
    modelo: "2018",
    cedula: "1037671090",
    nombres: "TAMAYO NARANJO ANDRES"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/03/2024",
    placa: "EOV086",
    modelo: "2019",
    cedula: "901276609",
    nombres: "LA DESPENSA INMOBILIARIA SAS"
  },
  {
    compañia: "ESTADO",
    finvigencia: "19/04/2023",
    placa: "MVW808",
    modelo: "2014",
    cedula: "1037660796",
    nombres: "MARILYN ANDREA GIRALDO CORREA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "03/06/2024",
    placa: "KAT426",
    modelo: "2015",
    cedula: "1020424495",
    nombres: "ZABALA CASTA?O DARVIN NULL"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "22/04/2023",
    placa: "EFW804",
    modelo: "2018",
    cedula: "4202737",
    nombres: "VELEZ MONTOYA VITERBO DE JESUS"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "06/08/2023",
    placa: "IYU875",
    modelo: "2017",
    cedula: "43493880",
    nombres: "GUZMAN LONDOÑO, ORFIDIA DEL SO"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "20/06/2024",
    placa: "IUU811",
    modelo: "2017",
    cedula: "28020928",
    nombres: "LAURA LUCIA CALDERON GARCIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "19/12/2023",
    placa: "DSV950",
    modelo: "2017",
    cedula: "1214730697",
    nombres: "ADRIAN ECHEVERRI AGUDELO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "07/12/2024",
    placa: "JCP715",
    modelo: "2017",
    cedula: "1037652769",
    nombres: "GONZ?LEZ HURTADO, LUISA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/10/2024",
    placa: "FHF670",
    modelo: "2008",
    cedula: "811034637",
    nombres: "MELDIS INGENIERIA LTDA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "22/09/2022",
    placa: "DHY367",
    modelo: "2011",
    cedula: "43088186",
    nombres: "USME GONZALEZ, GLORIA AMPARO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/06/2024",
    placa: "HNU085",
    modelo: "2014",
    cedula: "1130635730",
    nombres: "CAROLINA DIAZ JIMENEZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "21/06/2024",
    placa: "GMW990",
    modelo: "2020",
    cedula: "52158040",
    nombres: "LEON CARDENAS DAMARIS GIOVANNA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "JPX389",
    modelo: "2021",
    cedula: "43034984",
    nombres: "LUZ AMELIA LOPEZ CADAVID"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/11/2024",
    placa: "GEW106",
    modelo: "2020",
    cedula: "43673783",
    nombres: "MARTHA NEDGIDIA FIGUEROA QUIROZ"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "21/06/2024",
    placa: "GFK309",
    modelo: "2019",
    cedula: "70112239",
    nombres: "JESUS MOLINA CARDONA, ISRAEL D"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "06/04/2024",
    placa: "IYO897",
    modelo: "2015",
    cedula: "70328364",
    nombres: "VELILLA HERNANDEZ, ESTEBAN"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "24/12/2024",
    placa: "FUM385",
    modelo: "2019",
    cedula: "28070396",
    nombres: "JAZMIN MIA SAAVEDRA MOYA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "30/06/2024",
    placa: "GEL926",
    modelo: "2019",
    cedula: "4052889",
    nombres: "ESPITIA MELO RAFAEL"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/12/2021",
    placa: "HNZ339",
    modelo: "2014",
    cedula: "1020412704",
    nombres: "YOHANA MEDINA GOMEZ"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "31/08/2024",
    placa: "JZO766",
    modelo: "2022",
    cedula: "1152446378",
    nombres: "YESSICA VILLEGAS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/05/2024",
    placa: "MTZ231",
    modelo: "2013",
    cedula: "32184448",
    nombres: "YOHANA ANDREA BETANCUR VELASQUEZ"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "21/06/2024",
    placa: "HEM161",
    modelo: "2013",
    cedula: "71411284",
    nombres: "AGUDELO BERRIO JOHNY ALBERTO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/12/2020",
    placa: "FVN256",
    modelo: "2019",
    cedula: "98702908",
    nombres: "CARLOS MARIO ZAPATA QUINTERO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/11/2024",
    placa: "IXP729",
    modelo: "2016",
    cedula: "1128417180",
    nombres: "MATEO JARAMILLO GALLEGO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "05/05/2020",
    placa: "KJA957",
    modelo: "2011",
    cedula: "43621947",
    nombres: "LINA ANDREA CEDIEL GALLEGO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/12/2023",
    placa: "JPU335",
    modelo: "2020",
    cedula: "1036612963",
    nombres: "Daniel Esteban Vasquez Vasquez"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/02/2025",
    placa: "IYO126",
    modelo: "2016",
    cedula: "1020441960",
    nombres: "MABEL CRISTINA MARIN FORONDA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/03/2024",
    placa: "JVO734",
    modelo: "2021",
    cedula: "80183359",
    nombres: "BABATIVA ZAMUDIO, JONATHAN ERARDO ."
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "21/06/2023",
    placa: "GEY466",
    modelo: "2019",
    cedula: "71706072",
    nombres: "ALVAREZ CANO, GUSTAVO ADOLFO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/07/2022",
    placa: "DMK563",
    modelo: "2012",
    cedula: "43812814",
    nombres: "ILDA MARIA RESTREPO QUICENO"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "03/11/2024",
    placa: "DGY144",
    modelo: "2013",
    cedula: "1193098148",
    nombres: "CUERVO BURITICA NIKOLLE"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2024",
    placa: "MTY418",
    modelo: "2013",
    cedula: "98711843",
    nombres: "ALEXANDER GUARIN PUERTA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "03/04/2024",
    placa: "EOM725",
    modelo: "2019",
    cedula: "1020433060",
    nombres: "HENAO GUIRAL ANDERSON ESDEIVI"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/02/2023",
    placa: "GEW493",
    modelo: "2020",
    cedula: "43251428",
    nombres: "AITZIBER BRIGITTE CARDONA ISAZA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "22/03/2024",
    placa: "JBP738",
    modelo: "2016",
    cedula: "98497348",
    nombres: "GIRALDO MONTOYA, NORBERTO LEON"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/06/2022",
    placa: "JYU103",
    modelo: "2022",
    cedula: "1020400846",
    nombres: "YEIMY PATRICIA OCAMPO CARDONA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "29/09/2024",
    placa: "IOR714",
    modelo: "2016",
    cedula: "42971927",
    nombres: "GONZALEZ HENAO LUCIA ISABEL"
  },
  {
    compañia: "ESTADO",
    finvigencia: "21/06/2022",
    placa: "FSX945",
    modelo: "2019",
    cedula: "43737197",
    nombres: "OLGA LUCIA GIRALDO RAMIREZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "03/01/2023",
    placa: "GTX893",
    modelo: "2021",
    cedula: "12203071",
    nombres: "DIEGO FERNANDO CORREA GONZALEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "20/09/2024",
    placa: "IHT407",
    modelo: "2016",
    cedula: "1036674090",
    nombres: "MARLON ANDRES RAMIREZ TAPIAS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "22/06/2024",
    placa: "FQA058",
    modelo: "2010",
    cedula: "98546750",
    nombres: "CANO RAMIREZ DIEGO EMIRO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "22/06/2022",
    placa: "KHQ497",
    modelo: "2011",
    cedula: "1128405272",
    nombres: "LILIANA ESCOBAR GOMEZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "31/07/2024",
    placa: "GCZ306",
    modelo: "2019",
    cedula: "9003232015",
    nombres: "RECEPTUREX COLOMBIA SAS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/11/2024",
    placa: "ENY229",
    modelo: "2016",
    cedula: "52826341",
    nombres: "YADIRA BAUTISTA MESA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "22/06/2024",
    placa: "HAL107",
    modelo: "2013",
    cedula: "71665137",
    nombres: "RESTREPO BUENDIA JORGE ENRIQUE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "19/09/2024",
    placa: "DSR711",
    modelo: "2018",
    cedula: "1017198462",
    nombres: "LOPEZ GALEANO, CRISTIAN CAMILO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/07/2020",
    placa: "DFY719",
    modelo: "2020",
    cedula: "1086018289",
    nombres: "DONOVAN JAIVER CHINCHA GARCIA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "22/06/2023",
    placa: "JBT653",
    modelo: "2017",
    cedula: "1115079309",
    nombres: "CRISTIAN STIVEN SOLARTE CASTILLO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "17/01/2024",
    placa: "JCP546",
    modelo: "2017",
    cedula: "10250302",
    nombres: "ALBERTO BENAVIDES ARROYAVE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/08/2024",
    placa: "MVU663",
    modelo: "2013",
    cedula: "70140769",
    nombres: "GUSTAVO ANDRES ANDRES ARANGO"
  },
  {
    compañia: "PREVISORA",
    finvigencia: "17/04/2024",
    placa: "GWY214",
    modelo: "2020",
    cedula: "1152225179",
    nombres: "QUITIAN MONA VALENTINA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/10/2024",
    placa: "IHT280",
    modelo: "2016",
    cedula: "1077424775",
    nombres: "WILBER SKID MOSQUERA RODRIGUEZ"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "11/11/2024",
    placa: "IXU260",
    modelo: "2017",
    cedula: "71313675",
    nombres: "Eduan Giovany Moreno Oliveros"
  },
  {
    compañia: "ESTADO",
    finvigencia: "18/11/2024",
    placa: "GVM622",
    modelo: "2020",
    cedula: "9004945764",
    nombres: "FORTUNE SAS"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "29/12/2023",
    placa: "JQP872",
    modelo: "2021",
    cedula: "1020404492",
    nombres: "ARBOLEDA BUILES, YEISSON STEVE"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "28/06/2024",
    placa: "EOV472",
    modelo: "2019",
    cedula: "1152188189",
    nombres: "CRISTIAN CAMILO VASCO RODRIGUE"
  },
  {
    compañia: "SBS",
    finvigencia: "21/10/2021",
    placa: "KMT457",
    modelo: "2012",
    cedula: "19768159",
    nombres: "DAVILA VARGAS, YOHN DARIO"
  },
  {
    compañia: "SBS",
    finvigencia: "16/08/2024",
    placa: "USW462",
    modelo: "2015",
    cedula: "70070639",
    nombres: "HERNANDEZ ZABALA, FRANCISCO JAVIER"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "22/06/2022",
    placa: "RIH390",
    modelo: "2008",
    cedula: "1037668142",
    nombres: "TAHIREN PI?EDOS SANDOVAL"
  },
  {
    compañia: "ESTADO",
    finvigencia: "22/06/2022",
    placa: "MIW314",
    modelo: "2012",
    cedula: "98487256",
    nombres: "LUBIN JOSE OSPINA PULGARIN"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "26/07/2024",
    placa: "JCP889",
    modelo: "2016",
    cedula: "1104868817",
    nombres: "MILTON JESUS BUELVAS CUELLO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "22/06/2023",
    placa: "EOK594",
    modelo: "2019",
    cedula: "19212747",
    nombres: "GUSTAVO LEON ACEVEDO MORALES"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "12/09/2024",
    placa: "RAM361",
    modelo: "2010",
    cedula: "12129370",
    nombres: "CARLOS HERNEY JOVEN PASCUAS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "25/07/2023",
    placa: "FUP511",
    modelo: "2019",
    cedula: "8358487",
    nombres: "OSORIO PINEDA JUAN DAVID"
  },
  {
    compañia: "ESTADO",
    finvigencia: "22/06/2023",
    placa: "EOU514",
    modelo: "2019",
    cedula: "43911554",
    nombres: "LINA MARCELA BERRIO CHAVERRA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "22/06/2022",
    placa: "ELN047",
    modelo: "2009",
    cedula: "1020409176",
    nombres: "VILLEGAS BARBARAN, JHON FERNAN"
  },
  {
    compañia: "ESTADO",
    finvigencia: "27/01/2023",
    placa: "HGT774",
    modelo: "2014",
    cedula: "98545029",
    nombres: "RUBEN DARIO GRANDA ALVAREZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "28/05/2024",
    placa: "JKK038",
    modelo: "2017",
    cedula: "1037621416",
    nombres: "AMADO VASQUEZ, JORGE ANDRES"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "21/06/2024",
    placa: "INQ919",
    modelo: "2016",
    cedula: "43628330",
    nombres: "FLURY VALENCIA, ERIKA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "22/06/2024",
    placa: "IYR062",
    modelo: "2016",
    cedula: "43580221",
    nombres: "CANTILLO JARAMILLO ADELA MARIA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "26/08/2021",
    placa: "DFV437",
    modelo: "2012",
    cedula: "15326451",
    nombres: "GOMEZ PARRA, RUBIEL ANTONIO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/08/2024",
    placa: "IOT221",
    modelo: "2016",
    cedula: "43455161",
    nombres: "GALLON CASTA?EDA, PAOLA ANDREA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "23/06/2022",
    placa: "EFX090",
    modelo: "2018",
    cedula: "1152204890",
    nombres: "LOPEZ SANCHEZ, ELIZABETH"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "07/10/2024",
    placa: "JON208",
    modelo: "2021",
    cedula: "42769718",
    nombres: "RAMIREZ VELEZ RUTH ESTELA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/12/2023",
    placa: "RKK294",
    modelo: "2012",
    cedula: "43093611",
    nombres: "CARMONA ORREGO, CLAUDIA MARIA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/03/2024",
    placa: "JHS905",
    modelo: "2018",
    cedula: "71762587",
    nombres: "CARLOS ANDRES PALACIO BETANCUR"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "03/11/2021",
    placa: "CPP793",
    modelo: "2007",
    cedula: "43622037",
    nombres: "CADAVID ZAPATA, ALEJANDRA MAR"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "17/07/2024",
    placa: "GEZ626",
    modelo: "2020",
    cedula: "71698067",
    nombres: "BERRIO MESA,NORBEY ALONSO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/12/2024",
    placa: "EOM884",
    modelo: "2019",
    cedula: "811011779",
    nombres: "RENTING COLOMBIA S.A.S."
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/05/2024",
    placa: "DRM377",
    modelo: "2019",
    cedula: "70105529",
    nombres: "ARMANDO DE JESUS RAMIREZ SILVA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "19/08/2024",
    placa: "JBP887",
    modelo: "2017",
    cedula: "1037657468",
    nombres: "LUISA MARIA ALZATE TIRADO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "23/06/2024",
    placa: "KGV553",
    modelo: "2010",
    cedula: "1017187060",
    nombres: "JOSE ANGEL MARTINEZ GIRALDO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "24/09/2024",
    placa: "DSY026",
    modelo: "2018",
    cedula: "17155785",
    nombres: "GARCIA RAMIREZ JULIO, CESAR"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "18/05/2021",
    placa: "GVM389",
    modelo: "2020",
    cedula: "71794772",
    nombres: "JOHN FREDY PALACIO VASQUEZ"
  },
  {
    compañia: "ESTADO",
    finvigencia: "28/11/2024",
    placa: "IOU831",
    modelo: "2015",
    cedula: "1128436884",
    nombres: "DANIEL GOMEZ MONTES"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "22/12/2024",
    placa: "HJX912",
    modelo: "2014",
    cedula: "1051870113",
    nombres: "CRUZ CAMILA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/12/2024",
    placa: "GVO017",
    modelo: "2020",
    cedula: "43721538",
    nombres: "LUZ MARIA DIOSA VALENCIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/11/2024",
    placa: "IYS079",
    modelo: "2016",
    cedula: "43619963",
    nombres: "MONSALVE GOMEZ, LINA MARCELA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/01/2025",
    placa: "INP037",
    modelo: "2016",
    cedula: "98632384",
    nombres: "CESAR AUGUSTO MARTINEZ ZAPATA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "12/10/2024",
    placa: "GEP943",
    modelo: "2020",
    cedula: "43920247",
    nombres: "RIVAS MORENO, FANNY CECILIA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "30/06/2024",
    placa: "GRM802",
    modelo: "2020",
    cedula: "7519609",
    nombres: "GUTIERREZ MORENO GUILLERMO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/07/2024",
    placa: "JHU151",
    modelo: "2018",
    cedula: "21468411",
    nombres: "KARLA CRISTINA FLOREZ ESTRADA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "09/06/2024",
    placa: "JKP227",
    modelo: "2018",
    cedula: "19300546",
    nombres: "BUITRAGO VALLEJO, RAUL HUMBERTO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "07/09/2024",
    placa: "INR282",
    modelo: "2016",
    cedula: "1128425251",
    nombres: "JHOAN ESTEBAN TEJADA CASTA?O"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "09/03/2024",
    placa: "JON797",
    modelo: "2021",
    cedula: "1036647008",
    nombres: "RESTREPO GONZALEZ, LAURA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "GVP076",
    modelo: "2020",
    cedula: "71604164",
    nombres: "MAURICIO HERNANDO BETANCUR CORREA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/07/2024",
    placa: "JYZ057",
    modelo: "2021",
    cedula: "8031150",
    nombres: "MANUEL ALEJANDRO ESCOBAR MARTINEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/09/2023",
    placa: "JPU358",
    modelo: "2021",
    cedula: "71709904",
    nombres: "FERNANDO GALVIS GONZALEZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/07/2024",
    placa: "JCR597",
    modelo: "2017",
    cedula: "1035417947",
    nombres: "PEREZ MONTOYA ANDRES FELIPE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "05/11/2024",
    placa: "JPV707",
    modelo: "2020",
    cedula: "98630674",
    nombres: "SOLIDAY JARAMILLO, TIMOTEO BERNABE"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "31/08/2024",
    placa: "GEP292",
    modelo: "2020",
    cedula: "1039286963",
    nombres: "DURANGO ECHAVARRIA NATALIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "24/08/2024",
    placa: "JJK365",
    modelo: "2018",
    cedula: "98539202",
    nombres: "PAJON SANCHEZ,JUAN CARLOS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/02/2025",
    placa: "GVP312",
    modelo: "2020",
    cedula: "1128421442",
    nombres: "MONCADA GUTIERREZ,DANIELA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "23/06/2023",
    placa: "MSP368",
    modelo: "2012",
    cedula: "71022006",
    nombres: "BRAVO RESTREPO, LUIS ALFONSO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "22/10/2024",
    placa: "FUM756",
    modelo: "2019",
    cedula: "32457847",
    nombres: "OLGA LUCIA DE FATIMA BOTERO ESCOBAR"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "26/12/2024",
    placa: "JPU815",
    modelo: "2021",
    cedula: "42891178",
    nombres: "GLORIA CECILIA MESA SIERRA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "26/12/2024",
    placa: "GEP295",
    modelo: "2020",
    cedula: "1035435540",
    nombres: "MICHELL ESTRADA VELEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "13/01/2025",
    placa: "HPL029",
    modelo: "2014",
    cedula: "1020436584",
    nombres: "ALEJANDRA LOPERA MU?OZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "02/08/2024",
    placa: "ISS510",
    modelo: "2016",
    cedula: "1128400899",
    nombres: "JUAN SEBASTIAN RUIZ VARGAS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "23/07/2024",
    placa: "GVQ350",
    modelo: "2020",
    cedula: "16212854",
    nombres: "ALVARO CHAPARRO MUNOZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/11/2024",
    placa: "GLV353",
    modelo: "2020",
    cedula: "13541457",
    nombres: "JUAN PABLO VARGAS ISIDRO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "14/07/2024",
    placa: "IOS477",
    modelo: "2016",
    cedula: "98487846",
    nombres: "OROZCO VILLEGAS , OROZCO VILLEGAS ,JOR"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2024",
    placa: "GWW046",
    modelo: "2020",
    cedula: "1128282554",
    nombres: "SERGIO VERGARA OSPINA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/09/2019",
    placa: "HZN450",
    modelo: "2014",
    cedula: "30314481",
    nombres: "MONICA VILLEGAS VILLEGAS"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "20/07/2023",
    placa: "GVQ526",
    modelo: "2021",
    cedula: "98702377",
    nombres: "TOBON ALVAREZ MARIO ANDRES"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/02/2020",
    placa: "KJT385",
    modelo: "2013",
    cedula: "37946153",
    nombres: "QUINTERO MEZA YAMILE"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "09/12/2024",
    placa: "KKB010",
    modelo: "2011",
    cedula: "98644725",
    nombres: "SAUL ARLEY CARDONA FRANCO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "31/12/2022",
    placa: "JCN428",
    modelo: "2016",
    cedula: "43443308",
    nombres: "MARIA YACKELINE JARAMILLO CANO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "02/10/2024",
    placa: "IAP820",
    modelo: "2015",
    cedula: "1017162377",
    nombres: "LIZA FERNANDA TABARES GALLEGO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/06/2024",
    placa: "IUD193",
    modelo: "2017",
    cedula: "42890359",
    nombres: "JARAMILLO TOBON, LUZ MAR"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "24/09/2024",
    placa: "GES059",
    modelo: "2020",
    cedula: "71397971",
    nombres: "CESAR AUGUSTO CANO JIMENEZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/02/2024",
    placa: "JBQ541",
    modelo: "2017",
    cedula: "43998148",
    nombres: "PATI?O MARILUZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2024",
    placa: "JYR052",
    modelo: "2021",
    cedula: "1036652019",
    nombres: "TAMAYO GIRALDO, JUAN FELIPE"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "18/01/2024",
    placa: "IAX135",
    modelo: "2015",
    cedula: "71662331",
    nombres: "BUILES ESCUDERO CARLOS MARIO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "27/01/2024",
    placa: "DMW710",
    modelo: "2017",
    cedula: "1039453067",
    nombres: "VALENCIA DIAZ RICARDO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/12/2024",
    placa: "IHV105",
    modelo: "2016",
    cedula: "3573619",
    nombres: "OSCAR FABIAN PINO LOPERA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/10/2022",
    placa: "GEP487",
    modelo: "2020",
    cedula: "70092833",
    nombres: "GERMAN GUILLERMO MADRID MESA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "24/02/2025",
    placa: "JYQ962",
    modelo: "2022",
    cedula: "431666",
    nombres: "MARIA ALEJANDRA ABRAMS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "23/06/2024",
    placa: "MOL816",
    modelo: "2009",
    cedula: "70553483",
    nombres: "ALVARO LOPEZ CALLE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "25/05/2024",
    placa: "JKK313",
    modelo: "2017",
    cedula: "1128482162",
    nombres: "PUERTA POSADA, YEISON"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/10/2024",
    placa: "GRQ645",
    modelo: "2020",
    cedula: "52329080",
    nombres: "RUBIA IDALY REYES MONCADA"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "06/01/2025",
    placa: "MXX860",
    modelo: "2014",
    cedula: "42894791",
    nombres: "PIEDRAHITA RADA LUZ MARINA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "24/06/2024",
    placa: "DFT210",
    modelo: "2011",
    cedula: "1037267435",
    nombres: "JULIAN DAVID MU?OZ GUERRA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/12/2024",
    placa: "EFY480",
    modelo: "2018",
    cedula: "79106936",
    nombres: "LUIS HERNANDO ROCHA REINA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "16/07/2022",
    placa: "PFN777",
    modelo: "2010",
    cedula: "1093213206",
    nombres: "JOHN EDISON MARIN RENDON"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/09/2023",
    placa: "EGK811",
    modelo: "2018",
    cedula: "1037632711",
    nombres: "SARA QUINTERO LOPEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "10/12/2024",
    placa: "DEU649",
    modelo: "2011",
    cedula: "8313459",
    nombres: "FILTZAN ROLDAN CARDONA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/03/2024",
    placa: "JYR729",
    modelo: "2021",
    cedula: "21466826",
    nombres: "PAOLA ANDREA LARA RAMIREZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "05/07/2024",
    placa: "JKP211",
    modelo: "2018",
    cedula: "1039451493",
    nombres: "JOHANA ANDREA MESA DIAZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/09/2024",
    placa: "HEX625",
    modelo: "2013",
    cedula: "71783547",
    nombres: "LOTERO RESTREPO, CESAR AUGUSTO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "27/01/2025",
    placa: "IAU185",
    modelo: "2015",
    cedula: "43787286",
    nombres: "MARTA GICELA GIRALDO FRANCO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "21/02/2024",
    placa: "HPL130",
    modelo: "2014",
    cedula: "98667130",
    nombres: "JORGE ANDRES LOPEZ GALVIS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "JPU529",
    modelo: "2021",
    cedula: "43633980",
    nombres: "ADRIANA MARIA PEREZ OSPINA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/06/2022",
    placa: "HYZ357",
    modelo: "2014",
    cedula: "43912662",
    nombres: "RAMIREZ CALDERON,BIBIANA CRISTINA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "31/07/2023",
    placa: "IEY995",
    modelo: "2015",
    cedula: "8299465",
    nombres: "GUSTAVO ANTONIO ALVAREZ GOMEZ"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "24/06/2024",
    placa: "HEY578",
    modelo: "2014",
    cedula: "43913883",
    nombres: "GARCIA GALEANO DIANA MARCELA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "MVU514",
    modelo: "2013",
    cedula: "32335104",
    nombres: "GERTRUDIS AMPARO DIAZ GONZALEZ"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "10/08/2024",
    placa: "DHY512",
    modelo: "2011",
    cedula: "1037612645",
    nombres: "SALAZAR MESA, JOSE RAMIRO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "24/06/2024",
    placa: "HXX146",
    modelo: "2015",
    cedula: "71638019",
    nombres: "HIGUITA MIRANDA, JOSE GUSTAVO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "05/03/2024",
    placa: "ISQ982",
    modelo: "2016",
    cedula: "11223910",
    nombres: "SAID GARCIA SUAREZ"
  },
  {
    compañia: "ESTADO",
    finvigencia: "06/12/2024",
    placa: "JST213",
    modelo: "2021",
    cedula: "43185357",
    nombres: "MARIA CRISTINA VELEZ LONDOÃO"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "24/06/2022",
    placa: "DLW174",
    modelo: "2012",
    cedula: "1047964488",
    nombres: "JIMENEZ MU?OZ YURANY ANDREA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "16/03/2022",
    placa: "MVT410",
    modelo: "2013",
    cedula: "1010160595",
    nombres: "AYDA KARINA SEGURA ARIAS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "03/05/2024",
    placa: "MIT086",
    modelo: "2014",
    cedula: "71736483",
    nombres: "CARLOS EDUARDO BOLIVAR LOZANO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "30/10/2024",
    placa: "JOQ162",
    modelo: "2021",
    cedula: "8029489",
    nombres: "RIVERA LICONA JULIAN ALBERTO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "12/01/2024",
    placa: "IHT538",
    modelo: "2016",
    cedula: "98561213",
    nombres: "JULIO ALBERTO OSORIO OCHOA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "30/08/2023",
    placa: "INS212",
    modelo: "2017",
    cedula: "19767861",
    nombres: "GARCIAS BARBAS, JOSE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/07/2024",
    placa: "JSV739",
    modelo: "2021",
    cedula: "900231332",
    nombres: "RENTATUREX S.A."
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "IRY881",
    modelo: "2017",
    cedula: "39450806",
    nombres: "LINA MARIA VELASQUEZ CARDENAS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "25/06/2023",
    placa: "HNV266",
    modelo: "2014",
    cedula: "70519462",
    nombres: "PEDRO LUIS RAMIREZ PEDRO LUIS"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "25/06/2023",
    placa: "RAZ006",
    modelo: "2011",
    cedula: "43825531",
    nombres: "CIFUNTES MORENO, ASTRID LILIAN"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "04/05/2023",
    placa: "NEN063",
    modelo: "2013",
    cedula: "71223600",
    nombres: "MARIO ESTEBAN MARTINEZ CASTRO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "26/12/2024",
    placa: "FQQ664",
    modelo: "2019",
    cedula: "43183359",
    nombres: "SANDRA MILENA ROMO OSPINA ."
  },
  {
    compañia: "LIBERTY",
    finvigencia: "05/08/2024",
    placa: "FVP960",
    modelo: "2020",
    cedula: "19382016",
    nombres: "JOAQUIN CARRASCAL"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "31/03/2023",
    placa: "GRN816",
    modelo: "2019",
    cedula: "1036673323",
    nombres: "JUAN FELIPE JARAMILLO MONTOYA"
  },
  {
    compañia: "SBS",
    finvigencia: "21/04/2023",
    placa: "MXY778",
    modelo: "2014",
    cedula: "71380453",
    nombres: "OSPINA VELASQUEZ, JUAN CARLOS"
  },
  {
    compañia: "SBS",
    finvigencia: "21/12/2024",
    placa: "JIY800",
    modelo: "2017",
    cedula: "31271306",
    nombres: "De La Cruz, Maria Gloria"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/10/2022",
    placa: "INP832",
    modelo: "2016",
    cedula: "98567442",
    nombres: "ALEJANDRO RIVERA ALVAREZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/12/2023",
    placa: "INQ884",
    modelo: "2017",
    cedula: "1037071587",
    nombres: "JHONATAN ALEXIS ZULUAGA RINCON"
  },
  {
    compañia: "ESTADO",
    finvigencia: "25/06/2023",
    placa: "MSU359",
    modelo: "2016",
    cedula: "1118289934",
    nombres: "JEFFERSON ANDRES ORTIZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/12/2024",
    placa: "DSU374",
    modelo: "2018",
    cedula: "8396540",
    nombres: "JOSE DIEGO QUINTERO VASQUEZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "17/02/2022",
    placa: "INP745",
    modelo: "2016",
    cedula: "1036604474",
    nombres: "ALZATE CASTA?O,LEIDY JOHANNA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "08/03/2024",
    placa: "GWY794",
    modelo: "2020",
    cedula: "39280149",
    nombres: "ARISTIZABAL AGUIRRE ARELLY"
  },
  {
    compañia: "ESTADO",
    finvigencia: "27/01/2022",
    placa: "MIZ819",
    modelo: "2013",
    cedula: "71392801",
    nombres: "JHON DAIRO FLOREZ VELEZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "15/06/2024",
    placa: "IYR826",
    modelo: "2017",
    cedula: "71271203",
    nombres: "ESTRADA CAMPILLO, JUAN PABLO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "02/03/2024",
    placa: "EHM610",
    modelo: "2018",
    cedula: "43438740",
    nombres: "GLORIA EUGENIA CORREA MAYA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/09/2023",
    placa: "JYQ582",
    modelo: "2021",
    cedula: "71787002",
    nombres: "JORGE ANDRES URRETA ARANGO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "20/09/2024",
    placa: "EIO825",
    modelo: "2018",
    cedula: "43903291",
    nombres: "SHIRLEY RAMIREZ VANEGAS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "05/06/2024",
    placa: "EFX061",
    modelo: "2018",
    cedula: "15511815",
    nombres: "RIOS GARCIA SERGIO IGNACIO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "04/08/2023",
    placa: "MIZ016",
    modelo: "2012",
    cedula: "1035852759",
    nombres: "JONATHAN ESTEBAN TORO LASSO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/12/2024",
    placa: "KMR755",
    modelo: "2012",
    cedula: "42749428",
    nombres: "SONIA ALVAREZ SUAREZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/08/2024",
    placa: "KHO282",
    modelo: "2011",
    cedula: "70041898",
    nombres: "AQUILINO VARGAS RUIZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "24/06/2024",
    placa: "HGY941",
    modelo: "2014",
    cedula: "1020458344",
    nombres: "CANO CANO YBETH"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "02/06/2024",
    placa: "HGV234",
    modelo: "2013",
    cedula: "9004376903",
    nombres: "CARPINTERIA Y EBANISTERIA DB S"
  },
  {
    compañia: "SBS",
    finvigencia: "01/03/2024",
    placa: "KPQ123",
    modelo: "2022",
    cedula: "1077647201",
    nombres: "PENALOZA RAMIREZ, MARLI"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/06/2024",
    placa: "BXP872",
    modelo: "2011",
    cedula: "3603005",
    nombres: "OSCAR ENRIQUE FRANCO CIFUENTES"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/12/2022",
    placa: "JYU295",
    modelo: "2022",
    cedula: "1037586367",
    nombres: "MARCELA GUTIERREZ BOTERO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "27/01/2024",
    placa: "KHS455",
    modelo: "2012",
    cedula: "1077432760",
    nombres: "SAN MARTIN MOSQUERA, SAUL"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "18/02/2025",
    placa: "HPK045",
    modelo: "2014",
    cedula: "43514576",
    nombres: "ARENAS AMAYA,MARTHA CECILIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "12/07/2024",
    placa: "GRR000",
    modelo: "2020",
    cedula: "923989",
    nombres: "SALMAN , ISSAM Y S"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "29/02/2024",
    placa: "JHP146",
    modelo: "2017",
    cedula: "1192767221",
    nombres: "PACHECO ANGARITA ALEX DAVID"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2024",
    placa: "FXQ962",
    modelo: "2019",
    cedula: "43991592",
    nombres: "ISABEL CRISTINA TABORDA MORALES"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "25/06/2024",
    placa: "EPS711",
    modelo: "2019",
    cedula: "1035850344",
    nombres: "QUINTANA ZAPATA JULIAN ESTEBAN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "26/12/2024",
    placa: "UST718",
    modelo: "2015",
    cedula: "98497688",
    nombres: "GUSTAVO DE JESUS GIL HOLGUIN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/02/2024",
    placa: "INO858",
    modelo: "2016",
    cedula: "71732914",
    nombres: "JUAN CARLOS BOLIVAR GUTIERREZ"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "25/06/2022",
    placa: "KHG286",
    modelo: "2010",
    cedula: "71703910",
    nombres: "JESUS QUINTERO CADAVID JAIRO DE JESUS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/04/2024",
    placa: "DLX705",
    modelo: "2012",
    cedula: "98497824",
    nombres: "FREDY ALBEIRO CARDE?O PALACIO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "22/12/2024",
    placa: "IOS913",
    modelo: "2016",
    cedula: "32316680",
    nombres: "EDELMIRA VANGAS OQUENDO"
  },
  {
    compañia: "SBS",
    finvigencia: "06/10/2022",
    placa: "MIY760",
    modelo: "2013",
    cedula: "1128402458",
    nombres: "VALENZUELA GUZMAN, YERLY VANESSA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "28/05/2024",
    placa: "EGZ618",
    modelo: "2018",
    cedula: "1026131991",
    nombres: "MORALES ATEHORTUA, GERMAN DARIO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "09/12/2024",
    placa: "JDP510",
    modelo: "2017",
    cedula: "80655105",
    nombres: "MOYANO BECERRA PEDRO LUIS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "28/06/2024",
    placa: "JON276",
    modelo: "2020",
    cedula: "43923884",
    nombres: "ZAPATA LOAIZA, ALEJANDRA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "21/09/2024",
    placa: "JDP832",
    modelo: "2016",
    cedula: "18611012",
    nombres: "JOSE ADRIAN MORENO AGUDELO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "17/04/2020",
    placa: "JKL567",
    modelo: "2018",
    cedula: "1036337556",
    nombres: "PARRA MONTOYA JEFFERSON DANILO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "16/08/2024",
    placa: "EOU700",
    modelo: "2019",
    cedula: "71748690",
    nombres: "MEDINA VARGAS, JUAN CARLOS"
  },
  {
    compañia: "SBS",
    finvigencia: "12/04/2024",
    placa: "JZM282",
    modelo: "2022",
    cedula: "43671562",
    nombres: "VANEGAS HURTADO, GLADYS AMPARO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/07/2024",
    placa: "EGX626",
    modelo: "2018",
    cedula: "1035859629",
    nombres: "RAMON FELIPE CASTRILLON GOMEZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "28/01/2025",
    placa: "EIK776",
    modelo: "2018",
    cedula: "98568911",
    nombres: "VILLADA AGUDELO ROYNEL"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/08/2022",
    placa: "GHV428",
    modelo: "2020",
    cedula: "811011779",
    nombres: "RENTING COLOMBIA S.A.S."
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/02/2024",
    placa: "MST941",
    modelo: "2013",
    cedula: "43600006",
    nombres: "ANGELA DENIS, GONZALEZ ZAPATA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "30/06/2024",
    placa: "JPS496",
    modelo: "2021",
    cedula: "1030575451",
    nombres: "MILLAN CARO, MILLAN CARO,JENNIFER"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/04/2022",
    placa: "JYZ289",
    modelo: "2020",
    cedula: "15502042",
    nombres: "JHON JAIRO VASQUEZ TAMAYO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "06/12/2024",
    placa: "FQX578",
    modelo: "2019",
    cedula: "8153478",
    nombres: "VICTOR EDUARDO OSORIO PEREZ"
  },
  {
    compañia: "SBS",
    finvigencia: "19/12/2024",
    placa: "JPW972",
    modelo: "2021",
    cedula: "70562246",
    nombres: "VARGAS ALVAREZ, LUIS FERNANDO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "28/08/2024",
    placa: "INR961",
    modelo: "2017",
    cedula: "91248968",
    nombres: "VERA BAUTISTA, JORGE AVILIO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/05/2024",
    placa: "EPR887",
    modelo: "2019",
    cedula: "71525898",
    nombres: "FREDDY LEON CANO GALLEGO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/02/2024",
    placa: "JPX867",
    modelo: "2021",
    cedula: "1045693279",
    nombres: "EDUARDO LUIS AMARIS MEZA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "20/09/2022",
    placa: "INP878",
    modelo: "2016",
    cedula: "79615855",
    nombres: "JULIAN MOLINA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "02/04/2024",
    placa: "GEK630",
    modelo: "2020",
    cedula: "7319717",
    nombres: "JHON ALEXANDER, ARBOLEDA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/01/2022",
    placa: "IGN308",
    modelo: "2016",
    cedula: "43155459",
    nombres: "SULLY CAROLINA RAMIREZ VELASQUEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/11/2023",
    placa: "EOW985",
    modelo: "2019",
    cedula: "42997011",
    nombres: "AMANDA LUCIA SALDARRIAGA HENAO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/07/2024",
    placa: "IST553",
    modelo: "2016",
    cedula: "1016022934",
    nombres: "ERIKA MARCELA ROBLES PEREZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "29/07/2024",
    placa: "EHL125",
    modelo: "2018",
    cedula: "8277588",
    nombres: "OCHOA MORENO GABRIEL JAIME"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "18/12/2023",
    placa: "LAX877",
    modelo: "2020",
    cedula: "79923034",
    nombres: "CAMILO BENJAMIN MARTINEZ SIMBAQUEBA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "29/07/2023",
    placa: "EFY992",
    modelo: "2018",
    cedula: "71266600",
    nombres: "GABRIEL JAIME CARDONA GARZON"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/04/2024",
    placa: "EOU542",
    modelo: "2019",
    cedula: "1017211026",
    nombres: "MONICA SUSANA RESTREPO RAIGOSA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/01/2024",
    placa: "MIZ627",
    modelo: "2013",
    cedula: "98517793",
    nombres: "HENRY RENDON CALDERON"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "22/10/2021",
    placa: "KML810",
    modelo: "2014",
    cedula: "1018484038",
    nombres: "JUAN CARLOS BARCO BARCO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2022",
    placa: "MVV976",
    modelo: "2014",
    cedula: "1152217967",
    nombres: "BORJA AVALO SEBASTIAN"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "26/06/2024",
    placa: "MVT241",
    modelo: "2013",
    cedula: "43180745",
    nombres: "HINCAPIE ARCILA LAURA DURLEY"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "10/06/2020",
    placa: "DZR775",
    modelo: "2017",
    cedula: "70097083",
    nombres: "GONZALO DOMINGUEZ SALAZAR"
  },
  {
    compañia: "ESTADO",
    finvigencia: "16/06/2024",
    placa: "DFS889",
    modelo: "2011",
    cedula: "1069470764",
    nombres: "YONATAN LUIS ACEVEDO NARANJO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/07/2024",
    placa: "MTT650",
    modelo: "2013",
    cedula: "43811118",
    nombres: "DIANA JANNET ALZATE ARENAS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "12/07/2024",
    placa: "GAX185",
    modelo: "2020",
    cedula: "1106772233",
    nombres: "RAMIREZ BELTRAN,IVAN RICARDO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/12/2019",
    placa: "FOU218",
    modelo: "2019",
    cedula: "52323471",
    nombres: "DALIA PATARROYO GUTIERREZ"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "06/04/2024",
    placa: "IWX782",
    modelo: "2016",
    cedula: "1016009805",
    nombres: "CINDY NATHALIA TORRES MARIN"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/04/2024",
    placa: "EOV294",
    modelo: "2018",
    cedula: "64696555",
    nombres: "ODALIS FARLEIS NARVAEZ TRUJILL"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "26/06/2024",
    placa: "FHJ492",
    modelo: "2009",
    cedula: "1017157680",
    nombres: "LOPEZ BEDOYA LORENA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "11/08/2022",
    placa: "KMS373",
    modelo: "2012",
    cedula: "1020448054",
    nombres: "ALEXANDER ALZATE GALEANO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/12/2024",
    placa: "EOW969",
    modelo: "2019",
    cedula: "32108455",
    nombres: "NATALIA AGUIRRE ACEVEDO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "27/01/2024",
    placa: "JIY938",
    modelo: "2017",
    cedula: "70505733",
    nombres: "FERNANDO ALBERTO LONDONO ZAPATA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "26/10/2023",
    placa: "IOU177",
    modelo: "2016",
    cedula: "1214721018",
    nombres: "CAMILO GARCIA GUTIERREZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "14/10/2023",
    placa: "GEY809",
    modelo: "2020",
    cedula: "43650919",
    nombres: "PELAEZ RODRIGUEZ LETICIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/03/2022",
    placa: "DHP025",
    modelo: "2012",
    cedula: "72005565",
    nombres: "LUIS ALFREDO DE LA ROSA DUQUE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "11/03/2024",
    placa: "EIN421",
    modelo: "2019",
    cedula: "1060650958",
    nombres: "LUIZ FELIPE MUÑOZ ARROYAVE"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "26/06/2022",
    placa: "FUN468",
    modelo: "2019",
    cedula: "1017234465",
    nombres: "GONZALEZ RIOS, KAREN JULIETH"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "21/06/2024",
    placa: "JHP773",
    modelo: "2017",
    cedula: "1035438699",
    nombres: "CAROLINA PEREZ RESTREPO"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "26/06/2024",
    placa: "MFW610",
    modelo: "2013",
    cedula: "32324341",
    nombres: "LEONISA DEL PILAR MEJIA HINCAPIE"
  },
  {
    compañia: "ESTADO",
    finvigencia: "11/01/2024",
    placa: "FXN560",
    modelo: "2017",
    cedula: "98584696",
    nombres: "MARTIN EMILIO CASTRO HOYOS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "12/08/2024",
    placa: "GWO198",
    modelo: "2021",
    cedula: "28557740",
    nombres: "HERNANDEZ RODRIGUEZ, LINA MARCELLA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/08/2024",
    placa: "GEN406",
    modelo: "2020",
    cedula: "21843399",
    nombres: "BLANCA NUBIA VALENCIA GUTIERREZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "27/06/2022",
    placa: "KMY942",
    modelo: "2022",
    cedula: "59816665",
    nombres: "DAYRA JANNETH FIGUEROA PATI?O"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "03/01/2023",
    placa: "IAZ757",
    modelo: "2016",
    cedula: "71265462",
    nombres: "JUAN CAMILO VELEZ GUTIERREZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "27/06/2024",
    placa: "GEP273",
    modelo: "2019",
    cedula: "43273974",
    nombres: "LUZ EUGENIA HIGUITA ESTRADA"
  },
  {
    compañia: "PREVISORA",
    finvigencia: "24/11/2024",
    placa: "DUT915",
    modelo: "2018",
    cedula: "18913371",
    nombres: "CORONEL GALVIS OLIVO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/11/2022",
    placa: "EOU198",
    modelo: "2019",
    cedula: "1044504553",
    nombres: "JAVIER DAVID LORA GIL"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "01/07/2024",
    placa: "IOS953",
    modelo: "2016",
    cedula: "1088537011",
    nombres: "GUTIERREZ ALVAREZ OSCAR EDUARDO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/03/2024",
    placa: "GEX377",
    modelo: "2020",
    cedula: "43665269",
    nombres: "MARILYN PULGARIN CASTRO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "14/12/2023",
    placa: "USY426",
    modelo: "2016",
    cedula: "43402144",
    nombres: "GOMEZ GIRALDO, MARTHA LUZ"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "15/06/2024",
    placa: "ISR772",
    modelo: "2016",
    cedula: "1090430531",
    nombres: "MILANGELA ESPERANZA ROJAS MENDOZA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/09/2024",
    placa: "HZN662",
    modelo: "2015",
    cedula: "71678527",
    nombres: "FREDY ALBERTO PARRA MARIN"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "15/03/2024",
    placa: "EIO086",
    modelo: "2018",
    cedula: "71386045",
    nombres: "VARGAS CANO, JOHN HARVEY"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/04/2024",
    placa: "DWQ998",
    modelo: "2017",
    cedula: "1140900955",
    nombres: "EMANUEL LOPEZ DEL VALLE"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/04/2024",
    placa: "RLY774",
    modelo: "2012",
    cedula: "1152687244",
    nombres: "CAROLINA ANDREA GAVIRIA MONTOY"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/07/2024",
    placa: "KAO209",
    modelo: "2011",
    cedula: "39454866",
    nombres: "MU?OZ BETANCUR YULI CATALINA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "07/04/2024",
    placa: "IHL018",
    modelo: "2016",
    cedula: "39449570",
    nombres: "SANDRA MYLENA HOYOS CASTRO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "04/04/2024",
    placa: "INP503",
    modelo: "2016",
    cedula: "32434913",
    nombres: "OLGA CECILIA CEBALLOS CADAVID"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "12/02/2024",
    placa: "IUE987",
    modelo: "2020",
    cedula: "42788649",
    nombres: "CORREA LINA MARCELA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/03/2024",
    placa: "GEZ826",
    modelo: "2019",
    cedula: "1036652977",
    nombres: "DANIEL JOSE ACEVEDO ARROYAVE"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "11/11/2024",
    placa: "JSQ481",
    modelo: "2021",
    cedula: "32481990",
    nombres: "SOCORRO AGUDELO AMALIA DEL"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "14/07/2024",
    placa: "ELM718",
    modelo: "2009",
    cedula: "21931287",
    nombres: "PODASA MUÑOZ, MARIA NELLY"
  },
  {
    compañia: "ESTADO",
    finvigencia: "28/04/2023",
    placa: "JYS827",
    modelo: "2022",
    cedula: "43984855",
    nombres: "LEIDY JHOANNA AGUILAR VASQUEZ"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "26/06/2024",
    placa: "IAV568",
    modelo: "2015",
    cedula: "71646179",
    nombres: "RAMIREZ ROJAS, HERNAN MAURICIO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "07/12/2022",
    placa: "FQP837",
    modelo: "2019",
    cedula: "26285950",
    nombres: "NUBIA ADRIANA ZAPATA LIZCANO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/11/2024",
    placa: "KBU187",
    modelo: "2011",
    cedula: "1036392446",
    nombres: "ERIKA JANET VALENCIA GOMEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/12/2023",
    placa: "DHW360",
    modelo: "2012",
    cedula: "98574988",
    nombres: "MAURICIO ALBERTO GARCIA PARRA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "28/06/2023",
    placa: "JFP248",
    modelo: "2014",
    cedula: "43998607",
    nombres: "LEIDY JULIETH MUNOZ PIEDRAHITA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "28/06/2024",
    placa: "IHP368",
    modelo: "2016",
    cedula: "43876775",
    nombres: "PAOLA ANDREA SALDARRIAGA HOYOS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "04/12/2020",
    placa: "JSQ702",
    modelo: "2021",
    cedula: "1037583797",
    nombres: "CRISTIAN CAMILO GOEZ PINEDA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "24/02/2025",
    placa: "ESX670",
    modelo: "2019",
    cedula: "72325547",
    nombres: "RAMOS RAMOS JOSE EULICES"
  },
  {
    compañia: "SBS",
    finvigencia: "06/08/2024",
    placa: "GRL669",
    modelo: "2020",
    cedula: "1017139813",
    nombres: "CASTA?O VILLA, SINDY CRISTINA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "20/02/2024",
    placa: "GVP454",
    modelo: "2020",
    cedula: "52258704",
    nombres: "ZULMA ROCIO HERNANDEZ MARENTES"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "01/03/2024",
    placa: "GEZ843",
    modelo: "2019",
    cedula: "1090456648",
    nombres: "MAYRU MORANTES"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "11/09/2024",
    placa: "HYV920",
    modelo: "2018",
    cedula: "98528457",
    nombres: "OSPINA MORENO EDGAR IVAN"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "28/06/2022",
    placa: "GEL298",
    modelo: "2020",
    cedula: "6891320",
    nombres: "RUIZ ESTTIT LUIS FERNANDO"
  },
  {
    compañia: "PREVISORA",
    finvigencia: "19/01/2024",
    placa: "IHR115",
    modelo: "2016",
    cedula: "1017205620",
    nombres: "BALLESTEROS RAMIREZ JONNATHAN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/02/2024",
    placa: "JHS835",
    modelo: "2018",
    cedula: "70165214",
    nombres: "ELKIN ALBERTO ZULUAGA GARCIA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2024",
    placa: "GHW844",
    modelo: "2020",
    cedula: "71292593",
    nombres: "ALVARO MAYCOL GOMEZ BETANCUR"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "10/01/2025",
    placa: "JON072",
    modelo: "2020",
    cedula: "39445275",
    nombres: "FRANCO SERNA, DIANA CRISTINA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "01/09/2024",
    placa: "UEK493",
    modelo: "2015",
    cedula: "1037593198",
    nombres: "CELIS BETANCUR CESAR AUGUSTO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "11/07/2023",
    placa: "FJQ722",
    modelo: "2019",
    cedula: "98765748",
    nombres: "JHON JAIRO GRANDA PEREZ"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "28/03/2021",
    placa: "GEL906",
    modelo: "2019",
    cedula: "71593410",
    nombres: "OQUENDO SEGURO, BERNARDO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "26/10/2024",
    placa: "JZM195",
    modelo: "2022",
    cedula: "1103099658",
    nombres: "Alejandra Maria Lazaro Contreras"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "30/07/2023",
    placa: "JOT117",
    modelo: "2021",
    cedula: "21892878",
    nombres: "VALENCIA LUZ MARINA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "28/06/2024",
    placa: "JKO012",
    modelo: "2018",
    cedula: "32527483",
    nombres: "YEPES LUZ IVONNE"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "06/05/2022",
    placa: "KMT216",
    modelo: "2012",
    cedula: "43069695",
    nombres: "LUZ FRANCY CORREA VASQUEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "03/10/2024",
    placa: "JIY411",
    modelo: "2017",
    cedula: "71263669",
    nombres: "ANDRES FERNANDO ROJAS VELOZA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/09/2024",
    placa: "JOR675",
    modelo: "2020",
    cedula: "1128281859",
    nombres: "ISABEL CRISTINA RICO RAMIREZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "27/01/2024",
    placa: "JIX042",
    modelo: "2017",
    cedula: "43035923",
    nombres: "ALVAREZ RODRIGUEZ DORIS ADRIA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "23/05/2022",
    placa: "FHJ750",
    modelo: "2009",
    cedula: "32351115",
    nombres: "ESTRADA VALENCIA, MARYORI"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/07/2024",
    placa: "DSX134",
    modelo: "2017",
    cedula: "32446278",
    nombres: "NOHELIA DEL SOCORRO ACEVEDO CORTES"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "18/03/2024",
    placa: "JJK438",
    modelo: "2017",
    cedula: "1036621335",
    nombres: "MESA OCAMPO, ROBINSON"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "20/04/2024",
    placa: "EGK434",
    modelo: "2018",
    cedula: "15508559",
    nombres: "ORTIZ AGUIRRE, RODRIGO ALBERTO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/06/2024",
    placa: "EOT281",
    modelo: "2019",
    cedula: "21398572",
    nombres: "CONSUELO DE LAS MERCEDES MEJIA SALAZAR"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "03/01/2025",
    placa: "MXZ875",
    modelo: "2014",
    cedula: "94377135",
    nombres: "JOSE LUIS GOMEZ MENDOZA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "14/07/2024",
    placa: "ENY356",
    modelo: "2018",
    cedula: "1128430619",
    nombres: "RESTREPO HERNANDEZ, CHRISTIAN ALEXANDER"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "22/10/2024",
    placa: "MVV572",
    modelo: "2014",
    cedula: "71619752",
    nombres: "ALBERTO ENRIQUE CAMARGO HERNANDEZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "12/12/2022",
    placa: "MST344",
    modelo: "2013",
    cedula: "71219142",
    nombres: "OSORIO AGUDELO,SERGIO ALEJANDRO"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "04/03/2024",
    placa: "EIO083",
    modelo: "2018",
    cedula: "32400566",
    nombres: "DIOSA CORTES ELVIA MATILDE"
  },
  {
    compañia: "ESTADO",
    finvigencia: "12/07/2024",
    placa: "FJS036",
    modelo: "2021",
    cedula: "1017189467",
    nombres: "EDY YURANY SANMIGUEL USUGA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "27/12/2024",
    placa: "JKN396",
    modelo: "2017",
    cedula: "39266217",
    nombres: "Maria Luzmila Palacio Uribe"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "30/08/2024",
    placa: "GHV374",
    modelo: "2019",
    cedula: "32242898",
    nombres: "SANDRA BIVIANA DUQUE FORONDA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/09/2024",
    placa: "MOV606",
    modelo: "2011",
    cedula: "71750470",
    nombres: "GALLEGO PETRO LUIS FERNANDO, ."
  },
  {
    compañia: "MAPFRE",
    finvigencia: "16/02/2022",
    placa: "FIU331",
    modelo: "2021",
    cedula: "43060275",
    nombres: "MONSALVE MARTINEZ BLANCA IRENE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/11/2024",
    placa: "GFK116",
    modelo: "2020",
    cedula: "14799215",
    nombres: "CARLOS ANDRES SERNA GIRALDO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "16/08/2024",
    placa: "JIQ894",
    modelo: "2018",
    cedula: "1094885034",
    nombres: "SAAVEDRA MANCO CAROLINA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "28/06/2024",
    placa: "HXX181",
    modelo: "2014",
    cedula: "1000193501",
    nombres: "PALACIO CARDE?O SEBASTIAN"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "08/07/2024",
    placa: "DJP730",
    modelo: "2013",
    cedula: "1125779249",
    nombres: "RIVERA CARVAJAL KELLY JOHANA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "09/02/2024",
    placa: "HQP190",
    modelo: "2021",
    cedula: "21401234",
    nombres: "ECHEVERRI ESCOBAR ANGELA MARIA"
  },
  {
    compañia: "SBS",
    finvigencia: "29/06/2024",
    placa: "MIW211",
    modelo: "2013",
    cedula: "42889621",
    nombres: "RIOS NORE?A, ROSA CLEMENCIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/12/2020",
    placa: "EOL464",
    modelo: "2019",
    cedula: "8110117798",
    nombres: "RENTING COLOMBIA S.A.S"
  },
  {
    compañia: "ESTADO",
    finvigencia: "29/06/2023",
    placa: "MVU354",
    modelo: "2013",
    cedula: "71699461",
    nombres: "CARLOS ARTURO ALVAREZ HURTADO"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "29/06/2024",
    placa: "IHT686",
    modelo: "2016",
    cedula: "1036616219",
    nombres: "PEMBERTHY BOTERO JULIAN MAURICIO"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "10/03/2024",
    placa: "IEV245",
    modelo: "2015",
    cedula: "1001848752",
    nombres: "ARBOLEDA AYALA ANGY LORENA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2020",
    placa: "KHI479",
    modelo: "2011",
    cedula: "43595462",
    nombres: "NATALIA ANDREA OROZCO MENESES"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "29/06/2022",
    placa: "KAQ168",
    modelo: "2012",
    cedula: "32332660",
    nombres: "CASTAÑEDA SALAZAR, MARINA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/06/2024",
    placa: "USX620",
    modelo: "2015",
    cedula: "41721425",
    nombres: "YENITH DEL CARMEN CABRERA CAST"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "26/09/2024",
    placa: "DFT884",
    modelo: "2011",
    cedula: "32255319",
    nombres: "CALLE JARAMILLO NATALIA"
  },
  {
    compañia: "ZURICH-QBE",
    finvigencia: "11/02/2023",
    placa: "HZO248",
    modelo: "2015",
    cedula: "1040321678",
    nombres: "Felipe Yepes"
  },
  {
    compañia: "ESTADO",
    finvigencia: "21/12/2023",
    placa: "JSU182",
    modelo: "2021",
    cedula: "1023748634",
    nombres: "FABIO ALBERTO ESCUDERO VARELA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "29/07/2024",
    placa: "IUA917",
    modelo: "2012",
    cedula: "1216727598",
    nombres: "FLOREZ CASTRILLON JHON ANDERSON"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "11/07/2024",
    placa: "JYU446",
    modelo: "2022",
    cedula: "43578542",
    nombres: "CALLE CALLE SANDRA LILIANA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/10/2024",
    placa: "GEW562",
    modelo: "2019",
    cedula: "98666841",
    nombres: "LEONARDO ZAPATA RUIZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "30/12/2024",
    placa: "GRM939",
    modelo: "2020",
    cedula: "42757431",
    nombres: "QUIJANO JARAMILLO CLAUDIA TERE"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "18/11/2024",
    placa: "JSS818",
    modelo: "2021",
    cedula: "43603710",
    nombres: "OSSA TANGARIFE MARIA ISABEL"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "27/01/2024",
    placa: "DJP693",
    modelo: "2013",
    cedula: "43017347",
    nombres: "LOPEZ ORREGO BEATRIZ AURORA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "02/11/2024",
    placa: "JOS606",
    modelo: "2021",
    cedula: "3599616",
    nombres: "JUAN BAUTISTA LOPERA ARANGO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2024",
    placa: "IYS926",
    modelo: "2016",
    cedula: "70559308",
    nombres: "GONZALEZ RESTREPO, JUAN FERNANDO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "08/10/2024",
    placa: "HXV630",
    modelo: "2014",
    cedula: "71789313",
    nombres: "ARANGO GONZALEZ JOSE IGNACIO"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "29/06/2024",
    placa: "MXY402",
    modelo: "2014",
    cedula: "70566333",
    nombres: "NELSON DE JESUS RESTREPO ISAZA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "02/07/2019",
    placa: "MFX231",
    modelo: "2013",
    cedula: "71589963",
    nombres: "GONZALO RICO CALAD"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/10/2024",
    placa: "DLV589",
    modelo: "2012",
    cedula: "21371812",
    nombres: "ELVIA GARCES DE ZAPATA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "10/11/2023",
    placa: "FHA098",
    modelo: "2008",
    cedula: "1037389104",
    nombres: "GUILLERMO LEON BEDOYA BEDOYA"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "29/06/2023",
    placa: "DLZ618",
    modelo: "2013",
    cedula: "1152211850",
    nombres: "CASTA?O LONDO?O LUIS DAVID"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/12/2024",
    placa: "ISR054",
    modelo: "2016",
    cedula: "39400554",
    nombres: "ALCARAZ MONTOYA CONSUELO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "13/05/2024",
    placa: "HNU972",
    modelo: "2014",
    cedula: "1022371274",
    nombres: "MAYURI FLOREZ MALAVER"
  },
  {
    compañia: "SBS",
    finvigencia: "01/07/2024",
    placa: "JPK809",
    modelo: "2021",
    cedula: "1067934306",
    nombres: "CASTRO HENAO, GIORGIO ANDRES"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "06/02/2022",
    placa: "USV722",
    modelo: "2016",
    cedula: "70697126",
    nombres: "FLAVIO JOSE GOMEZZULUAGA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "10/07/2023",
    placa: "HNW524",
    modelo: "2014",
    cedula: "42880741",
    nombres: "SILVIA LUZ BEDOYA SANCHEZ - GUILLERMO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "04/04/2024",
    placa: "DRX119",
    modelo: "2018",
    cedula: "43970794",
    nombres: "ARIAS GALEANO, LAURA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "03/06/2021",
    placa: "INQ100",
    modelo: "2017",
    cedula: "43905776",
    nombres: "LINA MARCELA LOPEZ GRAJALES"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "03/05/2024",
    placa: "EOT073",
    modelo: "2018",
    cedula: "42967634",
    nombres: "SILVIA STELLA PIEDRAHITA NARANJO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "JGY279",
    modelo: "2017",
    cedula: "1128265367",
    nombres: "LUISA FERNANDA MONTAÑA LOPEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/09/2021",
    placa: "KIZ988",
    modelo: "2011",
    cedula: "1037582359",
    nombres: "ANGIE GRACE OSPINA ECHAVARRIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "26/09/2023",
    placa: "KHK962",
    modelo: "2011",
    cedula: "1039462927",
    nombres: "MANUELA MONTOYA HENAO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "08/09/2024",
    placa: "HNU141",
    modelo: "2014",
    cedula: "14569378",
    nombres: "SOTO LEIDER DE JESUS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/07/2023",
    placa: "JHV181",
    modelo: "2018",
    cedula: "1000885298",
    nombres: "KELLY YOHANA BENITEZ GOMEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "04/01/2025",
    placa: "IAV620",
    modelo: "2015",
    cedula: "43730481",
    nombres: "ISABEL CRISTINA MENDOZA TORO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "04/12/2024",
    placa: "GMY770",
    modelo: "2020",
    cedula: "43267009",
    nombres: "CIFUENTES JARAMILLO MARIA CRIS"
  },
  {
    compañia: "SBS",
    finvigencia: "20/12/2021",
    placa: "MKN489",
    modelo: "2013",
    cedula: "43865544",
    nombres: "AGUDELO PAMPLONA, SANDRA MILENA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "26/05/2024",
    placa: "FSY698",
    modelo: "2019",
    cedula: "1037617077",
    nombres: "MATEO POSADA MUÑOZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/05/2024",
    placa: "GRQ706",
    modelo: "2019",
    cedula: "42084022",
    nombres: "ADRIANA MARIA HENAO GIRALDO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "29/06/2022",
    placa: "JBN507",
    modelo: "2017",
    cedula: "1039448808",
    nombres: "SERGIO VALENCIA CASTAÑO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "03/08/2024",
    placa: "HEX614",
    modelo: "2013",
    cedula: "71652205",
    nombres: "ARTURO MONTOYA JAIME"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "03/10/2024",
    placa: "GVR212",
    modelo: "2020",
    cedula: "1036650927",
    nombres: "GOMEZ ECHEVERRY, CINDY LIZETH"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "10/09/2024",
    placa: "IYQ917",
    modelo: "2017",
    cedula: "1114877532",
    nombres: "MORALES VARGAS, JOSE LUIS"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "GIK707",
    modelo: "2020",
    cedula: "43573132",
    nombres: "ANA LUCIA LOPERA GIRALDO"
  },
  {
    compañia: "SBS",
    finvigencia: "04/02/2022",
    placa: "IAY179",
    modelo: "2015",
    cedula: "71770695",
    nombres: "URIBE HERNANDEZ, ROBINSON ORLANDO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "23/10/2023",
    placa: "IAW273",
    modelo: "2015",
    cedula: "43993011",
    nombres: "LINA MARCELA ACOSTA CARO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "21/07/2024",
    placa: "IHT095",
    modelo: "2016",
    cedula: "1036934730",
    nombres: "INGRID KATHERINE CALLE BETANCUR"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "10/08/2024",
    placa: "JYU131",
    modelo: "2022",
    cedula: "1047382620",
    nombres: "LUZ ELENA CANO VILLAREAL"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "24/09/2024",
    placa: "GWM505",
    modelo: "2022",
    cedula: "9052989",
    nombres: "LOPEZ LOPEZ FABIO JOSE"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "GRO918",
    modelo: "2020",
    cedula: "21469628",
    nombres: "PAULA ANDREA MENESES YEPES"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/04/2024",
    placa: "JSV147",
    modelo: "2021",
    cedula: "1152193464",
    nombres: "MATEO HENAO NIETO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/03/2022",
    placa: "DKV673",
    modelo: "2013",
    cedula: "1140892974",
    nombres: "SANTIAGO RODRIGUEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "18/06/2024",
    placa: "JPS329",
    modelo: "2021",
    cedula: "43182451",
    nombres: "ISABEL CRISTINA VARGAS GARCIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "06/07/2024",
    placa: "GWZ209",
    modelo: "2020",
    cedula: "1035858671",
    nombres: "VANEGAS GOMEZ, VANEGAS GOMEZ,ISABEL"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "30/06/2024",
    placa: "INR836",
    modelo: "2017",
    cedula: "71214088",
    nombres: ". CAMILO ADOLFO ESCOBAR MONTO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "02/11/2018",
    placa: "EGZ071",
    modelo: "2018",
    cedula: "29740621",
    nombres: "RENDON PRADO MARIA DEL SOCORRO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/09/2021",
    placa: "EPW025",
    modelo: "2019",
    cedula: "43901515",
    nombres: "JOHANNA ANDREA BERRIO LOPERA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "02/08/2023",
    placa: "EIM792",
    modelo: "2018",
    cedula: "15500724",
    nombres: "MEDINA FELIX ANTONIO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/10/2024",
    placa: "GLK989",
    modelo: "2020",
    cedula: "1053323158",
    nombres: "ELIAS PINEDA MONTES"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "24/09/2024",
    placa: "GRN102",
    modelo: "2020",
    cedula: "43049635",
    nombres: "BENJUMEA ESPINOSA MARIA CECILIA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "13/04/2024",
    placa: "ENY475",
    modelo: "2019",
    cedula: "39411777",
    nombres: "MARYLIN ANDREA MORALES RAMOS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/06/2024",
    placa: "HYV624",
    modelo: "2019",
    cedula: "1037665820",
    nombres: "DANIEL MAURICIO SANTIAGO GARCI"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/06/2024",
    placa: "HGZ089",
    modelo: "2014",
    cedula: "98517004",
    nombres: "JEVIS ENRIQUE MONSALVE HIGUITA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "22/01/2024",
    placa: "KPQ249",
    modelo: "2022",
    cedula: "1017142170",
    nombres: "JOHN EDISON MONTOYA"
  },
  {
    compañia: "SBS",
    finvigencia: "30/06/2024",
    placa: "KJA719",
    modelo: "2011",
    cedula: "8434507",
    nombres: "GAVIRIA GALLEGO, GABRIEL JAIME"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "11/09/2024",
    placa: "HZK382",
    modelo: "2014",
    cedula: "1037610311",
    nombres: "MEJIA MEJIA, DAVID"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "04/11/2024",
    placa: "JPV670",
    modelo: "2020",
    cedula: "1036653467",
    nombres: "ECHEVERRY MEJIA, MARIA ALEJANDRA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "29/11/2024",
    placa: "DSV604",
    modelo: "2018",
    cedula: "1017168825",
    nombres: "BERRIO CUARTAS LUZ BIBIANA"
  },
  {
    compañia: "SBS",
    finvigencia: "28/03/2023",
    placa: "DKR244",
    modelo: "2012",
    cedula: "41908991",
    nombres: "VILLA GARCIA, GLORIA AMPARO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/01/2023",
    placa: "JHL554",
    modelo: "2019",
    cedula: "71386710",
    nombres: "JORGE MARIO VILLEGAS QUINTERO"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "31/08/2024",
    placa: "DST213",
    modelo: "2017",
    cedula: "94487111",
    nombres: "SANDRO YIMI ARENAS CORTES"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/11/2023",
    placa: "KBV896",
    modelo: "2010",
    cedula: "15511501",
    nombres: "EDWIN DARIO MARIN HERNANDEZ"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "19/07/2024",
    placa: "DSX162",
    modelo: "2018",
    cedula: "70091606",
    nombres: "Carlos Mario Rua Cata?o"
  },
  {
    compañia: "SBS",
    finvigencia: "29/11/2024",
    placa: "MXR923",
    modelo: "2016",
    cedula: "10100536",
    nombres: "GUARIN ARIAS, GENARO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "08/03/2022",
    placa: "KMT214",
    modelo: "2013",
    cedula: "70511763",
    nombres: "ESTRADA GIRALDO, LUIS FERNANDO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "07/08/2022",
    placa: "DSY401",
    modelo: "2017",
    cedula: "1017173144",
    nombres: "JAVIER EDUARDO RUIZ MEJIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/12/2020",
    placa: "IMT162",
    modelo: "2016",
    cedula: "79458819",
    nombres: "HENRY LEO PEREZ RODRIGUEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "20/04/2024",
    placa: "HAL865",
    modelo: "2014",
    cedula: "43183326",
    nombres: "ERIKA LUCIA PEREZ GOMEZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "12/06/2024",
    placa: "GHZ826",
    modelo: "2020",
    cedula: "43263242",
    nombres: "GOMEZ OSSA CLAUDIA MARIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "30/06/2024",
    placa: "IYQ415",
    modelo: "2016",
    cedula: "71220075",
    nombres: "MARIN MEJIA, MARIN MEJIA,CARLOS A"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2024",
    placa: "EIL832",
    modelo: "2018",
    cedula: "1128424882",
    nombres: "RAMIREZ USUGA, JUDDY ANDREA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "05/12/2024",
    placa: "JCN543",
    modelo: "2016",
    cedula: "42762626",
    nombres: "STELLA M ARENAS PIEDRAHITA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "30/06/2022",
    placa: "IAU774",
    modelo: "2016",
    cedula: "43617453",
    nombres: "MARTA LUCIA CORTES"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "09/05/2024",
    placa: "IAU211",
    modelo: "2015",
    cedula: "39176167",
    nombres: "LILIANA MARCELA BONETH ORTIZ"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "30/06/2023",
    placa: "MOP739",
    modelo: "2010",
    cedula: "52785904",
    nombres: "RAMIREZ JIMENEZ, OLGA LUCIA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "30/06/2024",
    placa: "HGT933",
    modelo: "2013",
    cedula: "43568416",
    nombres: "DURAN CORONADO LALINDE GERTRUDIS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "09/09/2024",
    placa: "MVW605",
    modelo: "2014",
    cedula: "43636319",
    nombres: "ALZATE CANO, ANGELICA MARIA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/06/2024",
    placa: "ELL880",
    modelo: "2010",
    cedula: "1017179011",
    nombres: "JORGE EDUARDO FRANCO OROZCO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "07/03/2024",
    placa: "JJK942",
    modelo: "2017",
    cedula: "70382236",
    nombres: "GIRALDO DUQUE, OMAR NICOLAS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "IAY602",
    modelo: "2015",
    cedula: "43987043",
    nombres: "ERICA VIVIANA RIVAS GOMEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "HYU246",
    modelo: "2018",
    cedula: "1152687863",
    nombres: "ANDRES CAMILO ARIAS QUINTERO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/07/2024",
    placa: "DSU754",
    modelo: "2017",
    cedula: "43083262",
    nombres: "NUBIA DEL SOCORRO ESPINAL ESPINAL"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/05/2021",
    placa: "HYU731",
    modelo: "2018",
    cedula: "8161939",
    nombres: "LUIS MIGUEL GOMEZ GARCIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "26/02/2023",
    placa: "EHL102",
    modelo: "2018",
    cedula: "51568490",
    nombres: "ROS MERY PRIETO DE BUITRAGO"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "27/07/2023",
    placa: "JCP178",
    modelo: "2017",
    cedula: "1152451810",
    nombres: "VALENCIA JIMENEZ VERONICA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "JSS826",
    modelo: "2021",
    cedula: "8401871",
    nombres: "JOSE ERNESTO CARDENAS VILLA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/06/2021",
    placa: "EFW845",
    modelo: "2018",
    cedula: "10289034",
    nombres: "EDGAR ORLANDO TABARES MATALLANA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/03/2024",
    placa: "DHV732",
    modelo: "2011",
    cedula: "43825646",
    nombres: "SANDRA PATRICIA CARMONA CARDONA"
  },
  {
    compañia: "SBS",
    finvigencia: "30/08/2022",
    placa: "FHA074",
    modelo: "2008",
    cedula: "1036615318",
    nombres: "DELGADO ESTRADA, FABER"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/12/2024",
    placa: "JYU358",
    modelo: "2021",
    cedula: "1035414799",
    nombres: "YULIANA MARIA MONTOYA MARIN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "18/07/2022",
    placa: "IAZ880",
    modelo: "2016",
    cedula: "43626049",
    nombres: "NATALIA MORENO JIMENEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/07/2024",
    placa: "JPS585",
    modelo: "2021",
    cedula: "43614932",
    nombres: "ISABEL CRISTINA NARANJO GARCIA"
  },
  {
    compañia: "SBS",
    finvigencia: "30/06/2023",
    placa: "KOO211",
    modelo: "2012",
    cedula: "1026260606",
    nombres: "VELEZ URREGO, DIEGO ALEXANDER"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "30/06/2023",
    placa: "JBK911",
    modelo: "2016",
    cedula: "1128475832",
    nombres: "MAYA PATIÑO, MARIA CRISTINA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "02/08/2023",
    placa: "KAP678",
    modelo: "2012",
    cedula: "1020406112",
    nombres: "BETANCUR SEBASTIAN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "26/06/2024",
    placa: "GEZ596",
    modelo: "2020",
    cedula: "43551084",
    nombres: "GLORIA PATRICIA RAMIREZ RENDON"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/06/2024",
    placa: "DSV378",
    modelo: "2018",
    cedula: "1017187176",
    nombres: "POSADA PATI?O, SARA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/06/2024",
    placa: "JCZ672",
    modelo: "2016",
    cedula: "1035865022",
    nombres: "ANDRES SIERRA MARIN"
  },
  {
    compañia: "PREVISORA",
    finvigencia: "10/11/2023",
    placa: "ENZ294",
    modelo: "2019",
    cedula: "1214727635",
    nombres: "MU?OZ BERRIO JENIFFER"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "19/09/2024",
    placa: "EIP052",
    modelo: "2019",
    cedula: "42773588",
    nombres: "HENAO CRESPO, MARISOL"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "27/01/2022",
    placa: "ENZ536",
    modelo: "2019",
    cedula: "1002377542",
    nombres: "GARCIA ARIAS, JULLY PAOLA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/06/2024",
    placa: "IAN943",
    modelo: "2015",
    cedula: "98640083",
    nombres: "DIEGO ALBEIRO VELASQUEZ MACIAS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/10/2022",
    placa: "KIV638",
    modelo: "2010",
    cedula: "43973244",
    nombres: "ZAPATA CANO,VERONICA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/03/2024",
    placa: "EIM132",
    modelo: "2018",
    cedula: "43617177",
    nombres: "MONICA ALEXANDRA GOMEZ SUAREZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "16/06/2024",
    placa: "JYT732",
    modelo: "2022",
    cedula: "1152712510",
    nombres: "QUINTERO SALAS JOSE MIGUEL"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "04/04/2024",
    placa: "FGW035",
    modelo: "2008",
    cedula: "70093820",
    nombres: "PEDRO ARMANDO PINEDA SANDOVAL"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "02/10/2024",
    placa: "FQX491",
    modelo: "2019",
    cedula: "98516439",
    nombres: "LOPEZ ZAPATA, EDISON"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "06/06/2024",
    placa: "DES208",
    modelo: "2012",
    cedula: "8353260",
    nombres: "Guillermo Leon Arbelaez Gallo"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "23/10/2021",
    placa: "IAO210",
    modelo: "2014",
    cedula: "43504276",
    nombres: "VALENCIA GARCIA IMELDA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "12/03/2022",
    placa: "JZK114",
    modelo: "2022",
    cedula: "73203230",
    nombres: "DEULUFEUT SUAREZ TOMAS MANUEL"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/04/2024",
    placa: "DEV568",
    modelo: "2012",
    cedula: "32489618",
    nombres: "FERNANDEZ CANO,FLOR MARIA"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "30/06/2023",
    placa: "JBL737",
    modelo: "2016",
    cedula: "1152434888",
    nombres: "CASTA?O CARVAJAL DANIEL"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/06/2024",
    placa: "KPQ963",
    modelo: "2022",
    cedula: "8128377",
    nombres: "NESTOR EDUARDO TORO PALACIOS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/03/2024",
    placa: "DFR371",
    modelo: "2012",
    cedula: "71721825",
    nombres: "ALONSO ESCOBAR, CARLOS MARIO"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "28/03/2023",
    placa: "HAT726",
    modelo: "2013",
    cedula: "1060590509",
    nombres: "HURTADO AGUIRRE VERONICA ANDREA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/07/2024",
    placa: "MSO810",
    modelo: "2013",
    cedula: "57413520",
    nombres: "MARIA MARTHA MUNIVE CAMPO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "26/01/2025",
    placa: "HTY305",
    modelo: "2014",
    cedula: "1041147018",
    nombres: "MEJIA PINEDA, JONNATHAN ENRIQUE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "30/06/2024",
    placa: "DSZ282",
    modelo: "2018",
    cedula: "8409739",
    nombres: "DIAZ CARMONA,CARLOS MARIO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "03/06/2019",
    placa: "IYS709",
    modelo: "2017",
    cedula: "18616790",
    nombres: "LARGO RESTREPO JUAN DAVID"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/04/2024",
    placa: "GRM427",
    modelo: "2019",
    cedula: "43614975",
    nombres: "CLAUDIA CASTRO ECHEVERRI"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/08/2022",
    placa: "FCX577",
    modelo: "2007",
    cedula: "3493757",
    nombres: "ARNOLDO DE JESUS ARISTIZABAL GIRALDO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "08/08/2024",
    placa: "EOX519",
    modelo: "2019",
    cedula: "71737060",
    nombres: "IVAN DARIO SANCHEZ HOYOS"
  },
  {
    compañia: "PREVISORA",
    finvigencia: "16/02/2024",
    placa: "DEU589",
    modelo: "2012",
    cedula: "1143369640",
    nombres: "DIAZ SALCEDO KAREN MARGARITA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "30/06/2024",
    placa: "EFW780",
    modelo: "2018",
    cedula: "72313728",
    nombres: "MALDONADO DE LA HOZ EDGARDO ANTONIO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/03/2023",
    placa: "MVW143",
    modelo: "2013",
    cedula: "42887951",
    nombres: "MARIA EUGENIA MEJIA RESTREPO"
  },
  {
    compañia: "SBS",
    finvigencia: "09/07/2024",
    placa: "GEX365",
    modelo: "2020",
    cedula: "43208732",
    nombres: "ELVIA JOHANNA CADAVID JIMENEZ,"
  },
  {
    compañia: "ESTADO",
    finvigencia: "28/01/2024",
    placa: "MJL494",
    modelo: "2013",
    cedula: "1020446111",
    nombres: "ESTEFANIA RUIZ HOLGUIN"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "24/02/2025",
    placa: "IEX809",
    modelo: "2016",
    cedula: "21384194",
    nombres: "MARIA EUGENIA ROJAS BERMUDEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "24/08/2023",
    placa: "ENY698",
    modelo: "2019",
    cedula: "98559056",
    nombres: "JOHN FREDY GALLEGO SUAREZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "18/05/2022",
    placa: "JYT368",
    modelo: "2022",
    cedula: "64547338",
    nombres: "JESUS MACEA HERAZO ROQUELINA DE"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/07/2024",
    placa: "EIK092",
    modelo: "2017",
    cedula: "42899528",
    nombres: "GLORIA PATRICIA DAVID OSORIO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/11/2022",
    placa: "GWY612",
    modelo: "2020",
    cedula: "1102579679",
    nombres: "SANDRA MARTINEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/07/2024",
    placa: "EOU829",
    modelo: "2019",
    cedula: "43157966",
    nombres: "MONICA MONTES PEREZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "21/07/2024",
    placa: "EPS938",
    modelo: "2019",
    cedula: "32150414",
    nombres: "PEREZ TOBON, MARIA DEL PILAR"
  },
  {
    compañia: "ESTADO",
    finvigencia: "27/01/2024",
    placa: "MOM741",
    modelo: "2009",
    cedula: "70558093",
    nombres: "CARLOS ALBERTO MEDINA ESPINOSA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "13/09/2024",
    placa: "JHS340",
    modelo: "2018",
    cedula: "71793530",
    nombres: "Carlos Andres Ruiz Olaya"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "25/03/2024",
    placa: "JYR763",
    modelo: "2022",
    cedula: "25202302",
    nombres: "Sor Maria Gallego Rincon"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/02/2025",
    placa: "IOQ390",
    modelo: "2016",
    cedula: "43672375",
    nombres: "CASTRILLON BERMUDEZ,MARIA TERESA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "15/12/2024",
    placa: "IOQ621",
    modelo: "2016",
    cedula: "1038359787",
    nombres: "DIONI SIRLEY BEDOYA MACIAS"
  },
  {
    compañia: "SBS",
    finvigencia: "16/09/2024",
    placa: "IEX701",
    modelo: "2015",
    cedula: "71649819",
    nombres: "LOPEZ SANCHEZ, WILLIAN DE JESUS"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/08/2024",
    placa: "FQT326",
    modelo: "2019",
    cedula: "79708776",
    nombres: "LOPEZ ZULUAGA SAULO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "31/03/2024",
    placa: "GJM407",
    modelo: "2020",
    cedula: "72297834",
    nombres: "LEONARDO FABIO SOLANO RODRIGUE"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/06/2024",
    placa: "ENX781",
    modelo: "2018",
    cedula: "98539121",
    nombres: "DIEGO ALEJANDRO LOPERA ESPINAL"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2024",
    placa: "IAX216",
    modelo: "2015",
    cedula: "8285193",
    nombres: "LOTERO LONDO?O GABRIEL LIBARDO, ."
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "27/01/2025",
    placa: "JQT549",
    modelo: "2022",
    cedula: "98695352",
    nombres: "EDUARD CAMILO TABORDA SOTO"
  },
  {
    compañia: "MUNDIAL",
    finvigencia: "28/10/2022",
    placa: "DES149",
    modelo: "2011",
    cedula: "901424545",
    nombres: "INTERNATIONAL BUSINESS & TRAVEL OPPORTUNITIES S.A"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "10/02/2024",
    placa: "FQU448",
    modelo: "2019",
    cedula: "23180449",
    nombres: "PALACIOS MARTINEZ MARIA LUISA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "30/06/2019",
    placa: "FHJ193",
    modelo: "2009",
    cedula: "43617231",
    nombres: "CAICEDO BAEZ MARIA CAROLINA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "11/06/2024",
    placa: "JCN061",
    modelo: "2017",
    cedula: "71536197",
    nombres: "MIRA BALBIN, LUIS FERNANDO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "19/09/2022",
    placa: "HGW249",
    modelo: "2014",
    cedula: "1036604975",
    nombres: "IVAN DAVID BUSTAMANTE MARIN"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "16/11/2024",
    placa: "USZ055",
    modelo: "2016",
    cedula: "70580543",
    nombres: "JOAQUIN GUILLERMO GUTIERREZ MO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2024",
    placa: "FQT581",
    modelo: "2019",
    cedula: "43680711",
    nombres: "OSORIO ARBOLEDA, MARCELA EUGENIA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "18/07/2024",
    placa: "JKM409",
    modelo: "2017",
    cedula: "1098647582",
    nombres: "KAREN ANDREA PRADA ZULUAGA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2023",
    placa: "GEX521",
    modelo: "2019",
    cedula: "43266576",
    nombres: "NATALIA CRISTINA LONDOÑO AGUILAR"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/06/2024",
    placa: "GFK000",
    modelo: "2020",
    cedula: "1152198946",
    nombres: "CARLOS DANIEL ZAPATA GONZALEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/12/2024",
    placa: "GEV857",
    modelo: "2020",
    cedula: "21404630",
    nombres: "LUZ JANNET RAMIREZ OSPINA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/07/2022",
    placa: "JYS848",
    modelo: "2022",
    cedula: "1152188282",
    nombres: "JUAN ESTEBAN VELEZ TABORDA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "EHL978",
    modelo: "2018",
    cedula: "98522888",
    nombres: "CARLOS ALBERTO ARISTIZABAL BUSTAMANTE"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "25/09/2024",
    placa: "HPL616",
    modelo: "2014",
    cedula: "71799611",
    nombres: "MESA GONZALEZ HERNAN DARIO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/07/2022",
    placa: "EKV940",
    modelo: "2007",
    cedula: "8105226",
    nombres: "JUAN DANIEL ACEVEDO ORTIZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "27/07/2024",
    placa: "IOU740",
    modelo: "2016",
    cedula: "70127533",
    nombres: "ARDILA ALBERTO DE JESUS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "25/07/2024",
    placa: "DLX677",
    modelo: "2012",
    cedula: "8164010",
    nombres: "ZULUAGA MESA, DAVID ESTEBAN"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "06/08/2024",
    placa: "EFV099",
    modelo: "2018",
    cedula: "70086452",
    nombres: "HERNANDEZ QUINTERO IVAN DARIO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/09/2024",
    placa: "KHQ293",
    modelo: "2011",
    cedula: "32347712",
    nombres: "OLGA LUCIA DAVILA ZULETA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "30/06/2023",
    placa: "JZO370",
    modelo: "2022",
    cedula: "1128440655",
    nombres: "CAROLINA ARISTIZABAL VASQUEZ"
  },
  {
    compañia: "SBS",
    finvigencia: "14/04/2024",
    placa: "IAX933",
    modelo: "2015",
    cedula: "43598071",
    nombres: "GAVIRIA, LINA MARIA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/07/2024",
    placa: "IRZ080",
    modelo: "2017",
    cedula: "72208283",
    nombres: "DIEGO RAFAEL MEZA GOMEZ"
  },
  {
    compañia: "SBS",
    finvigencia: "11/01/2025",
    placa: "JYY874",
    modelo: "2021",
    cedula: "98495657",
    nombres: "CARDONA DUQUE, ORLANDO DE JESUS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "08/08/2024",
    placa: "HXX671",
    modelo: "2015",
    cedula: "42788325",
    nombres: "GLORIA ELENA BEDOYA ROMERO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "24/11/2021",
    placa: "IOU766",
    modelo: "2016",
    cedula: "1152706951",
    nombres: "ORREGO RESTREPO, JORGE ANDRES"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "01/07/2024",
    placa: "HAU093",
    modelo: "2013",
    cedula: "94508817",
    nombres: "CASTANEDA USECHE ALONSO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/11/2023",
    placa: "JER056",
    modelo: "2017",
    cedula: "94537198",
    nombres: "LUIS GUILLERMO RESTREPO VIVEROS"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "03/08/2024",
    placa: "INR536",
    modelo: "2017",
    cedula: "1152453295",
    nombres: "HERNANDEZ FERNANDEZ DANIELA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "15/09/2023",
    placa: "JLS875",
    modelo: "2020",
    cedula: "10775376",
    nombres: "CRISTIAN ALEJANDRO RUEDAACOSTA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "15/09/2022",
    placa: "IAR000",
    modelo: "2015",
    cedula: "42965941",
    nombres: "PARRA PINEDA DORIS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/07/2024",
    placa: "EIK648",
    modelo: "2018",
    cedula: "71787526",
    nombres: "JAVIER EDUARDO SANCHEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/11/2023",
    placa: "MSK523",
    modelo: "2013",
    cedula: "8056320",
    nombres: "ALEXANDER HERNANDEZ LOPEZ"
  },
  {
    compañia: "SBS",
    finvigencia: "23/08/2021",
    placa: "MXY508",
    modelo: "2013",
    cedula: "70125204",
    nombres: "ARISTIZABAL CASTA?O, DANIEL BERNARDO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "27/01/2023",
    placa: "KCX228",
    modelo: "2017",
    cedula: "1047426915",
    nombres: "MARTINEZ MARTINEZ, LAURA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/12/2024",
    placa: "DJL136",
    modelo: "2012",
    cedula: "43446576",
    nombres: "MARIA CIELO LOPEZ TANGARIFE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/12/2024",
    placa: "EOL690",
    modelo: "2019",
    cedula: "1001003750",
    nombres: "JUAN JOSE ZULUAGA MORALES"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "20/09/2024",
    placa: "GHW769",
    modelo: "2020",
    cedula: "78297898",
    nombres: "NAVARRO TEJADA MANUEL"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "22/04/2024",
    placa: "JCN799",
    modelo: "2017",
    cedula: "71717876",
    nombres: "GALLEGO ZULUAGA JUAN CARLOS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/03/2024",
    placa: "DIK774",
    modelo: "2012",
    cedula: "1087547329",
    nombres: "LUIS ALEXANDER CALLE RESTREPO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "04/07/2024",
    placa: "ISS785",
    modelo: "2016",
    cedula: "31433431",
    nombres: "DAIAN VANESSA CAMPO MONTOYA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "15/09/2024",
    placa: "JPS341",
    modelo: "2020",
    cedula: "32351260",
    nombres: "PAOLA PATI O ARANGO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "07/10/2024",
    placa: "GEL977",
    modelo: "2019",
    cedula: "14474657",
    nombres: "HENRY ESCOBAR VALVERDE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/10/2023",
    placa: "JKL130",
    modelo: "2017",
    cedula: "43149415",
    nombres: "JANETH VIVIANA MONTOYA CELADA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "10/11/2023",
    placa: "UST697",
    modelo: "2016",
    cedula: "55303198",
    nombres: "MELIZZA MARIA SARMIENTO GARRIDO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "26/02/2024",
    placa: "MVR178",
    modelo: "2013",
    cedula: "71380219",
    nombres: "GOMEZ GIRALDO JUAN MANUEL"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "23/10/2024",
    placa: "JPV291",
    modelo: "2020",
    cedula: "98771741",
    nombres: "HENAO PEREZ JOAN MANUEL"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "30/01/2025",
    placa: "ENY939",
    modelo: "2019",
    cedula: "1128406839",
    nombres: "MEJIA OCHOA LAURA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2024",
    placa: "EGW938",
    modelo: "2017",
    cedula: "1037574746",
    nombres: "SIERRA LEON, MARISOL"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "14/12/2022",
    placa: "JOP645",
    modelo: "2021",
    cedula: "1128427102",
    nombres: "URIBE MUNOZ MAYRA ALEJANDRA"
  },
  {
    compañia: "ZURICH-QBE",
    finvigencia: "21/05/2023",
    placa: "HPK511",
    modelo: "2014",
    cedula: "43400589",
    nombres: "Angela Maria Sanchez Velez"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "28/01/2025",
    placa: "JOR723",
    modelo: "2021",
    cedula: "70111456",
    nombres: "RAMIREZ ORLANDO DE JESUS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "31/10/2019",
    placa: "EBM233",
    modelo: "2018",
    cedula: "1071166685",
    nombres: "PARRA HERNANDEZ JHOAN SEBASTIA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "02/08/2024",
    placa: "GVO641",
    modelo: "2020",
    cedula: "9697808",
    nombres: "LORA HOYOS JORGE ANDRES"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/09/2022",
    placa: "MOW345",
    modelo: "2011",
    cedula: "70095155",
    nombres: "CESAR AUGUSTO CARDENAS MADRIGAL"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2024",
    placa: "IHT522",
    modelo: "2016",
    cedula: "43741839",
    nombres: "SERNA HERNANDEZ, MONICA MARIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "03/11/2022",
    placa: "JBQ498",
    modelo: "2017",
    cedula: "98637277",
    nombres: "WALTER VELASQUEZ MONTOYA"
  },
  {
    compañia: "PREVISORA",
    finvigencia: "28/11/2024",
    placa: "GKX607",
    modelo: "2020",
    cedula: "1017236736",
    nombres: "ROLDAN DAVID JUAN JOSE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "20/08/2023",
    placa: "JEU341",
    modelo: "2017",
    cedula: "8070911",
    nombres: "ANDRES FELIPE MONTOYA RIOS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/07/2024",
    placa: "EIN468",
    modelo: "2018",
    cedula: "1128264814",
    nombres: "NATALIA MEJIA MONTOYA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "27/01/2024",
    placa: "EQK441",
    modelo: "2018",
    cedula: "98357243",
    nombres: "ROGOBERTO FERNEY MAFLA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "07/04/2024",
    placa: "DSR850",
    modelo: "2017",
    cedula: "32322031",
    nombres: "DIANA PATRICIA SANCHEZ CASTRILLON"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "30/06/2024",
    placa: "IAZ903",
    modelo: "2016",
    cedula: "52322190",
    nombres: ", ,, , ,,YINA YULIZA MURI"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/08/2024",
    placa: "JOP446",
    modelo: "2020",
    cedula: "88264168",
    nombres: "DIXON FERNANDO CAMPO EPALZA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "31/08/2024",
    placa: "KOM654",
    modelo: "2022",
    cedula: "72257162",
    nombres: "INSIGNARES HENRIQUEZ ANTONIO"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "10/10/2022",
    placa: "BXS574",
    modelo: "2011",
    cedula: "39288265",
    nombres: "DINEY PERNETT"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "31/07/2024",
    placa: "IOS332",
    modelo: "2016",
    cedula: "43637071",
    nombres: "ZULEIDA ANDREA FLOREZ CASTRO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "15/10/2023",
    placa: "GEP613",
    modelo: "2020",
    cedula: "43989365",
    nombres: "OSORNO PEREZ CATALINA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "28/12/2024",
    placa: "EIP006",
    modelo: "2018",
    cedula: "43877076",
    nombres: "DIANA MARIA LOPERA TORO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "01/07/2022",
    placa: "KHN933",
    modelo: "2011",
    cedula: "70119043",
    nombres: "MEJIA GIL, JOSE JESUS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "14/09/2022",
    placa: "ISU441",
    modelo: "2016",
    cedula: "71218734",
    nombres: "DIEGO EDILSON GONZALEZ CANO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2023",
    placa: "JKP024",
    modelo: "2017",
    cedula: "80031639",
    nombres: "JOSE ANDERSON MONCADA CAICEDO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/07/2023",
    placa: "GHV413",
    modelo: "2020",
    cedula: "70192746",
    nombres: "OSCAR ALONSO TAMAYO GALLEGO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "07/12/2023",
    placa: "MJK425",
    modelo: "2012",
    cedula: "71598651",
    nombres: "SERGIO EDUARDO CORREA ALZATE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2024",
    placa: "GRQ439",
    modelo: "2020",
    cedula: "41595704",
    nombres: "TOBON GUTIERREZ, ROCIO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "05/11/2024",
    placa: "GRM588",
    modelo: "2020",
    cedula: "1036931937",
    nombres: "ALEJANDRO HENAO, DIEGO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "14/04/2023",
    placa: "JCN902",
    modelo: "2017",
    cedula: "43059615",
    nombres: "OLGA CECILIA ZULUAGA FRANCO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "06/07/2024",
    placa: "KPQ062",
    modelo: "2022",
    cedula: "8356125",
    nombres: "MEJIA LOAIZA, JULIO CESAR"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "09/11/2024",
    placa: "GEY497",
    modelo: "2019",
    cedula: "1004200320",
    nombres: "JHANCE ANTONIO ACEVEDO RODRIGUEZ"
  },
  {
    compañia: "SBS",
    finvigencia: "05/06/2024",
    placa: "FXP692",
    modelo: "2019",
    cedula: "1017132776",
    nombres: "PEREZ RESTREPO, SANDRA MILENA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "15/09/2022",
    placa: "JHR138",
    modelo: "2017",
    cedula: "1039454040",
    nombres: "TRUJILLO ZULUAGA ANA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "19/10/2024",
    placa: "GEM758",
    modelo: "2020",
    cedula: "70078138",
    nombres: "JOHN JAIRO LOPEZ CORREA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/04/2024",
    placa: "IEY578",
    modelo: "2016",
    cedula: "1023830939",
    nombres: "ALVAREZ TAMAYO,YENIFER"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "02/07/2023",
    placa: "FXT184",
    modelo: "2020",
    cedula: "23136461",
    nombres: "ENITH MARIA VITOLA MARIN"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "07/02/2023",
    placa: "HZR791",
    modelo: "2014",
    cedula: "1151948696",
    nombres: "AGREDO MORENO HECTOR STEVEN"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "02/07/2024",
    placa: "KFN286",
    modelo: "2019",
    cedula: "1035850996",
    nombres: "ANA MARIA ARIAS OSPINA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "22/12/2024",
    placa: "JCS513",
    modelo: "2017",
    cedula: "8903002794",
    nombres: "DE OCCIDENTE BANCO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "02/07/2024",
    placa: "MFY977",
    modelo: "2013",
    cedula: "1017172400",
    nombres: "SOLORZANO GIRALDO STEPHANIE"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "02/10/2024",
    placa: "UEM167",
    modelo: "2015",
    cedula: "19140012",
    nombres: "PEDRO JOSE SALGADO MEJIA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "02/07/2024",
    placa: "FQQ320",
    modelo: "2019",
    cedula: "42887781",
    nombres: "PINEDA JARAMILO, ADRIANA MARIA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "02/06/2024",
    placa: "DES101",
    modelo: "2012",
    cedula: "1017271484",
    nombres: "CARRASQUILLA MEJIA DARLYN VANE"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "27/01/2025",
    placa: "GWW536",
    modelo: "2020",
    cedula: "43108473",
    nombres: "GLADYS AMPARO JIMENEZ ROJAS"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "05/01/2025",
    placa: "JSU425",
    modelo: "2021",
    cedula: "43262930",
    nombres: "LILIANA MONTOYA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/02/2019",
    placa: "DIK915",
    modelo: "2012",
    cedula: "1128482662",
    nombres: "SANTIAGO ALEJANDRO CHINCHILLA RAMIREZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/08/2021",
    placa: "IYP460",
    modelo: "2016",
    cedula: "10547089",
    nombres: "JOSE GUILLERMO VIDAL FERNANDEZ"
  },
  {
    compañia: "ESTADO",
    finvigencia: "27/01/2024",
    placa: "KJA547",
    modelo: "2011",
    cedula: "71642235",
    nombres: "LUIS EDUARDO CARDONA PARRA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/02/2025",
    placa: "GVO123",
    modelo: "2019",
    cedula: "93374104",
    nombres: "MORENO ALVAREZ, JULIO CESAR"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/09/2022",
    placa: "HGZ286",
    modelo: "2014",
    cedula: "70085289",
    nombres: "CARLOS ALBERTO MUÑOZ HOYOS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/06/2024",
    placa: "GEK467",
    modelo: "2020",
    cedula: "1027887000",
    nombres: "WENDY RESTREPO MEJIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/05/2023",
    placa: "ISR083",
    modelo: "2016",
    cedula: "1039023499",
    nombres: "DIANA CAROLINA TIRADO BERMUDEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "14/08/2019",
    placa: "EOP635",
    modelo: "2019",
    cedula: "7717237",
    nombres: "CARLOS MARIO GAITAN GIRON"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "21/02/2020",
    placa: "KKW215",
    modelo: "2012",
    cedula: "1095934083",
    nombres: "ALBERT MAURICIO LAITON CORREA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "UDY873",
    modelo: "2015",
    cedula: "79307042",
    nombres: "WILLIAM FRANCO GONZALEZ"
  },
  {
    compañia: "MUNDIAL",
    finvigencia: "22/04/2024",
    placa: "IAW184",
    modelo: "2015",
    cedula: "71270787",
    nombres: "YANNY ALONSO MORALES ALZATE"
  },
  {
    compañia: "SBS",
    finvigencia: "16/06/2023",
    placa: "UDW761",
    modelo: "2016",
    cedula: "1000533270",
    nombres: "ZAPATA RIOS, MANUELA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "28/09/2019",
    placa: "DFP899",
    modelo: "2019",
    cedula: "18972625",
    nombres: "PE?ALOZA HERNANDEZ JOSE GREGORIO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "02/07/2024",
    placa: "RMP413",
    modelo: "2012",
    cedula: "98665109",
    nombres: "CORREA CASTRILLON, CORREA CASTRILLON,CO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "02/07/2024",
    placa: "EOU298",
    modelo: "2018",
    cedula: "71610800",
    nombres: "JULIO CESAR RESTREPO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "05/07/2024",
    placa: "HPL448",
    modelo: "2014",
    cedula: "71296159",
    nombres: "GUTIERREZ CASTANO, GUTIERREZ CASTANO,GU"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/10/2023",
    placa: "EFY454",
    modelo: "2017",
    cedula: "42969339",
    nombres: "NORA LEYDA ARIAS DE MOLINA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/12/2023",
    placa: "JCQ139",
    modelo: "2017",
    cedula: "43549340",
    nombres: "ERIKA ARENAS CASTIBLANCO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "03/06/2024",
    placa: "EHN412",
    modelo: "2019",
    cedula: "1042769347",
    nombres: "OMAR ALEXIS MEDINA MEDINA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/07/2024",
    placa: "EIN807",
    modelo: "2018",
    cedula: "71680427",
    nombres: "JOSE FERNANDO RESTREPO JIMENEZ"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "30/07/2023",
    placa: "EHM032",
    modelo: "2018",
    cedula: "3438256",
    nombres: "MONSALVE MEJIA CARLOS ANDRES"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "10/12/2023",
    placa: "EFU672",
    modelo: "2018",
    cedula: "39446290",
    nombres: "LINA MARIA JARAMILLO AGUIRRE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "11/05/2023",
    placa: "USX544",
    modelo: "2016",
    cedula: "8312264",
    nombres: "JESUS ANTONIO ARISMENDI ROLDAN"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "13/09/2024",
    placa: "JJK907",
    modelo: "2017",
    cedula: "43570801",
    nombres: "RAMIREZ SERNA, LILIANA MARIA"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "27/12/2024",
    placa: "JSU968",
    modelo: "2021",
    cedula: "1037501326",
    nombres: "AGUDELO JARAMILLO CARLOS ANDRES"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "26/07/2024",
    placa: "MOQ308",
    modelo: "2010",
    cedula: "43527334",
    nombres: "ADRIANA PATRICIA HIGUITA CADAVID"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "02/02/2022",
    placa: "EOL652",
    modelo: "2019",
    cedula: "1001171984",
    nombres: "ROJAS FERNANDEZ, CAROLINA MARC"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "02/07/2023",
    placa: "KAZ066",
    modelo: "2012",
    cedula: "1128277735",
    nombres: "GRANADOS MONTOYA, JOSE JHONNY"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "14/07/2018",
    placa: "KHQ175",
    modelo: "2011",
    cedula: "43801740",
    nombres: "ARIAS GIRALDO ELDA DEL CARMEN . ."
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "28/12/2023",
    placa: "FHN172",
    modelo: "2010",
    cedula: "1152203116",
    nombres: "PE?A OSORIO SEBASTIAN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "24/08/2023",
    placa: "GEM291",
    modelo: "2019",
    cedula: "43909626",
    nombres: "DIANA MARCELA RODRIGUEZ"
  },
  {
    compañia: "SBS",
    finvigencia: "02/07/2023",
    placa: "ENZ806",
    modelo: "2019",
    cedula: "1036612187",
    nombres: "COLORADO GALEANO, Tatiana Andrea"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/10/2024",
    placa: "GRQ174",
    modelo: "2020",
    cedula: "32287952",
    nombres: "SORA LINA, SIERRA BEDOYA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "28/04/2024",
    placa: "JQU427",
    modelo: "2022",
    cedula: "43623559",
    nombres: "PALACIO MONTOYA, LINA MARIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "05/04/2024",
    placa: "JZK642",
    modelo: "2022",
    cedula: "98570500",
    nombres: "MAURICIO OSSA YEPES"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "21/01/2022",
    placa: "BXR765",
    modelo: "2011",
    cedula: "1037656348",
    nombres: "ISABEL RESTREPO SERNA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "02/07/2023",
    placa: "UDQ051",
    modelo: "2016",
    cedula: "39169522",
    nombres: "ROSALBA GOMEZ TORRES"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "27/01/2022",
    placa: "EIN025",
    modelo: "2018",
    cedula: "1037650956",
    nombres: "MANUELA ESCUDERO OSPINA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/10/2024",
    placa: "EIL611",
    modelo: "2019",
    cedula: "43870670",
    nombres: "GONZALEZ BERNAL, NATHALIA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "02/07/2023",
    placa: "HAL587",
    modelo: "2015",
    cedula: "1020474288",
    nombres: "ARANGO MORENO JUAN MANUEL"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "15/09/2023",
    placa: "IOT254",
    modelo: "2016",
    cedula: "1072640844",
    nombres: "CARRION CASTIBLANCO LADY JULIETH"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2021",
    placa: "FXN193",
    modelo: "2019",
    cedula: "1039456109",
    nombres: "BEJARANO MURILLO,CRISTHIAN ALEXANDER"
  },
  {
    compañia: "ESTADO",
    finvigencia: "03/07/2024",
    placa: "IYR293",
    modelo: "2016",
    cedula: "43710935",
    nombres: "LEIDY JOHANNA CASTANO MONTOYA"
  },
  {
    compañia: "SBS",
    finvigencia: "01/11/2024",
    placa: "DFT491",
    modelo: "2011",
    cedula: "1020456301",
    nombres: "SANCHEZ RENDON, YESICA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/10/2024",
    placa: "KHY379",
    modelo: "2011",
    cedula: "43266645",
    nombres: "DENISSE YIRLEY QUIROZ FERNANDEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "05/11/2024",
    placa: "GIK502",
    modelo: "2019",
    cedula: "71726837",
    nombres: "ALCIDES ARMANDO GONZALEZ MARIN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/03/2024",
    placa: "HAK281",
    modelo: "2014",
    cedula: "30295009",
    nombres: "MARIA PIEDAD ARCILA HERRERA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/05/2024",
    placa: "GEK977",
    modelo: "2020",
    cedula: "42935471",
    nombres: "GLORIA EUGENIA GOMEZ CARCAMO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "03/07/2024",
    placa: "MFW547",
    modelo: "2013",
    cedula: "1128408268",
    nombres: "PATI?O VALENCIA CAROL LISETH"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/09/2022",
    placa: "ISV491",
    modelo: "2017",
    cedula: "1037617769",
    nombres: "MELISSA LAVERDE GIRALDO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "DSX272",
    modelo: "2017",
    cedula: "71632950",
    nombres: "HERNAN DARIO VERGARA CASTRO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/05/2024",
    placa: "DSX884",
    modelo: "2018",
    cedula: "1017229423",
    nombres: "CAMILA MORENO GOMEZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "03/07/2024",
    placa: "HYT315",
    modelo: "2017",
    cedula: "43662513",
    nombres: "TABORDA PARRA DIANA PATRICIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "08/07/2023",
    placa: "JZK379",
    modelo: "2022",
    cedula: "1020416218",
    nombres: "BOLA?OS MEJIA, LINA MARCELA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "JIZ857",
    modelo: "2017",
    cedula: "42872746",
    nombres: "MELBA ELENA MARIN RAMIREZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/12/2024",
    placa: "GEN634",
    modelo: "2020",
    cedula: "43927482",
    nombres: "JULIA ROCIO PATIÑO ZAPATA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/08/2024",
    placa: "IAO525",
    modelo: "2015",
    cedula: "42823633",
    nombres: "DARMAR AUXULIO CASTANEDA PENAGOS"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2024",
    placa: "GJS744",
    modelo: "2019",
    cedula: "31793676",
    nombres: "XIMENA CUASIALPUD MARULANDA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/02/2021",
    placa: "ENY702",
    modelo: "2019",
    cedula: "30307506",
    nombres: "OLGA LUCIA RODRIGUEZ VILLA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "18/02/2018",
    placa: "MTZ741",
    modelo: "2013",
    cedula: "75090102",
    nombres: "MONTOYA GONZALEZ, OSCAR"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "15/02/2019",
    placa: "MVS339",
    modelo: "2013",
    cedula: "32181221",
    nombres: "RODRIGUEZ CANO PAULA ANDREA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "25/09/2024",
    placa: "JOS374",
    modelo: "2021",
    cedula: "71318633",
    nombres: "FREDD ESTARLY ARDILA ZAPATA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "12/07/2024",
    placa: "GFK064",
    modelo: "2020",
    cedula: "39214630",
    nombres: "MARIA EUGENIA VANEGAS ORTEGA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "27/01/2024",
    placa: "IVX261",
    modelo: "2016",
    cedula: "75107775",
    nombres: "CASTAÑO PEREZ, IVAN DARIO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "15/06/2024",
    placa: "EPQ976",
    modelo: "2019",
    cedula: "41104485",
    nombres: "CAICEDO TORO, MARTHA EFIGENIA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/12/2024",
    placa: "GWY543",
    modelo: "2020",
    cedula: "1040733995",
    nombres: "LINA MARCELA OTALVARO NORENA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2024",
    placa: "EPQ426",
    modelo: "2018",
    cedula: "15285790",
    nombres: "GIRALDO VELEZ,LUIS FERNANDO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "20/08/2021",
    placa: "FCR963",
    modelo: "2007",
    cedula: "11323445",
    nombres: "RODALLEGA MORENO FRANCIS AQUIL"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "18/12/2024",
    placa: "INP228",
    modelo: "2016",
    cedula: "1036639609",
    nombres: "MOSQUERA PAMPLONA SARA TATIANA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "09/12/2023",
    placa: "MFW740",
    modelo: "2013",
    cedula: "71376433",
    nombres: "JUAN DAVID LOPEZ JIMENEZ"
  },
  {
    compañia: "ESTADO",
    finvigencia: "06/09/2019",
    placa: "ICN525",
    modelo: "2008",
    cedula: "15297147",
    nombres: "ALEJANDRO GALVAN HENAO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/03/2024",
    placa: "JCR342",
    modelo: "2017",
    cedula: "43912315",
    nombres: "GONZALEZ CORREA,YULY TATIANA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/07/2024",
    placa: "EOK929",
    modelo: "2019",
    cedula: "1128388981",
    nombres: "JUAN CAMILO ACEVEDO AREIZA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "22/08/2022",
    placa: "ISV029",
    modelo: "2016",
    cedula: "79434336",
    nombres: "TORRES MIRANDA JULIO ROBERTO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/06/2024",
    placa: "DSZ100",
    modelo: "2018",
    cedula: "43807019",
    nombres: "BILMA YANETH ZABALA SILVA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/05/2023",
    placa: "IPV618",
    modelo: "2016",
    cedula: "43279667",
    nombres: "IRENE ASTRID HENAO PELAEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/09/2024",
    placa: "DSY721",
    modelo: "2017",
    cedula: "1037587290",
    nombres: "SAMUEL TOLEDO OSPINA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/04/2020",
    placa: "HTY206",
    modelo: "2014",
    cedula: "52393799",
    nombres: "SANCHEZ DIANA LUCIA"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "29/06/2023",
    placa: "UGM055",
    modelo: "2017",
    cedula: "1020474130",
    nombres: "ZAPATA HENAO KATERINE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/08/2020",
    placa: "DSY626",
    modelo: "2018",
    cedula: "42977470",
    nombres: "ZAPATA ARBOLEDA MARIA EUGENIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/12/2023",
    placa: "IJL823",
    modelo: "2015",
    cedula: "1018498538",
    nombres: "SUAREZ MURILLO, DAVID ELIECER"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "05/07/2022",
    placa: "KJA283",
    modelo: "2011",
    cedula: "21743567",
    nombres: "URREGO ROCIO DEL CARMEN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/01/2022",
    placa: "MSU326",
    modelo: "2016",
    cedula: "32277215",
    nombres: "ANGELA MARIA GUISAO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "21/05/2024",
    placa: "JKN020",
    modelo: "2018",
    cedula: "52213567",
    nombres: "ROSA INES RESTREPO MONTOYA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "MIY551",
    modelo: "2012",
    cedula: "15421016",
    nombres: "FRANCISCO ARISTIDES LONDONO GONZALEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/08/2024",
    placa: "ZYK783",
    modelo: "2014",
    cedula: "16499225",
    nombres: "JULIO CESAR HERRERA CALLE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/01/2023",
    placa: "DEQ234",
    modelo: "2011",
    cedula: "42789882",
    nombres: "MARIA YOLANDA MURILLO CARDONA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/09/2024",
    placa: "DSV154",
    modelo: "2018",
    cedula: "15445117",
    nombres: "JESUS ARLEY DIAZ JARAMILLO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "20/01/2025",
    placa: "EOL577",
    modelo: "2019",
    cedula: "71606094",
    nombres: "LONDO?O SERNA,ELKIN EMILIO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "31/01/2025",
    placa: "IPW579",
    modelo: "2016",
    cedula: "8267417",
    nombres: "LUIS IVAN GOMEZ FRANCO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "07/05/2023",
    placa: "IHQ023",
    modelo: "2016",
    cedula: "39526140",
    nombres: "LEMUS RINCON MARLENY"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "09/03/2023",
    placa: "JZK184",
    modelo: "2021",
    cedula: "5887184",
    nombres: "MORALES CABEZAS PEDRO JOAQUIN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/04/2022",
    placa: "DHV549",
    modelo: "2012",
    cedula: "43820312",
    nombres: "LEYDI YANETH ROJAS GAVIRIA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "22/07/2024",
    placa: "JGZ355",
    modelo: "2019",
    cedula: "1037586755",
    nombres: "MARYURY CASTRILLON MORALES"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/04/2024",
    placa: "IYR112",
    modelo: "2016",
    cedula: "42752378",
    nombres: "MARTA ELENA, OBANDO BEDOYA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "11/10/2022",
    placa: "EPT462",
    modelo: "2019",
    cedula: "8357912",
    nombres: "ANDRES MAURICIO ROBLEDO PULGAR"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "24/02/2025",
    placa: "HZO415",
    modelo: "2015",
    cedula: "8223362",
    nombres: "Horacio Trujillo Vasquez"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "10/07/2024",
    placa: "LAX706",
    modelo: "2019",
    cedula: "1035430179",
    nombres: "PACHECO MORALES MABEL JOHANA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "01/12/2024",
    placa: "IYR444",
    modelo: "2017",
    cedula: "3564819",
    nombres: "FABIAN ENRIQUE CUADROS GUZMAN"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "26/06/2023",
    placa: "GSR661",
    modelo: "2020",
    cedula: "79979379",
    nombres: "ALDANA RODRIGUEZ RODOLFO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/04/2024",
    placa: "IAR775",
    modelo: "2015",
    cedula: "1128404492",
    nombres: "ANDRES CAMILO LOPEZ DUQUE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "27/01/2023",
    placa: "EFX657",
    modelo: "2018",
    cedula: "1128434183",
    nombres: "ALVAREZ RUA,LUISA FERNANDA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/12/2019",
    placa: "MJK289",
    modelo: "2013",
    cedula: "1020419733",
    nombres: "LADY TATIANA ARISTIZABAL ORTIZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "23/08/2023",
    placa: "JHK998",
    modelo: "2019",
    cedula: "28212487",
    nombres: "ARAQUE GARCIA MARTHA LIGIA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "05/06/2024",
    placa: "HWO918",
    modelo: "2014",
    cedula: "43200165",
    nombres: "ZULUAGA LINA MAR?A"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "11/01/2025",
    placa: "FQT846",
    modelo: "2019",
    cedula: "1037616306",
    nombres: "YOHAN FERNANDO ECHEVERRI CASTA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "19/05/2024",
    placa: "JKK276",
    modelo: "2017",
    cedula: "1036600085",
    nombres: "MARIBEL  CORREA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "03/10/2023",
    placa: "GFK193",
    modelo: "2019",
    cedula: "1112627117",
    nombres: "NALLIBY GARCIA ALZATE"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "JZN889",
    modelo: "2022",
    cedula: "32486681",
    nombres: "NUBIA DEL SOCORRO ALVAREZ GARCIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "11/08/2024",
    placa: "FSY898",
    modelo: "2019",
    cedula: "71747910",
    nombres: "CARLOS ALBERTO PATIÑO HURTADO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "06/07/2024",
    placa: "FUN298",
    modelo: "2019",
    cedula: "21651589",
    nombres: "FORONDA VASQUEZ, FLOR ESTELLA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/08/2022",
    placa: "JJU854",
    modelo: "2018",
    cedula: "10191472",
    nombres: "PORFIRIO DE JESUS RUIZ RODRIGU"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "06/07/2021",
    placa: "HGN265",
    modelo: "2013",
    cedula: "42828222",
    nombres: "LENNY AMPARO BUILES ARISTIZABA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/06/2024",
    placa: "GRS520",
    modelo: "2020",
    cedula: "1053775781",
    nombres: "MEJIA TOBON, JUAN MEJIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/04/2024",
    placa: "EOT195",
    modelo: "2018",
    cedula: "70093197",
    nombres: "LOPERA LOTERO,SERGIO IVAN"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/12/2019",
    placa: "IOR741",
    modelo: "2016",
    cedula: "98646933",
    nombres: "CARDONA RODAS,HILDERMAN"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "13/09/2024",
    placa: "ZZL111",
    modelo: "2015",
    cedula: "1017134848",
    nombres: "HERNAN GUISAO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "13/08/2024",
    placa: "HZM433",
    modelo: "2015",
    cedula: "8352864",
    nombres: "SALAZAR PIEDRAHITA, JOSE URLEY"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/07/2024",
    placa: "HFK207",
    modelo: "2013",
    cedula: "37625548",
    nombres: "FLOR EDILMA REYES MONCADA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "08/08/2024",
    placa: "IYR920",
    modelo: "2016",
    cedula: "70513792",
    nombres: "IVAN DARIO RESTREPO JARAMILLO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/06/2022",
    placa: "JCQ663",
    modelo: "2017",
    cedula: "3606659",
    nombres: "LUIS EDUARDO VASQUEZ VILLEGAS"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "30/12/2024",
    placa: "IOU161",
    modelo: "2016",
    cedula: "70112014",
    nombres: "ROBERTO ANTONIO BUILES GONZALEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/02/2023",
    placa: "MVW079",
    modelo: "2013",
    cedula: "1017253305",
    nombres: "ALEXANDER ACOSTA JIMENEZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "19/04/2024",
    placa: "FQW135",
    modelo: "2019",
    cedula: "98632436",
    nombres: "VALENCIA ARREDONDO MILTON ALFO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/11/2024",
    placa: "JLX644",
    modelo: "2019",
    cedula: "79893441",
    nombres: "RUBIO CAICEDO, JORGE ORLANDO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/12/2024",
    placa: "GVN728",
    modelo: "2020",
    cedula: "1028004807",
    nombres: "DANIELA SANCHEZ SALAZAR"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "05/07/2024",
    placa: "DTS568",
    modelo: "2016",
    cedula: "72208959",
    nombres: "HERNANDEZ LOPEZ ANDRES"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "17/04/2022",
    placa: "KBR735",
    modelo: "2010",
    cedula: "1128453511",
    nombres: "JUAN MIGUEL MUÑOZ GALEANO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "08/03/2022",
    placa: "USK505",
    modelo: "2017",
    cedula: "43030149",
    nombres: "PUERTA PEREZ, GLADYS ESTELLA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "07/12/2024",
    placa: "JZK168",
    modelo: "2020",
    cedula: "397077",
    nombres: "FREDY JESUS GARCIA CITERIO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/09/2024",
    placa: "GDZ459",
    modelo: "2020",
    cedula: "21533966",
    nombres: "VIVIANA MARCELA PEREZ MONTOYA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "08/08/2024",
    placa: "UUK596",
    modelo: "2015",
    cedula: "39687372",
    nombres: "MARIA CLAUDIA DIAZ SARMIENTO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "29/05/2023",
    placa: "MJL633",
    modelo: "2012",
    cedula: "43547874",
    nombres: "BERRIO MONTOYA LUZ DAMARIS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/04/2020",
    placa: "DIK050",
    modelo: "2012",
    cedula: "43916307",
    nombres: "ARENAS JIMENEZ DIANA PATRICIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/08/2024",
    placa: "EHL107",
    modelo: "2018",
    cedula: "900283904",
    nombres: "ASTASIETE S.A.S"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/05/2024",
    placa: "IYP740",
    modelo: "2016",
    cedula: "1036679329",
    nombres: "SARA SOTO UPARELA"
  },
  {
    compañia: "SBS",
    finvigencia: "06/07/2022",
    placa: "HGZ716",
    modelo: "2014",
    cedula: "15536902",
    nombres: "ACEVEDO JARAMILLO, OVIDIO ANTONIO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/04/2022",
    placa: "IAV134",
    modelo: "2015",
    cedula: "42992120",
    nombres: "DORALBA GUTIERREZ MONSALVE"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "10/08/2024",
    placa: "JBP985",
    modelo: "2017",
    cedula: "71331769",
    nombres: "JHON JAIRO USUGA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "06/07/2024",
    placa: "KKK518",
    modelo: "2012",
    cedula: "71753273",
    nombres: "MARTINEZ JULIO CESAR"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "13/08/2023",
    placa: "HGY887",
    modelo: "2014",
    cedula: "1017220346",
    nombres: "RUIZ MARULANDA ANDREA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "23/08/2024",
    placa: "HEY509",
    modelo: "2013",
    cedula: "1036634147",
    nombres: "SANTIAGO ALVAREZ FRANCO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "04/05/2024",
    placa: "GEP493",
    modelo: "2020",
    cedula: "1037652026",
    nombres: "JULIAN ESTEBAN RENDON DIAZ"
  },
  {
    compañia: "ESTADO",
    finvigencia: "06/07/2022",
    placa: "INR039",
    modelo: "2017",
    cedula: "1038114788",
    nombres: "NIVER DAVID LIDUEÑA MUÑOZ"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "30/06/2024",
    placa: "HNS888",
    modelo: "2015",
    cedula: "22229139",
    nombres: "GLORIA MARIA BARRERA CATANO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "30/10/2024",
    placa: "EGX939",
    modelo: "2018",
    cedula: "1036649288",
    nombres: "ZAPATA ORTIZ YURANI ANDREA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "27/01/2025",
    placa: "FYT796",
    modelo: "2019",
    cedula: "1055831792",
    nombres: "Maria Catalina Salgado Obando"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "16/06/2024",
    placa: "MOV121",
    modelo: "2010",
    cedula: "43458269",
    nombres: "HERNANDEZ MONTES ALBA LUCIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "25/09/2023",
    placa: "HFO827",
    modelo: "2016",
    cedula: "79536651",
    nombres: "AMBROSIO SOLER, EDGAR ARTURO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "30/08/2022",
    placa: "KIH920",
    modelo: "2011",
    cedula: "10283668",
    nombres: "NEFTALI BERNAL GONZALEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "27/01/2024",
    placa: "ISU409",
    modelo: "2016",
    cedula: "1128474051",
    nombres: "JIMENA MARIA SANCHEZ RENDON"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "17/11/2024",
    placa: "IYQ672",
    modelo: "2017",
    cedula: "1128418495",
    nombres: "Miguel Trujillo Botero"
  },
  {
    compañia: "ESTADO",
    finvigencia: "25/03/2024",
    placa: "MSO997",
    modelo: "2013",
    cedula: "1037638811",
    nombres: "DANIEL CUARTAS PARRA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/04/2024",
    placa: "FQU386",
    modelo: "2019",
    cedula: "41668102",
    nombres: "VIANA PATI?O, MARIA ELENA DE SOCOR"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "25/08/2023",
    placa: "DHT461",
    modelo: "2013",
    cedula: "1046907411",
    nombres: "ECHAVARRIA ISAZA JADER ARLEY"
  },
  {
    compañia: "SBS",
    finvigencia: "06/07/2024",
    placa: "KEM913",
    modelo: "2019",
    cedula: "19417984",
    nombres: "TRIANA REAL, ARMANDO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "28/10/2024",
    placa: "INP357",
    modelo: "2016",
    cedula: "71693275",
    nombres: "JULIAN DAVID LOPEZ CALLEJAS"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "02/08/2024",
    placa: "DFV432",
    modelo: "2012",
    cedula: "1036655680",
    nombres: "Maria Emma Londo?o Sauceda"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "13/07/2024",
    placa: "GWV667",
    modelo: "2020",
    cedula: "6786574",
    nombres: "ANTONIO BEDOYA GAVIRIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "09/09/2024",
    placa: "JHV303",
    modelo: "2018",
    cedula: "1151935077",
    nombres: "LOPEZ ARIAS, CHRISTIAN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/09/2024",
    placa: "KAT415",
    modelo: "2015",
    cedula: "71748347",
    nombres: "GUILLERMO ALEXANDER ZAPATA BARRERA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "08/04/2018",
    placa: "KHX678",
    modelo: "2010",
    cedula: "52123899",
    nombres: "SUAREZ OCHOA DORIA VERONICA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/05/2024",
    placa: "USU344",
    modelo: "2016",
    cedula: "71642241",
    nombres: "PEREZ PEREZ,JORGE HERNAN"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "05/02/2025",
    placa: "HYZ327",
    modelo: "2014",
    cedula: "71719455",
    nombres: "MONTOYA CARDENAS, WILLIAM ANTONIO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2024",
    placa: "UGQ269",
    modelo: "2015",
    cedula: "70089504",
    nombres: "BERNAL VELEZ, SANTIAGO ANTONIO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/11/2019",
    placa: "EPT929",
    modelo: "2019",
    cedula: "98636534",
    nombres: "EDUARDO CEREN VILLORINA VILLORINA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "22/06/2024",
    placa: "GEM981",
    modelo: "2020",
    cedula: "1041147915",
    nombres: "MOSQUERA CANO, MARIA CRISTINA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "05/12/2021",
    placa: "INN211",
    modelo: "2015",
    cedula: "43164694",
    nombres: "PLAZA URIBE LINA MARIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "16/07/2021",
    placa: "GEM558",
    modelo: "2020",
    cedula: "70138372",
    nombres: "CARLOS ANDRES LOPERA MORENO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/03/2023",
    placa: "IST714",
    modelo: "2017",
    cedula: "98549067",
    nombres: "FREDY ANTONIO VALENCIA HERNANDEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "20/09/2024",
    placa: "IHS788",
    modelo: "2016",
    cedula: "1152444005",
    nombres: "CATALINA RESTREPO MORENO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "19/04/2024",
    placa: "EPP423",
    modelo: "2018",
    cedula: "32105356",
    nombres: "TAMAYO TRUJILLO MAYTE EUGENIA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "17/01/2024",
    placa: "EPR365",
    modelo: "2017",
    cedula: "1017248305",
    nombres: "ANDRES MUNOZ VALENCIA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "08/02/2022",
    placa: "KHN200",
    modelo: "2011",
    cedula: "71316472",
    nombres: "FRANK PULGARIN"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "07/07/2024",
    placa: "MGY086",
    modelo: "2013",
    cedula: "1067924057",
    nombres: "RAUL ANDRES BLANCO ALFARO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "14/07/2024",
    placa: "EOV283",
    modelo: "2019",
    cedula: "71363263",
    nombres: "DAZA , MARIN LISANDRO ."
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "18/08/2022",
    placa: "GRO258",
    modelo: "2020",
    cedula: "1006502677",
    nombres: "JEINS ALEXANDRA ICO CABRERA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "10/11/2024",
    placa: "HGN859",
    modelo: "2014",
    cedula: "38280413",
    nombres: "BLANCA BENAVIDEZ ANDRADE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/05/2024",
    placa: "IHP586",
    modelo: "2016",
    cedula: "1039466832",
    nombres: "JUAN ANDRES CALDERON ALVAREZ"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "25/12/2023",
    placa: "MXZ198",
    modelo: "2014",
    cedula: "1130671462",
    nombres: "ALFONSO JOSE JIMENEZ MEDICIS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "07/07/2024",
    placa: "GEM593",
    modelo: "2018",
    cedula: "15480082",
    nombres: "HERRERA COSSIO ALIRIO DE JESU"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/04/2024",
    placa: "DSU590",
    modelo: "2017",
    cedula: "8420765",
    nombres: "VARGAS ESTRADA, LUIS OSCAR"
  },
  {
    compañia: "ESTADO",
    finvigencia: "05/08/2024",
    placa: "BXU408",
    modelo: "2011",
    cedula: "42769172",
    nombres: "MARIA EUGENIA DIOSA ALVAREZ"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "10/11/2024",
    placa: "IYU522",
    modelo: "2017",
    cedula: "8127815",
    nombres: "SANCHEZ SEPULVEDA JOHN FREDY"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/01/2025",
    placa: "UEN626",
    modelo: "2015",
    cedula: "71696268",
    nombres: "LUIS FERNANDO MEJIA SUAREZ"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "01/12/2024",
    placa: "IYR444",
    modelo: "2017",
    cedula: "3564819",
    nombres: "FABIAN ENRIQUE CUADROS GUZMAN"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "08/08/2024",
    placa: "HHR353",
    modelo: "2014",
    cedula: "43005630",
    nombres: "CUARTAS ARDILA, GLADYS STELLA"
  },
  {
    compañia: "SBS",
    finvigencia: "29/03/2024",
    placa: "EPS081",
    modelo: "2018",
    cedula: "1017174579",
    nombres: "GUTIERREZ JIMENEZ, GINNA PAOLA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "03/03/2024",
    placa: "FQT254",
    modelo: "2019",
    cedula: "1037647734",
    nombres: "JUAN MANUEL CAYON BOLIVAR"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "06/10/2024",
    placa: "JYU718",
    modelo: "2022",
    cedula: "3391585",
    nombres: "VELEZ RIVERA, NICOLAS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "19/05/2024",
    placa: "FGZ637",
    modelo: "2008",
    cedula: "42884191",
    nombres: "CLAUDIA ALEJANDRA CORREA ESTRA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/04/2024",
    placa: "JZN579",
    modelo: "2022",
    cedula: "1047994965",
    nombres: "SILVANA FRANCO OCHOA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "09/03/2023",
    placa: "IEY861",
    modelo: "2015",
    cedula: "32450863",
    nombres: "LUZ ELENA ESTRADA DE CORREA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "20/04/2024",
    placa: "JST995",
    modelo: "2021",
    cedula: "32303537",
    nombres: "GILMA DEL SOCORRO MADRIGAL DE"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "08/08/2024",
    placa: "DLV928",
    modelo: "2012",
    cedula: "71578122",
    nombres: "GABRIEL JAIME GOMEZ JARAMILLO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "17/02/2022",
    placa: "FQW522",
    modelo: "2019",
    cedula: "32208498",
    nombres: "valeria perez"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "07/07/2023",
    placa: "EOV930",
    modelo: "2019",
    cedula: "1038804868",
    nombres: "ESPINOSA SEPULVEDA, DORELLY"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "27/10/2022",
    placa: "DEQ389",
    modelo: "2011",
    cedula: "71316472",
    nombres: "PULGARIN CASTA?EDA,FRANK JEFFERSON"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "18/06/2024",
    placa: "UEO449",
    modelo: "2015",
    cedula: "1017179748",
    nombres: "RODRIGUEZ HOLGUIN, KATHERINE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "24/12/2022",
    placa: "MOW496",
    modelo: "2011",
    cedula: "21990521",
    nombres: "GARCIA ECHEVERRI,GARCIA ECHEVERRI BEATRIZ ELE"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "07/02/2023",
    placa: "GRM011",
    modelo: "2019",
    cedula: "71173021",
    nombres: "POSADA PUERTA ADRIAN OCTAVIO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "30/08/2024",
    placa: "FQT036",
    modelo: "2019",
    cedula: "92545804",
    nombres: "TUIRAN TAMARA ROBERTO CARLOS"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "05/08/2024",
    placa: "IUB854",
    modelo: "2016",
    cedula: "1128460589",
    nombres: "RAMIREZ VALENCIA, KAREN YULIANA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "12/12/2020",
    placa: "KAQ151",
    modelo: "2013",
    cedula: "1216723044",
    nombres: "LEIDY JHOJANA LOPEZ VELEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/01/2024",
    placa: "JSR430",
    modelo: "2021",
    cedula: "8162992",
    nombres: "CARLOS EDUARDO CASTILLO CARDENAS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/11/2024",
    placa: "EGK549",
    modelo: "2017",
    cedula: "1000415662",
    nombres: "MARIA PAULINA ESPINOSA ISAZA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/02/2025",
    placa: "DLX592",
    modelo: "2012",
    cedula: "32338952",
    nombres: "GOMEZ RESTREPO, MARTHA BEATRIZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "06/02/2025",
    placa: "GVP825",
    modelo: "2020",
    cedula: "32332414",
    nombres: "ORTIZ MARTINEZ STELLA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "31/07/2020",
    placa: "IHT690",
    modelo: "2015",
    cedula: "131039",
    nombres: "LUIS ALFONSO VELANDIA LOPEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/05/2024",
    placa: "JYT561",
    modelo: "2022",
    cedula: "39179696",
    nombres: "SANDRA MILENA SALDARRIAGA SANCHEZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "08/11/2023",
    placa: "KBO044",
    modelo: "2011",
    cedula: "74241552",
    nombres: "SAENZ FORERO WOLNAR MAURICIO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "07/07/2024",
    placa: "HXU871",
    modelo: "2015",
    cedula: "70909178",
    nombres: "ADRIAN DE JESUS DUQUE ZULUAGA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "10/07/2021",
    placa: "MSY397",
    modelo: "2013",
    cedula: "1128483138",
    nombres: "PABLO RODRIGUEZ ARREDONDO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "18/03/2024",
    placa: "IEY566",
    modelo: "2015",
    cedula: "1152437964",
    nombres: "QUINONES ZULUAGA, DANIELA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "25/09/2022",
    placa: "DTX713",
    modelo: "2018",
    cedula: "1143121295",
    nombres: "GARCIA LOPEZ NATALY JOHANNA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "27/01/2025",
    placa: "JSU564",
    modelo: "2020",
    cedula: "42968992",
    nombres: "MONTOYA CANO ALBA, LUZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "07/07/2024",
    placa: "INN459",
    modelo: "2016",
    cedula: "32397747",
    nombres: "MARIA LIGIA IBARRA DEGUZMAN"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "IAS291",
    modelo: "2015",
    cedula: "32482022",
    nombres: "ROSA ISABEL LEWIS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/10/2023",
    placa: "DFU790",
    modelo: "2012",
    cedula: "71765304",
    nombres: "GIOVANNY FERNEY BETANCUR MUÑOZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "07/07/2024",
    placa: "DHZ714",
    modelo: "2012",
    cedula: "32324575",
    nombres: "OLGA LUCIA MONTOYA SUAREZ"
  },
  {
    compañia: "SBS",
    finvigencia: "07/07/2024",
    placa: "DJQ019",
    modelo: "2013",
    cedula: "70127681",
    nombres: "NORE?A SERNA, ALVARO HERNAN"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "07/07/2023",
    placa: "EPQ727",
    modelo: "2019",
    cedula: "71654121",
    nombres: "FRANCISCO JAVIER OSPINA GIL"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "03/01/2025",
    placa: "FXP057",
    modelo: "2019",
    cedula: "71271733",
    nombres: "JUAN GARCIA"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "30/01/2024",
    placa: "EGZ028",
    modelo: "2018",
    cedula: "1017220713",
    nombres: "SALAZAR CARDONA KATHERINE ANDREA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "30/04/2024",
    placa: "DLX460",
    modelo: "2012",
    cedula: "43567210",
    nombres: "MARIN MENESES MARIA BERENICE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "05/10/2024",
    placa: "LAX245",
    modelo: "2017",
    cedula: "38226413",
    nombres: "LILIA , JIMENEZ AGUDELO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "03/05/2023",
    placa: "EPP885",
    modelo: "2018",
    cedula: "70094413",
    nombres: "USUGA SEGURO DARIO ALONSO"
  },
  {
    compañia: "PREVISORA",
    finvigencia: "20/07/2024",
    placa: "EFY104",
    modelo: "2018",
    cedula: "1037648730",
    nombres: "CASTA?EDA LOPEZ LUISA FERNANDA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "07/11/2023",
    placa: "IAT888",
    modelo: "2015",
    cedula: "32564267",
    nombres: "MONSALVE ALZATE, VIVIANA PATRICIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/08/2023",
    placa: "GES132",
    modelo: "2020",
    cedula: "43723187",
    nombres: "SILVIA YANETH CHICA TOBON"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "07/10/2023",
    placa: "JZN343",
    modelo: "2022",
    cedula: "43682688",
    nombres: "ALBA LUCIA RAMIREZ FRANCO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "25/01/2024",
    placa: "EIO163",
    modelo: "2018",
    cedula: "1020418224",
    nombres: "LEIDY MARCELA VANEGAS LOPEZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "10/02/2025",
    placa: "FOL448",
    modelo: "2019",
    cedula: "94520272",
    nombres: "AFANADOR PAGAR JAIME"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/10/2024",
    placa: "MTY785",
    modelo: "2013",
    cedula: "1034987439",
    nombres: "SIMON RAMOS GARCIA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "26/08/2024",
    placa: "MSQ905",
    modelo: "2013",
    cedula: "1037615527",
    nombres: "LEIDY LORENA LOPERA HENAO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "24/05/2024",
    placa: "JCO773",
    modelo: "2017",
    cedula: "43253254",
    nombres: "PAOLA ANDREA CAMACHO GUZMAN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "15/03/2024",
    placa: "JCO341",
    modelo: "2017",
    cedula: "1152201426",
    nombres: "LAURA JULIANA CASTRILLON GRONDONA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "16/04/2023",
    placa: "GVO500",
    modelo: "2020",
    cedula: "87491487",
    nombres: "GUERRA JURADO, JAIRO ALBERTO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "29/04/2024",
    placa: "HPL824",
    modelo: "2014",
    cedula: "21399077",
    nombres: "LUZ ELENA GONZALEZ GIRALDO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "30/03/2024",
    placa: "JVQ665",
    modelo: "2022",
    cedula: "19316956",
    nombres: "CARLOS ARTURO ARIAS ARIAS"
  },
  {
    compañia: "SBS",
    finvigencia: "14/04/2024",
    placa: "IHP815",
    modelo: "2016",
    cedula: "21779268",
    nombres: "GIRALDO HOYOS, GLORIA AMPARO"
  },
  {
    compañia: "SBS",
    finvigencia: "10/04/2024",
    placa: "UEK207",
    modelo: "2015",
    cedula: "43269943",
    nombres: "VALDES GOEZ, LUZ ADRIANA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "08/08/2024",
    placa: "MFZ943",
    modelo: "2013",
    cedula: "98560402",
    nombres: "PEREZ VALENCIA, JUAN ESTEBAN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "06/04/2022",
    placa: "FQS081",
    modelo: "2018",
    cedula: "32228231",
    nombres: "YUDY CELENE ARIAS GUERRA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "05/01/2025",
    placa: "MXZ232",
    modelo: "2014",
    cedula: "94512509",
    nombres: "ALCALA LOAIZA GERMAN ANDRES"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "31/05/2024",
    placa: "JZO435",
    modelo: "2022",
    cedula: "43569572",
    nombres: "ALZATE GIRALDO,GLORIA ROSA"
  },
  {
    compañia: "SBS",
    finvigencia: "07/07/2023",
    placa: "HCU120",
    modelo: "2013",
    cedula: "1026573576",
    nombres: "OTALORA LOPERA, DENISE PATRICIA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "03/05/2024",
    placa: "ISV545",
    modelo: "2017",
    cedula: "32453390",
    nombres: "HINCAPIE GIRALDO, ANA MARIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/06/2021",
    placa: "IRO515",
    modelo: "2016",
    cedula: "1037613677",
    nombres: "MARISOL CARDONA SOTO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "26/11/2022",
    placa: "FNS405",
    modelo: "2019",
    cedula: "1127062083",
    nombres: "JACKSON JOSE CARRERO MORENO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "25/07/2024",
    placa: "JCP854",
    modelo: "2016",
    cedula: "1128475517",
    nombres: "EDISON ALEJANDRO PULGARIN CANO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "12/09/2022",
    placa: "JPS827",
    modelo: "2021",
    cedula: "43687851",
    nombres: "VARGAS ZULETA LUZ YURLADY"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "15/05/2024",
    placa: "JKM799",
    modelo: "2017",
    cedula: "1040744284",
    nombres: "VELEZ URIBE MARIA DANIELA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/09/2024",
    placa: "KAS457",
    modelo: "2016",
    cedula: "1036951013",
    nombres: "DANIEL PENAGOS TENORIO"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "08/07/2024",
    placa: "FKN073",
    modelo: "2022",
    cedula: "40326453",
    nombres: "JULY PAOLA SIERRA PINEDA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "27/05/2023",
    placa: "UEK392",
    modelo: "2015",
    cedula: "43549276",
    nombres: "CASTA?O MONTOYA CLAUDIA PATRICIA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "27/12/2024",
    placa: "EMQ593",
    modelo: "2019",
    cedula: "1077012969",
    nombres: "JUAN FERNANDO PALENCIA BEDOYA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/11/2024",
    placa: "JJW765",
    modelo: "2018",
    cedula: "8103205",
    nombres: "SERGIO ALEJANDRO ALVAREZ RODRIGUEZ"
  },
  {
    compañia: "SBS",
    finvigencia: "27/11/2024",
    placa: "EIN021",
    modelo: "2019",
    cedula: "1001249241",
    nombres: "CAMILO SALDARRIAGA R CAMILO SALDARRIAGA R, CAMILO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/12/2021",
    placa: "JCS337",
    modelo: "2017",
    cedula: "42745943",
    nombres: "NOHELIA PINO PINO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/06/2024",
    placa: "FSX016",
    modelo: "2018",
    cedula: "15512188",
    nombres: "NELSON ENRIQUE ZULUAGA GIRALDO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/10/2024",
    placa: "DRW450",
    modelo: "2018",
    cedula: "8032979",
    nombres: "JUAN FERNANDO AGUDELO CARMONA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "25/09/2023",
    placa: "DIK104",
    modelo: "2012",
    cedula: "1037626973",
    nombres: "Johana Katherine Mu?oz Monroy"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "02/04/2024",
    placa: "EIN931",
    modelo: "2018",
    cedula: "32488233",
    nombres: "BEATRIZ ELENA GOMEZ PALACIO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "08/07/2022",
    placa: "KIZ063",
    modelo: "2011",
    cedula: "78299377",
    nombres: "REYES ROJAS, OMAR"
  },
  {
    compañia: "ESTADO",
    finvigencia: "25/05/2020",
    placa: "HBW661",
    modelo: "2014",
    cedula: "8600029644",
    nombres: "BANCO DE BOGOTA"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "08/07/2024",
    placa: "DKS546",
    modelo: "2013",
    cedula: "1036636659",
    nombres: "RESTREPO ATEHORTUA, EDISSON YU"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/06/2024",
    placa: "JSU306",
    modelo: "2021",
    cedula: "71784476",
    nombres: "EDISON ALBERTO TABARES NORE?A"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "08/07/2024",
    placa: "DSY014",
    modelo: "2017",
    cedula: "98637745",
    nombres: "GIRALDO GOMEZ JOSE ALEJANDRO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "02/02/2021",
    placa: "HYR808",
    modelo: "2016",
    cedula: "91203734",
    nombres: "PATI?O LIZARAZO FREDY"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "11/12/2021",
    placa: "GRS526",
    modelo: "2020",
    cedula: "43874445",
    nombres: "JULIANA ANDREA BARRIENTOS HERRERA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/12/2024",
    placa: "IEW200",
    modelo: "2015",
    cedula: "8312338",
    nombres: "NORBERTO CEBALLOS MARIN"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "05/02/2025",
    placa: "GEW517",
    modelo: "2019",
    cedula: "9872004",
    nombres: "JOHNNY ANDRES LOPEZ GARCIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2024",
    placa: "EFU391",
    modelo: "2018",
    cedula: "3439696",
    nombres: "MACIAS MIRA JOSE ALBERTO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "19/11/2023",
    placa: "IOS518",
    modelo: "2016",
    cedula: "42826229",
    nombres: "MARIN LOPEZ, ANA MARIA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "09/12/2024",
    placa: "EOV019",
    modelo: "2019",
    cedula: "15517143",
    nombres: "CORREA HERNANDEZ SERGIO ANDRES"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "16/08/2024",
    placa: "EFX193",
    modelo: "2018",
    cedula: "70079645",
    nombres: "ALZATE CARDONA DARIO ANTONIO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "08/02/2024",
    placa: "JIZ085",
    modelo: "2017",
    cedula: "98489034",
    nombres: "CARLOS MARIO ACEVEDO AGUDELO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/10/2021",
    placa: "FRS371",
    modelo: "2019",
    cedula: "10100019",
    nombres: "ALBERTO ALONSO HERNANDEZ OSORIO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "24/11/2024",
    placa: "JSS597",
    modelo: "2021",
    cedula: "98488537",
    nombres: "William Ordo?ez Correa"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "15/12/2024",
    placa: "JPW346",
    modelo: "2021",
    cedula: "98602530",
    nombres: "Jhon Alexander Leon Cortes"
  },
  {
    compañia: "SBS",
    finvigencia: "19/07/2023",
    placa: "IHP523",
    modelo: "2016",
    cedula: "1059712213",
    nombres: "FRANCO RAMIREZ, LAURA MARCELA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "09/07/2022",
    placa: "KHO064",
    modelo: "2011",
    cedula: "43040449",
    nombres: "HERNANDEZ ACOSTA LILIANA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "28/07/2023",
    placa: "USW582",
    modelo: "2016",
    cedula: "1136887904",
    nombres: "DAVID ENRIQUE PEDRAZA ESLAVA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "USX667",
    modelo: "2016",
    cedula: "1152439520",
    nombres: "LAURA BETANCUR RIOS"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "09/08/2023",
    placa: "MTY479",
    modelo: "2013",
    cedula: "43759207",
    nombres: "CALLEJAS ROJAS, SANDRA MILENA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "18/06/2024",
    placa: "JBP229",
    modelo: "2017",
    cedula: "1017153200",
    nombres: "PUERTA SERNA HARRYSON"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "09/08/2023",
    placa: "JCN308",
    modelo: "2017",
    cedula: "43556399",
    nombres: "MORALES ROSAS, OLGA CECILIA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "25/08/2023",
    placa: "GEM561",
    modelo: "2020",
    cedula: "1214743959",
    nombres: "VILLOTA DELGADO ESTEFAN?A ELIZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "GWU897",
    modelo: "2020",
    cedula: "71366999",
    nombres: "ALEJANDRO CARDONA BUSTAMANTE"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/09/2024",
    placa: "GES167",
    modelo: "2020",
    cedula: "71225505",
    nombres: "JORGE IVAN ARIAS GOMEZ"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "01/03/2022",
    placa: "FXP936",
    modelo: "2018",
    cedula: "1128267084",
    nombres: "CASTRO CONTRERAS, ERICK LE MIE"
  },
  {
    compañia: "MUNDIAL",
    finvigencia: "18/02/2023",
    placa: "FHP955",
    modelo: "2010",
    cedula: "1039470682",
    nombres: "ANDRES FELIPE RINCON ZULUAGA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/03/2024",
    placa: "JPU149",
    modelo: "2021",
    cedula: "15256426",
    nombres: "LUIS ALBERTO VANEGAS CASTAÑEDA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "01/01/2023",
    placa: "KMQ669",
    modelo: "2012",
    cedula: "43494138",
    nombres: "ZAPATA VELEZ LUZ HELENA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "05/02/2019",
    placa: "KLR161",
    modelo: "2011",
    cedula: "1126589130",
    nombres: "JAVIER ANDRES GARCIA SIERRA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "16/09/2024",
    placa: "RKR008",
    modelo: "2011",
    cedula: "1045021197",
    nombres: "NIDIA MARCELA VERGARA MU?OZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "10/08/2024",
    placa: "HXY662",
    modelo: "2015",
    cedula: "1040181737",
    nombres: "PEREZ HERRERA, EDISON MAURICIO"
  },
  {
    compañia: "ESTADO",
    finvigencia: "06/08/2022",
    placa: "JSS037",
    modelo: "2021",
    cedula: "1036624223",
    nombres: "YULY PAULINA ARAQUE SANCHEZ"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "04/02/2024",
    placa: "JSV296",
    modelo: "2021",
    cedula: "43017245",
    nombres: "MORENO SANCHEZ MARIA ELIZABETH"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/08/2024",
    placa: "RAL467",
    modelo: "2010",
    cedula: "74370462",
    nombres: "GERMAN DARIO JARRO LOPEZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "22/04/2022",
    placa: "JBK565",
    modelo: "2017",
    cedula: "1036642553",
    nombres: "LOPEZ BETANCOURT,JOSE MIGUEL ."
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "28/05/2019",
    placa: "JIY699",
    modelo: "2017",
    cedula: "3507495",
    nombres: "FRANCK ALBERTO MONTOYA PINILLA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "05/12/2023",
    placa: "FXP633",
    modelo: "2019",
    cedula: "1035304612",
    nombres: "MARTA LUZ MAZO CORREA"
  },
  {
    compañia: "SBS",
    finvigencia: "09/07/2022",
    placa: "DFY617",
    modelo: "2017",
    cedula: "39325984",
    nombres: "MOLINA PUERTA, MARISELY DE JESUS"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/12/2023",
    placa: "HGZ267",
    modelo: "2014",
    cedula: "1077173950",
    nombres: "JEISON LEANDRO DUQUE SALAZAR"
  },
  {
    compañia: "MUNDIAL",
    finvigencia: "14/10/2024",
    placa: "UGQ455",
    modelo: "2015",
    cedula: "1000896982",
    nombres: "JUAN DIEGO MIRANDA PEREZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "09/07/2024",
    placa: "HZP567",
    modelo: "2016",
    cedula: "1020470697",
    nombres: "MU?OZ CARLOS ANDRES"
  },
  {
    compañia: "SBS",
    finvigencia: "14/04/2024",
    placa: "FSY670",
    modelo: "2018",
    cedula: "70566698",
    nombres: "SANCHEZ RESTREPO, JORGE IGNACIO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "09/07/2024",
    placa: "IYQ227",
    modelo: "2016",
    cedula: "39177558",
    nombres: "LEIDY ALEJANDRA CASTA?O"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/12/2024",
    placa: "JPS582",
    modelo: "2021",
    cedula: "1036615651",
    nombres: "VIVIANA RIVERA CUARTAS"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "09/07/2023",
    placa: "JKL551",
    modelo: "2017",
    cedula: "71785144",
    nombres: "ARISMEDY OSPINA, HERMES ALBERT"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2024",
    placa: "HYR095",
    modelo: "2015",
    cedula: "8160947",
    nombres: "EDISSON EDUARDO MARTINEZ URIBE"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "27/12/2024",
    placa: "FPW511",
    modelo: "2019",
    cedula: "70553127",
    nombres: "Cesar Augusto Acosta Torres"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "03/02/2025",
    placa: "EGZ361",
    modelo: "2018",
    cedula: "98551472",
    nombres: "GOMEZ GOMEZ JAIR ARTURO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "13/12/2024",
    placa: "GWY057",
    modelo: "2020",
    cedula: "43556751",
    nombres: "MONTOYA LUZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "09/05/2024",
    placa: "KAN754",
    modelo: "2011",
    cedula: "98660738",
    nombres: "GRISALES HERRERA,JORGE IVAN"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "01/12/2024",
    placa: "JSQ857",
    modelo: "2021",
    cedula: "1088248068",
    nombres: "QUIROZ CALDERON JULIANA ALEJANDRA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "11/07/2024",
    placa: "MFY013",
    modelo: "2013",
    cedula: "1017181147",
    nombres: "Carlos Mauricio Villa Bedoya"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "17/04/2024",
    placa: "EKS844",
    modelo: "2006",
    cedula: "70558408",
    nombres: "ARENAS SERNA JORGE ALBERTO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "23/11/2023",
    placa: "DJN025",
    modelo: "2012",
    cedula: "80055128",
    nombres: "GUZMAN CARDONA, WALTER FANEY"
  },
  {
    compañia: "ZURICH-QBE",
    finvigencia: "19/01/2024",
    placa: "IRU469",
    modelo: "2017",
    cedula: "1035421580",
    nombres: "Katherine Restrepo Torres"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/08/2024",
    placa: "GRN547",
    modelo: "2020",
    cedula: "49609918",
    nombres: "YANIRIS CARRILLO ARIAS"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "08/07/2024",
    placa: "KBU066",
    modelo: "2010",
    cedula: "70507944",
    nombres: "ZAPATA ALZATE ROGELIO DE JESUS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "11/12/2024",
    placa: "IAT933",
    modelo: "2015",
    cedula: "1007045332",
    nombres: "FAVIO ALEXANDER NARANJO SANABR"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "23/10/2024",
    placa: "IJL041",
    modelo: "2016",
    cedula: "3496909",
    nombres: "GIRALDO MARTINEZ OMAR HERNAN"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "22/07/2024",
    placa: "GRS071",
    modelo: "2020",
    cedula: "1035853939",
    nombres: "SEBASTIAN GRAJALES ORTIZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/11/2024",
    placa: "HYZ277",
    modelo: "2014",
    cedula: "8433004",
    nombres: "JUAN FERNANDO GIL ORTIZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "23/10/2024",
    placa: "JCU325",
    modelo: "2017",
    cedula: "42975102",
    nombres: "GLADYS DEL SOCORRO RIOS DE MONSALVE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "12/07/2024",
    placa: "KPQ351",
    modelo: "2022",
    cedula: "42977851",
    nombres: "GIRALDO RESTREPO, OLGA LUCIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "28/01/2025",
    placa: "IES258",
    modelo: "2015",
    cedula: "32752701",
    nombres: "GAVIRIA MEJIA, ADRIANA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "15/03/2024",
    placa: "JKL348",
    modelo: "2017",
    cedula: "43169489",
    nombres: "GARCES OSORIO MANUELA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "17/12/2024",
    placa: "UCK132",
    modelo: "2014",
    cedula: "42877562",
    nombres: "FLOREZ SANCHEZ, MARIA OFELIA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "08/03/2024",
    placa: "JPS849",
    modelo: "2021",
    cedula: "7706645",
    nombres: "BAHAMON ANDRES JAVIER"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "02/06/2022",
    placa: "HPM132",
    modelo: "2014",
    cedula: "1040747861",
    nombres: "JULIETH VANESSA HERRERA FRANCO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "12/01/2025",
    placa: "JSS969",
    modelo: "2021",
    cedula: "6883414",
    nombres: "PEDRO LUIS MUÑOZ ZAPATA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "22/05/2024",
    placa: "DST676",
    modelo: "2017",
    cedula: "32468035",
    nombres: "SANCHEZ DE ALZATE ROSALBA DEL"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "30/09/2022",
    placa: "GHZ729",
    modelo: "2020",
    cedula: "43923350",
    nombres: "PAOLA ANDREA OSPINA BERMUDEZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "28/01/2023",
    placa: "FQP916",
    modelo: "2019",
    cedula: "71786371",
    nombres: "BUSTAMANTE CRUZ HERNAN DARIO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "10/07/2024",
    placa: "MSS304",
    modelo: "2013",
    cedula: "1128283657",
    nombres: "RAMIREZ SIERRA SINDY VANESSA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "01/12/2024",
    placa: "GEZ698",
    modelo: "2019",
    cedula: "43865728",
    nombres: "MARCELA ALEJANDRA ZAPATA MEJIA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "14/07/2024",
    placa: "KHF187",
    modelo: "2011",
    cedula: "32243150",
    nombres: "NATALIA CRISTINA RIVERA IDARRAGA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/07/2024",
    placa: "GEZ483",
    modelo: "2019",
    cedula: "64550537",
    nombres: "EMMA CELINA PACINI SEBA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "25/11/2023",
    placa: "JOQ583",
    modelo: "2020",
    cedula: "1024491782",
    nombres: "ANGELA LIZARAZO RENGIFO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/11/2022",
    placa: "IOR307",
    modelo: "2016",
    cedula: "1152449601",
    nombres: "LEON JAIME GAVIRIA MUÑOZ"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "10/07/2024",
    placa: "JOS497",
    modelo: "2020",
    cedula: "70075967",
    nombres: "VALLEJO RAMIREZ RODRIGOANTONIO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "10/07/2024",
    placa: "IYU710",
    modelo: "2017",
    cedula: "1040745269",
    nombres: "JULIAN ESTEBAN HIGUITA ACEVEDO"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "30/01/2024",
    placa: "ENZ226",
    modelo: "2019",
    cedula: "1000439262",
    nombres: "TABARES MORALES JUAN PABLO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "14/09/2024",
    placa: "JSS727",
    modelo: "2021",
    cedula: "1094892716",
    nombres: "LONDO?O RODRIGUEZ NATALIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "18/06/2023",
    placa: "JYY858",
    modelo: "2021",
    cedula: "43687068",
    nombres: "FRANCO GIL, ERIKA MARIA ."
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "20/02/2018",
    placa: "DAT692",
    modelo: "2015",
    cedula: "35263301",
    nombres: "SERNA RODRIGUEZ JOHANNA ELIZABETH"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "28/09/2024",
    placa: "ISU444",
    modelo: "2016",
    cedula: "1039449794",
    nombres: "ANDRES DAVID LOPEZ"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "02/08/2023",
    placa: "JOT421",
    modelo: "2021",
    cedula: "15990839",
    nombres: "NIETO MASSO, JORGE WILLIAM"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "25/06/2022",
    placa: "IAS682",
    modelo: "2015",
    cedula: "43184861",
    nombres: "SUCESI?N ILIQUIDA SANDRA PATRICIA CHACON SALD"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "06/10/2023",
    placa: "FZT639",
    modelo: "2020",
    cedula: "1023723034",
    nombres: "Luz Margarita Viana Hincapie"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "10/11/2021",
    placa: "JSR739",
    modelo: "2021",
    cedula: "98522284",
    nombres: "JOSE RICAURTE TABARES PARRA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "23/05/2024",
    placa: "KHL535",
    modelo: "2011",
    cedula: "11228517",
    nombres: "NIETO UMA?A EDGAR ALBERTO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "16/04/2024",
    placa: "EHN061",
    modelo: "2018",
    cedula: "71741397",
    nombres: "GABRIEL JAIME RAMIREZ ZAPATA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "10/12/2024",
    placa: "JJM431",
    modelo: "2018",
    cedula: "80067231",
    nombres: "HERRERA CALVACHE, ALEXANDER"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "08/08/2024",
    placa: "JKP323",
    modelo: "2017",
    cedula: "1128282060",
    nombres: "ZULIANY MONTOYA TRUJILLO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/03/2024",
    placa: "DST046",
    modelo: "2017",
    cedula: "70083143",
    nombres: "LUIS FERNANDO ALARCON SALAZAR"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "06/06/2024",
    placa: "JEX347",
    modelo: "2017",
    cedula: "41503948",
    nombres: "VELASQUEZ DE GONZALEZ ANA CECILIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "10/05/2024",
    placa: "GEM827",
    modelo: "2020",
    cedula: "15526353",
    nombres: "URIBE MEJIA,JESUS MARIA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "14/07/2024",
    placa: "FQQ352",
    modelo: "2019",
    cedula: "1152697107",
    nombres: "ROJAS MEJIA, ANDREA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/02/2024",
    placa: "IGL422",
    modelo: "2016",
    cedula: "1152463468",
    nombres: "LAURA CATALINA QUIROZ OSORIO"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "10/03/2023",
    placa: "GEM923",
    modelo: "2020",
    cedula: "28541683",
    nombres: "ROJAS MUÑOZ, MILEIDY"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "03/07/2022",
    placa: "KPQ399",
    modelo: "2022",
    cedula: "98700844",
    nombres: "GARZON VELASQUEZ,DIEGO ARMANDO"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "26/04/2024",
    placa: "JPW558",
    modelo: "2021",
    cedula: "98705747",
    nombres: "JUAN DAVID CETINA SALDARRIAGA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "10/07/2022",
    placa: "IOR086",
    modelo: "2016",
    cedula: "70123196",
    nombres: "RAUL RESTREPO SANTAMARIA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "10/07/2024",
    placa: "DSX712",
    modelo: "2018",
    cedula: "32316258",
    nombres: "QUINTERO CANO OLGA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "11/07/2023",
    placa: "FJX085",
    modelo: "2018",
    cedula: "80541429",
    nombres: "HUGO JAVIER DIAZ MATEUS"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "23/12/2023",
    placa: "MTT696",
    modelo: "2014",
    cedula: "1037583312",
    nombres: "MARIA PAULINA BOBADILLA GONZALEZ"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "17/10/2018",
    placa: "HHK217",
    modelo: "2014",
    cedula: "32494384",
    nombres: "LONDONO MARTINEZ VICTORIA EUGE"
  },
  {
    compañia: "SOLIDARIA",
    finvigencia: "05/01/2025",
    placa: "EOV213",
    modelo: "2019",
    cedula: "1020451042",
    nombres: "JARAMILLO HIGUITA EMANUEL FELIPE"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "26/03/2024",
    placa: "EPQ555",
    modelo: "2019",
    cedula: "43180323",
    nombres: "LEIDY ANDREA BURBANO PATI?O"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "13/09/2021",
    placa: "KHS474",
    modelo: "2012",
    cedula: "32541113",
    nombres: "DORA ALBA HERNANDEZ"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "07/02/2024",
    placa: "GEY557",
    modelo: "2019",
    cedula: "98624404",
    nombres: "CADAVID MAYA, JUAN FELIPE"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "14/02/2025",
    placa: "MVR513",
    modelo: "2013",
    cedula: "32299455",
    nombres: "RESTREPO PELAEZ,ADELAIDA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/10/2024",
    placa: "IAO896",
    modelo: "2015",
    cedula: "8026507",
    nombres: "JOVANY SUAZA FERNANDEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "31/03/2024",
    placa: "JPX937",
    modelo: "2021",
    cedula: "1128457791",
    nombres: "JUAN ESTEBAN MEJIA ARANGO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/09/2024",
    placa: "KAL689",
    modelo: "2010",
    cedula: "32509993",
    nombres: "ELCYRA DE JESUS PATIÑO RODRIGUEZ"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/10/2024",
    placa: "JOP912",
    modelo: "2021",
    cedula: "1037671431",
    nombres: "NATALIA BANOY RESTREPO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "30/06/2024",
    placa: "ISS709",
    modelo: "2016",
    cedula: "43907401",
    nombres: "TABIMA LOAIZA, KAROL MARCELA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "15/11/2024",
    placa: "IAT551",
    modelo: "2015",
    cedula: "1128414496",
    nombres: "MONSALVE MONSALVE, YULIANA ANDREA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "25/12/2024",
    placa: "IYS082",
    modelo: "2017",
    cedula: "43640963",
    nombres: "GARCES ALVAREZ PAULA MARCELA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "25/10/2024",
    placa: "EGZ427",
    modelo: "2018",
    cedula: "1037623777",
    nombres: "SALDARRIAGA RAMIREZ, TOMAS"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "17/02/2022",
    placa: "USY274",
    modelo: "2016",
    cedula: "1036951240",
    nombres: "LINA MARCELA AGUIRRE URREGO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "22/08/2024",
    placa: "HXX766",
    modelo: "2015",
    cedula: "1037629315",
    nombres: "NOHORA LUCIA GARCIA CARDOZO"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "03/08/2022",
    placa: "IRN077",
    modelo: "2015",
    cedula: "1026581114",
    nombres: "LOTHAR IVAN MATEUZ HERRERA"
  },
  {
    compañia: "ESTADO",
    finvigencia: "31/01/2024",
    placa: "KHI199",
    modelo: "2011",
    cedula: "71690418",
    nombres: "JUAN MANUEL PULGARIN VALENCIA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "28/01/2025",
    placa: "JPY209",
    modelo: "2021",
    cedula: "41938446",
    nombres: "Lina Marin"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "25/09/2022",
    placa: "JLR898",
    modelo: "2020",
    cedula: "71000832",
    nombres: "EDILFONSO MORALES PINEDA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "26/04/2023",
    placa: "JYS592",
    modelo: "2022",
    cedula: "15256555",
    nombres: "TOBON MONTOYA JORGE ALBERTO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "01/06/2024",
    placa: "HXV521",
    modelo: "2014",
    cedula: "43675971",
    nombres: "MORENO HERNANDEZ GLORIA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "18/03/2024",
    placa: "EHL621",
    modelo: "2018",
    cedula: "1048021541",
    nombres: "LEIDY TATIANA QUINTERO MONTOYA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "25/08/2024",
    placa: "JOP955",
    modelo: "2020",
    cedula: "15507834",
    nombres: "CADAVID TORO JUAN FERNANDO"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "13/04/2024",
    placa: "ISS643",
    modelo: "2016",
    cedula: "1128464876",
    nombres: "DIEGO ALEJANDRO PEREZ MONTOYA"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "01/05/2024",
    placa: "BXU097",
    modelo: "2011",
    cedula: "37899003",
    nombres: "LEIDY CAROLINA MARTINEZ DIAZ"
  },
  {
    compañia: "PREVISORA",
    finvigencia: "25/11/2024",
    placa: "HNU312",
    modelo: "2014",
    cedula: "43818606",
    nombres: "OCAMPO ARENAS ADRIANA PATRICIA"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "21/02/2020",
    placa: "JHP671",
    modelo: "2018",
    cedula: "1020393189",
    nombres: "DORA ALBA GOEZ GOEZ"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "02/12/2022",
    placa: "USY423",
    modelo: "2016",
    cedula: "1039450036",
    nombres: "MUNERA IDARRAGA, MARION SHIRLE"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "30/11/2019",
    placa: "FQW662",
    modelo: "2019",
    cedula: "30234038",
    nombres: "VILLA SILVA CLAUDIA LILIANA"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "08/02/2023",
    placa: "GVO750",
    modelo: "2020",
    cedula: "16622765",
    nombres: "BEDOYA SEPULVEDA JOSE EVANGELI"
  },
  {
    compañia: "SBS",
    finvigencia: "30/11/2024",
    placa: "JKM205",
    modelo: "2017",
    cedula: "1037639794",
    nombres: "EDWIN RESTREPO MESA,"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/07/2024",
    placa: "EOS881",
    modelo: "2019",
    cedula: "8214267",
    nombres: "ALBERTO DIEZ MONTOYA"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "30/09/2023",
    placa: "FXP414",
    modelo: "2019",
    cedula: "1037669809",
    nombres: "DAVID MILAN VELEZ"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "12/07/2024",
    placa: "USV555",
    modelo: "2016",
    cedula: "42898372",
    nombres: "CA?AS VILLA GLADYS ENEIDA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "02/04/2024",
    placa: "JKM987",
    modelo: "2017",
    cedula: "43976641",
    nombres: "AGUDELO GOMEZ, NATALIA"
  },
  {
    compañia: "SBS",
    finvigencia: "08/10/2024",
    placa: "DSU594",
    modelo: "2016",
    cedula: "70511099",
    nombres: "MONTOYA MOLINA, CESAR AUGUSTO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "25/02/2024",
    placa: "DEQ171",
    modelo: "2012",
    cedula: "98477360",
    nombres: "CORREA VELEZ, JORGE IGNACIO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "23/12/2024",
    placa: "ISU049",
    modelo: "2016",
    cedula: "32298550",
    nombres: "GARCES OROZCO LAURA"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "01/07/2024",
    placa: "GWY840",
    modelo: "2021",
    cedula: "8397022",
    nombres: "OSPINA CEBALLOS,JOSE ARTURO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "14/07/2024",
    placa: "GRQ776",
    modelo: "2020",
    cedula: "1020425899",
    nombres: "JUANITA VELEZ, RINCON"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "01/01/2025",
    placa: "CKU127",
    modelo: "2008",
    cedula: "8104645",
    nombres: "JHON FREDY RAMIREZ MARIN"
  },
  {
    compañia: "BOLIVAR",
    finvigencia: "10/07/2023",
    placa: "QEF406",
    modelo: "2007",
    cedula: "98512613",
    nombres: "JOAQUIN GUILLERMO JIMENEZ URRE"
  },
  {
    compañia: "HDI SEGUROS",
    finvigencia: "28/02/2024",
    placa: "GVK881",
    modelo: "2020",
    cedula: "71263042",
    nombres: "JARAMILLO BOTERO, WILLIAM ARMA"
  },
  {
    compañia: "EQUIDAD",
    finvigencia: "11/07/2024",
    placa: "INS317",
    modelo: "2017",
    cedula: "32520567",
    nombres: "MARIA ISABEL MONTOYA GIRALDO"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "25/06/2020",
    placa: "GJQ584",
    modelo: "2020",
    cedula: "16584703",
    nombres: "JARAMILLO GUTIERREZ JOSE FERNANDO"
  },
  {
    compañia: "ALLIANZ",
    finvigencia: "07/12/2024",
    placa: "FCR770",
    modelo: "2007",
    cedula: "43044848",
    nombres: "QUINTERO VASQUEZ, LUZ DARY"
  },
  {
    compañia: "LIBERTY",
    finvigencia: "02/02/2024",
    placa: "GEV891",
    modelo: "2020",
    cedula: "48601133",
    nombres: "LUZ ELIANA CORREA PUERTA"
  },
  {
    compañia: "MAPFRE",
    finvigencia: "06/12/2019",
    placa: "EGX601",
    modelo: "2018",
    cedula: "1000453176",
    nombres: "ROJAS HERNANDEZ DIOSKOMAN"
  },
  {
    compañia: "ESTADO",
    finvigencia: "11/07/2023",
    placa: "IHP343",
    modelo: "2015",
    cedula: "3561385",
    nombres: "PEDRO NELSON ZAPATA ARBELAEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "27/06/2023",
    placa: "ENZ354",
    modelo: "2019",
    cedula: "71170138",
    nombres: "LUIS ARBENIZ PINO JARAMILLO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "10/12/2024",
    placa: "FUM501",
    modelo: "2019",
    cedula: "71674066",
    nombres: "RAMIREZ HENAO LUIS CARLOS"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "20/01/2025",
    placa: "ZZK614",
    modelo: "2014",
    cedula: "79956519",
    nombres: "POSADA MARINO ALEJANDRO"
  },
  {
    compañia: "AXA COLPATRIA",
    finvigencia: "11/07/2024",
    placa: "IAP976",
    modelo: "2015",
    cedula: "71666196",
    nombres: "ECHEVERRY AUBAD JUAN CARLOS"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "29/10/2024",
    placa: "JOS022",
    modelo: "2021",
    cedula: "79788763",
    nombres: "JOSE LUIS BRICEÑO MARTINEZ"
  },
  {
    compañia: "SURAMERICANA",
    finvigencia: "01/03/2024",
    placa: "JKK209",
    modelo: "2017",
    cedula: "42789503",
    nombres: "LUZ CLEMENCIA SANCHEZ GARCES"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "06/08/2024",
      placa: "IAV165",
      modelo: "2015",
      cedula: "98538256",
      nombres: "EDWIN TORO MONTOYA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "03/08/2024",
      placa: "GWU827",
      modelo: "2019",
      cedula: "71684826",
      nombres: "PINEDA BUILES, RAFAEL"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "16/05/2023",
      placa: "DMK255",
      modelo: "2012",
      cedula: "43073155",
      nombres: "GLORIA CELENI ZAPATA ARCILA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "12/07/2023",
      placa: "JJK767",
      modelo: "2018",
      cedula: "71614787",
      nombres: "CARLOS MARIO LOPEZ CASAS"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/05/2021",
      placa: "ENK483",
      modelo: "2019",
      cedula: "8909039388",
      nombres: "BANCOLOMBIA S.A."
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/07/2024",
      placa: "JZP152",
      modelo: "2022",
      cedula: "21843346",
      nombres: "MARGARITA MARIA, MESA DIEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "21/07/2024",
      placa: "FXM556",
      modelo: "2019",
      cedula: "1193257688",
      nombres: "LUIS ALEJANDRO QUINCHIA GIRALDO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "16/01/2024",
      placa: "IEW424",
      modelo: "2015",
      cedula: "43468323",
      nombres: "Edda Milena Montoya Perez"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/02/2024",
      placa: "GXR077",
      modelo: "2020",
      cedula: "38603051",
      nombres: "BEDOYA VELASQUEZ, BEATRIZ EUGENIA"
  },
  {
      compañia: "ZURICH-QBE",
      finvigencia: "04/06/2024",
      placa: "UEL549",
      modelo: "2015",
      cedula: "21560763",
      nombres: "Angela Maria Velez Arango"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "29/04/2024",
      placa: "IOU542",
      modelo: "2016",
      cedula: "98702168",
      nombres: "ANDRES ANTONIO MARTINEZ ZAPATA"
  },
  {
      compañia: "SBS",
      finvigencia: "01/12/2023",
      placa: "IOV511",
      modelo: "2016",
      cedula: "15339446",
      nombres: "MEJIA GRAJALES, JULIAN DARIO"
  },
  {
      compañia: "SBS",
      finvigencia: "27/04/2022",
      placa: "MVT449",
      modelo: "2013",
      cedula: "32241662",
      nombres: "LOPEZ TORO, FRANCY DEL PILAR"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/03/2023",
      placa: "IYO488",
      modelo: "2016",
      cedula: "1020395494",
      nombres: "OSCAR ALFONSO ROJAS CARDONA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/04/2024",
      placa: "DOX183",
      modelo: "2017",
      cedula: "1037579461",
      nombres: "JUAN DAVID PALACIO ECHAVARRIA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "12/07/2024",
      placa: "IST130",
      modelo: "2016",
      cedula: "1017204391",
      nombres: "JOSE ALEJANDRO FLOREZ ARRUBLA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "13/07/2024",
      placa: "JOP411",
      modelo: "2021",
      cedula: "3570279",
      nombres: "FRAY AMAR SABAS BLANDON"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "13/07/2024",
      placa: "IDL977",
      modelo: "2015",
      cedula: "4617248",
      nombres: "FERNANDO ANDRES LONDO?O BADILL"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "13/07/2024",
      placa: "KHJ390",
      modelo: "2011",
      cedula: "31971869",
      nombres: "POSADA DORA BIBIANA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "15/04/2023",
      placa: "INR365",
      modelo: "2017",
      cedula: "43410856",
      nombres: "ALBA LUCIA HERRERA FERNANDEZ"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "01/12/2024",
      placa: "KPQ518",
      modelo: "2022",
      cedula: "43864879",
      nombres: "ALEJANDRA YANET CORREA MURIEL"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "31/12/2021",
      placa: "DMK648",
      modelo: "2013",
      cedula: "43200248",
      nombres: "SOTO OCHOA, LINA PIEDAD"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "04/09/2024",
      placa: "JOR848",
      modelo: "2021",
      cedula: "32140812",
      nombres: "OSPINA VALENCIA, SANDRA MILENA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "24/10/2024",
      placa: "IYS870",
      modelo: "2016",
      cedula: "71263248",
      nombres: "EDWARD OQUENDO MONTOYA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/04/2024",
      placa: "HCL696",
      modelo: "2013",
      cedula: "4336750",
      nombres: "JORGE HERNAN MARULANDA PELAEZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "13/07/2023",
      placa: "JIW871",
      modelo: "2017",
      cedula: "1082921534",
      nombres: "DANITH MARIA DE LOS ANGELES MUIZ BERDUGO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "01/12/2024",
      placa: "JOT395",
      modelo: "2020",
      cedula: "93384957",
      nombres: "SANTACRUZ SUAREZ FRACISCO ANTONIO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "25/09/2024",
      placa: "JOS374",
      modelo: "2021",
      cedula: "71318633",
      nombres: "FREDD ESTARLY ARDILA ZAPATA"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "13/07/2023",
      placa: "EIO031",
      modelo: "2020",
      cedula: "1036638279",
      nombres: "JIMENEZ GARCIA LUIS MIGUEL"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/06/2023",
      placa: "IHU402",
      modelo: "2016",
      cedula: "73144706",
      nombres: "CARLOS ALBERTO JURADO MEDINA"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "29/04/2024",
      placa: "JZN529",
      modelo: "2022",
      cedula: "1152225090",
      nombres: "CORREA PALACIO MIGUEL ANGEL"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "17/08/2024",
      placa: "FSW411",
      modelo: "2019",
      cedula: "42892227",
      nombres: "CARTAGENA MOMTOYA ROSA ANGELICA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "31/01/2023",
      placa: "ISV582",
      modelo: "2017",
      cedula: "78753626",
      nombres: "OLIER ARTURO UBARNES SOLERA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "26/07/2024",
      placa: "FXR693",
      modelo: "2020",
      cedula: "38552746",
      nombres: "SANDRA IVON RUANO CARDENAS"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "23/02/2024",
      placa: "KMS401",
      modelo: "2012",
      cedula: "1036641164",
      nombres: "Carolina Lopez Acevedo"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "22/07/2024",
      placa: "MTX991",
      modelo: "2013",
      cedula: "8279456",
      nombres: "HERNANDO ANTONIO MONTOYA RIOS"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "26/03/2024",
      placa: "JYR941",
      modelo: "2022",
      cedula: "29659529",
      nombres: "ORTEGA BALLESTEROS CAROLINA"
  },
  {
      compañia: "SBS",
      finvigencia: "02/12/2024",
      placa: "EGW788",
      modelo: "2018",
      cedula: "3493941",
      nombres: "GIRALDO GALEANO, HERIBERTO DE JESUS"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/06/2024",
      placa: "GEK680",
      modelo: "2019",
      cedula: "39185724",
      nombres: "VELASQUEZ BOTERO,CAROLINA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "28/02/2023",
      placa: "KBR908",
      modelo: "2010",
      cedula: "1040737352",
      nombres: "BETANCUR MOLINA, CHRISTIAN ST"
  },
  {
      compañia: "PREVISORA",
      finvigencia: "21/01/2023",
      placa: "ISV191",
      modelo: "2016",
      cedula: "71677999",
      nombres: "JARAMILLO LONDO?O HERNAN DARIO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "12/12/2024",
      placa: "MOL613",
      modelo: "2008",
      cedula: "15258188",
      nombres: "CARLOS ALBERTO RAMIREZ RENDON"
  },
  {
      compañia: "ESTADO",
      finvigencia: "14/07/2024",
      placa: "FUS552",
      modelo: "2020",
      cedula: "98713415",
      nombres: "LUIS CARLOS HENAO VALENCIA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "24/02/2024",
      placa: "GXR124",
      modelo: "2020",
      cedula: "71648063",
      nombres: "ECHEVERRI VELASQUEZ MARTIN ALONSO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/10/2024",
      placa: "KHP909",
      modelo: "2011",
      cedula: "42883786",
      nombres: "BEATRIZ EDILMA CORREA LOPEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/09/2024",
      placa: "IOV186",
      modelo: "2016",
      cedula: "1037575808",
      nombres: "DIEGO ALEJANDRO GALLEGO MEJIA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "14/07/2022",
      placa: "IEU782",
      modelo: "2014",
      cedula: "43206518",
      nombres: "MEJIA ZULUAGA, MARCELA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "14/08/2023",
      placa: "FHH779",
      modelo: "2008",
      cedula: "1035859822",
      nombres: "MONTOYA PALACIO, SIMON"
  },
  {
      compañia: "SBS",
      finvigencia: "23/08/2024",
      placa: "IEW484",
      modelo: "2015",
      cedula: "1020461461",
      nombres: "PEREZ RIVERA, SANDRA MILENA"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "09/08/2024",
      placa: "KBR771",
      modelo: "2010",
      cedula: "1037644618",
      nombres: "ECHEVERRI PELAEZ ESTEFANIA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "12/12/2023",
      placa: "FSW889",
      modelo: "2019",
      cedula: "36695355",
      nombres: "RAMIREZ OLGA LUCIA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "14/07/2024",
      placa: "FSW704",
      modelo: "2019",
      cedula: "42748362",
      nombres: "MARIA TERESA GOMEZ ALZATE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "31/12/2023",
      placa: "EOT412",
      modelo: "2019",
      cedula: "70410048",
      nombres: "WILLIAM DE JESUS VARGAS RAMIREZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "26/07/2020",
      placa: "KAR082",
      modelo: "2013",
      cedula: "70952941",
      nombres: "JOSE EDGAR GOMEZ OSPINA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "04/08/2024",
      placa: "JLK402",
      modelo: "2020",
      cedula: "1151951460",
      nombres: "JUAN DIEGO OTALVARO TASCON"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "15/03/2023",
      placa: "IAY046",
      modelo: "2016",
      cedula: "1000409021",
      nombres: "SUSANA BOLIVAR VALENCIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "19/11/2024",
      placa: "GRQ361",
      modelo: "2020",
      cedula: "71211543",
      nombres: "MARULANDA GALVIS,OSCAR FELIPE"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "10/08/2024",
      placa: "HKN540",
      modelo: "2014",
      cedula: "43825294",
      nombres: "ERIKA MARIA CALDERON GRANADA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/11/2023",
      placa: "GRS527",
      modelo: "2020",
      cedula: "70080847",
      nombres: "MANUEL COGOLLO ALVAREZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/09/2024",
      placa: "FXR626",
      modelo: "2020",
      cedula: "43161930",
      nombres: "ASTRID YANETH VANEGAS ARROYAVE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "05/12/2024",
      placa: "GHX713",
      modelo: "2020",
      cedula: "98514146",
      nombres: "HUMBERTO NICOLAS BENJUMEA ESCOBAR"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "24/11/2024",
      placa: "IAV824",
      modelo: "2015",
      cedula: "1020479033",
      nombres: "JORGE HURTADO MOLINA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "02/07/2024",
      placa: "HNW921",
      modelo: "2014",
      cedula: "43785975",
      nombres: "GIRALDO GOMEZ, CLAUDIA PATRICIA"
  },
  {
      compañia: "SBS",
      finvigencia: "14/02/2023",
      placa: "FUP012",
      modelo: "2019",
      cedula: "71877999",
      nombres: "SANCHEZ MOLINA, JOHN JAIRO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "17/09/2024",
      placa: "HXX007",
      modelo: "2015",
      cedula: "1152212688",
      nombres: "SANTIAGO DURANGO M"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/08/2019",
      placa: "HGW068",
      modelo: "2014",
      cedula: "1037586236",
      nombres: "GARCIA MARIN ESTEBAN JESSUA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "25/09/2024",
      placa: "GIK716",
      modelo: "2021",
      cedula: "43757488",
      nombres: "CLAUDIA MARCELA GARCIA GONZALEZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "20/01/2025",
      placa: "MSU131",
      modelo: "2014",
      cedula: "1035867967",
      nombres: "CARDONA GARCIA, WILFRAN DALIER"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "30/03/2024",
      placa: "KHQ652",
      modelo: "2011",
      cedula: "1001479654",
      nombres: "ALVAREZ ROMAN, ANDRES"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/07/2024",
      placa: "INO653",
      modelo: "2016",
      cedula: "375371",
      nombres: "SOTO , JOSE JESUS"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "13/10/2024",
      placa: "ENY526",
      modelo: "2017",
      cedula: "1128269173",
      nombres: "MARIA ISABEL HENAO MARIN"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "28/11/2024",
      placa: "MIZ193",
      modelo: "2013",
      cedula: "15366038",
      nombres: "ECHEVERRY MARIN HEBERT"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/02/2024",
      placa: "EFW599",
      modelo: "2018",
      cedula: "43184550",
      nombres: "ELIZABETH PEREZ ESCOBAR"
  },
  {
      compañia: "SBS",
      finvigencia: "10/01/2025",
      placa: "EOM439",
      modelo: "2019",
      cedula: "43588319",
      nombres: "GRAVINI ANGULO, MILDRED CECILIA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "04/04/2024",
      placa: "ELM281",
      modelo: "2009",
      cedula: "1037649875",
      nombres: "VELEZ CARRASQUILLA, JULIANA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "01/09/2023",
      placa: "IYS030",
      modelo: "2017",
      cedula: "71080905",
      nombres: "PEREZ BURITICA LEONARDO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "30/11/2024",
      placa: "JST099",
      modelo: "2020",
      cedula: "15346179",
      nombres: "ACOSTA VELASQUEZ SERGIO HERNANDO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "07/04/2024",
      placa: "HGV076",
      modelo: "2014",
      cedula: "43471970",
      nombres: "LUZ MARINA CHICA TORO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "05/07/2023",
      placa: "USY395",
      modelo: "2016",
      cedula: "1017185455",
      nombres: "JEISSON ALEXANDER CASTAÑO HERRERA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "11/12/2024",
      placa: "MVR193",
      modelo: "2013",
      cedula: "1040746269",
      nombres: "DANY ANDREY RICO HENAO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/10/2024",
      placa: "GVK891",
      modelo: "2020",
      cedula: "43915150",
      nombres: "JOHANA MARCELA ARRUBLA MONTOYA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "13/02/2025",
      placa: "JJK052",
      modelo: "2018",
      cedula: "98567859",
      nombres: "DIEGO LONDO?O ARANGO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "03/01/2024",
      placa: "UDL721",
      modelo: "2015",
      cedula: "43254321",
      nombres: "MORALES ESCOBAR LUZ ALBANY"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "12/05/2024",
      placa: "DUS062",
      modelo: "2019",
      cedula: "79849616",
      nombres: "JARA MONTOYA, GABRIEL JAIME"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "27/12/2024",
      placa: "GWZ987",
      modelo: "2020",
      cedula: "32180832",
      nombres: "MARIA EUGENIA HINCAPIE ZAPATA"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "20/01/2025",
      placa: "HFN598",
      modelo: "2014",
      cedula: "10934169",
      nombres: "DAVILA RODRIGUEZ MANUEL FERNANDO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "25/09/2024",
      placa: "JOS869",
      modelo: "2021",
      cedula: "70082417",
      nombres: "JAIME ALONSO NORE?A ANGEL"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "15/06/2024",
      placa: "IAX581",
      modelo: "2015",
      cedula: "35850688",
      nombres: "CONCILIA RODRIGUEZ HURTADO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "01/12/2024",
      placa: "GWZ936",
      modelo: "2020",
      cedula: "43423804",
      nombres: "GLORIA PATRICIA NORE?A OCHOA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "17/05/2023",
      placa: "JPS938",
      modelo: "2020",
      cedula: "1017248698",
      nombres: "MARIA CAMILA SEPULVEDA RUIZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "03/06/2024",
      placa: "HKR212",
      modelo: "2014",
      cedula: "52399763",
      nombres: "ALINA MARIA HENAO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "31/12/2021",
      placa: "IYU914",
      modelo: "2016",
      cedula: "43639832",
      nombres: "URIBE GALEANO, LUCIDIA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "24/02/2024",
      placa: "JOM903",
      modelo: "2020",
      cedula: "1040326860",
      nombres: "JORGE LUIS PEREZ SIERRA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "13/05/2023",
      placa: "HZL100",
      modelo: "2015",
      cedula: "1152214649",
      nombres: "ROLDAN CLAROS,MARIANA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/07/2024",
      placa: "JSU220",
      modelo: "2021",
      cedula: "1066524379",
      nombres: "KATY ANA PEREZ MESTRA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "25/09/2024",
      placa: "FSX183",
      modelo: "2019",
      cedula: "9007921143",
      nombres: "CONFORT RENT A CAR SAS"
  },
  {
      compañia: "SBS",
      finvigencia: "12/07/2023",
      placa: "KGW342",
      modelo: "2011",
      cedula: "70900437",
      nombres: "SERNA VILLEGAS, JOAQUIN EMILIO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/07/2024",
      placa: "FSW621",
      modelo: "2019",
      cedula: "32240150",
      nombres: "LINA MARCELA MESA RIVERA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "14/09/2022",
      placa: "EOX893",
      modelo: "2019",
      cedula: "3383385",
      nombres: "CASTRILLON LOPERA, RICARDO ADO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "18/07/2024",
      placa: "JKO364",
      modelo: "2017",
      cedula: "43273735",
      nombres: "NIDIA LILIANA URREA ARISTIZABAL"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "09/08/2024",
      placa: "HGZ112",
      modelo: "2014",
      cedula: "21934113",
      nombres: "JARAMILLO MONSALVE MARIA, ESTELA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "30/11/2024",
      placa: "KHF223",
      modelo: "2011",
      cedula: "71383047",
      nombres: "JAIR ANTONIO CUARTAS SOSSA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "14/07/2024",
      placa: "DLX115",
      modelo: "2012",
      cedula: "1037595971",
      nombres: "ESTEBAN TOBON GUTIERREZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "30/10/2024",
      placa: "IOR446",
      modelo: "2016",
      cedula: "8105809",
      nombres: "URIBE CARMONA,DANIEL ARCADIO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "15/12/2024",
      placa: "DFY689",
      modelo: "2019",
      cedula: "1065660646",
      nombres: "ECHEVERRY CASTA?O YULIANA ANDREA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "15/08/2023",
      placa: "USU068",
      modelo: "2016",
      cedula: "1020403992",
      nombres: "PEÑA PULGARIN, LUISA FERNANDA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "22/09/2020",
      placa: "HAO370",
      modelo: "2015",
      cedula: "15450990",
      nombres: "ADRIAN YESID ALZATE ALVAREZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/07/2024",
      placa: "HAL537",
      modelo: "2014",
      cedula: "71334467",
      nombres: "LOPERA DUQUE JUAN GABRIEL, ."
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "03/01/2025",
      placa: "JHS792",
      modelo: "2018",
      cedula: "1039450056",
      nombres: "ESPINOSA ARTEAGA ISABEL CRISTINA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/07/2024",
      placa: "EFU544",
      modelo: "2017",
      cedula: "71729403",
      nombres: "CAMILO ANDRES MEJIA BRAVO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "16/12/2024",
      placa: "GEM585",
      modelo: "2019",
      cedula: "85466665",
      nombres: "FREDDY LEANDRO CASTILLO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "15/07/2024",
      placa: "MXY710",
      modelo: "2014",
      cedula: "1035877241",
      nombres: "CAMILA SANCHEZ GONZALEZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "19/09/2023",
      placa: "JSU520",
      modelo: "2021",
      cedula: "79937578",
      nombres: "ABADIO GREEN STOCEL"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "29/12/2024",
      placa: "KHS394",
      modelo: "2012",
      cedula: "71655957",
      nombres: "JOHN JAIRO MARTINEZ CASTAQO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "24/10/2023",
      placa: "JPV313",
      modelo: "2020",
      cedula: "98669547",
      nombres: "SALDARRIAGA JARAMILLO GUILLERMO LEON"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "18/01/2023",
      placa: "HYW298",
      modelo: "2018",
      cedula: "10031909",
      nombres: "SANTACOLOMA RESTREPO, MAURICIO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "28/11/2018",
      placa: "MJK136",
      modelo: "2013",
      cedula: "1042762167",
      nombres: "CORREA ZULUAGA LEIDY ZULUAGA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "15/07/2024",
      placa: "MIO344",
      modelo: "2013",
      cedula: "43278593",
      nombres: "RESTREPO JIMENEZ, LAURA CATALI"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "01/08/2024",
      placa: "DSY102",
      modelo: "2017",
      cedula: "52261628",
      nombres: "MATEUS ARIZA ADRIANA ROCIO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "26/12/2024",
      placa: "GES076",
      modelo: "2019",
      cedula: "98546182",
      nombres: "JUAN DARIO GONZALEZ MONTOYA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "15/07/2024",
      placa: "EPQ369",
      modelo: "2016",
      cedula: "21991071",
      nombres: "POSADA OSPINA JAFIZA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "22/09/2021",
      placa: "HGW213",
      modelo: "2014",
      cedula: "98555926",
      nombres: "CASTRILLON VALDES OSCAR DARIO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "22/07/2024",
      placa: "JCN052",
      modelo: "2016",
      cedula: "8355354",
      nombres: "MANUEL MESA RESTREPO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "01/08/2024",
      placa: "DIL776",
      modelo: "2012",
      cedula: "71744613",
      nombres: "TORO TOBON CARLOS IGNACIO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/12/2024",
      placa: "JPW502",
      modelo: "2021",
      cedula: "43587041",
      nombres: "OLGA CECILIA VELASQUEZ ARBOLEDA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "28/04/2022",
      placa: "HGZ489",
      modelo: "2014",
      cedula: "43495656",
      nombres: "ADRIANA MARIA RENDON ARCILA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "09/02/2025",
      placa: "HYL981",
      modelo: "2014",
      cedula: "1128264222",
      nombres: "HERRERA MARQUEZ LAURA CRISTINA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "01/10/2023",
      placa: "HYR932",
      modelo: "2016",
      cedula: "32258643",
      nombres: "ARROYAVE RAMOS, ANDREA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "15/07/2022",
      placa: "HPL124",
      modelo: "2014",
      cedula: "1094893955",
      nombres: "CONSTANZA BOHORQUEZ OROZCO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "15/07/2024",
      placa: "IAQ430",
      modelo: "2015",
      cedula: "43258434",
      nombres: "GIRALDO SALAZAR LUISA FERNANDA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "28/07/2024",
      placa: "JOP962",
      modelo: "2021",
      cedula: "43746475",
      nombres: "NATALIA JIMENEZ CADAVID"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "15/03/2019",
      placa: "FCW980",
      modelo: "2007",
      cedula: "43201047",
      nombres: "ANA MARIA GOMEZ ZAPATA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "28/01/2025",
      placa: "EIK364",
      modelo: "2018",
      cedula: "42770849",
      nombres: "BERENICE DE JESUS MORENO LONDO?O"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "14/07/2018",
      placa: "KAR921",
      modelo: "2014",
      cedula: "71647062",
      nombres: "VELASQUEZ PELAEZ JHON JAIRO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "06/03/2023",
      placa: "JHV434",
      modelo: "2019",
      cedula: "1118838255",
      nombres: "KEVIN DE JESUS ARRIETA CASTRO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "15/07/2024",
      placa: "BXR178",
      modelo: "2011",
      cedula: "43561519",
      nombres: "ELIZABETH SALAZAR HERRERA"
  },
  {
      compañia: "PREVISORA",
      finvigencia: "30/10/2024",
      placa: "IYR782",
      modelo: "2017",
      cedula: "1037590014",
      nombres: "JARAMILLO GUTIERREZ DANIEL"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "21/02/2023",
      placa: "DFT179",
      modelo: "2012",
      cedula: "70031632",
      nombres: "NELSON SIERRA ALVAREZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "03/08/2024",
      placa: "IDW909",
      modelo: "2014",
      cedula: "1037604310",
      nombres: "ALEJANDRO RUEDA DUARTE"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "07/06/2024",
      placa: "JZO151",
      modelo: "2021",
      cedula: "70191670",
      nombres: "JUAN BERNARDO LOPERA ROLDAN"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "HEY195",
      modelo: "2013",
      cedula: "42683009",
      nombres: "GLORIA STELLA VELASQUEZ JIMENEZ"
  },
  {
      compañia: "ESTADO",
      finvigencia: "28/01/2022",
      placa: "HHK222",
      modelo: "2014",
      cedula: "1193081997",
      nombres: "JULIAN ESTEBAN ZULUAGA MEDINA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "11/04/2024",
      placa: "FSY581",
      modelo: "2019",
      cedula: "43404124",
      nombres: "ZULUAGA GOMEZ, LUZ DARY"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "28/02/2025",
      placa: "JYZ733",
      modelo: "2021",
      cedula: "43615086",
      nombres: "ZAPATA GALLEGO MARCELA MARIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "09/02/2025",
      placa: "EIK888",
      modelo: "2018",
      cedula: "1020428375",
      nombres: "GARCIA , ANA ISABEL"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "26/09/2024",
      placa: "JKO285",
      modelo: "2017",
      cedula: "1005814395",
      nombres: "DEL RIO FLOREZ NATALIA FLOREZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "17/08/2024",
      placa: "EGX187",
      modelo: "2018",
      cedula: "39178365",
      nombres: "MEJIA PALACIO ALEJANDRA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "15/07/2024",
      placa: "FCS246",
      modelo: "2007",
      cedula: "8291823",
      nombres: "LOPEZ BUSTAMANTE GUSTAVO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "12/03/2018",
      placa: "HPL800",
      modelo: "2014",
      cedula: "79944094",
      nombres: "ALZATE ECHEVERRI JUAN DAVID"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "30/11/2024",
      placa: "UDT574",
      modelo: "2016",
      cedula: "1128270492",
      nombres: "CARLOS ALBERTO MEDINA GUTIERRE"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "25/07/2024",
      placa: "JHN770",
      modelo: "2020",
      cedula: "43903185",
      nombres: "VANEGAS CASTA?EDA SANDRA MILENA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "14/07/2024",
      placa: "DHV327",
      modelo: "2011",
      cedula: "1007433399",
      nombres: "DANA CAMILA JARAMILLO CORREA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "02/05/2024",
      placa: "JIY772",
      modelo: "2017",
      cedula: "43222355",
      nombres: "GARCIA ARANGO, MAIRA ALEJANDRA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "01/12/2022",
      placa: "FQT535",
      modelo: "2019",
      cedula: "43875701",
      nombres: "MARY JARAMILLO LUZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "12/08/2024",
      placa: "GEX744",
      modelo: "2020",
      cedula: "32443562",
      nombres: "ZULETA DE ARIAS, CECILIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "12/07/2024",
      placa: "HEZ251",
      modelo: "2014",
      cedula: "71001484",
      nombres: "ZULUAGA QUINTERO,JOSE LUIS"
  },
  {
      compañia: "SBS",
      finvigencia: "14/09/2024",
      placa: "BXR598",
      modelo: "2011",
      cedula: "71361594",
      nombres: "Cano ga?an, Gustavo Adolfo"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "15/07/2024",
      placa: "RMZ593",
      modelo: "2012",
      cedula: "65781446",
      nombres: "ARCILA MONTOYA NATALIA ANDREA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "16/12/2021",
      placa: "UDQ360",
      modelo: "2018",
      cedula: "41444948",
      nombres: "ELVIRA REYES FLORES"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "09/08/2024",
      placa: "GEN646",
      modelo: "2020",
      cedula: "1037593499",
      nombres: "LOTERO OCHOA,TATIANA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/02/2022",
      placa: "USU146",
      modelo: "2016",
      cedula: "32299564",
      nombres: "ELIZABETH YEPES MEJIA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "15/07/2022",
      placa: "KGW148",
      modelo: "2011",
      cedula: "80028320",
      nombres: "JIMMY JAVIER VASQUEZ RUBIO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/09/2019",
      placa: "HPL983",
      modelo: "2014",
      cedula: "53002349",
      nombres: "LYDA GISSELLE LUGO ACERO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "01/09/2024",
      placa: "GEZ747",
      modelo: "2020",
      cedula: "43621778",
      nombres: "SANDRA MILENA GARCIA ECHEVERRI"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "18/09/2024",
      placa: "HEY734",
      modelo: "2013",
      cedula: "38243677",
      nombres: "REYES ARIZA, AURORA CONSUELO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "09/11/2024",
      placa: "IHL328",
      modelo: "2017",
      cedula: "43559555",
      nombres: "RAMIREZ ANA LUCIA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/10/2024",
      placa: "ENY320",
      modelo: "2018",
      cedula: "1017166229",
      nombres: "KATHERIN ARANGO ALZATE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/12/2020",
      placa: "IYO701",
      modelo: "2016",
      cedula: "71395107",
      nombres: "EDWIN DE JESUS HERRERA PALACIO"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "05/12/2024",
      placa: "INR687",
      modelo: "2016",
      cedula: "32563733",
      nombres: "PEREZ LOPERA VIVIANA MARIA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "18/07/2024",
      placa: "GEW592",
      modelo: "2020",
      cedula: "98542643",
      nombres: "GARCIA ORTIZ JORGE IGNACIO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "01/08/2024",
      placa: "KKK944",
      modelo: "2012",
      cedula: "1037641215",
      nombres: "JUAN CAMILO VELEZ CORREA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "16/07/2024",
      placa: "EOW119",
      modelo: "2018",
      cedula: "43838407",
      nombres: "LUZ MARIELLY MEDINA GOMEZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "29/12/2023",
      placa: "IYO318",
      modelo: "2016",
      cedula: "43619643",
      nombres: "V?SQUEZ LUZ MAR?A"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "02/09/2024",
      placa: "FIS433",
      modelo: "2019",
      cedula: "1037593806",
      nombres: "ECHEVERRY GOMEZ, DAVID"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/05/2024",
      placa: "JBP109",
      modelo: "2017",
      cedula: "1040181951",
      nombres: "ANDRES GOMEZ ORREGO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "23/03/2024",
      placa: "JCP421",
      modelo: "2017",
      cedula: "98671455",
      nombres: "PEREZ DE LA CRUZ GABRIEL ESTEBAN"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "03/12/2024",
      placa: "JPW623",
      modelo: "2021",
      cedula: "1036615429",
      nombres: "NARI?O RESTREPO ANDREA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "07/05/2022",
      placa: "DHV401",
      modelo: "2012",
      cedula: "1017173747",
      nombres: "SANDRA CRISTINA OROZCO MUÑOZ"
  },
  {
      compañia: "ESTADO",
      finvigencia: "16/07/2023",
      placa: "INR328",
      modelo: "2016",
      cedula: "1042061359",
      nombres: "RICARDO QUINTANA PEREZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "17/02/2022",
      placa: "GPX711",
      modelo: "2020",
      cedula: "79843515",
      nombres: "AREVALO JIMENEZ JOSE RODRIGO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "28/01/2025",
      placa: "JSU924",
      modelo: "2020",
      cedula: "37947274",
      nombres: "PE?A CALA DANNY LUZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "24/08/2024",
      placa: "DJP593",
      modelo: "2012",
      cedula: "42889039",
      nombres: "MURILLO OCHOA, CLAUDIA PATRICIA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "21/04/2024",
      placa: "JQT507",
      modelo: "2021",
      cedula: "52090172",
      nombres: "CARMEN CECILIA SANTAMARIA CASTIBLANCO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "05/07/2024",
      placa: "DSX527",
      modelo: "2018",
      cedula: "1017136497",
      nombres: "OCHOA OSORIO,SANDRA KATERINE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "15/05/2023",
      placa: "GHX559",
      modelo: "2021",
      cedula: "43984224",
      nombres: "KELLY JOHANA VARON MOSQUERA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/10/2024",
      placa: "KJA923",
      modelo: "2011",
      cedula: "32229450",
      nombres: "LUZ ADRIANA PEREZ SIERRA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "30/06/2024",
      placa: "IHP554",
      modelo: "2016",
      cedula: "43560852",
      nombres: "SANDRA VALLEJO VALLEJO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/09/2024",
      placa: "JCP798",
      modelo: "2017",
      cedula: "43876975",
      nombres: "TATIANA RICHTER ARBOLEDA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "13/09/2024",
      placa: "ISU278",
      modelo: "2017",
      cedula: "1035971949",
      nombres: "PENAGOS RESTREPO DANIEL"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "28/12/2024",
      placa: "JHU836",
      modelo: "2018",
      cedula: "32552781",
      nombres: "MARIA ROSALBA VELASQUEZ ARROYAVE"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "09/06/2024",
      placa: "IUC905",
      modelo: "2016",
      cedula: "32140445",
      nombres: "ALVAREZ ATEHORTUA, LILIANA MARCELA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "27/05/2023",
      placa: "GEM672",
      modelo: "2020",
      cedula: "43287141",
      nombres: "LUZ ELIANA HENAO RODRIGUEZ"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "28/01/2025",
      placa: "FUM265",
      modelo: "2019",
      cedula: "1090460387",
      nombres: "KELYN YULIANA MANDON QUINTERO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "JIU996",
      modelo: "2017",
      cedula: "7524440",
      nombres: "OSCAR HERNANDO ARISTIZABAL FRANCO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "11/12/2024",
      placa: "JSS382",
      modelo: "2019",
      cedula: "43202223",
      nombres: "ANA MILENA ANA MILENA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "20/07/2024",
      placa: "JIW318",
      modelo: "2017",
      cedula: "1037578115",
      nombres: "NATALI PAULINA HERRERA YEPES"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "16/07/2024",
      placa: "MNL617",
      modelo: "2007",
      cedula: "15442344",
      nombres: "LUIS FERNANDO GARZON OSPINA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "26/01/2023",
      placa: "JHT678",
      modelo: "2018",
      cedula: "1128408289",
      nombres: "GUTIERREZ GARCIA, JULIETH"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "27/12/2024",
      placa: "EFY895",
      modelo: "2017",
      cedula: "71694516",
      nombres: "Jesus Alirio Zapata Tuberquia"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/12/2023",
      placa: "MTY458",
      modelo: "2012",
      cedula: "71739923",
      nombres: "LOPEZ CIRO, JUAN CARLOS"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "17/02/2024",
      placa: "JSV694",
      modelo: "2021",
      cedula: "1128449087",
      nombres: "JHONATAN QUINTERO ZULUAGA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "02/11/2022",
      placa: "JKQ554",
      modelo: "2018",
      cedula: "1000535985",
      nombres: "GUZMAN OSORIO CAROLINA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "16/07/2022",
      placa: "ICZ746",
      modelo: "2015",
      cedula: "71005843",
      nombres: "CARLOS DAVID GIRALDO ZULUAGA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "05/03/2021",
      placa: "FKM453",
      modelo: "2022",
      cedula: "1120558613",
      nombres: "ARANGO VASQUEZ MARIA DOLFY"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "15/12/2024",
      placa: "KAP711",
      modelo: "2012",
      cedula: "1037647700",
      nombres: "JUAN PABLO JARAMILLO OCAMPO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "18/07/2024",
      placa: "FXR696",
      modelo: "2020",
      cedula: "98542643",
      nombres: "GARCIA ORTIZ JORGE IGNACIO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "16/07/2023",
      placa: "KHR917",
      modelo: "2012",
      cedula: "38795856",
      nombres: "MARIA NANCY GIRALDO GIRALDO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "16/07/2022",
      placa: "HFM523",
      modelo: "2014",
      cedula: "43688582",
      nombres: "EUCARIS HERNANDEZ LOPEZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "30/10/2024",
      placa: "GEM805",
      modelo: "2022",
      cedula: "1152456878",
      nombres: "SUAREZ LOPERA NATALIA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "07/03/2024",
      placa: "IAW311",
      modelo: "2015",
      cedula: "1042764261",
      nombres: "VIVIANA MARCELA CARMONA CARDON"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "13/06/2024",
      placa: "JPW800",
      modelo: "2021",
      cedula: "1037660237",
      nombres: "JIMENEZ LOPEZ, PAOLA ANDREA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "22/10/2024",
      placa: "HYW235",
      modelo: "2018",
      cedula: "43402291",
      nombres: "MARIA ELSY BOTERO RAMIREZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/11/2024",
      placa: "FQW132",
      modelo: "2019",
      cedula: "91513925",
      nombres: "NELSON MARTINEZ TOVAR"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "25/02/2023",
      placa: "EOW782",
      modelo: "2019",
      cedula: "1152439324",
      nombres: "STEFANIA GARCIA ECHEVERRI"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "17/10/2024",
      placa: "ISV763",
      modelo: "2017",
      cedula: "7707731",
      nombres: "CESAR GERMAN CASTA?EDA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "04/07/2021",
      placa: "GEM529",
      modelo: "2020",
      cedula: "1017225846",
      nombres: "YURI GINED HENAO DIAZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "28/01/2023",
      placa: "KMS039",
      modelo: "2012",
      cedula: "51633514",
      nombres: "BAUTISTA YANETH"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/10/2024",
      placa: "MOV064",
      modelo: "2010",
      cedula: "15522853",
      nombres: "CARLOS MARIO LONDOÑO PIEDRAHITA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "18/03/2024",
      placa: "JHV028",
      modelo: "2018",
      cedula: "43615927",
      nombres: "ISABEL CRISTINA ALZATE VELEZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "03/12/2024",
      placa: "LAX313",
      modelo: "2018",
      cedula: "32540123",
      nombres: "GUDIELA DE JESUS ECHAVARRIA HI"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "24/02/2024",
      placa: "INO867",
      modelo: "2016",
      cedula: "1040732607",
      nombres: "AZUCENA TEQUIA REY"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "09/08/2023",
      placa: "HXU726",
      modelo: "2015",
      cedula: "1036934995",
      nombres: "GLORIA OMAIRA MU?ETON LOPEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/01/2023",
      placa: "IWQ921",
      modelo: "2016",
      cedula: "71276603",
      nombres: "HUGO ALEJANDRO GOMEZ GARCIA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "02/08/2024",
      placa: "JCN760",
      modelo: "2017",
      cedula: "1020476662",
      nombres: "ELY EDUARDO PARRA DUARTE"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "03/12/2024",
      placa: "MFY863",
      modelo: "2013",
      cedula: "1152434864",
      nombres: "GOMEZ ZAPATA JHOANA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "04/01/2024",
      placa: "MOS509",
      modelo: "2009",
      cedula: "1128277825",
      nombres: "MONTOYA TOBON, MELISSA"
  },
  {
      compañia: "ZURICH-QBE",
      finvigencia: "31/08/2024",
      placa: "LAW380",
      modelo: "2015",
      cedula: "8408557",
      nombres: "Luis Carlos Pineda Jimenez"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "17/07/2024",
      placa: "GIR424",
      modelo: "2019",
      cedula: "42878967",
      nombres: "MARIA TERESARUEDA NOBMANN"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "28/11/2024",
      placa: "IOV915",
      modelo: "2016",
      cedula: "43921950",
      nombres: "ALZATE TOBON PAULA ANDREA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "28/12/2024",
      placa: "JSV061",
      modelo: "2022",
      cedula: "8126979",
      nombres: "SANTIAGO ANDRES GOMEZ BERMUDEZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "20/07/2024",
      placa: "HYQ723",
      modelo: "2015",
      cedula: "70101611",
      nombres: "CARLOS ANTONIO ARBOLEDA CARDONA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "23/03/2023",
      placa: "CLQ170",
      modelo: "2002",
      cedula: "70975665",
      nombres: "HUGO DE JESUS PINEDA SIERRA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "28/01/2023",
      placa: "MOX953",
      modelo: "2011",
      cedula: "98638619",
      nombres: "DAVID VITALE BETANCUR"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "15/06/2023",
      placa: "DEU366",
      modelo: "2011",
      cedula: "1035437186",
      nombres: "ANDRES FELIPE QUINTERO ZABALETA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "18/03/2024",
      placa: "FBQ105",
      modelo: "2005",
      cedula: "71605478",
      nombres: "HECTOR HERNANDO VALENCIA ECHEVERRY"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/10/2024",
      placa: "EHZ089",
      modelo: "2018",
      cedula: "15333967",
      nombres: "EDGAR ANTONIO VILLADA OSPINA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "25/01/2023",
      placa: "HKU453",
      modelo: "2014",
      cedula: "50931487",
      nombres: "Elinda Josefa Bruges Gonzalez"
  },
  {
      compañia: "SBS",
      finvigencia: "17/07/2024",
      placa: "GRM472",
      modelo: "2019",
      cedula: "32255343",
      nombres: "CATA?O GOMEZ, SANDRA PATRICIA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "17/07/2024",
      placa: "MIM011",
      modelo: "2015",
      cedula: "1037606503",
      nombres: "TATIANA ISAZA LOPERA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "17/07/2024",
      placa: "IYU374",
      modelo: "2017",
      cedula: "98557151",
      nombres: "ALEXANDER MARIO AGUDELO ALARCO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "29/01/2024",
      placa: "MVW072",
      modelo: "2014",
      cedula: "80876319",
      nombres: "LUIS ALBERTO SUAREZ SEGURA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/07/2024",
      placa: "JZP048",
      modelo: "2021",
      cedula: "43820540",
      nombres: "GONZALEZ MEJIA, CLAUDIA MABEL"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "01/03/2024",
      placa: "KBX151",
      modelo: "2010",
      cedula: "8400924",
      nombres: "HENAO ACOSTA RUBEN DARIO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "27/04/2024",
      placa: "KHJ766",
      modelo: "2011",
      cedula: "71451419",
      nombres: "JOSE NUBIER PELAEZ DIOSA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "01/03/2023",
      placa: "GJW702",
      modelo: "2020",
      cedula: "71719119",
      nombres: "JUAN FELIPE RUIZ RUIZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "11/08/2023",
      placa: "GIK487",
      modelo: "2021",
      cedula: "71364393",
      nombres: "WEIMAR DE JESUS VILLADA ALZATE"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/07/2024",
      placa: "GEL997",
      modelo: "2019",
      cedula: "1152222102",
      nombres: "MANUELA , BERMUDEZ ALVAREZ"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "18/01/2024",
      placa: "DTX434",
      modelo: "2018",
      cedula: "12695837",
      nombres: "MARTINEZ PEÑALOZA, GUSTAVO ADO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "23/10/2024",
      placa: "JOT710",
      modelo: "2021",
      cedula: "901446388",
      nombres: "DELTA 10 INGENIEROS"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "27/12/2024",
      placa: "DFS405",
      modelo: "2012",
      cedula: "21357324",
      nombres: "ARANGO VELEZ SUSANA RUTH"
  },
  {
      compañia: "SBS",
      finvigencia: "18/07/2024",
      placa: "UDZ189",
      modelo: "2015",
      cedula: "32184485",
      nombres: "MONROY ORJUELA, JENNIFER"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "03/12/2024",
      placa: "GWU916",
      modelo: "2020",
      cedula: "14972718",
      nombres: "MARIN ARIAS RIGOBERTO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "25/09/2023",
      placa: "HGY650",
      modelo: "2014",
      cedula: "42889582",
      nombres: "CLAUDIA LUCIA ARISTIZABAL RESTREPO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "18/08/2023",
      placa: "HXV431",
      modelo: "2014",
      cedula: "8397971",
      nombres: "ARBOLEDA RESTREPO, LISANDRO"
  },
  {
      compañia: "SBS",
      finvigencia: "18/07/2024",
      placa: "BXR800",
      modelo: "2011",
      cedula: "71262314",
      nombres: "SIERRA LOPEZ, JUAN FERNANDO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "15/04/2024",
      placa: "DSY134",
      modelo: "2018",
      cedula: "43190105",
      nombres: "RAMIREZ ZAPATA, ERIKA MARCELA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "02/06/2024",
      placa: "KHP406",
      modelo: "2011",
      cedula: "70785756",
      nombres: "LUIS GUILLERMO GONZALEZ PALACIO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "18/07/2022",
      placa: "UUU552",
      modelo: "2015",
      cedula: "51775431",
      nombres: "SANCHEZ ANDRADE MARLIA EDDY"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "28/10/2021",
      placa: "FXN513",
      modelo: "2019",
      cedula: "43257966",
      nombres: "HERRERA CARRASQUILLA, JENNY MA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/10/2023",
      placa: "HSR599",
      modelo: "2014",
      cedula: "901564797",
      nombres: "CRIADERO VILLA ANTONIA S.A.S"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "29/06/2023",
      placa: "DLY954",
      modelo: "2012",
      cedula: "1152443585",
      nombres: "ANDRES GOMEZ LOPERA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "28/07/2024",
      placa: "GEN035",
      modelo: "2019",
      cedula: "71364716",
      nombres: "JOHAN DAVID ZULUAGA RUA"
  },
  {
      compañia: "SBS",
      finvigencia: "18/07/2022",
      placa: "RGZ365",
      modelo: "2011",
      cedula: "24336327",
      nombres: "CEBALLOS DUQUE, YINA ANDREA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "18/07/2022",
      placa: "FJR308",
      modelo: "2019",
      cedula: "1118297496",
      nombres: "DAYHAN GERALDYNN ZAMBRANO GRANADA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "27/12/2024",
      placa: "DJP460",
      modelo: "2013",
      cedula: "70289899",
      nombres: "ALBEIRO ANTONIO GALLEGO MARIN"
  },
  {
      compañia: "SBS",
      finvigencia: "18/07/2024",
      placa: "MJK992",
      modelo: "2012",
      cedula: "43070739",
      nombres: "OROZCO QUINTERO, LUZ DARY"
  },
  {
      compañia: "ESTADO",
      finvigencia: "19/07/2023",
      placa: "GEP989",
      modelo: "2020",
      cedula: "70558330",
      nombres: "JORGE ESTEBAN POSADA DUQUE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/10/2024",
      placa: "FIT013",
      modelo: "2020",
      cedula: "1152193215",
      nombres: "RUBEN DARIO GARCIA MARTINEZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "02/08/2024",
      placa: "IML760",
      modelo: "2015",
      cedula: "41792604",
      nombres: "MATEUS GONZALEZ, MIRYAM"
  },
  {
      compañia: "ESTADO",
      finvigencia: "19/07/2023",
      placa: "HZM624",
      modelo: "2014",
      cedula: "1017145132",
      nombres: "MAYCKOLL ALEXANDER ARTEAGA ZULUAGA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "19/07/2023",
      placa: "NBY144",
      modelo: "2013",
      cedula: "1037263611",
      nombres: "YANCEY ANTONIO GIRALDO MAZO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "01/12/2024",
      placa: "JQS847",
      modelo: "2021",
      cedula: "98529428",
      nombres: "SANCHEZ CASTAEDA ROLANDOANTONIO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "19/07/2024",
      placa: "HYU185",
      modelo: "2018",
      cedula: "42793949",
      nombres: "SONIA LUZ JARAMILLO RIOS"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "03/06/2024",
      placa: "MUR175",
      modelo: "2015",
      cedula: "30322620",
      nombres: "ADRIANA MARIA REDONDO ALVARADO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "25/02/2022",
      placa: "DJL863",
      modelo: "2012",
      cedula: "1214735826",
      nombres: "Daniel Lotero Gomez"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/12/2022",
      placa: "JCZ315",
      modelo: "2017",
      cedula: "43459474",
      nombres: "MARIN SANCHEZ,ANA CECILIA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "19/07/2024",
      placa: "EOX877",
      modelo: "2019",
      cedula: "43512741",
      nombres: "PATRICIA ARROYAVE NAGLES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/02/2024",
      placa: "BXP971",
      modelo: "2011",
      cedula: "98492274",
      nombres: "FRANCISCO LUIS MORALES JARAMILLO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "08/03/2024",
      placa: "JYR282",
      modelo: "2021",
      cedula: "1039454161",
      nombres: "Juan Diego Piedrahita Perez"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/05/2024",
      placa: "JBL280",
      modelo: "2017",
      cedula: "6893999",
      nombres: "EDER IGNACIO BURGOS SALGADO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/03/2024",
      placa: "INN239",
      modelo: "2016",
      cedula: "71760874",
      nombres: "PATI?O JARAMILLO,ALEXANDER"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "MCX212",
      modelo: "2013",
      cedula: "39314267",
      nombres: "EVIS JOHANA PACHECO BUENDIA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "22/07/2024",
      placa: "USY412",
      modelo: "2016",
      cedula: "71005269",
      nombres: "Wilfer Alfredo Hincapie Morales"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "08/08/2024",
      placa: "GRO261",
      modelo: "2019",
      cedula: "12722447",
      nombres: "FRAGOZO CAMPO, JUAN DE DIOS"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "04/02/2024",
      placa: "FOP388",
      modelo: "2018",
      cedula: "57436177",
      nombres: "ISSA FONTALVO CLAUDIA MARIA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "19/07/2022",
      placa: "JPS442",
      modelo: "2020",
      cedula: "42774468",
      nombres: "MARIA ADELINA ZAPATA PEREZ"
  },
  {
      compañia: "MUNDIAL",
      finvigencia: "02/01/2024",
      placa: "IWT781",
      modelo: "2016",
      cedula: "1037574194",
      nombres: "NATALIA OSORIO GALLEGO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/02/2024",
      placa: "GVM718",
      modelo: "2020",
      cedula: "1035431023",
      nombres: "SANTIAGO RESTREPO GOMEZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "09/05/2024",
      placa: "EOW975",
      modelo: "2019",
      cedula: "71777536",
      nombres: "JAIME HUMBERTO VARELA LONDO?O"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/07/2022",
      placa: "DSX880",
      modelo: "2017",
      cedula: "43597297",
      nombres: "LUZ NANCY SALAZAR VASQUEZ"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "30/09/2024",
      placa: "GEY546",
      modelo: "2020",
      cedula: "32319242",
      nombres: "ALZATE DE GARZON CELMIRA DEL SOCORRO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/12/2018",
      placa: "KES198",
      modelo: "2013",
      cedula: "43986795",
      nombres: "IVONNE PATRICIA ROJAS OSORIO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "23/08/2024",
      placa: "JGO747",
      modelo: "2017",
      cedula: "1014239904",
      nombres: "AGUILERA AMAYA, ANA EMILCE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/02/2024",
      placa: "INQ546",
      modelo: "2016",
      cedula: "3347786",
      nombres: "LUIS JAVIER GIRALDO ARISTIZABAL"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "23/06/2024",
      placa: "IYU505",
      modelo: "2017",
      cedula: "43118454",
      nombres: "SALAS GUISAO, LUZ DIANA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "01/12/2024",
      placa: "FUN395",
      modelo: "2019",
      cedula: "1128427453",
      nombres: "JOHN ALEJANDRO MARQUEZ NARANJO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "19/11/2022",
      placa: "KJA354",
      modelo: "2012",
      cedula: "3507463",
      nombres: "GONZALEZ JARAMILLO EDGAR ANDRES"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "22/09/2022",
      placa: "IHT235",
      modelo: "2016",
      cedula: "22200856",
      nombres: "GAVIRIA GARCIA OLIVIA DE JESUS"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "04/03/2023",
      placa: "KBT963",
      modelo: "2011",
      cedula: "43712758",
      nombres: "CLAUDIA PATRICIA SOTO ARROYAVE"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "12/04/2024",
      placa: "JBN804",
      modelo: "2017",
      cedula: "75104038",
      nombres: "TRUJILLO SAENZ, CAMILO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "26/02/2024",
      placa: "EON398",
      modelo: "2020",
      cedula: "43114906",
      nombres: "Veronica Garzon Angel"
  },
  {
      compañia: "MUNDIAL",
      finvigencia: "25/08/2024",
      placa: "HNZ805",
      modelo: "2014",
      cedula: "43404366",
      nombres: "BERTA LIGIA ARISTIZABAL MORALES"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "29/02/2024",
      placa: "FXP630",
      modelo: "2019",
      cedula: "1039455927",
      nombres: "ESPINAL PEREZ ISABEL CRISTINA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "20/07/2024",
      placa: "UST617",
      modelo: "2016",
      cedula: "1017145521",
      nombres: "NATALIA ANDREA LOZADA TAMAYO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "15/10/2024",
      placa: "MSS929",
      modelo: "2013",
      cedula: "1020416245",
      nombres: "LUISA FERNANDA URIBE BUSTAMANTE"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "20/08/2023",
      placa: "HZM297",
      modelo: "2015",
      cedula: "1152440882",
      nombres: "URIBE GARCIA, ERIKA"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "30/06/2024",
      placa: "DRQ205",
      modelo: "2018",
      cedula: "1128268606",
      nombres: "CHAVARRIA ZULETA DIEGO ALEJANDRO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "31/10/2023",
      placa: "HGY414",
      modelo: "2014",
      cedula: "75088015",
      nombres: "Ivan Dar?o Boh?rquez Idarraga"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "27/03/2024",
      placa: "KMM914",
      modelo: "2016",
      cedula: "8359892",
      nombres: "VARGAS GARCIA, HAROL ANDRES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/05/2024",
      placa: "HXV666",
      modelo: "2017",
      cedula: "71383100",
      nombres: "JORGE HERNAN CASTAÑEDA ACEVEDO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "01/07/2023",
      placa: "JZM387",
      modelo: "2021",
      cedula: "71266834",
      nombres: "RICO RESTREPO JAVIER NORBEY"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "08/04/2024",
      placa: "KKK390",
      modelo: "2012",
      cedula: "43079495",
      nombres: "CANO CASTRO, MIRYAM DE LAS MER"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "04/02/2024",
      placa: "IAR605",
      modelo: "2015",
      cedula: "1036652921",
      nombres: "ARAQUE FLOREZ JULIANA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "18/12/2024",
      placa: "JZM182",
      modelo: "2021",
      cedula: "1128283457",
      nombres: "GOEZ CARDENAS, KATERIN"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "27/01/2025",
      placa: "MNR267",
      modelo: "2008",
      cedula: "71389085",
      nombres: "REALES PE?A, FABIAN ALEXIS"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "07/12/2022",
      placa: "IFO120",
      modelo: "2016",
      cedula: "86086508",
      nombres: "OMAR SOTOMAYOR"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "21/07/2024",
      placa: "GXR007",
      modelo: "2020",
      cedula: "1128283176",
      nombres: "ISABEL CRISTINA OROZCO ORREGO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/07/2024",
      placa: "GIK202",
      modelo: "2020",
      cedula: "1128404336",
      nombres: "TATIANA MARIA PABON ORTEGA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "21/07/2022",
      placa: "GEY216",
      modelo: "2019",
      cedula: "21833319",
      nombres: "DORA EMILCEN GONZALEZ PELAEZ"
  },
  {
      compañia: "ZURICH-QBE",
      finvigencia: "11/12/2023",
      placa: "UTN456",
      modelo: "2015",
      cedula: "1014267809",
      nombres: "Nicolas Landinez Herrera"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "13/08/2022",
      placa: "ENY751",
      modelo: "2019",
      cedula: "10175357",
      nombres: "PABLO EMILIO BARRAGAN RUIZ"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "25/09/2024",
      placa: "JHR190",
      modelo: "2017",
      cedula: "43748103",
      nombres: "AGUDELO ARANGO ANA MARIA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "21/07/2022",
      placa: "GEK649",
      modelo: "2020",
      cedula: "43184806",
      nombres: "ADRIANA PATRICIA GIL MARTINEZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "21/07/2024",
      placa: "HEY070",
      modelo: "2013",
      cedula: "32508397",
      nombres: "MARIA CRISTINA FERNANDEZ RESTR"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/06/2024",
      placa: "EON042",
      modelo: "2019",
      cedula: "71905534",
      nombres: "ALBEIRO DE JESUS URIBE LOPERA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/10/2024",
      placa: "EFY071",
      modelo: "2018",
      cedula: "1216724168",
      nombres: "ALEJANDRA PEÑA ROJAS"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "21/07/2024",
      placa: "EOU893",
      modelo: "2019",
      cedula: "98590109",
      nombres: "JHON HARRY OROZCO TORRES"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "21/07/2023",
      placa: "HAL915",
      modelo: "2014",
      cedula: "70566388",
      nombres: "JUAN FERNANDO PINEDA MORALES"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "21/07/2024",
      placa: "DKT258",
      modelo: "2013",
      cedula: "71878778",
      nombres: "RESTREPO VELEZ EDWIN ALEXANDER"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "02/02/2021",
      placa: "HFN542",
      modelo: "2014",
      cedula: "71714695",
      nombres: "CARLOS ARTURO CARDONA ESCOBAR"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "30/07/2024",
      placa: "JKP486",
      modelo: "2017",
      cedula: "42750069",
      nombres: "RAMIREZ ESCOBAR BEATRIZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "05/07/2024",
      placa: "EHN251",
      modelo: "2019",
      cedula: "1033338193",
      nombres: "MURIEL SANCHEZ ERICA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/05/2024",
      placa: "HGM170",
      modelo: "2014",
      cedula: "80083080",
      nombres: "SUAREZ MARTINEZ, JUAN MIGUEL"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "01/09/2024",
      placa: "UEK264",
      modelo: "2015",
      cedula: "1036652666",
      nombres: "CAROLINA BERRIO LEAL"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/11/2019",
      placa: "EOK239",
      modelo: "2019",
      cedula: "8110117798",
      nombres: "RENTING COLOMBIA S.A.S."
  },
  {
      compañia: "MAPFRE",
      finvigencia: "20/12/2024",
      placa: "MSQ897",
      modelo: "2013",
      cedula: "1214717060",
      nombres: "VASQUEZ SUAZA VANESA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "21/11/2019",
      placa: "USV115",
      modelo: "2015",
      cedula: "43280224",
      nombres: "ALEJANDRA MARIA OCHOA MORALES"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "26/02/2021",
      placa: "FGW129",
      modelo: "2008",
      cedula: "43636936",
      nombres: "RUIZ ALVAREZ YAZMIN"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "25/01/2024",
      placa: "JSQ970",
      modelo: "2021",
      cedula: "80073133",
      nombres: "HIDALGO DURAN, RAFAEL ERNESTO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "06/12/2024",
      placa: "HGW733",
      modelo: "2014",
      cedula: "1152190122",
      nombres: "JULIAN RESTREPO VERGARA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/06/2024",
      placa: "FSY403",
      modelo: "2019",
      cedula: "43744637",
      nombres: "PARRA , ANA ZULIMA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "21/10/2019",
      placa: "LAV428",
      modelo: "2012",
      cedula: "43747035",
      nombres: "GARCIA FLOREZ ERICA NASLIN"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "18/04/2018",
      placa: "KHL809",
      modelo: "2011",
      cedula: "43277184",
      nombres: "CA?O MONTOYA PAULA ANDREA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/12/2022",
      placa: "UEL588",
      modelo: "2015",
      cedula: "1020471084",
      nombres: "ANGIE CAROLINA SALAZAR CORREA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "22/07/2024",
      placa: "INN773",
      modelo: "2016",
      cedula: "71787919",
      nombres: "JUAN DAVID JARAMILLO CORREA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "08/11/2023",
      placa: "EPR595",
      modelo: "2018",
      cedula: "1036648287",
      nombres: "HAROLD STEVEN VELEZ BARON"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "01/11/2024",
      placa: "EOK877",
      modelo: "2019",
      cedula: "1144046813",
      nombres: "MARIA ISABEL HURTADO ROJAS"
  },
  {
      compañia: "MUNDIAL",
      finvigencia: "27/12/2021",
      placa: "BXR576",
      modelo: "2011",
      cedula: "8128975",
      nombres: "JUAN CAMILO GARCIA ARIAS"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/06/2020",
      placa: "MTX457",
      modelo: "2013",
      cedula: "1022097938",
      nombres: "CARVAJAL CICERO,VERONICA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/11/2022",
      placa: "FHL909",
      modelo: "2009",
      cedula: "1020432745",
      nombres: "ALVAREZ ALVAREZ YELITZA ANDREA ."
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "19/09/2023",
      placa: "IHP803",
      modelo: "2016",
      cedula: "1085261379",
      nombres: "JHON DARWIN PAZ DELGADO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "22/07/2024",
      placa: "GEP370",
      modelo: "2020",
      cedula: "42890617",
      nombres: "MARIA RAQUEL VELASQUEZ VARGAS"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "03/11/2024",
      placa: "FXP192",
      modelo: "2019",
      cedula: "43914324",
      nombres: "KAROL JULIETH VILLA RAMIREZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/02/2025",
      placa: "ISR714",
      modelo: "2016",
      cedula: "43099054",
      nombres: "AGUDELO SEGURA, ADRIANA MARIA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "16/07/2023",
      placa: "FUS572",
      modelo: "2021",
      cedula: "1065005656",
      nombres: "KLHYO ESPINOSA GARCIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "03/11/2023",
      placa: "KMT372",
      modelo: "2012",
      cedula: "71391786",
      nombres: "BETANCUR , GERMAN OVIDIO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "18/11/2024",
      placa: "HBN655",
      modelo: "2013",
      cedula: "70509890",
      nombres: "HOYOS HERRERA ALVARO DE"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "23/07/2024",
      placa: "EHM422",
      modelo: "2017",
      cedula: "1036621751",
      nombres: "TOVAR VELEZ,LUISA MARIA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "01/08/2024",
      placa: "MTX558",
      modelo: "2013",
      cedula: "43909712",
      nombres: "DORIS ELENA CHAVERRA SANCHEZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "23/07/2024",
      placa: "IST419",
      modelo: "2016",
      cedula: "39451792",
      nombres: "SANDRA MILENA AVENDA?O OSORIO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "28/12/2024",
      placa: "KAP129",
      modelo: "2012",
      cedula: "1020436023",
      nombres: "JAIR ANTONIO PAMPLONA VELASQUE"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "JCP285",
      modelo: "2017",
      cedula: "79293314",
      nombres: "OSCAR GONZALO MANRIQUE DIAZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "GRO789",
      modelo: "2020",
      cedula: "71752193",
      nombres: "Carlos Alberto Duque Vallejo"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "25/07/2024",
      placa: "FSW916",
      modelo: "2019",
      cedula: "43220119",
      nombres: "ISABEL CRISTINA LOPEZ GOMEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "08/06/2020",
      placa: "IST604",
      modelo: "2017",
      cedula: "1017151807",
      nombres: "ANA CRISTINA HERNANDEZ ACEVEDO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "05/06/2023",
      placa: "IHQ035",
      modelo: "2015",
      cedula: "70419061",
      nombres: "JUAN ESTEBAN CORRALES OLAYA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "13/11/2023",
      placa: "FQT552",
      modelo: "2019",
      cedula: "8385531",
      nombres: "AMANDO DE JESUS ARANGO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "05/10/2024",
      placa: "EFW190",
      modelo: "2018",
      cedula: "31934033",
      nombres: "HERRERA BETANCOURTH, MARTHA LIGIA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "21/11/2021",
      placa: "EFV835",
      modelo: "2018",
      cedula: "71787667",
      nombres: "VICTOR MANUEL JARAMILLO RESTREPO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "23/07/2022",
      placa: "KAP921",
      modelo: "2012",
      cedula: "1026142715",
      nombres: "OQUENDO TIRADO, LUIS FELIPE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "16/11/2023",
      placa: "RAT737",
      modelo: "2010",
      cedula: "71387859",
      nombres: "FABIAN ALFONSO JIMENEZ"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "08/01/2024",
      placa: "AVE920",
      modelo: "2014",
      cedula: "71312466",
      nombres: "SERNA GONZALEZ JUAN FERNANDO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "23/11/2024",
      placa: "JGZ295",
      modelo: "2019",
      cedula: "43991527",
      nombres: "VIVIANA CAROLINA, BUITRAGO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "24/07/2023",
      placa: "HYT852",
      modelo: "2017",
      cedula: "1001227911",
      nombres: "SANCHEZ MONTOYA, MARIANA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "25/02/2022",
      placa: "JJK171",
      modelo: "2017",
      cedula: "43162225",
      nombres: "NAZARETH MARIA COLORADO PINEDA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "20/03/2018",
      placa: "DLZ154",
      modelo: "2011",
      cedula: "43600377",
      nombres: "ECHEVERRI ESCOBAR LINA MARIA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "18/09/2024",
      placa: "KHF346",
      modelo: "2012",
      cedula: "1088018814",
      nombres: "DAVID ALEXANDER JIMENEZ BEDOYA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "09/11/2024",
      placa: "DSL748",
      modelo: "2018",
      cedula: "98705979",
      nombres: "POSADA BETANCUR BAIRON ELIAS"
  },
  {
      compañia: "ESTADO",
      finvigencia: "23/07/2022",
      placa: "LAX103",
      modelo: "2017",
      cedula: "3838398",
      nombres: "LUIS JAVIER ARRIETA UBARNE"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "04/02/2024",
      placa: "HAO096",
      modelo: "2014",
      cedula: "10192124",
      nombres: "VELEZ NESTOR"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "23/03/2023",
      placa: "MQP885",
      modelo: "2015",
      cedula: "52616767",
      nombres: "VARON TORRES,ALBA YANETH ."
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "23/07/2024",
      placa: "FSY754",
      modelo: "2019",
      cedula: "63337370",
      nombres: "LILIANA MARIA GIRALDO TAMAYO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "13/10/2022",
      placa: "FQS909",
      modelo: "2019",
      cedula: "15264556",
      nombres: "VELASQUEZ MONA MARIO ALEJANDRO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "07/04/2023",
      placa: "INP567",
      modelo: "2016",
      cedula: "1055833447",
      nombres: "YODDY YOHANA RIOS ALZATE"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "24/02/2024",
      placa: "GEZ166",
      modelo: "2020",
      cedula: "1152221835",
      nombres: "MIGUEL ANGEL SANCHEZ MU?OZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "22/06/2023",
      placa: "HYU824",
      modelo: "2018",
      cedula: "1152219566",
      nombres: "NATALIA RAMIREZ CARDONA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/07/2024",
      placa: "JST349",
      modelo: "2021",
      cedula: "98574780",
      nombres: "VICTOR ASDRUBAL ZAPATA ARANGO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "25/07/2024",
      placa: "DSY516",
      modelo: "2018",
      cedula: "70851329",
      nombres: "LOPEZ ESCUDERO, LUIS"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "02/08/2023",
      placa: "GBN174",
      modelo: "2019",
      cedula: "80769478",
      nombres: "CORDOBA GONZALEZ YESID"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "24/07/2024",
      placa: "JHK988",
      modelo: "2019",
      cedula: "63507245",
      nombres: "GUALDRON HERNANDEZ ZAIREE KARI"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "13/12/2024",
      placa: "JZM943",
      modelo: "2022",
      cedula: "1152434740",
      nombres: "OSSA CASTA?O SIMON"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/07/2023",
      placa: "HYV812",
      modelo: "2019",
      cedula: "1017217955",
      nombres: "FRANCO ROLDAN, JUAN DIEGO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/02/2024",
      placa: "JQR836",
      modelo: "2021",
      cedula: "32244152",
      nombres: "CAROLINA CEBALLOS MONSALVE"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "16/06/2024",
      placa: "GVO260",
      modelo: "2020",
      cedula: "42827813",
      nombres: "MARIA ISABEL RAMIREZ GOMEZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "JKL777",
      modelo: "2017",
      cedula: "32430224",
      nombres: "LUZ MARINA ALVAREZ DE LONDONO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "03/09/2024",
      placa: "FPP891",
      modelo: "2016",
      cedula: "71216054",
      nombres: "LOPEZ DURANGO JOHN EDWARD"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/12/2019",
      placa: "USV604",
      modelo: "2015",
      cedula: "43103422",
      nombres: "MARIA LEONID JIMENEZ QUINCHIA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "23/05/2024",
      placa: "EPT188",
      modelo: "2018",
      cedula: "43975644",
      nombres: "ECHAVARRIA TORO, LISBETH MARBE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "18/01/2021",
      placa: "MGW948",
      modelo: "2013",
      cedula: "1037663963",
      nombres: "BRANDON STEVEN GUIFO BONILLA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "24/07/2024",
      placa: "DFS307",
      modelo: "2012",
      cedula: "43843394",
      nombres: "MARIA NORFANDY CARDONA CARDONA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "17/06/2024",
      placa: "FJW867",
      modelo: "2018",
      cedula: "98663100",
      nombres: "MUNOZ MARIN GERARDO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "18/08/2024",
      placa: "EFV719",
      modelo: "2018",
      cedula: "43590321",
      nombres: "CLAUDIA MAZO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "28/06/2024",
      placa: "MJL499",
      modelo: "2013",
      cedula: "1037586102",
      nombres: "CALLE DUARTE,WENDY NATALIA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "25/07/2024",
      placa: "IAQ022",
      modelo: "2015",
      cedula: "70554562",
      nombres: "CARLOS MARIO PARRA LONDO?O"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/02/2024",
      placa: "FXQ559",
      modelo: "2019",
      cedula: "18616471",
      nombres: "YHON FREDY MORALES MORALES"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "02/07/2024",
      placa: "JPW852",
      modelo: "2021",
      cedula: "1000410104",
      nombres: "ESPINOSA DAVID, SOFIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "03/11/2024",
      placa: "IAQ733",
      modelo: "2015",
      cedula: "32150216",
      nombres: "OBANDO CUERVO, JULIANA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "13/08/2022",
      placa: "MST542",
      modelo: "2013",
      cedula: "70514516",
      nombres: "GARCIA ARCILA, JOHN JAIRO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "27/07/2024",
      placa: "MRX348",
      modelo: "2020",
      cedula: "14254911",
      nombres: "MONTA?A FANDI?O DIEGO FERNAND"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "07/02/2024",
      placa: "KMT964",
      modelo: "2012",
      cedula: "71372354",
      nombres: "MARTZ GARCIA JUAN DAVID"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "20/09/2023",
      placa: "JOQ829",
      modelo: "2021",
      cedula: "900567586",
      nombres: "TOURENVIAS SAS"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/07/2024",
      placa: "TOJ982",
      modelo: "2016",
      cedula: "71792995",
      nombres: "MUNERA CANO, JORGE ANDRES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "07/04/2024",
      placa: "GEN184",
      modelo: "2020",
      cedula: "43522879",
      nombres: "CRISTINA ENILI FERNANDEZ BERRIO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "17/02/2024",
      placa: "GXR102",
      modelo: "2021",
      cedula: "42879717",
      nombres: "YADIRA GOMEZ BOTERO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/06/2024",
      placa: "JYT873",
      modelo: "2022",
      cedula: "35328874",
      nombres: "MARTHA ELENA SALGADO DURAN"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "19/04/2024",
      placa: "MFS035",
      modelo: "2012",
      cedula: "9007487415",
      nombres: "SEM SOLUCION EN MOVIMIENTO LTDA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "CCY243",
      modelo: "2007",
      cedula: "71778618",
      nombres: "JUAN ESTRADA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "14/12/2024",
      placa: "EHM326",
      modelo: "2018",
      cedula: "8237264",
      nombres: "LUIS ALFONSO HOYOS"
  },
  {
      compañia: "ESTADO",
      finvigencia: "25/07/2022",
      placa: "GRS363",
      modelo: "2020",
      cedula: "1037575084",
      nombres: "GLORIA ISABEL BUITRAGO CARDONA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "18/08/2024",
      placa: "EPS489",
      modelo: "2019",
      cedula: "43220479",
      nombres: "ISABEL CRISTINA ESPINOSA VILLADA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "17/08/2023",
      placa: "JIV970",
      modelo: "2017",
      cedula: "8356190",
      nombres: "JUAN FERNANDO GOMEZ SERNA"
  },
  {
      compañia: "SBS",
      finvigencia: "22/12/2024",
      placa: "GWY574",
      modelo: "2020",
      cedula: "92521519",
      nombres: "MANJARRES MORA, GUIDO DE JESUS"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "28/01/2023",
      placa: "DIL197",
      modelo: "2012",
      cedula: "15508844",
      nombres: "Jorge Dario Isaza Zapata"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/09/2024",
      placa: "HPK626",
      modelo: "2014",
      cedula: "71747822",
      nombres: "LUIS ANDRES PALACIO RAIGOSA"
  },
  {
      compañia: "SBS",
      finvigencia: "09/11/2024",
      placa: "JPV794",
      modelo: "2021",
      cedula: "1102827117",
      nombres: "MANUEL MENDEZ, GUILLERMO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "25/07/2022",
      placa: "MTW340",
      modelo: "2013",
      cedula: "21552035",
      nombres: "ALBA DORIS TORO HENAO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/06/2024",
      placa: "FUN915",
      modelo: "2019",
      cedula: "6784103",
      nombres: "GILDARDO ANTONIO GALLEGO NOREÑA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "04/05/2024",
      placa: "IUB345",
      modelo: "2013",
      cedula: "70566176",
      nombres: "MESA JARAMILLO,JUAN MIGUEL"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "27/07/2024",
      placa: "FQT331",
      modelo: "2019",
      cedula: "8014901",
      nombres: "ALVAREZ MU?OZ JOHN FREDY"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "08/08/2024",
      placa: "KKK358",
      modelo: "2012",
      cedula: "1037625388",
      nombres: "YEISON MOLINA MARIN"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/09/2024",
      placa: "EOT069",
      modelo: "2018",
      cedula: "52323491",
      nombres: "SAUDI STELLA LOPEZ SUAREZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/06/2024",
      placa: "HXX423",
      modelo: "2015",
      cedula: "43040566",
      nombres: "DORA PATRICIA OSORIO MEJIA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "29/06/2024",
      placa: "USY525",
      modelo: "2015",
      cedula: "22079910",
      nombres: "MARIA STELLA ALZATE GIRALDO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "25/06/2021",
      placa: "KBM371",
      modelo: "2010",
      cedula: "70003133",
      nombres: "LEONEL JOSE PIEDRAHITA LOAIZA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "30/06/2024",
      placa: "HZK915",
      modelo: "2014",
      cedula: "1047964334",
      nombres: "WILLIAM DAVID HERRERA SANCHEZ"
  },
  {
      compañia: "ESTADO",
      finvigencia: "12/12/2024",
      placa: "JST617",
      modelo: "2021",
      cedula: "71363436",
      nombres: "JUAN CARLOS MEJIA VARGAS"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/11/2020",
      placa: "HZO955",
      modelo: "2015",
      cedula: "98552944",
      nombres: "CARLOS JAIRO DE JESUS VELASQUEZ FRANCO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "24/07/2024",
      placa: "GEY781",
      modelo: "2020",
      cedula: "1017158743",
      nombres: "JAMES ALEXIS LONDONO ORTEGA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "27/09/2024",
      placa: "EIK063",
      modelo: "2018",
      cedula: "1035850744",
      nombres: "JORGE ANDRES IDARRAGA SILVA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/04/2023",
      placa: "KAQ846",
      modelo: "2013",
      cedula: "8221845",
      nombres: "BERNARDO CHICA MOLINA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "15/06/2024",
      placa: "FPL390",
      modelo: "2019",
      cedula: "52020178",
      nombres: "VARGAS RIVERA CLAUDIA PATRICIA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "25/07/2022",
      placa: "JBN892",
      modelo: "2017",
      cedula: "88262184",
      nombres: "JOHNNY GOMEZ SERNA"
  },
  {
      compañia: "PREVISORA",
      finvigencia: "15/11/2024",
      placa: "ICZ432",
      modelo: "2015",
      cedula: "1005075650",
      nombres: "TARAZONA ORTIZ OSNEIDER"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/12/2024",
      placa: "JON003",
      modelo: "2020",
      cedula: "1022092992",
      nombres: "MAIRA ALEXANDRA LOPEZ VALENCIA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "09/09/2024",
      placa: "GXR131",
      modelo: "2021",
      cedula: "98485068",
      nombres: "JOHNY MARIN LOPERA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "31/08/2024",
      placa: "JCQ936",
      modelo: "2017",
      cedula: "1027883847",
      nombres: "ALEJANDRO RESTREPO CARDONA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "19/08/2024",
      placa: "INP195",
      modelo: "2016",
      cedula: "70328812",
      nombres: "JORGE ELIECER TOBON"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "26/07/2024",
      placa: "JHR927",
      modelo: "2017",
      cedula: "71290541",
      nombres: "ROGER STEVEN GAVIRIA SUAZA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "02/01/2024",
      placa: "KMS776",
      modelo: "2012",
      cedula: "1067957048",
      nombres: "PEDRO JOSE JALLER SOFAN"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/07/2024",
      placa: "JHU632",
      modelo: "2018",
      cedula: "15259651",
      nombres: "CARLOS MARIO COLORADO OSPINA"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "28/10/2024",
      placa: "HFL367",
      modelo: "2014",
      cedula: "1020435736",
      nombres: "TOBON ZAPATA JOSE LUIS"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "25/01/2025",
      placa: "EOS758",
      modelo: "2019",
      cedula: "1037646278",
      nombres: "LAURA ISABEL ECHEVERRI MUÑOZ"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "04/03/2024",
      placa: "UEN056",
      modelo: "2015",
      cedula: "42982198",
      nombres: "CA?AS SANCHEZ MARIA TERESA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "07/02/2025",
      placa: "JIZ072",
      modelo: "2017",
      cedula: "98567649",
      nombres: "HENAO PALACIO,RAUL IGNACIO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/05/2024",
      placa: "MOX930",
      modelo: "2011",
      cedula: "42892938",
      nombres: "SIERRA RESTREPO, ANA LUCIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "23/03/2024",
      placa: "JYZ493",
      modelo: "2020",
      cedula: "1037588588",
      nombres: "FLOREZ GALLEGO, CAMILO ANDRES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "18/07/2021",
      placa: "FJQ337",
      modelo: "2019",
      cedula: "92519573",
      nombres: "ROBERT TOBON CIFUENTES"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "05/09/2024",
      placa: "DAR258",
      modelo: "2012",
      cedula: "8909346806",
      nombres: "DISGRAFICAS SAS DISGRAFICAS S"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "13/02/2025",
      placa: "JOR052",
      modelo: "2021",
      cedula: "1020396918",
      nombres: "SALAZAR AGUDELO, SEBASTIAN"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "16/04/2022",
      placa: "MKX241",
      modelo: "2012",
      cedula: "43672339",
      nombres: "DURLAY YANET DAVILA PARRA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "26/07/2024",
      placa: "IAQ122",
      modelo: "2015",
      cedula: "21842865",
      nombres: "ANGELA MARIA RESTREPO CALLE"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "15/10/2024",
      placa: "DFY449",
      modelo: "2015",
      cedula: "98532407",
      nombres: "JIMENEZ DUQUE JOHN JAIRO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "14/03/2024",
      placa: "EOV160",
      modelo: "2018",
      cedula: "98659530",
      nombres: "JORGE ELIAS CALLE BARRERA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/07/2024",
      placa: "MIX725",
      modelo: "2013",
      cedula: "43251073",
      nombres: "ZAPATA ESCOBAR,CAROLINA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/06/2024",
      placa: "GVN125",
      modelo: "2020",
      cedula: "70191510",
      nombres: "ELEUTERIO DE JESUS BETANCUR RESTREPO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "26/11/2024",
      placa: "UDZ845",
      modelo: "2015",
      cedula: "71799429",
      nombres: "ARBOLEDA PULGARIN, FREDY"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/09/2022",
      placa: "JKK122",
      modelo: "2017",
      cedula: "1152201160",
      nombres: "VALERIA MORENO POSADA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "25/08/2024",
      placa: "JKK316",
      modelo: "2017",
      cedula: "1128466553",
      nombres: "SALDARRIAGA CALDERON VICTOR, ALONSO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "10/08/2024",
      placa: "KIY403",
      modelo: "2011",
      cedula: "71604543",
      nombres: "GABRIEL JAIME ROJAS MU?OZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "26/07/2024",
      placa: "DKT965",
      modelo: "2013",
      cedula: "24288339",
      nombres: "VILLEGAS DEOROZCO STELLA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "14/09/2024",
      placa: "FUP242",
      modelo: "2019",
      cedula: "39285350",
      nombres: "VIVIANA INES RIVERA MIELES"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "21/09/2023",
      placa: "IOT106",
      modelo: "2016",
      cedula: "1128386070",
      nombres: "RUIZ MACIAS LEIDY TATIANA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "25/07/2024",
      placa: "EPS455",
      modelo: "2019",
      cedula: "98641329",
      nombres: "FREDY GIRALDO MONTOYA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "02/03/2024",
      placa: "GXK123",
      modelo: "2020",
      cedula: "1037627691",
      nombres: "JUAN DAVID ORTIZ POLO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "07/01/2025",
      placa: "JSS249",
      modelo: "2020",
      cedula: "1035439310",
      nombres: "CORREA CORDOBA, JUAN CAMILO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "27/07/2022",
      placa: "BXS107",
      modelo: "2011",
      cedula: "98700666",
      nombres: "CARMONA MARIN DIEGO ALEJANDRO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "18/09/2024",
      placa: "EHM304",
      modelo: "2018",
      cedula: "1017158077",
      nombres: "YESSICA ZAPATA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/06/2024",
      placa: "IAZ099",
      modelo: "2015",
      cedula: "43626790",
      nombres: "MELISA BOTERO BOTERO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "01/04/2024",
      placa: "IAU790",
      modelo: "2015",
      cedula: "43730146",
      nombres: "LINA MARIA GOEZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "20/09/2024",
      placa: "IYQ687",
      modelo: "2016",
      cedula: "9727870",
      nombres: "EDGAR ALEJANDRO TAFURT"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "18/11/2024",
      placa: "IHU741",
      modelo: "2016",
      cedula: "43153430",
      nombres: "BETANCUR TABORDA, DIANA MARIA"
  },
  {
      compañia: "SBS",
      finvigencia: "10/08/2021",
      placa: "HNU510",
      modelo: "2014",
      cedula: "38793535",
      nombres: "LOPEZ CARDONA, SORANNY"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "28/10/2024",
      placa: "GWW541",
      modelo: "2020",
      cedula: "21777986",
      nombres: "Nubia Rosa Gomez Salazar"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/08/2019",
      placa: "MOR260",
      modelo: "2010",
      cedula: "43493744",
      nombres: "MARIA TERESA DEL NIÑO JESUS BERNAL VASQUEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "27/02/2023",
      placa: "HPL755",
      modelo: "2014",
      cedula: "29127898",
      nombres: "CLAUDIA PAOLA MELO PEREZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "10/12/2024",
      placa: "KBR441",
      modelo: "2010",
      cedula: "43752280",
      nombres: "JANET ALEJANDRA LOPEZ SIERRA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "12/07/2024",
      placa: "GEZ446",
      modelo: "2020",
      cedula: "43619005",
      nombres: "MILBIA LUCIA SALGADO HERNANDEZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "27/07/2024",
      placa: "EFU777",
      modelo: "2017",
      cedula: "42896379",
      nombres: "ADRIANA MARIA LOPEZ CORREA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "27/07/2022",
      placa: "KBV415",
      modelo: "2010",
      cedula: "71776587",
      nombres: "JAVIER RAUL ROJAS BETANCOUR"
  },
  {
      compañia: "ESTADO",
      finvigencia: "01/12/2024",
      placa: "GRQ579",
      modelo: "2020",
      cedula: "43588261",
      nombres: "MONICA MARIA MOLINA AGUDELO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "22/02/2025",
      placa: "JOS863",
      modelo: "2020",
      cedula: "1038334778",
      nombres: "Juan David Jaramillo Higuita"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "01/08/2024",
      placa: "JFQ333",
      modelo: "2017",
      cedula: "1152691353",
      nombres: "BOHORQUEZ OSPINA JAIME ANDRES"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/08/2024",
      placa: "JBK962",
      modelo: "2017",
      cedula: "32559344",
      nombres: "CELADA PATI?O,MARINA AMPARO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "17/02/2020",
      placa: "MOK924",
      modelo: "2009",
      cedula: "43828975",
      nombres: "BERRIO GARZON NIDYA IRENE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "21/12/2024",
      placa: "JPS851",
      modelo: "2020",
      cedula: "1048014707",
      nombres: "WILSON ALEJANDRO JIMENEZ JIMENEZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/07/2018",
      placa: "UEK471",
      modelo: "2015",
      cedula: "1128438568",
      nombres: "GRISALES CASTRO JORGE ANDRES"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "21/09/2024",
      placa: "MUV147",
      modelo: "2013",
      cedula: "43876218",
      nombres: "PAULA MENDOZA VANEGAS"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "02/08/2024",
      placa: "JHU380",
      modelo: "2018",
      cedula: "8258340",
      nombres: "MARIN RESTREPO, FERNANDO JAVIER"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/03/2024",
      placa: "JST342",
      modelo: "2021",
      cedula: "21296651",
      nombres: "NOHEMY GUZMAN DE CEBALLOS"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "31/03/2024",
      placa: "IVS547",
      modelo: "2016",
      cedula: "1098640562",
      nombres: "SURMAI BENAVIDES LUIS FERNANDO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "02/08/2024",
      placa: "DER363",
      modelo: "2011",
      cedula: "8432838",
      nombres: "VELASQUEZ AGUDELO,DANI ALBERTO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "08/11/2024",
      placa: "IVU686",
      modelo: "2016",
      cedula: "70559501",
      nombres: "GARCIA GONZALEZ HERNAN DARIO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "27/07/2023",
      placa: "KHQ007",
      modelo: "2011",
      cedula: "70515699",
      nombres: "JUAN MANUEL PABON ESCOBAR"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/06/2024",
      placa: "EHL341",
      modelo: "2018",
      cedula: "1035830640",
      nombres: "LUIS ALEJANDRO VILLA GIL"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "28/06/2024",
      placa: "KPQ425",
      modelo: "2022",
      cedula: "41786406",
      nombres: "CAICEDO PACHON MARIA CLAUDIA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "23/11/2022",
      placa: "DLX405",
      modelo: "2012",
      cedula: "1039446736",
      nombres: "JULIAN ARLEY OSORIO RAMIREZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "27/07/2024",
      placa: "BXM729",
      modelo: "2013",
      cedula: "52953186",
      nombres: "ANDREA CATALINA URBINO SOTO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "28/09/2024",
      placa: "PFV253",
      modelo: "2012",
      cedula: "1128466389",
      nombres: "KELLY JOHANA ORTIZ CORREA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "05/07/2024",
      placa: "EOV538",
      modelo: "2019",
      cedula: "10274843",
      nombres: "QUINTERO CARDONA JESUS ORLANDO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "08/08/2024",
      placa: "KAQ644",
      modelo: "2013",
      cedula: "1018421853",
      nombres: "ANDREA CATERINE CLEVES SUA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "09/09/2024",
      placa: "IYQ974",
      modelo: "2016",
      cedula: "43084417",
      nombres: "MONICA AGUDELO TRUJILLO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/07/2024",
      placa: "DFK544",
      modelo: "2012",
      cedula: "11296397",
      nombres: "FRANCISCO ALIRIO GIRALDO GOMEZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "18/05/2024",
      placa: "DSV244",
      modelo: "2017",
      cedula: "3512059",
      nombres: "URIBE SIERRA, LUIS GUILLERMO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "29/03/2024",
      placa: "MSO672",
      modelo: "2012",
      cedula: "65713654",
      nombres: "HENAO SEGURA, LUZ MARY"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "05/01/2023",
      placa: "GRM953",
      modelo: "2020",
      cedula: "1152213536",
      nombres: "ANDRES FELIPE ZULUAGA MONTOYA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "03/03/2023",
      placa: "IOW347",
      modelo: "2016",
      cedula: "1128471572",
      nombres: "MARULANDA VELASQUEZ,NATALIA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "25/09/2024",
      placa: "IEX100",
      modelo: "2015",
      cedula: "9738979",
      nombres: "JUAN RAMON SANCHEZ OCAMPO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "27/07/2024",
      placa: "KAN985",
      modelo: "2010",
      cedula: "71216783",
      nombres: "MARULANDA OCAMPO, HENRY ALONSO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "14/04/2023",
      placa: "MJL328",
      modelo: "2013",
      cedula: "1017177958",
      nombres: "DURLEY ESTEFANY MEJIA GARCIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "19/10/2024",
      placa: "JKN129",
      modelo: "2017",
      cedula: "1018342394",
      nombres: "RAMIREZ SEPULVEDA, MARISOL"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "19/01/2025",
      placa: "DJO233",
      modelo: "2012",
      cedula: "43346618",
      nombres: "Nury Regina Escobar Montoya"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "04/06/2024",
      placa: "FSY473",
      modelo: "2019",
      cedula: "32414547",
      nombres: "MARIA CRISTINA ALVAREZ BEDOYA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "28/07/2024",
      placa: "KMS613",
      modelo: "2012",
      cedula: "43586019",
      nombres: "MARIA FERNANDA OLIVOS LLOREDA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "19/09/2024",
      placa: "FQQ962",
      modelo: "2019",
      cedula: "43045963",
      nombres: "DUQUE HERNANDEZ,MARIA PATRICIA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "03/09/2024",
      placa: "MSQ844",
      modelo: "2013",
      cedula: "98536167",
      nombres: "CARLOS ALBERTO GUTIERREZ SANCH"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "02/04/2024",
      placa: "KHX658",
      modelo: "2012",
      cedula: "1124001820",
      nombres: "MELISSA MARIELA PEDROZA FUENTE"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "28/06/2024",
      placa: "LAX086",
      modelo: "2017",
      cedula: "1214734569",
      nombres: "CORREA MARTINEZ, WENDY"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "29/09/2024",
      placa: "FBZ771",
      modelo: "2006",
      cedula: "43810390",
      nombres: "AURA RUIZ PALACIO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "28/07/2024",
      placa: "MXY918",
      modelo: "2014",
      cedula: "2473269",
      nombres: "CUERVO ARISTIZABAL HECTOR HUMB"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "28/07/2024",
      placa: "HAW711",
      modelo: "2013",
      cedula: "71772795",
      nombres: "CARVAJAL PALACIO LU?S FERNANDO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "09/05/2024",
      placa: "JQT629",
      modelo: "2022",
      cedula: "1017129698",
      nombres: "GARCIA SUAREZ, LINA MARIA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/08/2019",
      placa: "DIL986",
      modelo: "2012",
      cedula: "25776772",
      nombres: "MAYDA MARIA SALLEG CABARCAS"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "17/11/2018",
      placa: "IAV292",
      modelo: "2015",
      cedula: "8909039388",
      nombres: "BANCOLOMBIA SA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "11/03/2023",
      placa: "HYV790",
      modelo: "2018",
      cedula: "39684280",
      nombres: "DORA JANETH TORRES BARON"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/10/2024",
      placa: "MVR389",
      modelo: "2013",
      cedula: "70516818",
      nombres: "CESAR TULIO DE JESUS GONZALEZ SALDARRIAGA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "31/08/2024",
      placa: "ZXS920",
      modelo: "2014",
      cedula: "52419775",
      nombres: "DURAN RODRIGUEZ MONICA MARCELA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "20/12/2024",
      placa: "IYU632",
      modelo: "2017",
      cedula: "1077463346",
      nombres: "ESTEBAN RINCON OSORIO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "31/10/2023",
      placa: "EPS921",
      modelo: "2019",
      cedula: "88227160",
      nombres: "OSCAR MAURICIO RICO BOCANEGRA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "23/02/2024",
      placa: "IAW131",
      modelo: "2015",
      cedula: "1152436868",
      nombres: "DANIELA CIFUENTES MOLINA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/11/2019",
      placa: "DFW638",
      modelo: "2011",
      cedula: "43519448",
      nombres: "GLORIA NATALIA NARANJO RESTREPO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "28/07/2023",
      placa: "FHE472",
      modelo: "2009",
      cedula: "70729148",
      nombres: "SANCHEZ OROZCO, HENRY"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "IZU085",
      modelo: "2017",
      cedula: "70978015",
      nombres: "ALEJANDRO ALEJANDRO MEDINA DAVID"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "12/03/2021",
      placa: "IHR497",
      modelo: "2015",
      cedula: "43973523",
      nombres: "ASTRID LILIANA VILLA RESTREPO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/08/2021",
      placa: "KGU878",
      modelo: "2010",
      cedula: "71657540",
      nombres: "ELKIN GOMEZ ARANGO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/07/2024",
      placa: "LAX512",
      modelo: "2019",
      cedula: "1038407054",
      nombres: "BERONICA YANETH LOPEZ GOMEZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "28/07/2022",
      placa: "IAU081",
      modelo: "2015",
      cedula: "39442061",
      nombres: "ARNOVIA EMILCE MORAL ARNOVIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/07/2023",
      placa: "MVS617",
      modelo: "2013",
      cedula: "1152212903",
      nombres: "CASTILLO SALAZAR, SUSANA"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "13/09/2023",
      placa: "MBZ482",
      modelo: "2012",
      cedula: "1152195272",
      nombres: "LAURA CANO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/09/2023",
      placa: "FQT933",
      modelo: "2019",
      cedula: "70167031",
      nombres: "JORGE ANDRES GUTIERREZ QUINTERO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "13/07/2024",
      placa: "JKK518",
      modelo: "2018",
      cedula: "43555909",
      nombres: "ARIAS SANCHEZ,ESMERALDA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "08/11/2024",
      placa: "JOS880",
      modelo: "2020",
      cedula: "21320850",
      nombres: "Gilma Jimenez Arboleda"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "05/09/2024",
      placa: "MXX849",
      modelo: "2014",
      cedula: "32312216",
      nombres: "VELEZ VASQUEZ, BEATRIZ ELENA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "28/07/2023",
      placa: "INP584",
      modelo: "2016",
      cedula: "3415190",
      nombres: "ESPINOSA MAURICIO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "27/02/2023",
      placa: "HZO184",
      modelo: "2015",
      cedula: "43191177",
      nombres: "DIANA MARCELA SALCEDOQUINTERO"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "05/08/2022",
      placa: "DLZ536",
      modelo: "2013",
      cedula: "43871847",
      nombres: "MONTOYA JIMENEZ JESSICA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/01/2025",
      placa: "KMT417",
      modelo: "2012",
      cedula: "43548600",
      nombres: "GAVIRIA RUEDA, LUZ ALEYDA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/08/2024",
      placa: "GEK494",
      modelo: "2020",
      cedula: "1152467759",
      nombres: "MARIA CLARA LEAL LOPEZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "INO505",
      modelo: "2016",
      cedula: "32498277",
      nombres: "ESTHER LUCIA SALAZAR SERNA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/08/2023",
      placa: "RMP967",
      modelo: "2012",
      cedula: "71794903",
      nombres: "JOHN ALEJANDRO OSPINA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "02/02/2024",
      placa: "JPV933",
      modelo: "2021",
      cedula: "1127619316",
      nombres: "HERNANDEZ MARCANO, ALVARO ALEJ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "29/12/2024",
      placa: "JKK953",
      modelo: "2017",
      cedula: "63493731",
      nombres: "MARIA ISABEL DIAZ CUEVAS"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "07/11/2024",
      placa: "EFU277",
      modelo: "2017",
      cedula: "21991056",
      nombres: "DIANA CECILIA ANGEL TOBON"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "28/07/2024",
      placa: "JCS269",
      modelo: "2017",
      cedula: "43986649",
      nombres: "HEIDY CATALINA TORRES HURTADO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "21/07/2020",
      placa: "JCN124",
      modelo: "2016",
      cedula: "43027893",
      nombres: "MARIA VICTORIA GIRON MORENO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "04/10/2024",
      placa: "IAX434",
      modelo: "2015",
      cedula: "79761029",
      nombres: "CARLOS ANDRES CARDENAS AYALA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "28/07/2024",
      placa: "FHO821",
      modelo: "2008",
      cedula: "43575972",
      nombres: "MARIA NEREIDA MURILLO LONDO?O"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "29/06/2024",
      placa: "GEK556",
      modelo: "2019",
      cedula: "1214742682",
      nombres: "CASTA?EDA CASTA?EDA, CASTA?EDA CASTA?EDA,"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/10/2024",
      placa: "FSW724",
      modelo: "2019",
      cedula: "3474063",
      nombres: "JUAN CARLOS AGUIRRE TORO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "28/07/2024",
      placa: "IHP524",
      modelo: "2016",
      cedula: "1152434875",
      nombres: "JORGE IVAN CANO BOLIVAR"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/05/2023",
      placa: "JIY416",
      modelo: "2017",
      cedula: "1017142942",
      nombres: "YULY MARCELA MONTOYA ESTRADA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/06/2024",
      placa: "EIM482",
      modelo: "2018",
      cedula: "43055922",
      nombres: "ANGELA PATRICIA SUAREZ ACOSTA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/12/2018",
      placa: "IYO463",
      modelo: "2016",
      cedula: "1020455171",
      nombres: "DANNY SUAREZ GIRALDO SUAREZ"
  },
  {
      compañia: "ESTADO",
      finvigencia: "11/10/2022",
      placa: "KLS588",
      modelo: "2011",
      cedula: "1128398349",
      nombres: "KARLA FAVIANI ANGULO PEREZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/06/2024",
      placa: "GVK745",
      modelo: "2020",
      cedula: "1020448069",
      nombres: "RAMIREZ MOLINA, LEIDY CATALINA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/06/2024",
      placa: "DSV593",
      modelo: "2018",
      cedula: "71796269",
      nombres: "ANDRES LEMOS CANO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "03/10/2024",
      placa: "GHW441",
      modelo: "2020",
      cedula: "15257321",
      nombres: "CORREA LUIS RESTREPO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "15/02/2023",
      placa: "MNW049",
      modelo: "2008",
      cedula: "43902486",
      nombres: "MARITZA RAYO VARGAS"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "26/06/2024",
      placa: "KCS750",
      modelo: "2012",
      cedula: "70516920",
      nombres: "LIBARDO ANTONIO, CANO TORRES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/07/2024",
      placa: "EIM139",
      modelo: "2018",
      cedula: "64721145",
      nombres: "ADRIANA MARCELA MORENO HERNANDEZ"
  },
  {
      compañia: "SBS",
      finvigencia: "03/11/2024",
      placa: "HHQ817",
      modelo: "2013",
      cedula: "1122396139",
      nombres: "AREDONDO MENDOZA, YENIRETH"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "17/06/2024",
      placa: "JBK466",
      modelo: "2016",
      cedula: "71613423",
      nombres: "JARAMILLO MOLINA, JORGE LEON"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/06/2022",
      placa: "USU954",
      modelo: "2016",
      cedula: "71706379",
      nombres: "JAIME AURELIO GARCIA MARTINEZ"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "02/02/2022",
      placa: "RIF851",
      modelo: "2007",
      cedula: "1054547455",
      nombres: "RODRIGUEZ ISAZA, LISETH"
  },
  {
      compañia: "ESTADO",
      finvigencia: "09/12/2023",
      placa: "JKL846",
      modelo: "2017",
      cedula: "1020407709",
      nombres: "SANTIAGO GIRALDO PEREZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "31/07/2024",
      placa: "IHS536",
      modelo: "2016",
      cedula: "45440109",
      nombres: "MARIELA CANDELARIA GAMARRA CORPAS"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "26/07/2024",
      placa: "FUP140",
      modelo: "2020",
      cedula: "43629746",
      nombres: "MARY LUZ VELASQUEZ FLOREZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "EOL467",
      modelo: "2019",
      cedula: "70081916",
      nombres: "JAIME EDUARDO ARAMBURO PENAGOS"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "26/03/2024",
      placa: "DLY329",
      modelo: "2012",
      cedula: "32411321",
      nombres: "RESTREPO DE NARANJO, LUCIA MARGARITA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "08/01/2020",
      placa: "GEL342",
      modelo: "2020",
      cedula: "1128421442",
      nombres: "DANIELA MONCADA GUTIERREZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/05/2023",
      placa: "JHS176",
      modelo: "2017",
      cedula: "1128267302",
      nombres: "PAULINA GIL GIRALDO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "30/04/2024",
      placa: "JCO867",
      modelo: "2017",
      cedula: "1036600710",
      nombres: "LONDOÑO MORENO, DIANA MARCELA"
  },
  {
      compañia: "SBS",
      finvigencia: "02/08/2024",
      placa: "HYZ926",
      modelo: "2014",
      cedula: "1019021045",
      nombres: "CALERO MENDOZA KIMBERLY,"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "15/02/2024",
      placa: "GRN320",
      modelo: "2020",
      cedula: "70070133",
      nombres: "ANTONIO JOSE GOMEZ BETANCUR"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "21/08/2024",
      placa: "JHS807",
      modelo: "2017",
      cedula: "71715932",
      nombres: "TORO PUERTA JUAN CARLOS"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "15/12/2024",
      placa: "FQW673",
      modelo: "2019",
      cedula: "1001367502",
      nombres: "SARMIENTO TAMAYO JUANITA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "29/07/2022",
      placa: "MFY131",
      modelo: "2013",
      cedula: "1039049671",
      nombres: "JUAN FELIPE TOBON MOLINA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "07/06/2024",
      placa: "JBN589",
      modelo: "2017",
      cedula: "70508627",
      nombres: "OBDULIO DAVILA TOBON"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/08/2024",
      placa: "GFK782",
      modelo: "2020",
      cedula: "1040181059",
      nombres: "Sara Maria Manjarres Meneses"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "29/07/2024",
      placa: "ENZ031",
      modelo: "2018",
      cedula: "22118292",
      nombres: "ORREGO HERRERA ENEIRA MARIA"
  },
  {
      compañia: "SBS",
      finvigencia: "29/07/2024",
      placa: "EIL677",
      modelo: "2018",
      cedula: "52006476",
      nombres: "MENDEZ VERA, SANDRA PATRICIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/12/2024",
      placa: "IAW738",
      modelo: "2014",
      cedula: "43615586",
      nombres: "CASTA?EDA NARANJO, LINA MARIA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "15/10/2024",
      placa: "IUD988",
      modelo: "2021",
      cedula: "32108655",
      nombres: "Valentina Isaza Arenas"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "10/12/2021",
      placa: "MOL868",
      modelo: "2009",
      cedula: "42754354",
      nombres: "MARTHA LUCIA OSORIO ATEHORTUA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "17/04/2024",
      placa: "JON548",
      modelo: "2021",
      cedula: "71732763",
      nombres: "JUAN CARLOS AGUIRRE ATEHORTUA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "01/11/2023",
      placa: "USV660",
      modelo: "2015",
      cedula: "42997255",
      nombres: "SANCHEZ ZAPATA NEILA ROSA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "12/07/2024",
      placa: "JZP406",
      modelo: "2022",
      cedula: "1037579206",
      nombres: "NOREA GIL, NOREA GIL,MILDREY JO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/07/2024",
      placa: "IAO565",
      modelo: "2015",
      cedula: "1152442494",
      nombres: "NALLELY ANGEL MORALES AGUDELO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "15/09/2024",
      placa: "HYR327",
      modelo: "2016",
      cedula: "1002243169",
      nombres: "CHAVARRIAGA CIFUENTES MARIA LUISA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/09/2023",
      placa: "GEZ389",
      modelo: "2020",
      cedula: "42866280",
      nombres: "MARIA INES PELAEZ LONDONO, ."
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "29/08/2023",
      placa: "INO080",
      modelo: "2016",
      cedula: "1128465115",
      nombres: "VARGAS POSADA, LUZ MALLENY"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "03/12/2024",
      placa: "IHQ765",
      modelo: "2015",
      cedula: "71240812",
      nombres: "LEONARDO ANTONIO HENAO MONTENE"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/08/2024",
      placa: "GEN066",
      modelo: "2019",
      cedula: "1039458826",
      nombres: "JHON SEBASTIAN GRAJALES, RIOS"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "20/11/2024",
      placa: "JSQ536",
      modelo: "2021",
      cedula: "1115071017",
      nombres: "TAPIA VELA, LAURA JOANNA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "02/10/2024",
      placa: "DEW035",
      modelo: "2012",
      cedula: "71725235",
      nombres: "MARIN PALACIO,IVAN DARIO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/11/2024",
      placa: "MSN134",
      modelo: "2013",
      cedula: "51665785",
      nombres: "ALZATE PEREZ,OLGA VIRGINIA MAR"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "28/09/2024",
      placa: "JSU307",
      modelo: "2021",
      cedula: "1023801421",
      nombres: "RUIZ WILMAR ANDREY"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "30/09/2024",
      placa: "GVP958",
      modelo: "2020",
      cedula: "32531535",
      nombres: "GLORIA CECILIA GONZALEZ DUQUE"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "30/06/2022",
      placa: "DIL598",
      modelo: "2012",
      cedula: "80393031",
      nombres: "LUIS FERNANDO CASTANEDA CORRALES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/10/2022",
      placa: "UCR930",
      modelo: "2015",
      cedula: "71756445",
      nombres: "RAUL DARIO URIBE"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "KIY566",
      modelo: "2011",
      cedula: "43871880",
      nombres: "DIANA CRISTINA MARQUEZ RESTREPO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "05/12/2024",
      placa: "GIK442",
      modelo: "2021",
      cedula: "39447500",
      nombres: "BETTY ASTRID BOTERO MARIN"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "21/05/2020",
      placa: "IWX113",
      modelo: "2017",
      cedula: "43996962",
      nombres: "YURAIMA RESTREPO QUICENO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "25/02/2024",
      placa: "JJK701",
      modelo: "2017",
      cedula: "21549361",
      nombres: "CLAUDIA PATRICIA SALDARRIAGA RESTREPO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "19/01/2024",
      placa: "GFK924",
      modelo: "2020",
      cedula: "1035440899",
      nombres: "VANESSA MONSALVE JIMENEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "26/10/2024",
      placa: "JPW044",
      modelo: "2021",
      cedula: "1017245974",
      nombres: "MARIA FERNANDA JARAMILLO JARAMILLO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "11/04/2024",
      placa: "MSS783",
      modelo: "2013",
      cedula: "901681312",
      nombres: "INVERSIONES LA GOLONDRINA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "29/07/2024",
      placa: "DEQ587",
      modelo: "2012",
      cedula: "42965383",
      nombres: "CARMEN SOFIA DEL SOCORRO BARRE"
  },
  {
      compañia: "ESTADO",
      finvigencia: "24/09/2022",
      placa: "ISU095",
      modelo: "2016",
      cedula: "1128465601",
      nombres: "ANGELA MARIA CASTRILLON RICO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "30/07/2024",
      placa: "JOP721",
      modelo: "2020",
      cedula: "71194355",
      nombres: "IBARGUEN HURTADO HAMILTON"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/07/2024",
      placa: "GEW760",
      modelo: "2019",
      cedula: "1037579291",
      nombres: "SIERRA PARRA, ADRIANA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "25/11/2022",
      placa: "GIK343",
      modelo: "2020",
      cedula: "1039459349",
      nombres: "HENAO MORALES, SONIA MALLERLYN"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "30/07/2024",
      placa: "JBP919",
      modelo: "2017",
      cedula: "1020397498",
      nombres: "ALVAREZ TORRES, JUAN DAVID"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "15/01/2025",
      placa: "IAV945",
      modelo: "2014",
      cedula: "75102068",
      nombres: "Camilo Rodriguez Duque"
  },
  {
      compañia: "ESTADO",
      finvigencia: "30/07/2022",
      placa: "JOP559",
      modelo: "2020",
      cedula: "70140310",
      nombres: "JUAN CARLOS MARTINEZ FLOREZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/11/2024",
      placa: "FQU816",
      modelo: "2019",
      cedula: "16988095",
      nombres: "CARLOS ENRIQUE MUÑOZ LLANOS"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "01/09/2024",
      placa: "JQT376",
      modelo: "2022",
      cedula: "1017185902",
      nombres: "VASCO URIBE JULIETH ALEJANDRA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "16/06/2024",
      placa: "ISU301",
      modelo: "2016",
      cedula: "42792333",
      nombres: "PIEDRAHITA LILIANA MARIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/04/2024",
      placa: "IOT841",
      modelo: "2016",
      cedula: "70509538",
      nombres: "HOLGUIN , AGUIRRE GUILLERMO LE"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "30/07/2024",
      placa: "INR608",
      modelo: "2017",
      cedula: "7498365",
      nombres: "LUIS ALVARO GARCIA OSORIO"
  },
  {
      compañia: "SBS",
      finvigencia: "30/07/2024",
      placa: "IUA768",
      modelo: "2012",
      cedula: "1128431206",
      nombres: "BEDOYA OSPINA, VIVIANA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/07/2022",
      placa: "MOW779",
      modelo: "2011",
      cedula: "1035231896",
      nombres: "JULIO ESTEBAN RESTREPO LLORENTE"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/01/2022",
      placa: "FGK700",
      modelo: "2007",
      cedula: "14621384",
      nombres: "CANO ARDILA ANDRES FELIPE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/09/2019",
      placa: "HAN570",
      modelo: "2014",
      cedula: "73154036",
      nombres: "NICOLAS ALVEIRO HENAO GIL"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "30/11/2024",
      placa: "GHV336",
      modelo: "2020",
      cedula: "98528683",
      nombres: "JUAN JOSE CASTA?O BETANCUR"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/01/2025",
      placa: "JHP775",
      modelo: "2017",
      cedula: "43258563",
      nombres: "FRANCO TUBERQUIA,ANA MILENA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "IEY179",
      modelo: "2015",
      cedula: "32395362",
      nombres: "LUZ CELINA TIRADO MUNOZ"
  },
  {
      compañia: "ESTADO",
      finvigencia: "09/08/2024",
      placa: "EFU700",
      modelo: "2017",
      cedula: "42760833",
      nombres: "MARIA LUZ ALARCON LOPEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "16/10/2024",
      placa: "HEY645",
      modelo: "2014",
      cedula: "1037625043",
      nombres: "JUAN CAMILO MARTINEZ MOLINA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "10/08/2024",
      placa: "FSW401",
      modelo: "2019",
      cedula: "1036932679",
      nombres: "Diana Carolina Hoyos Rincon"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "31/07/2024",
      placa: "HNZ035",
      modelo: "2014",
      cedula: "32526976",
      nombres: "MARLENY MU?OZ ARDILA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "23/09/2024",
      placa: "IOS498",
      modelo: "2016",
      cedula: "1055918114",
      nombres: "CRISTIAN DARIO GARCIA GONZALEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "11/09/2024",
      placa: "DSY789",
      modelo: "2017",
      cedula: "43657647",
      nombres: "YESSICA MARCELA CAÑAS HERNANDEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "03/08/2024",
      placa: "FVQ574",
      modelo: "2019",
      cedula: "901516261",
      nombres: "CORPORACION VISION CORPORATION"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/04/2018",
      placa: "HYS784",
      modelo: "2017",
      cedula: "15448121",
      nombres: "CARDONA PELAEZ FELIX MAURICIO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "27/06/2024",
      placa: "EOV010",
      modelo: "2019",
      cedula: "6513066",
      nombres: "RODRIGUEZ VASQUEZ,JORGE ADALBERTO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "05/08/2019",
      placa: "JBL876",
      modelo: "2016",
      cedula: "42690486",
      nombres: "ADRIANA MARIA HENAO LOPERA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "03/02/2025",
      placa: "JSV361",
      modelo: "2021",
      cedula: "32544193",
      nombres: "PELAEZ ESPINOSA ROSA ANGELICA"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "30/07/2024",
      placa: "FHN415",
      modelo: "2009",
      cedula: "8237584",
      nombres: "LUIS ZAPATA CARDONA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "FUP591",
      modelo: "2019",
      cedula: "1104407409",
      nombres: "JUAN CAMILO CASTRILLON COTERA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "31/12/2024",
      placa: "FUP629",
      modelo: "2018",
      cedula: "1037625353",
      nombres: "JHOAN CAMILO GUARIN GALLEGO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/07/2024",
      placa: "EIL717",
      modelo: "2018",
      cedula: "71365197",
      nombres: "LOPEZ PALACIO JUAN CAMILO, ."
  },
  {
      compañia: "MAPFRE",
      finvigencia: "28/10/2024",
      placa: "JSQ770",
      modelo: "2020",
      cedula: "26259942",
      nombres: "MENA IBARGUEN LUZ STELLA"
  },
  {
      compañia: "PREVISORA",
      finvigencia: "22/11/2024",
      placa: "UEL248",
      modelo: "2015",
      cedula: "42896174",
      nombres: "LOPEZ VALENCIA ANGELA MARGARIT"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "03/11/2024",
      placa: "JCR705",
      modelo: "2017",
      cedula: "15328759",
      nombres: "ALEXANDER ARMANDO RUA LOPEZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "30/09/2022",
      placa: "HGY082",
      modelo: "2014",
      cedula: "16716477",
      nombres: "JUAN CARLOS LEDEZMA PITO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "30/07/2024",
      placa: "EON064",
      modelo: "2019",
      cedula: "1152687171",
      nombres: "JUAN CAMILO SALAZAR ARISTIZABAL"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "05/08/2024",
      placa: "JPT211",
      modelo: "2021",
      cedula: "70413338",
      nombres: "Jorge Restrepo"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "21/11/2020",
      placa: "HGV331",
      modelo: "2014",
      cedula: "43526350",
      nombres: "GLORIA LUCIA AGUDELO CASTAÑO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "21/02/2025",
      placa: "JKN389",
      modelo: "2018",
      cedula: "70502752",
      nombres: "CARLOS MARIO ESTRADA ALVAREZ"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "06/09/2024",
      placa: "JBQ904",
      modelo: "2017",
      cedula: "1152702308",
      nombres: "HOLGUIN ZAPATA LAURA MARITZA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "20/07/2021",
      placa: "GVM162",
      modelo: "2020",
      cedula: "1128471583",
      nombres: "ERIKA JULIETH ESTRADA VELASQUEZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "01/09/2023",
      placa: "FCQ550",
      modelo: "2007",
      cedula: "8027650",
      nombres: "ANDRES FELIPE SUAREZ MEJIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/07/2024",
      placa: "DHZ810",
      modelo: "2012",
      cedula: "32353155",
      nombres: "AMARILES GIRALDO, LINA YORLENNY"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "10/06/2022",
      placa: "JSV525",
      modelo: "2022",
      cedula: "43879105",
      nombres: "GOMEZ ANGEL ANGELA MARIA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "10/11/2024",
      placa: "HTY274",
      modelo: "2014",
      cedula: "71180006",
      nombres: "EDGAR ALBERTO ROBLEDO CASTANO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/05/2020",
      placa: "DQY221",
      modelo: "2018",
      cedula: "1093212920",
      nombres: "ARANGO AGUDELO HUGO ALEJANDRO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "14/07/2024",
      placa: "HPL082",
      modelo: "2014",
      cedula: "1067840894",
      nombres: "ESPINOZA CAIAFFA CLAUDIA MARCELA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "29/08/2024",
      placa: "JOR621",
      modelo: "2021",
      cedula: "35892153",
      nombres: "CASTA-O SANCHEZ ENEIDA LORENA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/02/2024",
      placa: "JKL719",
      modelo: "2017",
      cedula: "901442534",
      nombres: "SR INVERSIONES S.A.S"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "17/03/2022",
      placa: "NEM821",
      modelo: "2013",
      cedula: "98566257",
      nombres: "LOPERA ALVAREZ,FABIO ALBERTO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "31/07/2024",
      placa: "GVM437",
      modelo: "2020",
      cedula: "42680330",
      nombres: "GLORIA INES GAVIRIA ARROYAVE"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "01/12/2024",
      placa: "KBS490",
      modelo: "2024",
      cedula: "1233508366",
      nombres: "KAREN TATIANA BEJARANO SOTELO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/07/2024",
      placa: "GHV275",
      modelo: "2020",
      cedula: "43608382",
      nombres: "LIGIA VICTORIA, DELGADO GONZALEZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "14/10/2024",
      placa: "JKP573",
      modelo: "2018",
      cedula: "42082249",
      nombres: "MARIA NUBIA PINZON UTIMA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "31/08/2023",
      placa: "GEZ091",
      modelo: "2019",
      cedula: "80760304",
      nombres: "CASTRO ANAYA, LUIS FERNANDO"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "03/08/2024",
      placa: "HZP166",
      modelo: "2015",
      cedula: "71752906",
      nombres: "LOPEZ PINO CARLOS MARIO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "16/02/2025",
      placa: "HEY035",
      modelo: "2013",
      cedula: "70084303",
      nombres: "William Dario Calle Bustamante"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/02/2024",
      placa: "GWY764",
      modelo: "2020",
      cedula: "43813442",
      nombres: "ECHAVARRIA HUTTA, ALEJANDRA PATRICIA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "31/07/2024",
      placa: "JBL845",
      modelo: "2016",
      cedula: "98553280",
      nombres: "MERCANTE GARC?A LIONELLO BORIS"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "31/07/2024",
      placa: "HGW148",
      modelo: "2014",
      cedula: "8283087",
      nombres: "CARLOS ARTURO RESTREPO MESA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "12/12/2024",
      placa: "JBP066",
      modelo: "2017",
      cedula: "1036619842",
      nombres: "KELLY TATIANA SERNA LOPEZ"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "01/08/2024",
      placa: "DCQ105",
      modelo: "2010",
      cedula: "24824878",
      nombres: "BEATRIZ ELENA SALGADO TORO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/09/2024",
      placa: "MJT781",
      modelo: "2014",
      cedula: "34561285",
      nombres: "LOPEZ RODRIGUEZ, OLGA LUCIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/11/2024",
      placa: "IHU127",
      modelo: "2016",
      cedula: "43113451",
      nombres: "GUTIERREZ TOBON, YENI SARID"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/07/2024",
      placa: "DJO097",
      modelo: "2012",
      cedula: "32018063",
      nombres: "BUSTAMANTE HIGUITA,EVA INES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "28/03/2024",
      placa: "FCZ445",
      modelo: "2007",
      cedula: "98545687",
      nombres: "CARLOS FERNANDO JARAMILLO VASQUEZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/03/2024",
      placa: "GVP890",
      modelo: "2020",
      cedula: "43531883",
      nombres: "TORO GARCIA, SILVIA ELENA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "29/03/2019",
      placa: "DEU721",
      modelo: "2011",
      cedula: "71718108",
      nombres: "HERNANDEZ LOPEZ, EDGAR JAIME ."
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "22/11/2024",
      placa: "IFM493",
      modelo: "2016",
      cedula: "71364117",
      nombres: "LUIS ORLANDO TRUJILLO ZAPATA"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "30/11/2024",
      placa: "JKK028",
      modelo: "2017",
      cedula: "4133935",
      nombres: "BLANCO BLANCO FELICIANO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "31/07/2024",
      placa: "FQT887",
      modelo: "2019",
      cedula: "8103552",
      nombres: "JHON GERMAN FRANCO JARABA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/03/2024",
      placa: "MTX165",
      modelo: "2013",
      cedula: "1128273614",
      nombres: "CESAR AUGUSTO BERNAL OSORIO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "26/10/2024",
      placa: "JST618",
      modelo: "2020",
      cedula: "80237160",
      nombres: "Diego Mauricio Quijano Ordo?ez"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "09/06/2024",
      placa: "IYU316",
      modelo: "2017",
      cedula: "3414948",
      nombres: "VILLADA ECHEVERRI JOSE ANTONI"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "08/09/2023",
      placa: "IAN992",
      modelo: "2014",
      cedula: "1130674968",
      nombres: "DIANA ISLENY YEPES RESTREPO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/04/2024",
      placa: "UBK084",
      modelo: "2015",
      cedula: "1017221128",
      nombres: "JACOBO VALENCIA MESA"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "19/05/2024",
      placa: "DNM416",
      modelo: "2017",
      cedula: "1000204048",
      nombres: "PINEDA OSPINA SEBASTIAN"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/05/2019",
      placa: "USW108",
      modelo: "2015",
      cedula: "8909039388",
      nombres: "BANCOLOMBIA SA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "27/05/2024",
      placa: "HNW818",
      modelo: "2014",
      cedula: "1039451698",
      nombres: "LUZ YAMILE AGUILAR"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "31/07/2024",
      placa: "FQT226",
      modelo: "2019",
      cedula: "70782812",
      nombres: "HARNAN DARIO OSORIO CARDONA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/06/2024",
      placa: "MJL668",
      modelo: "2013",
      cedula: "1128432728",
      nombres: "JAVIER ALBERTO CORREAL ORTEGA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/10/2024",
      placa: "FQA386",
      modelo: "2010",
      cedula: "43279182",
      nombres: "GIANELLA DEL PILAR JULIAO MORENO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "31/07/2024",
      placa: "JZN058",
      modelo: "2021",
      cedula: "6645069",
      nombres: "RAMIRO ERNESTO GUTIERREZ ROJO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "31/07/2024",
      placa: "IAP595",
      modelo: "2014",
      cedula: "32512189",
      nombres: "EUCARIS DE LOS DOLORES URIBE R"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "14/06/2023",
      placa: "JPT209",
      modelo: "2020",
      cedula: "31532027",
      nombres: "MARIA TERESA JIMENEZ MARMOLEJO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "31/07/2024",
      placa: "IAZ701",
      modelo: "2016",
      cedula: "71555350",
      nombres: "TANGARIFE CASTA?EDA JESUS ALBEIRO"
  },
  {
      compañia: "SBS",
      finvigencia: "03/02/2023",
      placa: "DEU237",
      modelo: "2012",
      cedula: "1039460448",
      nombres: "SOTO VASQUEZ, DANIEL"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "19/12/2023",
      placa: "JHR821",
      modelo: "2017",
      cedula: "43794870",
      nombres: "GOMEZ SERNA, DIANA PATRICIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "09/11/2024",
      placa: "IHT644",
      modelo: "2016",
      cedula: "19456675",
      nombres: "ZULUAGA RAMIREZ, RAMON IVAN"
  },
  {
      compañia: "ZURICH-QBE",
      finvigencia: "31/08/2024",
      placa: "HFL942",
      modelo: "2014",
      cedula: "71260536",
      nombres: "Jorge Andres Campuzano Gomez"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "31/07/2024",
      placa: "GEN094",
      modelo: "2020",
      cedula: "42973066",
      nombres: "MONICA MARIA GONZALEZ VILLEGAS"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "17/09/2024",
      placa: "EFW784",
      modelo: "2018",
      cedula: "32410429",
      nombres: "BETANCUR VARGAS AMPARO DEL SOC"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "17/11/2022",
      placa: "DJP226",
      modelo: "2013",
      cedula: "21003617",
      nombres: "LUZ MERY MARTINEZ MARTINEZ"
  },
  {
      compañia: "ESTADO",
      finvigencia: "31/07/2022",
      placa: "HSP691",
      modelo: "2014",
      cedula: "51729847",
      nombres: "ELIZABETH TOCORA GONZALEZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "19/11/2024",
      placa: "LAV049",
      modelo: "2011",
      cedula: "1017188618",
      nombres: "GIRALDO NORE?A KATHERINE LISET"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "29/09/2024",
      placa: "JHS653",
      modelo: "2018",
      cedula: "43425622",
      nombres: "Flor Maria Arias Quintero"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "18/09/2021",
      placa: "FQS104",
      modelo: "2019",
      cedula: "1020422226",
      nombres: "JUAN VALENCIA"
  },
  {
      compañia: "SBS",
      finvigencia: "13/12/2023",
      placa: "IYU795",
      modelo: "2017",
      cedula: "1026145108",
      nombres: "LEDESMA, LINA MARCELA"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "09/12/2024",
      placa: "EOK969",
      modelo: "2019",
      cedula: "71876637",
      nombres: "RIOS CORREA LUIS FERNANDO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/09/2024",
      placa: "GRM870",
      modelo: "2020",
      cedula: "37010016",
      nombres: "VELASCO TULCANAZA, ELSA LUCIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/09/2024",
      placa: "JOZ875",
      modelo: "2020",
      cedula: "1037586290",
      nombres: "YEPES SOTO SEBASTIAN ."
  },
  {
      compañia: "LIBERTY",
      finvigencia: "10/06/2024",
      placa: "GVR272",
      modelo: "2020",
      cedula: "32510203",
      nombres: "Esperanza Isaac De fernandez"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "17/10/2023",
      placa: "EFV022",
      modelo: "2018",
      cedula: "1045024289",
      nombres: "PEREZ ARANGUREN DIANA CAROLINA"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "10/04/2024",
      placa: "ENZ408",
      modelo: "2019",
      cedula: "36592158",
      nombres: "SÁNCHEZ VILLA, NERIS MARÍA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "24/06/2024",
      placa: "JKN969",
      modelo: "2018",
      cedula: "43975210",
      nombres: "JOHANNA MARCELA VARELAS MANCO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "20/09/2024",
      placa: "USV553",
      modelo: "2016",
      cedula: "1017165839",
      nombres: "MU?OZ GRANADA DARMYNS BLAINIER"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/08/2023",
      placa: "DMK802",
      modelo: "2013",
      cedula: "72044444",
      nombres: "CARLOS ALBERTO SALAS SAUCEDO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "01/03/2024",
      placa: "JON765",
      modelo: "2020",
      cedula: "71599757",
      nombres: "CARLOS DARIO SEPULVEDA OSORIO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/05/2024",
      placa: "JQU247",
      modelo: "2022",
      cedula: "43523455",
      nombres: "GOMEZ ESTRADA, ORFA LEIDY"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/06/2024",
      placa: "KEM740",
      modelo: "2017",
      cedula: "1128417039",
      nombres: "ANDRES FELIPE RODRIGUEZ VELASQUEZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "22/12/2024",
      placa: "HZN964",
      modelo: "2015",
      cedula: "70693246",
      nombres: "FRANCISCO ORLANDO GIRALDO ARISTIZABAL"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/10/2024",
      placa: "MIY720",
      modelo: "2013",
      cedula: "43340325",
      nombres: "MARLENY RODRIGUEZ GARRO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/09/2024",
      placa: "MSS799",
      modelo: "2013",
      cedula: "71686265",
      nombres: "FARLEY ALBERTO SIERRA ACOSTA"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "08/01/2025",
      placa: "EOL804",
      modelo: "2019",
      cedula: "1143464310",
      nombres: "FONSECA HERRERA JAILER"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "18/08/2024",
      placa: "IHQ590",
      modelo: "2016",
      cedula: "70072542",
      nombres: "GARCIA LOPERA JOSE GUILLERMO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "25/08/2023",
      placa: "DIU395",
      modelo: "2011",
      cedula: "1020104404",
      nombres: "LUISA MARIA VELASQUEZ ZULUAGA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "21/01/2023",
      placa: "KMR917",
      modelo: "2012",
      cedula: "8341493",
      nombres: "CORREA GUZMAN JOSE GERMAN"
  },
  {
      compañia: "SBS",
      finvigencia: "09/09/2023",
      placa: "GEN516",
      modelo: "2020",
      cedula: "1036620000",
      nombres: "ESTRADA QUINTERO, JUAN PABLO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/09/2023",
      placa: "JHS644",
      modelo: "2017",
      cedula: "1128268628",
      nombres: "OSCAR FELIPE CIFUENTES SALAZAR"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "04/11/2022",
      placa: "HCZ940",
      modelo: "2014",
      cedula: "1017148726",
      nombres: "NATALIA ANDREA JARAMILLO MAZO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "30/01/2023",
      placa: "FQU949",
      modelo: "2019",
      cedula: "1035418834",
      nombres: "MARIO TORRES"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "27/11/2024",
      placa: "EOK938",
      modelo: "2019",
      cedula: "98537483",
      nombres: "AGUDELO VANEGA, NELSON ARMANDO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/11/2024",
      placa: "IYQ576",
      modelo: "2016",
      cedula: "71383417",
      nombres: "OSCAR MAURICIO ORTEGA OSPINA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "08/08/2024",
      placa: "IOS400",
      modelo: "2016",
      cedula: "1020458791",
      nombres: "CRISTIAN LUBIER VELASQUEZ BETANCUR"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "09/08/2024",
      placa: "KGU675",
      modelo: "2010",
      cedula: "21824065",
      nombres: "ANGELA MARIA GARCIA RESTREPO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "14/05/2024",
      placa: "HAL285",
      modelo: "2014",
      cedula: "43878907",
      nombres: "GOMEZ BECERRA, LILIANA KATERINE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "08/01/2019",
      placa: "KGV116",
      modelo: "2010",
      cedula: "1152458865",
      nombres: "DANIEL ZULUAGA BECERRA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "13/12/2024",
      placa: "EIK286",
      modelo: "2018",
      cedula: "43826031",
      nombres: "GONZALEZ GRANADOS NANCY ESTELLA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "22/04/2024",
      placa: "MOY023",
      modelo: "2011",
      cedula: "3493480",
      nombres: "JENARO DE JESUS RIVERA TOBON"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/09/2024",
      placa: "HYT517",
      modelo: "2017",
      cedula: "39456279",
      nombres: "NATALIA LUCIA MUÑOZ DUQUE"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "14/08/2024",
      placa: "MNV582",
      modelo: "2008",
      cedula: "94527697",
      nombres: "ISAZA ZULUAGA MAURICIO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "17/11/2022",
      placa: "MOL501",
      modelo: "2009",
      cedula: "71769291",
      nombres: "FABIO ENRIQUE DUQUE CIRO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/12/2021",
      placa: "MOV189",
      modelo: "2010",
      cedula: "70782377",
      nombres: "JOHN JAIRO PALACIO YEPES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "26/05/2023",
      placa: "GXR360",
      modelo: "2020",
      cedula: "43875965",
      nombres: "ALEJANDRA MARIA GUTIERREZ YEPES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "12/01/2025",
      placa: "GVQ213",
      modelo: "2020",
      cedula: "32226479",
      nombres: "DIANA MARIA MONTOYA LOPERA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "23/11/2022",
      placa: "JZO022",
      modelo: "2022",
      cedula: "1232394284",
      nombres: "NEYLER ALEJANDRO ESCALANTE CARRILLO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "08/12/2020",
      placa: "JBK861",
      modelo: "2017",
      cedula: "30338838",
      nombres: "PAULA ANDREA VALENCIA QUINTERO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "23/10/2024",
      placa: "MTZ440",
      modelo: "2013",
      cedula: "43598660",
      nombres: "SALAZAR VALLEJO YENNI PATRICIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/05/2024",
      placa: "EHL807",
      modelo: "2018",
      cedula: "71364783",
      nombres: "GOMEZ GIRALDO, JUAN CARLOS"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "24/08/2024",
      placa: "HNV405",
      modelo: "2014",
      cedula: "98541519",
      nombres: "MOLINA MORENO JUAN CARLOS"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "09/08/2024",
      placa: "EOW523",
      modelo: "2019",
      cedula: "1037630462",
      nombres: "CONTRERAS MU?OZ JHON"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "15/02/2025",
      placa: "JSV576",
      modelo: "2021",
      cedula: "32512853",
      nombres: "MONCADA CAMARGO,CLARA CATALINA"
  },
  {
      compañia: "PREVISORA",
      finvigencia: "06/09/2024",
      placa: "IAR918",
      modelo: "2015",
      cedula: "1040750009",
      nombres: "ATEHORTUA MESA JUAN PABLO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "05/01/2025",
      placa: "JEU166",
      modelo: "2017",
      cedula: "9006514562",
      nombres: "CONSTRU22 SAS"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "01/10/2024",
      placa: "JDO851",
      modelo: "2016",
      cedula: "43831233",
      nombres: "ELIZABETH CRISTINA ORTIZ BETAN"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "17/02/2025",
      placa: "GRL898",
      modelo: "2020",
      cedula: "63524399",
      nombres: "SANCHEZ SARMIENTO MAGDAJAZMIN"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "22/06/2024",
      placa: "USW507",
      modelo: "2016",
      cedula: "70579754",
      nombres: "Nevio Esteban Correa Carvajal"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "09/08/2024",
      placa: "IEV013",
      modelo: "2015",
      cedula: "70112407",
      nombres: "LUIS BERNARDO ARROYAVE FRANCO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "13/04/2024",
      placa: "EFU903",
      modelo: "2018",
      cedula: "79379475",
      nombres: "LOPEZ ROMERO NESTOR ENRRIQUE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "10/08/2021",
      placa: "JOT467",
      modelo: "2021",
      cedula: "75046489",
      nombres: "JUAN DE DIOS GRISALES GALLEGO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/09/2024",
      placa: "JCR313",
      modelo: "2017",
      cedula: "22029223",
      nombres: "MIRIAM TRUJILLO CIRO"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "28/09/2024",
      placa: "BXW642",
      modelo: "2012",
      cedula: "98701625",
      nombres: "JUAN ESTEBAN CADAVID OSORIO"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "18/01/2025",
      placa: "DHY561",
      modelo: "2011",
      cedula: "8351634",
      nombres: "OSCAR JULIO JARAMILLO ESTRADA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "10/08/2023",
      placa: "JYR371",
      modelo: "2022",
      cedula: "71740772",
      nombres: "JAIRO ANDRES GUTIERREZ HENAO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "12/05/2024",
      placa: "JPT353",
      modelo: "2020",
      cedula: "901389132",
      nombres: "TLM INTERNATIONAL LOGISTIC SAS"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "09/11/2024",
      placa: "HAN328",
      modelo: "2014",
      cedula: "1037584258",
      nombres: "CAMILA MOLINA MOLINA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "03/03/2025",
      placa: "EPT301",
      modelo: "2019",
      cedula: "45763516",
      nombres: "MONTOYA SERRANO BEATRIZ ELENA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "05/03/2024",
      placa: "IAW483",
      modelo: "2015",
      cedula: "71795092",
      nombres: "JUAN PABLO PARDO ARANGO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "28/11/2024",
      placa: "GWV964",
      modelo: "2020",
      cedula: "43655326",
      nombres: "BINIS SHIRLEY VIANA PADILLA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "05/12/2024",
      placa: "GWU592",
      modelo: "2020",
      cedula: "71266780",
      nombres: "LONDO?O CHAVARRIA, JOHN ALEXANDER"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "15/09/2024",
      placa: "DHZ912",
      modelo: "2012",
      cedula: "42086259",
      nombres: "MARIA MERCEDES CELADES HERNANDEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "19/01/2023",
      placa: "EOT750",
      modelo: "2019",
      cedula: "70548630",
      nombres: "ALVARO ACEVEDO LOPEZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "25/05/2024",
      placa: "JCN959",
      modelo: "2017",
      cedula: "42766657",
      nombres: "OLGA LUCIA CANO PALACIO"
  },
  {
      compañia: "HDI SEGUROS",
      finvigencia: "13/07/2024",
      placa: "GEW118",
      modelo: "2020",
      cedula: "21895399",
      nombres: "SALGADO CASTRO, LUZ MERY"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/04/2023",
      placa: "ZZX730",
      modelo: "2015",
      cedula: "1216721034",
      nombres: "LISETH HENAO GOMEZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "20/09/2024",
      placa: "EOX347",
      modelo: "2019",
      cedula: "79838939",
      nombres: "ULLOA P HECTOR GONZALO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "10/01/2025",
      placa: "HGT614",
      modelo: "2014",
      cedula: "1152459368",
      nombres: "VAHOS GIRALDO, SANTIAGO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "01/01/2025",
      placa: "ENZ798",
      modelo: "2019",
      cedula: "1128277978",
      nombres: "JUAN FERNANDO BOTERO MEJIA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/07/2024",
      placa: "GEX322",
      modelo: "2020",
      cedula: "43204036",
      nombres: "MARIA PAULA MARIN RODRIGUEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/04/2024",
      placa: "IYP307",
      modelo: "2016",
      cedula: "43257363",
      nombres: "ELIZABETH VELEZ LONDOÑO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "21/09/2023",
      placa: "MOQ673",
      modelo: "2010",
      cedula: "21391004",
      nombres: "CLEMENTINA RUIZ GOMEZ"
  },
  {
      compañia: "SOLIDARIA",
      finvigencia: "06/09/2023",
      placa: "INQ063",
      modelo: "2016",
      cedula: "1035879176",
      nombres: "LOAIZA BECERRA ANDERSON FELIPE"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "26/09/2024",
      placa: "IST136",
      modelo: "2016",
      cedula: "11297468",
      nombres: "PEDRO MOLANO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "29/04/2024",
      placa: "INN483",
      modelo: "2016",
      cedula: "71389201",
      nombres: "RAUL ALEXANDER POSADA HINCAPIE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "29/07/2024",
      placa: "NAV266",
      modelo: "2009",
      cedula: "1017206272",
      nombres: "WILSON BOTERO ZULUAGA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "13/12/2024",
      placa: "IAW374",
      modelo: "2015",
      cedula: "22668076",
      nombres: "HOYOS TUIRAN, LUZ AMPARO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "28/07/2024",
      placa: "UEL722",
      modelo: "2015",
      cedula: "43072192",
      nombres: "LOPEZ LOPEZ, ALBA ROCIO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/07/2024",
      placa: "GEL126",
      modelo: "2020",
      cedula: "43191054",
      nombres: "MARIA CRISTINA FORONDA OCHOA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/08/2024",
      placa: "HXT453",
      modelo: "2014",
      cedula: "8534449",
      nombres: "JOEL ERNESTO ZABALETA ARROYO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "13/03/2024",
      placa: "FXR390",
      modelo: "2019",
      cedula: "98545021",
      nombres: "GERMAN ALONSO HERNANDEZ PEREZ"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "02/06/2024",
      placa: "JBT778",
      modelo: "2016",
      cedula: "77195900",
      nombres: "JAIRO YAIR JIMENEZ DELGADO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/06/2022",
      placa: "GVO815",
      modelo: "2020",
      cedula: "1036646941",
      nombres: "CINDY JOHANNA SARRAZOLA CHAVARRIA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "10/08/2024",
      placa: "JPT218",
      modelo: "2020",
      cedula: "43838356",
      nombres: "MARY LUZ ACEVEDO CASTANEDA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "26/07/2024",
      placa: "RHO906",
      modelo: "2011",
      cedula: "21265938",
      nombres: "MARIA LIGIA MORENO DE IBARRA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "20/06/2022",
      placa: "USX938",
      modelo: "2016",
      cedula: "1017269682",
      nombres: "DANIEL SANCHEZ VELASQUEZ"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "10/08/2024",
      placa: "JIY803",
      modelo: "2018",
      cedula: "98712135",
      nombres: "EDWIN BALBIN TOBON"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/11/2024",
      placa: "EGZ814",
      modelo: "2018",
      cedula: "1100955704",
      nombres: "JIMENEZ ALFARO,ANDERSON DAMIAN"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/04/2024",
      placa: "IAR098",
      modelo: "2015",
      cedula: "1102816510",
      nombres: "KELY JHOANNA RAMIREZ GONZALEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "11/12/2022",
      placa: "REK760",
      modelo: "2011",
      cedula: "1216720402",
      nombres: "KARLA DAYHANA CANO CANO"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "10/08/2024",
      placa: "IAV325",
      modelo: "2015",
      cedula: "1128425434",
      nombres: "WILMAR DANIEL GOMEZ MONSALVE"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "29/11/2024",
      placa: "FQW330",
      modelo: "2019",
      cedula: "1152205489",
      nombres: "VELEZ MESA, CATALINA MARIA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "06/09/2024",
      placa: "FXR614",
      modelo: "2019",
      cedula: "1056772848",
      nombres: "DEYNIS SOLANYI CIRO DUQUE"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/08/2022",
      placa: "IYR492",
      modelo: "2016",
      cedula: "22197479",
      nombres: "MIRYAM DEL SOCORRO TORO GRANADA"
  },
  {
      compañia: "MUNDIAL",
      finvigencia: "06/01/2023",
      placa: "IUA669",
      modelo: "2012",
      cedula: "71600412",
      nombres: "JORGE CHAVERRA CARDONA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "01/12/2024",
      placa: "JKL540",
      modelo: "2017",
      cedula: "91136328",
      nombres: "FRANKLIM MAURICIO MATEUS GAITAN"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "07/01/2025",
      placa: "IAU125",
      modelo: "2015",
      cedula: "1000415008",
      nombres: "Maria Jose Velez Baena"
  },
  {
      compañia: "EQUIDAD",
      finvigencia: "10/08/2024",
      placa: "MJL467",
      modelo: "2013",
      cedula: "43081843",
      nombres: "PEDRAZA VALENCIA ADRIANA DEL SOCORRO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "29/10/2023",
      placa: "IOT348",
      modelo: "2016",
      cedula: "32018000",
      nombres: "MARTHA LUCIA TABORDA ESTRADA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "27/02/2025",
      placa: "UDQ003",
      modelo: "2016",
      cedula: "70422002",
      nombres: "RESTREPO FRANCO, JOSE MAURICIO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "10/01/2023",
      placa: "HAL440",
      modelo: "2014",
      cedula: "1022095625",
      nombres: "VIVIANA ALEJANDRA MORALES CARD"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "27/12/2024",
      placa: "IHR700",
      modelo: "2016",
      cedula: "42842549",
      nombres: "ASTRID MILENA GIL ATEHORTUA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "25/08/2024",
      placa: "FQS320",
      modelo: "2019",
      cedula: "10180630",
      nombres: "JOSE ARGEMIRO"
  },
  {
      compañia: "MAPFRE",
      finvigencia: "13/02/2021",
      placa: "IGU378",
      modelo: "2016",
      cedula: "37250460",
      nombres: "CASANOVA DE GARCIA VIAINNEY LUCRECIA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/10/2022",
      placa: "MNW163",
      modelo: "2008",
      cedula: "43725039",
      nombres: "VIVIANA PATRICIA ALVAREZ GOMEZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/08/2022",
      placa: "JHS141",
      modelo: "2018",
      cedula: "21399788",
      nombres: "GLADIS DEL SOCORRO MEJIA TORO"
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "27/01/2025",
      placa: "JQS037",
      modelo: "2021",
      cedula: "901201874",
      nombres: "PRINT DIGITAL GRAN FORMATO S.A.S."
  },
  {
      compañia: "ESTADO",
      finvigencia: "30/10/2024",
      placa: "JBQ386",
      modelo: "2017",
      cedula: "1046916184",
      nombres: "DIEGO ANDRES ROJAS ZULUAGA"
  },
  {
      compañia: "ESTADO",
      finvigencia: "28/12/2024",
      placa: "GIK890",
      modelo: "2020",
      cedula: "43974535",
      nombres: "LADY VERONICA SERNA CASTAÑO"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "02/03/2021",
      placa: "KFM956",
      modelo: "2014",
      cedula: "42654919",
      nombres: "ALBANIS YANETH MARTINEZ IBAÑEZ"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "10/08/2024",
      placa: "UBV789",
      modelo: "2015",
      cedula: "26330893",
      nombres: "MURILLO PEREA,LUZ STELLA"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "01/07/2024",
      placa: "DHZ791",
      modelo: "2011",
      cedula: "1128401566",
      nombres: "NATALIA , RINCON OCHOA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/12/2024",
      placa: "JQS117",
      modelo: "2021",
      cedula: "811011779",
      nombres: "RENTING COLOMBIA S.A.S."
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/03/2023",
      placa: "GEV176",
      modelo: "2020",
      cedula: "811011779",
      nombres: "RENTING COLOMBIA S.A.S."
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "02/06/2022",
      placa: "JZO895",
      modelo: "2022",
      cedula: "42782669",
      nombres: "EIDER EDILMA RUIZ LUNA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "31/01/2024",
      placa: "EMM173",
      modelo: "2019",
      cedula: "91076735",
      nombres: "JULIAN MAURICIO LOPEZ MARTINEZ"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "01/11/2018",
      placa: "WCS116",
      modelo: "2014",
      cedula: "8600029644",
      nombres: "BANCO DE BOGOTA S. A."
  },
  {
      compañia: "BOLIVAR",
      finvigencia: "25/09/2023",
      placa: "IAR035",
      modelo: "2015",
      cedula: "1152218786",
      nombres: "MIGUEL ANGEL CARDOZO PRISCO"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "22/03/2023",
      placa: "EHN091",
      modelo: "2018",
      cedula: "32398484",
      nombres: "RESTREPO DUQUE MARIA VICTORIA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "23/08/2024",
      placa: "GHZ039",
      modelo: "2020",
      cedula: "1070917575",
      nombres: "WALNER PALACIOS MURILLO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "01/12/2024",
      placa: "JOR383",
      modelo: "2020",
      cedula: "43912489",
      nombres: "ERIKA CATALINA MONTOYA"
  },
  {
      compañia: "LIBERTY",
      finvigencia: "22/08/2024",
      placa: "EPT518",
      modelo: "2019",
      cedula: "98545515",
      nombres: "DIEGO ALBERTO RAYO MORALES"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "24/12/2024",
      placa: "GKZ891",
      modelo: "2020",
      cedula: "1017122431",
      nombres: "RENE ALEJANDRO DUQUE GOMEZ"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "03/10/2024",
      placa: "GEZ140",
      modelo: "2019",
      cedula: "71271974",
      nombres: "HUBERNEY JESUS JESUS"
  },
  {
      compañia: "ALLIANZ",
      finvigencia: "30/12/2024",
      placa: "EFV008",
      modelo: "2018",
      cedula: "71604325",
      nombres: "OTALVARO VALENCIA,JUAN CARLOS"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "06/12/2022",
      placa: "GVP589",
      modelo: "2020",
      cedula: "1152184310",
      nombres: "DANIEL GARCIA ARTEAGA"
  },
  {
      compañia: "AXA COLPATRIA",
      finvigencia: "01/08/2024",
      placa: "MVT860",
      modelo: "2014",
      cedula: "1040752847",
      nombres: "YEPES LONDONO ALEJANDRA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "11/08/2024",
      placa: "GVN499",
      modelo: "2020",
      cedula: "8343459",
      nombres: "JOSE SAUL SIERRA CORREA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "11/08/2024",
      placa: "INN437",
      modelo: "2015",
      cedula: "71786021",
      nombres: "JUAN FERNANDO JARAMILLO ZULUAGA"
  },
  {
      compañia: "SURAMERICANA",
      finvigencia: "28/04/2024",
      placa: "MXZ132",
      modelo: "2014",
      cedula: "98667697",
      nombres: "ROBERT NG HENAO"
  },
  {
      compañia: "ESTADO",
      finvigencia: "25/01/2024",
      placa: "HEQ593",
      modelo: "2018",
      cedula: "1037637450",
      nombres: "MATEO FRANCO AGUDELO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/12/2024",
      "placa": "JHT537",
      "modelo": "2018",
      "cedula": "71744684",
      "nombres": "ALVARO DANILO BALDOVINO ALCENDRA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/03/2024",
      "placa": "JHP590",
      "modelo": "2017",
      "cedula": "1152449930",
      "nombres": "DANIELA ROMAN GOMEZ"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "28/03/2024",
      "placa": "HEW422",
      "modelo": "2019",
      "cedula": "98561005",
      "nombres": "ACEVEDO BUILES, EDWIN OSVALDO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "30/07/2024",
      "placa": "EOS739",
      "modelo": "2019",
      "cedula": "43579701",
      "nombres": "FLOREZ BOTERO, ALEXANDRA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "17/08/2024",
      "placa": "JPS631",
      "modelo": "2020",
      "cedula": "98546382",
      "nombres": "PALACIO MONTOYA JOSE IGNACIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "11/08/2024",
      "placa": "KBW341",
      "modelo": "2010",
      "cedula": "29810773",
      "nombres": "STELLA CARMONA CARO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2021",
      "placa": "CMZ491",
      "modelo": "2014",
      "cedula": "1075251743",
      "nombres": "CORDOBA OME SAULO ANDRES"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "11/08/2022",
      "placa": "KKF470",
      "modelo": "2013",
      "cedula": "8774681",
      "nombres": "RODOLFO UCROS ROSALES"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "30/06/2024",
      "placa": "FOQ091",
      "modelo": "2019",
      "cedula": "9001945158",
      "nombres": "GRUPO COLOMBIANO DE DESARROLLO LTDA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "13/01/2023",
      "placa": "DJO555",
      "modelo": "2012",
      "cedula": "65764166",
      "nombres": "MURCIA MORALES, MARTHA CECILIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "07/11/2024",
      "placa": "JQR922",
      "modelo": "2021",
      "cedula": "15668499",
      "nombres": "JOSE UBEL LOPEZ VILLA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "28/04/2024",
      "placa": "DSU665",
      "modelo": "2017",
      "cedula": "71775413",
      "nombres": "ZULUAGA GOMEZ, DAVID ALEJANDRO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/10/2024",
      "placa": "JPT777",
      "modelo": "2021",
      "cedula": "1037578258",
      "nombres": "ALEJANDRO QUINTERO FLOREZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "29/12/2023",
      "placa": "DNL562",
      "modelo": "2016",
      "cedula": "1144057451",
      "nombres": "PUENTES MANOSALVA KAREN TATIAN"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "11/08/2024",
      "placa": "GEV549",
      "modelo": "2019",
      "cedula": "9272319",
      "nombres": "VILLARREAL COMAS, RAFAEL JOSE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "17/09/2019",
      "placa": "HZP172",
      "modelo": "2015",
      "cedula": "43161206",
      "nombres": "MARIA EUGENIA COLORADO MESA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "17/09/2024",
      "placa": "EIM218",
      "modelo": "2018",
      "cedula": "42788066",
      "nombres": "GIRALDO ZULUAGA, NANCY AMPARO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "25/05/2024",
      "placa": "IYP289",
      "modelo": "2016",
      "cedula": "1213154",
      "nombres": "Xavier Oswaldo Vivar Guerra"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "24/05/2024",
      "placa": "EOT972",
      "modelo": "2018",
      "cedula": "43986183",
      "nombres": "MARILYN DIOSA ECHEVERRI"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "07/10/2023",
      "placa": "JBO122",
      "modelo": "2017",
      "cedula": "43536158",
      "nombres": "SANDRA ESCUDERO CESPEDES"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "11/03/2024",
      "placa": "JPT304",
      "modelo": "2021",
      "cedula": "1128269611",
      "nombres": "JULIAN RAMIREZ LEMA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "27/09/2022",
      "placa": "RNK168",
      "modelo": "2012",
      "cedula": "43265368",
      "nombres": "LEIDI CATALINA URIBE DURANGO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "17/08/2024",
      "placa": "JCO326",
      "modelo": "2017",
      "cedula": "42123844",
      "nombres": "Lina Ramirez"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "16/05/2024",
      "placa": "IYP930",
      "modelo": "2016",
      "cedula": "32243770",
      "nombres": "MORENO CRUZ, CATALINA"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "16/12/2024",
      "placa": "GEL144",
      "modelo": "2020",
      "cedula": "70126310",
      "nombres": "GIRALDO HENAO JAIME ARTURO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "10/05/2024",
      "placa": "MTZ225",
      "modelo": "2013",
      "cedula": "71668584",
      "nombres": "FERNANDO PEREZ QUIGUA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "11/08/2024",
      "placa": "UER764",
      "modelo": "2016",
      "cedula": "71613351",
      "nombres": "VANEGAS OSORIO,JORGE HUMBERTO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "JYU659",
      "modelo": "2022",
      "cedula": "1061691352",
      "nombres": "ORTIZ BUITRON JEIMYALEXANDRA, ."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/11/2024",
      "placa": "GVP704",
      "modelo": "2020",
      "cedula": "98706233",
      "nombres": "CARLOS ANDRES REYES GOMEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "12/03/2024",
      "placa": "GXR226",
      "modelo": "2020",
      "cedula": "1036638246",
      "nombres": "LOPEZ GIL, DAVID ESTEBAN"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "04/02/2024",
      "placa": "KAS224",
      "modelo": "2015",
      "cedula": "43989102",
      "nombres": "BEATRIZ ARIAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "IEX325",
      "modelo": "2015",
      "cedula": "42821462",
      "nombres": "MARIA CECILIA BARRIENTOS MORENO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "JPW805",
      "modelo": "2021",
      "cedula": "43556674",
      "nombres": "NANCY ADRIANA LOPERA TOBON"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "03/08/2024",
      "placa": "LAX247",
      "modelo": "2017",
      "cedula": "1020462911",
      "nombres": "SANDRA MILENA JARAMILLO HERNAN"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2024",
      "placa": "EOU213",
      "modelo": "2019",
      "cedula": "71731070",
      "nombres": "WVEIMAR ENRIQUE LONDO?O ALVAREZ, ."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "04/03/2022",
      "placa": "NDX747",
      "modelo": "2013",
      "cedula": "1065588407",
      "nombres": "LAIDIS JOHANA QUINTERO VILLEGAS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "18/11/2024",
      "placa": "DZZ313",
      "modelo": "2018",
      "cedula": "43402089",
      "nombres": "BOTERO DUQUE BEATRIZ ELENA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/04/2024",
      "placa": "DEQ742",
      "modelo": "2012",
      "cedula": "43979856",
      "nombres": "VERONICA RAMIREZ DURANGO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "24/12/2024",
      "placa": "GBU655",
      "modelo": "2020",
      "cedula": "42935425",
      "nombres": "TOBON SANCHEZ, LIGIA DEL SOCORRO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/09/2024",
      "placa": "JOR036",
      "modelo": "2021",
      "cedula": "32225117",
      "nombres": "ANA CECILIA BALBIN LONDOÑO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "17/06/2024",
      "placa": "MIX907",
      "modelo": "2013",
      "cedula": "1037263147",
      "nombres": "BARBAN CORREA, DIDIER JOSE"
  },
  {
      "compañia": "SBS",
      "finvigencia": "29/03/2024",
      "placa": "GZU036",
      "modelo": "2020",
      "cedula": "52794141",
      "nombres": "GONZALEZ ARIZA GLORIA PATRICIA,"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "24/01/2025",
      "placa": "GWV839",
      "modelo": "2020",
      "cedula": "1037572412",
      "nombres": "SANCHEZ OSORIO MARIA LESLY"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "25/01/2023",
      "placa": "JDL128",
      "modelo": "2017",
      "cedula": "1037572698",
      "nombres": "DIANA PAOLA URREA LOPERA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "06/11/2024",
      "placa": "GVN321",
      "modelo": "2020",
      "cedula": "42872343",
      "nombres": "AGUDELO OLAYA, DORA LUZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "06/05/2024",
      "placa": "EGX733",
      "modelo": "2018",
      "cedula": "71411394",
      "nombres": "JOHN FERNANDO GIRALDO GUERRA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/02/2024",
      "placa": "MNU128",
      "modelo": "2008",
      "cedula": "800097373",
      "nombres": "TODO COMERCIO DE CONFECCIONES S.A.S."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/08/2024",
      "placa": "IAO134",
      "modelo": "2015",
      "cedula": "1037580069",
      "nombres": "PABLO JOSE CARDONA BERRIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "03/02/2024",
      "placa": "EPP553",
      "modelo": "2019",
      "cedula": "71387801",
      "nombres": "MAURICIO ALEXANDER ALZATE MONTOYA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "24/04/2024",
      "placa": "FSM483",
      "modelo": "2020",
      "cedula": "1095812558",
      "nombres": "GRATERON REY, JESSICA TATIANA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "26/10/2024",
      "placa": "GHV954",
      "modelo": "2020",
      "cedula": "1037618354",
      "nombres": "ESTEBAN ESCOBAR RAMIREZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "17/07/2024",
      "placa": "GEM046",
      "modelo": "2020",
      "cedula": "1077428548",
      "nombres": "CA?ADAS MORENO, RAUL ANDRES"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "17/07/2022",
      "placa": "KIV746",
      "modelo": "2011",
      "cedula": "71270443",
      "nombres": "DIEGO MAURICIO URIBE ARANGO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "07/04/2024",
      "placa": "JSR146",
      "modelo": "2021",
      "cedula": "901089445",
      "nombres": "RENTING T&T S.A.S"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/10/2022",
      "placa": "HJQ947",
      "modelo": "2013",
      "cedula": "98534692",
      "nombres": "ARLEY HOYOS LOPEZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "12/08/2024",
      "placa": "GJV176",
      "modelo": "2020",
      "cedula": "16274226",
      "nombres": "LENIS GARCIA LUIS FERNANDO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "12/08/2024",
      "placa": "JOQ224",
      "modelo": "2020",
      "cedula": "1128281168",
      "nombres": "MENDEZ HERNANDEZ, PABLO ANDRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/08/2024",
      "placa": "EIK113",
      "modelo": "2018",
      "cedula": "1152458601",
      "nombres": "DANIEL GOMEZ GOMEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/04/2024",
      "placa": "JMO974",
      "modelo": "2021",
      "cedula": "9012530154",
      "nombres": "EQUIRENT VEHICULOS Y MAQUINARIA S.A.S. BIC"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/06/2024",
      "placa": "HEZ605",
      "modelo": "2014",
      "cedula": "42824843",
      "nombres": "MONTOYA MONTOYA,JACKELINE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/10/2024",
      "placa": "EPU255",
      "modelo": "2019",
      "cedula": "43589059",
      "nombres": "CLAUDIA PATRICIA RESTREPO BASTIDAS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "12/07/2024",
      "placa": "MSR772",
      "modelo": "2013",
      "cedula": "1037573471",
      "nombres": "ALVAREZ CEBALLOS, CESAR AUGUSTO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/08/2024",
      "placa": "RIG507",
      "modelo": "2008",
      "cedula": "1152707542",
      "nombres": "KEVIN ESTEBAN TORRES OSORIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/04/2024",
      "placa": "JCQ213",
      "modelo": "2017",
      "cedula": "8393535",
      "nombres": "HERNAN DARIO RESTREPO BERMUDEZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "17/08/2024",
      "placa": "JCP030",
      "modelo": "2016",
      "cedula": "1128384350",
      "nombres": "MUNOZ FLOREZ ROBERTO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "20/11/2024",
      "placa": "MXY751",
      "modelo": "2014",
      "cedula": "1039464294",
      "nombres": "JUAN CAMILO CUERVO PERDOMO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/07/2024",
      "placa": "UEM057",
      "modelo": "2015",
      "cedula": "32180418",
      "nombres": "ANA KARENINA OSPINA ARBOLEDA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "02/08/2024",
      "placa": "ICX172",
      "modelo": "2015",
      "cedula": "43619389",
      "nombres": "GRANDA ATEHORTUA LINA MARIA,"
  },
  {
      "compañia": "MUNDIAL",
      "finvigencia": "24/11/2024",
      "placa": "FUM798",
      "modelo": "2019",
      "cedula": "71331939",
      "nombres": "CESAR MESA PATINO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "02/08/2024",
      "placa": "MTV868",
      "modelo": "2013",
      "cedula": "42898052",
      "nombres": "ECHEVERRI ECHAVARRIA MARIA PATRICIA,"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "19/12/2023",
      "placa": "GHZ846",
      "modelo": "2021",
      "cedula": "71531819",
      "nombres": "Wilson Antonio Cano Ruiz"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/06/2024",
      "placa": "JQU276",
      "modelo": "2022",
      "cedula": "800251566",
      "nombres": "A SELLASEG INGENIERIA S.A.S."
  },
  {
      "compañia": "SBS",
      "finvigencia": "02/08/2024",
      "placa": "DSY806",
      "modelo": "2017",
      "cedula": "1036627036",
      "nombres": "MURILLO LOPEZ, DANIEL FELIPE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2020",
      "placa": "MOU278",
      "modelo": "2010",
      "cedula": "1037580163",
      "nombres": "LUISA FERNANDA FORRERO MURCIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/06/2024",
      "placa": "GEX285",
      "modelo": "2019",
      "cedula": "657538678",
      "nombres": "STEVEN LIN PFIRMAN"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "20/01/2025",
      "placa": "DIL570",
      "modelo": "2011",
      "cedula": "71783634",
      "nombres": "RIOS VELASQUEZ DORIAN ALEIXER"
  },
  {
      "compañia": "SBS",
      "finvigencia": "16/02/2023",
      "placa": "JCN371",
      "modelo": "2017",
      "cedula": "98634548",
      "nombres": "CORREA RODRIGUEZ, NELSON EDUARDO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "31/12/2024",
      "placa": "EPS118",
      "modelo": "2019",
      "cedula": "42999064",
      "nombres": "MARGARITA MARIA DE LOS RIOS AL"
  },
  {
      "compañia": "SBS",
      "finvigencia": "02/08/2024",
      "placa": "DIK227",
      "modelo": "2012",
      "cedula": "71317940",
      "nombres": "SUAREZ GONZALEZ HERN?N ALONSO,"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "IST442",
      "modelo": "2016",
      "cedula": "98622759",
      "nombres": "SERGIO IGNACIO MESA ROMERO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "30/09/2024",
      "placa": "EIM012",
      "modelo": "2018",
      "cedula": "9015203423",
      "nombres": "MANA SAS"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "12/08/2024",
      "placa": "FSW318",
      "modelo": "2019",
      "cedula": "1128430898",
      "nombres": "GOMEZ URAN, YURANI ANDREA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/11/2021",
      "placa": "HZN147",
      "modelo": "2015",
      "cedula": "1017156026",
      "nombres": "JUAN DAVID OSPINA VILLA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "01/03/2024",
      "placa": "KBT881",
      "modelo": "2011",
      "cedula": "70328879",
      "nombres": "RODRIGUEZ ARIAS, MILTON EDWIN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "17/04/2019",
      "placa": "FRT810",
      "modelo": "2019",
      "cedula": "85010143",
      "nombres": "JORGE MIGUEL QUEVEDO BORRERO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/03/2024",
      "placa": "INO239",
      "modelo": "2016",
      "cedula": "43069142",
      "nombres": "GUISAO BUSTAMANTE,LUZ DARY"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/12/2024",
      "placa": "EPT689",
      "modelo": "2019",
      "cedula": "1001013745",
      "nombres": "FELIPE MAYA RUBIO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "INR025",
      "modelo": "2017",
      "cedula": "71215801",
      "nombres": "HARBEY MAURICIO BASTIDAS LOPERA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/11/2024",
      "placa": "IDY557",
      "modelo": "2015",
      "cedula": "71707092",
      "nombres": "RAFAEL DAVID MEJIA OSSA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/12/2018",
      "placa": "URS478",
      "modelo": "2015",
      "cedula": "80802805",
      "nombres": "ANDRES CAMILO PULIDO CONTRERAS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "22/11/2024",
      "placa": "KMS329",
      "modelo": "2012",
      "cedula": "98506153",
      "nombres": "CESAR AUGUSTO CARMONA LOPEZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "12/08/2024",
      "placa": "HGW377",
      "modelo": "2014",
      "cedula": "3493219",
      "nombres": "HORACIO DE JESUS ZULUAGA GOMEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "04/12/2021",
      "placa": "GVP823",
      "modelo": "2020",
      "cedula": "43683382",
      "nombres": "ADRIANA PATRICIA VASQUEZ ROJAS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "09/04/2023",
      "placa": "DFU891",
      "modelo": "2011",
      "cedula": "98667628",
      "nombres": "ZULUAGA ANGULO,JORGE DAVID"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "01/11/2024",
      "placa": "IEY166",
      "modelo": "2015",
      "cedula": "1037632877",
      "nombres": "ESCOBAR CASTA?O LINA MARIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/02/2024",
      "placa": "EPS429",
      "modelo": "2019",
      "cedula": "1036633432",
      "nombres": "NATHALY GONZALEZ RESTREPO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "18/08/2024",
      "placa": "EHK534",
      "modelo": "2018",
      "cedula": "1037573582",
      "nombres": "STIVEN GALEANO RIOS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "05/01/2025",
      "placa": "GIK043",
      "modelo": "2020",
      "cedula": "1001234986",
      "nombres": "EMERSON MU?OZ GOMEZ"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "29/09/2023",
      "placa": "JPK001",
      "modelo": "2021",
      "cedula": "1107098692",
      "nombres": "CHRISTIAN DAVID RIVERA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/05/2024",
      "placa": "GIK908",
      "modelo": "2020",
      "cedula": "1039457967",
      "nombres": "DANIEL FELIPE CASTRILLON ARROYAVE, ."
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/08/2019",
      "placa": "JCO137",
      "modelo": "2016",
      "cedula": "43432333",
      "nombres": "GOMEZ GONZALEZ,LUZ STELLA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/07/2024",
      "placa": "JQT691",
      "modelo": "2022",
      "cedula": "1128418230",
      "nombres": "CARLOS DAVID MORENO RAIGOZA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "09/10/2024",
      "placa": "GIK650",
      "modelo": "2021",
      "cedula": "43918745",
      "nombres": "QUINTERO CARMONA EILIANA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "28/12/2023",
      "placa": "JZM130",
      "modelo": "2021",
      "cedula": "71272696",
      "nombres": "DAVID ALONSO CARDONA PEREZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "31/08/2024",
      "placa": "JBP678",
      "modelo": "2017",
      "cedula": "71631991",
      "nombres": "VALENCIA QUINTERO, MANUEL SALVADOR"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/08/2021",
      "placa": "FBS717",
      "modelo": "2006",
      "cedula": "43988941",
      "nombres": "JHUDY NATALIA RAMIREZ DUQUE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "08/06/2022",
      "placa": "JCQ573",
      "modelo": "2017",
      "cedula": "8433501",
      "nombres": "yovany giraldo"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/08/2024",
      "placa": "HAN489",
      "modelo": "2014",
      "cedula": "1017153039",
      "nombres": "JUAN SEBASTIAN RODRIGUEZ ATEHORTUA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2022",
      "placa": "FQU846",
      "modelo": "2019",
      "cedula": "1037632620",
      "nombres": "CONTRERAS NASILOWSKA,JUAN DAVID"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "20/03/2024",
      "placa": "JYR596",
      "modelo": "2022",
      "cedula": "88157775",
      "nombres": "ACEVEDO ARAQUE, NESTOR JOSE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "09/11/2020",
      "placa": "UUV836",
      "modelo": "2016",
      "cedula": "52517365",
      "nombres": "PAULA ANDREA AVILA BARBOSA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/12/2024",
      "placa": "DJM370",
      "modelo": "2012",
      "cedula": "42990857",
      "nombres": "MARIA LILIA RODRIGUEZ VASQUEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "21/11/2024",
      "placa": "DLW832",
      "modelo": "2012",
      "cedula": "1020402043",
      "nombres": "VERONICA MARIA HENAO MEJIA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "17/02/2024",
      "placa": "FQU746",
      "modelo": "2019",
      "cedula": "43836602",
      "nombres": "BETANCUR RENDON, MARIA CRISTIN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "17/08/2024",
      "placa": "FQP783",
      "modelo": "2018",
      "cedula": "70322786",
      "nombres": "SERGIO LEON ARBOLEDA SIERRA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "31/08/2024",
      "placa": "JIY424",
      "modelo": "2017",
      "cedula": "79618903",
      "nombres": "ELKIN MARIN AGUDELO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "02/10/2024",
      "placa": "EPP133",
      "modelo": "2018",
      "cedula": "16234651",
      "nombres": "GIRALDO GIRALDO, WILSON ANTONIO"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "22/09/2023",
      "placa": "ICZ336",
      "modelo": "2015",
      "cedula": "98557730",
      "nombres": "JARAMILLO TOBON JOHN JAIRO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/12/2024",
      "placa": "JOR382",
      "modelo": "2020",
      "cedula": "32353549",
      "nombres": "NAYIBE LONDOÃO ZAPATA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/06/2022",
      "placa": "INQ133",
      "modelo": "2017",
      "cedula": "1040754274",
      "nombres": "LUISA FERNANDA ESTRADA PEREZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/12/2019",
      "placa": "EPW917",
      "modelo": "2019",
      "cedula": "10879007",
      "nombres": "LUIS ANGEL ARISTIZABAL RAMIREZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "16/11/2024",
      "placa": "JIW278",
      "modelo": "2017",
      "cedula": "15329027",
      "nombres": "JARAMILLO MACIAS, JORGE ELIAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/08/2022",
      "placa": "IUE102",
      "modelo": "2021",
      "cedula": "1037640405",
      "nombres": "ANGIE MARCELA ZULUAGA BOLAÑOS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/08/2024",
      "placa": "MFZ008",
      "modelo": "2013",
      "cedula": "43500297",
      "nombres": "LILIANA VEGA OSPINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/08/2021",
      "placa": "JPT251",
      "modelo": "2020",
      "cedula": "71361507",
      "nombres": "NELSON ANDRES HERNANDEZ MOLINA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "15/02/2024",
      "placa": "FIU437",
      "modelo": "2021",
      "cedula": "1045018017",
      "nombres": "VERGARA ESCUDERO, GLORIA PATRI"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "MOL799",
      "modelo": "2009",
      "cedula": "71740484",
      "nombres": "QUICENO ZAPATA, PATRICIO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "13/08/2024",
      "placa": "KMQ265",
      "modelo": "2012",
      "cedula": "43255486",
      "nombres": "ROLDAN VILLA,ANA MARIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "JQS939",
      "modelo": "2021",
      "cedula": "71336968",
      "nombres": "ALVARO RUEDA LEDESMA, ."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "20/02/2022",
      "placa": "UEL687",
      "modelo": "2015",
      "cedula": "1020394255",
      "nombres": "DIANA MARIA MARIN BEDOYA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "17/08/2024",
      "placa": "GEV534",
      "modelo": "2019",
      "cedula": "42877796",
      "nombres": "DORA LIA BETANCUR BERRUECOS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/07/2024",
      "placa": "KBX336",
      "modelo": "2010",
      "cedula": "1037616443",
      "nombres": "GABRIEL JAIME PAREJA ARANGO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "25/10/2024",
      "placa": "GJM482",
      "modelo": "2020",
      "cedula": "1143165132",
      "nombres": "LINA MARIA CHEDRAUI BARRETO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "IOV267",
      "modelo": "2016",
      "cedula": "43620475",
      "nombres": "RUIZ GUERRA, LINA TATIANA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/10/2024",
      "placa": "JOQ274",
      "modelo": "2021",
      "cedula": "42875742",
      "nombres": "MARGARITA MARIA PATIÑO HOYOS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "06/06/2024",
      "placa": "DSY326",
      "modelo": "2018",
      "cedula": "25773161",
      "nombres": "ERIKA GALLEGO MEDINA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/12/2024",
      "placa": "HGW076",
      "modelo": "2014",
      "cedula": "98529142",
      "nombres": "WILLIAM ANUBIS HENAO BUSTAMANTE"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "13/08/2024",
      "placa": "FVY916",
      "modelo": "2020",
      "cedula": "71335158",
      "nombres": "RODRIGUEZ SOTO ALBEIRO DE JESUS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "11/04/2023",
      "placa": "IWS774",
      "modelo": "2017",
      "cedula": "8046070",
      "nombres": "OSORIO SAAVEDRA PEDRO ANGEL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/10/2021",
      "placa": "EPS439",
      "modelo": "2019",
      "cedula": "43285313",
      "nombres": "NANCY PATRICIA FORONDA LONDOÑO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/03/2024",
      "placa": "FXP962",
      "modelo": "2019",
      "cedula": "5579945",
      "nombres": "BENJAMIN RANGEL SERRANO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/08/2024",
      "placa": "HGU393",
      "modelo": "2014",
      "cedula": "43208580",
      "nombres": "RUTH YANETH BERNAL CASTA?O"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "31/10/2024",
      "placa": "GIK727",
      "modelo": "2020",
      "cedula": "1037572739",
      "nombres": "CARLOS OSWALDO MORA MONTOYA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/11/2023",
      "placa": "GVN298",
      "modelo": "2020",
      "cedula": "71222278",
      "nombres": "LUIS ALFONSO VELEZ POSADA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "11/01/2024",
      "placa": "IHR834",
      "modelo": "2016",
      "cedula": "1214713082",
      "nombres": "LUISA FERNANDA VILLA PELAEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "30/07/2020",
      "placa": "EPS755",
      "modelo": "2019",
      "cedula": "1045077279",
      "nombres": "EDUAR DE JESUS MU?OZ MAZO ."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/02/2024",
      "placa": "DIV927",
      "modelo": "2011",
      "cedula": "1037599333",
      "nombres": "SEBASTIAN MUÑOZ BURBANO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "13/08/2024",
      "placa": "DSX638",
      "modelo": "2017",
      "cedula": "1037572496",
      "nombres": "TATIANA GOMEZ VENEGAS"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "02/11/2023",
      "placa": "ENZ504",
      "modelo": "2018",
      "cedula": "1002227837",
      "nombres": "PALMERA FERRET, DAYANA CAROLIN"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "17/04/2024",
      "placa": "JKL527",
      "modelo": "2017",
      "cedula": "75098475",
      "nombres": "GRISALES GARCIA CARLOS MARIO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "06/02/2025",
      "placa": "GHX514",
      "modelo": "2019",
      "cedula": "1036623235",
      "nombres": "CAROLINA SAMPEDRO MORALES"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "11/12/2024",
      "placa": "EIM663",
      "modelo": "2018",
      "cedula": "98519968",
      "nombres": "GUSTAVO BUSTAMANTE BERRIO"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "30/07/2023",
      "placa": "IYP867",
      "modelo": "2016",
      "cedula": "1152202503",
      "nombres": "LOPERA SERNA MAYERLYN"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "30/09/2023",
      "placa": "JCM948",
      "modelo": "2017",
      "cedula": "1152439023",
      "nombres": "MACIAS GAVIRIA YESIKA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "29/09/2021",
      "placa": "UEM221",
      "modelo": "2015",
      "cedula": "1000099712",
      "nombres": "MESA MEJIA,FELIPE"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "31/07/2023",
      "placa": "HXW140",
      "modelo": "2014",
      "cedula": "1017231746",
      "nombres": "SANTIAGO GRAJALES MONTANO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "06/06/2024",
      "placa": "GEK534",
      "modelo": "2019",
      "cedula": "70566290",
      "nombres": "RODRIGO ANTONIO AGUDELO ZAPATA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/12/2023",
      "placa": "JHO910",
      "modelo": "2017",
      "cedula": "43181838",
      "nombres": "MARLY JULIETH LARA GALEANO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "13/08/2024",
      "placa": "ISU104",
      "modelo": "2016",
      "cedula": "8247181",
      "nombres": "NAVARRO DUQUE,JOSE VICENTE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/08/2022",
      "placa": "LAV665",
      "modelo": "2013",
      "cedula": "70058714",
      "nombres": "ALVARO DE JESUS LOPEZ TORRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/10/2023",
      "placa": "EFX471",
      "modelo": "2017",
      "cedula": "43205714",
      "nombres": "PAULA VILLA RESTREPO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "25/02/2023",
      "placa": "UES975",
      "modelo": "2015",
      "cedula": "93376577",
      "nombres": "CHAUX PARRA JOSE YILMER"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "30/09/2024",
      "placa": "JCO539",
      "modelo": "2017",
      "cedula": "98653228",
      "nombres": "MIGUEL ANGEL TORRES AGUDELO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "16/09/2024",
      "placa": "EPS713",
      "modelo": "2019",
      "cedula": "42902644",
      "nombres": "VALENCIA AGUDELO, ELSA MARIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "17/08/2024",
      "placa": "GEN831",
      "modelo": "2020",
      "cedula": "1036928017",
      "nombres": "KAREN ELISA GIL FRANCO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "15/09/2024",
      "placa": "IEW730",
      "modelo": "2015",
      "cedula": "43250881",
      "nombres": "GIRALDO GIRALDO, MAGDORI"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/08/2024",
      "placa": "USX003",
      "modelo": "2016",
      "cedula": "21872383",
      "nombres": "LUCELLY LOPEZ SUAREZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/08/2024",
      "placa": "KHS507",
      "modelo": "2012",
      "cedula": "71230903",
      "nombres": "ZAPATA ORTIZ,JORGE ANDRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "24/07/2018",
      "placa": "IVM998",
      "modelo": "2016",
      "cedula": "1006331132",
      "nombres": "CASTILLO MENDOZA MAYRA LICETH"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "05/04/2024",
      "placa": "JQS613",
      "modelo": "2020",
      "cedula": "9013293766",
      "nombres": "TE GUIAMOS SAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/08/2024",
      "placa": "GWY240",
      "modelo": "2020",
      "cedula": "1152191289",
      "nombres": "LISETH YAMILE GIRALDO DURANGO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "13/07/2024",
      "placa": "GRQ297",
      "modelo": "2020",
      "cedula": "43922530",
      "nombres": "RESTREPO CASTA?O, ANGELA MARIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "28/08/2024",
      "placa": "GVK572",
      "modelo": "2020",
      "cedula": "1017231825",
      "nombres": "SALAZAR MENESES MARIA PAULINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/12/2022",
      "placa": "KCX110",
      "modelo": "2017",
      "cedula": "66725445",
      "nombres": "LUZ ANGELA LOPEZ TORRES"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "28/01/2025",
      "placa": "FHC425",
      "modelo": "2009",
      "cedula": "42821473",
      "nombres": "MARIA EUGENIA BERRIO ECHEVERRI"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/08/2024",
      "placa": "DLY433",
      "modelo": "2013",
      "cedula": "8232228",
      "nombres": "LUIS ALBERTO RESTREPO PENAGOS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "25/08/2024",
      "placa": "MTX381",
      "modelo": "2013",
      "cedula": "1128443298",
      "nombres": "LUISA FERNANDA GIL LOPEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "06/11/2023",
      "placa": "GVM224",
      "modelo": "2020",
      "cedula": "71633967",
      "nombres": "PIO QUINTO RAMIREZ CASTRO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "04/03/2024",
      "placa": "DFU912",
      "modelo": "2012",
      "cedula": "1017227893",
      "nombres": "TOVAR ROMERO, CRISTIAN ANDRES"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "07/12/2024",
      "placa": "MJL713",
      "modelo": "2013",
      "cedula": "43621705",
      "nombres": "RODRIGUEZ VASQUEZ SHIRLEY JANETH ."
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/12/2024",
      "placa": "JJK623",
      "modelo": "2017",
      "cedula": "43203510",
      "nombres": "LEIDY HELENA LARA CASTA?EDA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "28/01/2023",
      "placa": "EFV768",
      "modelo": "2018",
      "cedula": "1020441696",
      "nombres": "Yesika Paola Gomez Valderrama"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "12/06/2020",
      "placa": "MUQ740",
      "modelo": "2014",
      "cedula": "1144124050",
      "nombres": "JENNIFER TATIANA TORRES ZAMBRANO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/08/2024",
      "placa": "FCV769",
      "modelo": "2007",
      "cedula": "8390479",
      "nombres": "JUAN TOBIAS BUILES VELASQUEZ"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "31/03/2024",
      "placa": "DES971",
      "modelo": "2011",
      "cedula": "1152453451",
      "nombres": "TUBERQUIA CHICA, DANIELA ALEJA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/08/2024",
      "placa": "USU128",
      "modelo": "2015",
      "cedula": "43614413",
      "nombres": "CORREA JARAMILLO, CLARA PATRICIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "28/08/2023",
      "placa": "GRR139",
      "modelo": "2020",
      "cedula": "1094879618",
      "nombres": "ZAPATA ESTEBAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/10/2023",
      "placa": "INN056",
      "modelo": "2016",
      "cedula": "43036500",
      "nombres": "BERTA LUCIA OSPINA RUA"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "23/12/2024",
      "placa": "HXX811",
      "modelo": "2015",
      "cedula": "71225378",
      "nombres": "HINCAPIE ARISTIZABAL YOHN FREDY"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "07/02/2023",
      "placa": "IAY690",
      "modelo": "2016",
      "cedula": "71942861",
      "nombres": "OSCAR MAURICIO VELASQUEZ ACOSTA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/03/2024",
      "placa": "USY129",
      "modelo": "2016",
      "cedula": "43039867",
      "nombres": "OLGA CECILIA SUAREZ POSADA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/12/2024",
      "placa": "JIW646",
      "modelo": "2017",
      "cedula": "1020414925",
      "nombres": "BETIN SOLANO, MARIEL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/04/2024",
      "placa": "IAW749",
      "modelo": "2014",
      "cedula": "1214726391",
      "nombres": "JOSE ALEJANDRO TAMARA VALERA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "11/09/2023",
      "placa": "DSY949",
      "modelo": "2017",
      "cedula": "22836394",
      "nombres": "DEMOYA ELIS DEL CARMEN GARCIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "14/08/2022",
      "placa": "DYS060",
      "modelo": "2010",
      "cedula": "6102773",
      "nombres": "JOHN JAIRO QUINTERO GOMEZ"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "16/01/2024",
      "placa": "FXQ738",
      "modelo": "2020",
      "cedula": "1039461505",
      "nombres": "JENIFER ALEXANDRA YEPES QUINCHIA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "05/09/2023",
      "placa": "DLV619",
      "modelo": "2012",
      "cedula": "20789970",
      "nombres": "MARIA REAL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "03/10/2019",
      "placa": "HZL588",
      "modelo": "2013",
      "cedula": "43202818",
      "nombres": "PAULA ANDREA ROJAS PANIAGUA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "14/08/2024",
      "placa": "ENZ162",
      "modelo": "2019",
      "cedula": "32488828",
      "nombres": "OSPINA ARIAS, MARTA ELENA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/08/2024",
      "placa": "IHT975",
      "modelo": "2016",
      "cedula": "43435355",
      "nombres": "ADRIANA PATRICIA ZAPATA RODRIGUEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/01/2024",
      "placa": "EPP738",
      "modelo": "2018",
      "cedula": "31194287",
      "nombres": "LUCY VICTORIA RIVERA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "02/08/2024",
      "placa": "DEP992",
      "modelo": "2012",
      "cedula": "42990074",
      "nombres": "VALENCIA PATI?O BEATRIZ ELENA,"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "17/10/2024",
      "placa": "JOQ133",
      "modelo": "2020",
      "cedula": "1026130472",
      "nombres": "HERRERA SALAZAR JORGE ARMANDO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "16/02/2024",
      "placa": "ISS078",
      "modelo": "2016",
      "cedula": "1026131478",
      "nombres": "VALENCIA GALLEGO MARIA EUGENIA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "28/01/2025",
      "placa": "IAT684",
      "modelo": "2015",
      "cedula": "43089522",
      "nombres": "MARIA SOLEDAD GARZON MADRID"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "26/09/2024",
      "placa": "KAS069",
      "modelo": "2014",
      "cedula": "1128478367",
      "nombres": "BILLY TORO RODRIGUEZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "10/11/2024",
      "placa": "IOQ428",
      "modelo": "2016",
      "cedula": "71791225",
      "nombres": "JUAN PABLO ELORZA MORALES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "17/03/2024",
      "placa": "JQT726",
      "modelo": "2021",
      "cedula": "8105486",
      "nombres": "GERARDO CUARTAS SALDARRIAGA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/06/2024",
      "placa": "INO922",
      "modelo": "2016",
      "cedula": "75039010",
      "nombres": "LUIS ELADIO MARIN MARIN"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "28/01/2025",
      "placa": "JNR629",
      "modelo": "2021",
      "cedula": "16646461",
      "nombres": "FARAH ZACCOUR CHRISTIAN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "14/08/2024",
      "placa": "MUT998",
      "modelo": "2013",
      "cedula": "8388747",
      "nombres": "MIGUEL ANGEL ROLDAN ARROYAVE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/01/2024",
      "placa": "ELK295",
      "modelo": "2008",
      "cedula": "1020407044",
      "nombres": "YENNY JHOANA OSORIO OCHOA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "14/08/2024",
      "placa": "KHP424",
      "modelo": "2011",
      "cedula": "98551379",
      "nombres": "PAUL GERHARD SCHULLE URHAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/09/2024",
      "placa": "FUN541",
      "modelo": "2019",
      "cedula": "43877222",
      "nombres": "LAURA MARIA BOTERO LOMBANA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "11/12/2023",
      "placa": "JBR216",
      "modelo": "2017",
      "cedula": "66741433",
      "nombres": "LIDIA IRENE LOPEZ ALVAREZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "23/11/2023",
      "placa": "MFW026",
      "modelo": "2012",
      "cedula": "71679934",
      "nombres": "NORIEL DARIO LOPEZ OSPINA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/12/2024",
      "placa": "HYT237",
      "modelo": "2017",
      "cedula": "32320006",
      "nombres": "GLORIA ELENA RODRIGUEZ VALENCIA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "30/06/2024",
      "placa": "KPQ432",
      "modelo": "2022",
      "cedula": "1087556993",
      "nombres": "EDGAR ALEJANDRO MARIN MARIN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/08/2024",
      "placa": "JHT457",
      "modelo": "2018",
      "cedula": "98537313",
      "nombres": "LUIS ENRIQUE OSPINA RENDON"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "16/09/2024",
      "placa": "MOT269",
      "modelo": "2010",
      "cedula": "8399529",
      "nombres": "MU?OZ ZAPATA JOHN JAIRO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "05/12/2024",
      "placa": "JZN468",
      "modelo": "2022",
      "cedula": "43918334",
      "nombres": "ELIANA CAROLINA PEREZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "GEN797",
      "modelo": "2020",
      "cedula": "43428426",
      "nombres": "SANCHEZ MARIA DEL CARMEN"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "20/04/2024",
      "placa": "GRL595",
      "modelo": "2020",
      "cedula": "18521142",
      "nombres": "RODRIGUEZ JUAN GUILLERMO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "JOR823",
      "modelo": "2020",
      "cedula": "43744552",
      "nombres": "MARGARITA ROSA SOTO BARRIENTOS"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "28/01/2025",
      "placa": "HGW423",
      "modelo": "2014",
      "cedula": "1017222460",
      "nombres": "BURGOS OCAMPO DIEGO ALEXANDER"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "27/07/2024",
      "placa": "EPS912",
      "modelo": "2019",
      "cedula": "890903938",
      "nombres": "BANCOLOMBIA S.A."
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "19/09/2024",
      "placa": "GIK337",
      "modelo": "2020",
      "cedula": "33206526",
      "nombres": "REBECA ALANDETE"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "14/08/2021",
      "placa": "ISR080",
      "modelo": "2016",
      "cedula": "1036622975",
      "nombres": "MONICA GALLO ACEVEDO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "04/01/2025",
      "placa": "GEN775",
      "modelo": "2020",
      "cedula": "70566993",
      "nombres": "HOYOS GOMEZ, FREDY DE JESUS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "16/04/2023",
      "placa": "IYR409",
      "modelo": "2016",
      "cedula": "32544636",
      "nombres": "AGUIRRE CARDONA LAURA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "09/05/2024",
      "placa": "JQS543",
      "modelo": "2021",
      "cedula": "70421215",
      "nombres": "RESTREPO ACEVEDO, WILDER FERNANDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/08/2024",
      "placa": "JIX792",
      "modelo": "2017",
      "cedula": "1037602374",
      "nombres": "LILYANA MARIA GOMEZ GOMEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/12/2024",
      "placa": "FQQ409",
      "modelo": "2018",
      "cedula": "43435248",
      "nombres": "CLAUDIA MARIA OSORIO RUIZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "17/03/2024",
      "placa": "HQP185",
      "modelo": "2022",
      "cedula": "98535462",
      "nombres": "PEREZ OSORIO, JUAN CARLOS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/08/2024",
      "placa": "FQQ397",
      "modelo": "2019",
      "cedula": "8342860",
      "nombres": "IVAN DE JESUS GUTIERREZ ANGEL"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2024",
      "placa": "ENY301",
      "modelo": "2018",
      "cedula": "70129075",
      "nombres": "ESCOBAR HENAO, JHON JAIRO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "28/01/2022",
      "placa": "HGY501",
      "modelo": "2014",
      "cedula": "98631849",
      "nombres": "JUAN GUILLERMO VELASQUEZ VELEZ"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "09/01/2025",
      "placa": "DGV366",
      "modelo": "2019",
      "cedula": "1026153640",
      "nombres": "BRANDON RESTREPO RAMIREZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/02/2022",
      "placa": "IOU256",
      "modelo": "2016",
      "cedula": "1039458669",
      "nombres": "SEBASTIAN MONTOYA DUQUE"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "25/08/2024",
      "placa": "EGK939",
      "modelo": "2018",
      "cedula": "71682683",
      "nombres": "HERNANDEZ GOMEZ JAMES DAVID"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "28/01/2024",
      "placa": "UEN767",
      "modelo": "2015",
      "cedula": "71774711",
      "nombres": "CORREA GIL, GUSTAVO ADOLFO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "28/04/2022",
      "placa": "EHK878",
      "modelo": "2018",
      "cedula": "43838763",
      "nombres": "DORIELA JARAMILLO ESPINOSA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "HYS605",
      "modelo": "2016",
      "cedula": "43692298",
      "nombres": "LENIS DEL CARMEN MORA MEJIA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "09/10/2024",
      "placa": "DSX475",
      "modelo": "2017",
      "cedula": "71268954",
      "nombres": "CASTRO MONSALVE ARNOLDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/08/2022",
      "placa": "IAT139",
      "modelo": "2015",
      "cedula": "43152502",
      "nombres": "MARIA MAGDALENA SANCHEZ MONTOYA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/12/2024",
      "placa": "GIK414",
      "modelo": "2020",
      "cedula": "890903938",
      "nombres": "BANCOLOMBIA S.A"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "15/08/2024",
      "placa": "FIR945",
      "modelo": "2019",
      "cedula": "71752219",
      "nombres": "SANCHEZ MU?ETON, DIDIER ALONSO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/08/2024",
      "placa": "ENZ783",
      "modelo": "2019",
      "cedula": "70557120",
      "nombres": "CARLOS MARIO VELEZ RODRIGUEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "03/08/2024",
      "placa": "JKP238",
      "modelo": "2018",
      "cedula": "1017126255",
      "nombres": "GIRALDO OSORIO, JULIET PAOLA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "15/08/2024",
      "placa": "MXZ010",
      "modelo": "2014",
      "cedula": "3350761",
      "nombres": "Dario De La Cruz Bermudez Loaiza"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/03/2024",
      "placa": "JQT454",
      "modelo": "2022",
      "cedula": "8029122",
      "nombres": "HERRERA VILLA, AIBAN DARIO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "22/02/2022",
      "placa": "GRQ171",
      "modelo": "2020",
      "cedula": "42756089",
      "nombres": "ARANGO VARGAS,GLORIA CECILIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2024",
      "placa": "JIW799",
      "modelo": "2017",
      "cedula": "43551344",
      "nombres": "GARCIA ANDUQUIA, ANGELA YULEMA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/08/2024",
      "placa": "IOR156",
      "modelo": "2016",
      "cedula": "1020493578",
      "nombres": "ANDRES FELIPE JIMENEZ PEREZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "03/05/2024",
      "placa": "HGV882",
      "modelo": "2014",
      "cedula": "43260670",
      "nombres": "GOMEZ BOLIVAR LINA CATALINA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/01/2025",
      "placa": "INM718",
      "modelo": "2016",
      "cedula": "1152219572",
      "nombres": "SARA MARIA RESTREPO ARDILA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "21/10/2024",
      "placa": "GKW450",
      "modelo": "2020",
      "cedula": "9015488211",
      "nombres": "INVERSIONES ZULUGALA S.A.S INVERSIONES ZULUGALA S"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "25/04/2024",
      "placa": "ELO250",
      "modelo": "2018",
      "cedula": "1053768763",
      "nombres": "JUAN FELIPE HOYOS LOPEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/04/2024",
      "placa": "JPX919",
      "modelo": "2021",
      "cedula": "32297495",
      "nombres": "LINA MARCELA GIRALDO RENDON"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "20/03/2024",
      "placa": "IDY727",
      "modelo": "2015",
      "cedula": "43874261",
      "nombres": "OSORNO GUTIERREZ, ADRIANA PATRICIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "17/10/2024",
      "placa": "JIY253",
      "modelo": "2017",
      "cedula": "71339296",
      "nombres": "RICHARD ANDRES GIRALDO PUERTA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "06/02/2024",
      "placa": "EOV743",
      "modelo": "2019",
      "cedula": "32494455",
      "nombres": "AUXILIO DE JESUS PALACIO LOPERA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/04/2024",
      "placa": "JZK026",
      "modelo": "2021",
      "cedula": "98531535",
      "nombres": "MAURICIO BETANCUR SERNA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "20/11/2024",
      "placa": "FRX471",
      "modelo": "2019",
      "cedula": "1037572652",
      "nombres": "ALVAREZ GONZALEZ, LUZ ADRIANA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/08/2024",
      "placa": "DSX094",
      "modelo": "2017",
      "cedula": "1034988218",
      "nombres": "EMILIANA VILLEGAS JARAMILLO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "23/12/2021",
      "placa": "UEO211",
      "modelo": "2015",
      "cedula": "1027740248",
      "nombres": "PEREZ SARA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "18/12/2023",
      "placa": "RCM596",
      "modelo": "2011",
      "cedula": "1040734590",
      "nombres": "GOMEZ LOPEZ JEISSON ALBERTO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/09/2024",
      "placa": "JCQ248",
      "modelo": "2017",
      "cedula": "43875882",
      "nombres": "MARLLY GIOVANNA NAVAS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2024",
      "placa": "IOT781",
      "modelo": "2016",
      "cedula": "71641070",
      "nombres": "BURITICA CADAVID, IVAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/10/2021",
      "placa": "FSX245",
      "modelo": "2019",
      "cedula": "1017208654",
      "nombres": "JULIETH HINCAPIE GUERRA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "16/03/2023",
      "placa": "FXQ011",
      "modelo": "2019",
      "cedula": "98544453",
      "nombres": "RESTREPO VALDERRAMA, SERGIO ANDRES"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/08/2024",
      "placa": "GRL905",
      "modelo": "2020",
      "cedula": "71687890",
      "nombres": "ELKIN OVIDIO AYALA ARANGO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "11/11/2024",
      "placa": "JSR723",
      "modelo": "2021",
      "cedula": "1075290320",
      "nombres": "ALVAREZ AYALA EDWIN ANDRES"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "05/12/2024",
      "placa": "ENZ660",
      "modelo": "2019",
      "cedula": "43035535",
      "nombres": "LUCRECIA DEL SOCORRO RUA OSORNO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "IYR628",
      "modelo": "2016",
      "cedula": "1152224793",
      "nombres": "QUINTERO GIRALDO, VALENTINA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "03/05/2022",
      "placa": "EIL829",
      "modelo": "2018",
      "cedula": "43149146",
      "nombres": "RIVERA VIOLEHT,DIANA LUZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "01/03/2024",
      "placa": "EPS988",
      "modelo": "2019",
      "cedula": "91522097",
      "nombres": "RODRIGO JEREZ ROJAS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "29/11/2023",
      "placa": "DSX839",
      "modelo": "2017",
      "cedula": "71220416",
      "nombres": "VANEGAS QUINTERO, ANDRES FELIPE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "10/06/2024",
      "placa": "GHZ100",
      "modelo": "2020",
      "cedula": "1112773037",
      "nombres": "SALAZAR LOPEZ, SEBASTIAN"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "DMK380",
      "modelo": "2012",
      "cedula": "13177271",
      "nombres": "NAVARRO TORRADO, LUIS EDUARDO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "16/08/2024",
      "placa": "HZM586",
      "modelo": "2015",
      "cedula": "32182777",
      "nombres": "ATEHORTUA , ESPINOSA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "03/06/2023",
      "placa": "JPY157",
      "modelo": "2021",
      "cedula": "1128427560",
      "nombres": "YESID ALBERTO ROLDAN BANQUETH"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "08/03/2024",
      "placa": "EOW168",
      "modelo": "2019",
      "cedula": "71788069",
      "nombres": "OCHOA MARQUEZ, GERMAN ANDRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/01/2022",
      "placa": "IYU226",
      "modelo": "2016",
      "cedula": "43169834",
      "nombres": "SANDRA MARIA ALARCON"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/11/2024",
      "placa": "GEN985",
      "modelo": "2020",
      "cedula": "98638556",
      "nombres": "DANY ALEXANDER ZAPATA SORA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "JOP318",
      "modelo": "2021",
      "cedula": "43875940",
      "nombres": "QUIROS QUINTERO, LYDA EUGENIA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "26/12/2024",
      "placa": "IAX183",
      "modelo": "2015",
      "cedula": "1037620131",
      "nombres": "Ana Maria Alvarez Gomez"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/03/2024",
      "placa": "JCR776",
      "modelo": "2017",
      "cedula": "43909635",
      "nombres": "OMAIRA GONZALEZ MARIN"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "13/09/2024",
      "placa": "MSO780",
      "modelo": "2013",
      "cedula": "91427254",
      "nombres": "CARDENAS GOMEZ FRANCISCOJAVIER"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "25/10/2024",
      "placa": "GVK908",
      "modelo": "2020",
      "cedula": "18510131",
      "nombres": "HECTOR FABIAN CARDONA CUBILLOS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/07/2024",
      "placa": "IAW535",
      "modelo": "2015",
      "cedula": "37931467",
      "nombres": "CLARIVEL DAZA PATINO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "27/11/2023",
      "placa": "KBV279",
      "modelo": "2011",
      "cedula": "1027881325",
      "nombres": "ALVAREZ ESTRADA, LEIDY JOHANNA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/08/2024",
      "placa": "GEN909",
      "modelo": "2020",
      "cedula": "43612936",
      "nombres": "SOL BEATRIZ CASTAÑO GONZALEZ"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "17/09/2024",
      "placa": "BXR270",
      "modelo": "2011",
      "cedula": "1047227252",
      "nombres": "LUGO BADILLO, YESID AHMED"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "28/01/2023",
      "placa": "EOW747",
      "modelo": "2019",
      "cedula": "1000291733",
      "nombres": "JOVANA CAROLINA CASTAÑO FLOREZ"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "16/08/2024",
      "placa": "IAQ431",
      "modelo": "2015",
      "cedula": "39191340",
      "nombres": "FRANCO CASTRO, BIBIANA MARIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "29/04/2024",
      "placa": "JYS902",
      "modelo": "2022",
      "cedula": "98505087",
      "nombres": "PIEDRAHITA ACOSTA, HAIMAR"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "16/08/2024",
      "placa": "DST266",
      "modelo": "2018",
      "cedula": "14232078",
      "nombres": "JOSE NUMAEL BELLO LEON"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "27/09/2024",
      "placa": "GRN211",
      "modelo": "2020",
      "cedula": "43051456",
      "nombres": "VELEZ BARRIENTOS MARITZA DE J"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "01/09/2023",
      "placa": "REQ110",
      "modelo": "2011",
      "cedula": "43972003",
      "nombres": "Liliana Ca?as"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "16/08/2024",
      "placa": "HGZ008",
      "modelo": "2014",
      "cedula": "1152690333",
      "nombres": "GIRALDO VELARDE ANDRES MAURICI"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "01/03/2024",
      "placa": "GHV306",
      "modelo": "2019",
      "cedula": "98696550",
      "nombres": "JAIME ANDRES SANMIGUEL ZAPATA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/07/2024",
      "placa": "IIV865",
      "modelo": "2015",
      "cedula": "74184117",
      "nombres": "NELSON JAVIER VEGA SARMIENTO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/11/2024",
      "placa": "HQP029",
      "modelo": "2019",
      "cedula": "43740474",
      "nombres": "LORENA MARIA BETANCUR RIOS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "05/11/2024",
      "placa": "MHK435",
      "modelo": "2014",
      "cedula": "3840186",
      "nombres": "FABIO ANDRES HERNANDEZ OLMOS"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "07/04/2024",
      "placa": "HZN709",
      "modelo": "2015",
      "cedula": "1035851686",
      "nombres": "LOPEZ TORRES CRISTINA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "18/08/2024",
      "placa": "JKQ157",
      "modelo": "2018",
      "cedula": "71877305",
      "nombres": "OSPINA GARCES HERNANDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/07/2024",
      "placa": "EGM227",
      "modelo": "2018",
      "cedula": "39209093",
      "nombres": "ELDA PATRICIA CARDENAS GALVIS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/10/2021",
      "placa": "IAT005",
      "modelo": "2015",
      "cedula": "1007242124",
      "nombres": "MARIA FERNANDA BERMUDEZ VERGARA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "15/02/2025",
      "placa": "UES006",
      "modelo": "2016",
      "cedula": "98461297",
      "nombres": "edwin Alexander castro Mendez"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "HAO209",
      "modelo": "2015",
      "cedula": "43181678",
      "nombres": "SANDRA MILENA HERNANDEZ MORENO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "17/08/2024",
      "placa": "EFY032",
      "modelo": "2018",
      "cedula": "42879300",
      "nombres": "ROMY DEL SOCORRO FREYDELL GOMEZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "09/07/2024",
      "placa": "JWZ979",
      "modelo": "2022",
      "cedula": "71624960",
      "nombres": "SERNA GOMEZ JUAN JOSE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/10/2022",
      "placa": "EON226",
      "modelo": "2020",
      "cedula": "80409213",
      "nombres": "RAFAEL ENRIQUE GALLO OROZCO"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "15/10/2024",
      "placa": "GEK894",
      "modelo": "2020",
      "cedula": "1098608085",
      "nombres": "SUAREZ SALAZAR LAURA PATRICIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "17/08/2024",
      "placa": "REM017",
      "modelo": "2011",
      "cedula": "42865662",
      "nombres": "GLORIA ELENA TRUJILLO VELASQUE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/05/2021",
      "placa": "JQP439",
      "modelo": "2021",
      "cedula": "8909039388",
      "nombres": "BANCOLOMBIA S.A."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "17/08/2024",
      "placa": "FHD877",
      "modelo": "2009",
      "cedula": "32433844",
      "nombres": "ANA EDILMA LOPEZ GALLEGO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/07/2024",
      "placa": "EGX773",
      "modelo": "2018",
      "cedula": "1001288427",
      "nombres": "BRYAN ALVAREZ SALAZAR"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "17/08/2022",
      "placa": "IUB678",
      "modelo": "2013",
      "cedula": "70420655",
      "nombres": "ORTIZ GONZALEZ JORGE ANDRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/01/2024",
      "placa": "INN955",
      "modelo": "2016",
      "cedula": "7176476",
      "nombres": "GUSTAVO PIRACOCA NUMPAQUE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/11/2024",
      "placa": "JCP720",
      "modelo": "2017",
      "cedula": "71592209",
      "nombres": "OSCAR ANTONIO DOMINGUEZ RIVAS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "23/11/2019",
      "placa": "HQO062",
      "modelo": "2018",
      "cedula": "7634608",
      "nombres": "CIRO RICARDO VEGA DE LA VALLE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2024",
      "placa": "IAW566",
      "modelo": "2015",
      "cedula": "42997806",
      "nombres": "YEPES AGUDELO, LUZ MIRIAM"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "19/08/2024",
      "placa": "MVW350",
      "modelo": "2013",
      "cedula": "98518094",
      "nombres": "GOMEZ SALAZAR, ELKIN ALONSO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "17/08/2022",
      "placa": "FCQ022",
      "modelo": "2006",
      "cedula": "70515977",
      "nombres": "RESTREPO LOPEZ JUAN JOSE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "09/11/2024",
      "placa": "JKK136",
      "modelo": "2017",
      "cedula": "80425498",
      "nombres": "JUAN CARLOS RESTREPO GOMEZ"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "19/12/2024",
      "placa": "GHY045",
      "modelo": "2020",
      "cedula": "43972349",
      "nombres": "RESTREPO LOPEZ LUZ ANDREA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "EHK999",
      "modelo": "2017",
      "cedula": "60357902",
      "nombres": "OMAIRA ASCANIO GARCIA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "06/08/2024",
      "placa": "GEW490",
      "modelo": "2019",
      "cedula": "1038435202",
      "nombres": "FUENTES LOPEZ, HECTOR DARIO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "07/04/2023",
      "placa": "JZM668",
      "modelo": "2021",
      "cedula": "21495221",
      "nombres": "LOPEZ PATI?O MARIA VICTORIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/11/2023",
      "placa": "FQQ079",
      "modelo": "2019",
      "cedula": "1001974181",
      "nombres": "ANGIE PAOLA CAAMAÑO BERROCAL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/11/2022",
      "placa": "JYS164",
      "modelo": "2021",
      "cedula": "860025792",
      "nombres": "RENAULT SOCIEDAD DE FABRICACION DE AUTOMOTORES S.A"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "16/08/2024",
      "placa": "JHO728",
      "modelo": "2017",
      "cedula": "70568120",
      "nombres": "RESTREPO GARCIA JUAN FERNADO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "17/08/2022",
      "placa": "GRM148",
      "modelo": "2020",
      "cedula": "17857613",
      "nombres": "NELIO TAPIA GUTIERREZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/07/2022",
      "placa": "EFW607",
      "modelo": "2017",
      "cedula": "8275827",
      "nombres": "MIGUEL ROBERTO TELLEZ VILLEGAS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/09/2024",
      "placa": "JBN113",
      "modelo": "2017",
      "cedula": "43035046",
      "nombres": "ANGELA MARIA GONZALEZ GIRALDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "09/12/2020",
      "placa": "IWU657",
      "modelo": "2016",
      "cedula": "71140503",
      "nombres": "GILDARDO ANTONIO ESPINOSA LOPEZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "13/06/2023",
      "placa": "JKP371",
      "modelo": "2017",
      "cedula": "98657535",
      "nombres": "JOAQUIN ALEJANDRO VELEZ LLINAS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "29/07/2020",
      "placa": "IRP655",
      "modelo": "2016",
      "cedula": "63444973",
      "nombres": "LUZ STELLA CARVAJAL CACERES"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "31/08/2024",
      "placa": "IYO374",
      "modelo": "2016",
      "cedula": "71051585",
      "nombres": "SUAREZ ELORZA CARLOS ALBERTO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "29/04/2024",
      "placa": "JIV941",
      "modelo": "2016",
      "cedula": "1036633040",
      "nombres": "DIXON GEOVANY RAMIREZ RESTREPO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/08/2024",
      "placa": "DXT235",
      "modelo": "2018",
      "cedula": "1152471200",
      "nombres": "SEBASTIAN CELIS CORTES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/06/2019",
      "placa": "MVR978",
      "modelo": "2013",
      "cedula": "98515097",
      "nombres": "JAVIER HUMBERTO VASQUEZ CALLE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/08/2024",
      "placa": "KAS943",
      "modelo": "2014",
      "cedula": "32499925",
      "nombres": "LUZ MARINA JARAMILLO FLOREZ"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "01/11/2024",
      "placa": "MFY993",
      "modelo": "2013",
      "cedula": "1020493231",
      "nombres": "ESTRADA BRAN LUIS ALEJANDRO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "13/07/2024",
      "placa": "GRQ297",
      "modelo": "2020",
      "cedula": "43922530",
      "nombres": "RESTREPO CASTA?O, ANGELA MARIA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "30/09/2024",
      "placa": "JCP511",
      "modelo": "2017",
      "cedula": "71691736",
      "nombres": "JHON JAIRO MONSALVE HINCAPIE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/08/2024",
      "placa": "FXN903",
      "modelo": "2019",
      "cedula": "71661663",
      "nombres": "AYALA LOPERA,HUGO DE JOSE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "RMX128",
      "modelo": "2012",
      "cedula": "70908081",
      "nombres": "EDGAR YESID ESPINOSA GARCIA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "17/02/2023",
      "placa": "USV056",
      "modelo": "2016",
      "cedula": "53108288",
      "nombres": "MARIA DEL PILAR JIMENEZ COLMENARES"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "18/08/2022",
      "placa": "CNC344",
      "modelo": "2008",
      "cedula": "70558433",
      "nombres": "ARRUBLA RAMIREZ HUGO ALBERTO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "18/08/2024",
      "placa": "EFV903",
      "modelo": "2018",
      "cedula": "32466652",
      "nombres": "VELEZ HERNANDEZ MARTHA LUZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/04/2024",
      "placa": "EOK512",
      "modelo": "2019",
      "cedula": "3599475",
      "nombres": "LUIS ALBERTO BETANCUR ROLDAN"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/08/2024",
      "placa": "EOV739",
      "modelo": "2018",
      "cedula": "43877592",
      "nombres": "VANEGAS GARCIA,SILVIA ELENA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "16/12/2023",
      "placa": "FSY892",
      "modelo": "2019",
      "cedula": "1037570268",
      "nombres": "ANA MARIA JARAMILLO YEPES"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "05/06/2024",
      "placa": "EOV760",
      "modelo": "2019",
      "cedula": "43632685",
      "nombres": "OCAMPO CASTA?EDA LUZ FARIATH"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "16/06/2023",
      "placa": "IAT437",
      "modelo": "2015",
      "cedula": "71371008",
      "nombres": "FREDY LEONARDO PAREDES PE?A"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "18/08/2024",
      "placa": "KIZ984",
      "modelo": "2011",
      "cedula": "19416280",
      "nombres": "FRANCISCO JAVIER DUARTE LOPEZ"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "29/08/2024",
      "placa": "KBR497",
      "modelo": "2010",
      "cedula": "71638971",
      "nombres": "ZULUAGA GOMEZ LEONARDO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "18/08/2024",
      "placa": "LAX346",
      "modelo": "2018",
      "cedula": "21548645",
      "nombres": "MARIN TOBON, SANDRA LILIANA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/08/2024",
      "placa": "FQP649",
      "modelo": "2019",
      "cedula": "43582009",
      "nombres": "FERNANDEZ MORALES, GLORIA PATRICIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/10/2024",
      "placa": "GVM016",
      "modelo": "2020",
      "cedula": "98544985",
      "nombres": "JHON DARIO ZAPATA VELEZ"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "18/08/2024",
      "placa": "DSU272",
      "modelo": "2017",
      "cedula": "1035867203",
      "nombres": "KELLY VANESSA OSPINA CADAVID"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/02/2023",
      "placa": "KAP116",
      "modelo": "2012",
      "cedula": "1128273911",
      "nombres": "CALLEJAS PATIO CESAR ANDRES"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "27/07/2024",
      "placa": "DEQ763",
      "modelo": "2011",
      "cedula": "70698295",
      "nombres": "GALLEGO ZULUAGA SANDRO DE JESUS"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "09/05/2024",
      "placa": "GEW458",
      "modelo": "2019",
      "cedula": "98591674",
      "nombres": "CANO MARTINEZ FREDY ALEXANDER"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "28/01/2023",
      "placa": "GXK754",
      "modelo": "2020",
      "cedula": "42694024",
      "nombres": "ROPERO MARTINEZ,LEIDY JOHANA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "29/12/2023",
      "placa": "FQT618",
      "modelo": "2019",
      "cedula": "71733965",
      "nombres": "OSPINA JHON FREDY"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "25/10/2024",
      "placa": "EIM170",
      "modelo": "2018",
      "cedula": "43582175",
      "nombres": "MONSALVE SALDARRIAGA,MONICA PATRICIA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "16/02/2024",
      "placa": "JPT028",
      "modelo": "2021",
      "cedula": "1037667682",
      "nombres": "SEBASTIAN ARANGO SANDOVAL"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "01/03/2024",
      "placa": "KKK154",
      "modelo": "2012",
      "cedula": "1152457897",
      "nombres": "DE LA HOZ CARCAMO, JUAN RICARD"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/12/2024",
      "placa": "GVK946",
      "modelo": "2020",
      "cedula": "73238611",
      "nombres": "NELSON DANIEL ORDO?EZ CRUZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/08/2024",
      "placa": "DRX584",
      "modelo": "2017",
      "cedula": "98556235",
      "nombres": "RODRIGO IGNACIO GIL ECHEVERRI"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "12/10/2024",
      "placa": "FQU701",
      "modelo": "2019",
      "cedula": "1037608044",
      "nombres": "PALACIO MONTOYA, JUAN PABLO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "30/03/2024",
      "placa": "JQT501",
      "modelo": "2022",
      "cedula": "1128461102",
      "nombres": "Victor Alejandro Escobar Cano"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/04/2020",
      "placa": "DJL319",
      "modelo": "2012",
      "cedula": "71775504",
      "nombres": "JOHN FREDYS TABORDA ZAPATA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/08/2024",
      "placa": "RHP294",
      "modelo": "2011",
      "cedula": "43014462",
      "nombres": "MARGARITA MARIA VELASQUEZ ECHEVERRI"
  },
  {
      "compañia": "SBS",
      "finvigencia": "18/04/2024",
      "placa": "HDO935",
      "modelo": "2014",
      "cedula": "60255290",
      "nombres": "CAMARGO PORTILLA, ANA ISABEL"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "19/08/2022",
      "placa": "IYS796",
      "modelo": "2017",
      "cedula": "1037581481",
      "nombres": "ANGELICA VIVIANA RIVERA ISAZA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/12/2023",
      "placa": "DTQ214",
      "modelo": "2018",
      "cedula": "1004010025",
      "nombres": "DIMANESA BLANDON PEREA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "05/08/2024",
      "placa": "FGK236",
      "modelo": "2008",
      "cedula": "43092845",
      "nombres": "SUAZA PEDRAZA DORIS TERESA"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "24/10/2022",
      "placa": "DMK312",
      "modelo": "2012",
      "cedula": "8162739",
      "nombres": "Alejandro Ortiz Rueda"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/09/2024",
      "placa": "GVQ457",
      "modelo": "2021",
      "cedula": "1037619464",
      "nombres": "FELIPE ESCOBAR GOMEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/12/2024",
      "placa": "JKN348",
      "modelo": "2018",
      "cedula": "21326578",
      "nombres": "ELYA CARDONA GALLO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/08/2022",
      "placa": "GHV871",
      "modelo": "2020",
      "cedula": "1040735890",
      "nombres": "MONICA MARCELA ARENAS CARDONA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "23/08/2024",
      "placa": "DHW073",
      "modelo": "2011",
      "cedula": "70850420",
      "nombres": "SILVIO LEON ALVAREZ BARAHORNA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "03/12/2023",
      "placa": "GYR716",
      "modelo": "2021",
      "cedula": "43115339",
      "nombres": "ROCIO ELENA MEJIA ESTRADA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "28/03/2024",
      "placa": "JHR282",
      "modelo": "2016",
      "cedula": "31568283",
      "nombres": "VARGAS BORJA, OLGA LUCIA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "25/09/2024",
      "placa": "JOQ004",
      "modelo": "2020",
      "cedula": "44000919",
      "nombres": "ISABEL CRISTINA ZULUAGA VASCO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "06/06/2024",
      "placa": "DGY233",
      "modelo": "2013",
      "cedula": "3650078",
      "nombres": "MARTINEZ URREGO,LUIS EDUARDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/10/2021",
      "placa": "IAO106",
      "modelo": "2015",
      "cedula": "1037663914",
      "nombres": "RICARDO ROJAS BECERRA"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "23/11/2024",
      "placa": "JIY535",
      "modelo": "2017",
      "cedula": "1152213935",
      "nombres": "CUESTA LOPEZ JUDITH"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "30/03/2024",
      "placa": "GEN581",
      "modelo": "2020",
      "cedula": "1026138866",
      "nombres": "MARIA CAMILA ARROYAVE ARIAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/08/2024",
      "placa": "ENZ576",
      "modelo": "2019",
      "cedula": "42090049",
      "nombres": "ESPERANZA MEDINA BUILES"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2024",
      "placa": "EFX974",
      "modelo": "2018",
      "cedula": "52916411",
      "nombres": "JOHANNA ARCILA, VASQUEZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "22/05/2023",
      "placa": "HEZ192",
      "modelo": "2014",
      "cedula": "8277230",
      "nombres": "SUAZA GARCIA FABIO ANTONIO"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "07/10/2024",
      "placa": "EPS549",
      "modelo": "2018",
      "cedula": "43871618",
      "nombres": "LINA MARCELA LONDO?O RESTREPO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "12/09/2023",
      "placa": "JHV237",
      "modelo": "2018",
      "cedula": "1036639117",
      "nombres": "ALEJANDRA ZAPATA MONTOYA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/06/2023",
      "placa": "DSY489",
      "modelo": "2018",
      "cedula": "71785653",
      "nombres": "OSCAR ALEJANDRO ALVAREZ ROJAS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "15/06/2021",
      "placa": "HZO674",
      "modelo": "2014",
      "cedula": "1152447830",
      "nombres": "CATALINA MEDINA MADRID"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/06/2024",
      "placa": "DHW339",
      "modelo": "2012",
      "cedula": "8161427",
      "nombres": "SALAZAR PULGARIN, GUSTAVO ANDRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/11/2024",
      "placa": "JYS203",
      "modelo": "2021",
      "cedula": "31202378",
      "nombres": "CARMENZA DEL SOCORRO ALVAREZ LOZANO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/03/2024",
      "placa": "EHL376",
      "modelo": "2018",
      "cedula": "1017133362",
      "nombres": "YHON MAURICIO HURTADO MORENO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "19/08/2024",
      "placa": "DON667",
      "modelo": "2017",
      "cedula": "19338955",
      "nombres": "SUAREZ ROMERO MANUEL ANTONIO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "19/08/2024",
      "placa": "HGZ849",
      "modelo": "2014",
      "cedula": "43272081",
      "nombres": "CARMENZA PATRICIA MANRIQUE VAL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/08/2024",
      "placa": "JOT183",
      "modelo": "2021",
      "cedula": "94447662",
      "nombres": "JHON FREDY BERMUDEZ LONDOÑO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "20/11/2023",
      "placa": "DHV747",
      "modelo": "2012",
      "cedula": "25242349",
      "nombres": "Ligia Casta?eda De Ocampo"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "11/05/2019",
      "placa": "HBO547",
      "modelo": "2013",
      "cedula": "80190194",
      "nombres": "JUAN DIEGO LARA PRADO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/08/2024",
      "placa": "EOW974",
      "modelo": "2019",
      "cedula": "43927215",
      "nombres": "GUTIERREZ SUAREZ, FERCILEY"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/04/2024",
      "placa": "KIX358",
      "modelo": "2011",
      "cedula": "71643234",
      "nombres": "MORENO PINEDA, JORGE ALONSO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "11/02/2025",
      "placa": "FZO578",
      "modelo": "2019",
      "cedula": "8533507",
      "nombres": "DANIEL EUGENIO PLATA AVENDA?O"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "19/08/2022",
      "placa": "JCO183",
      "modelo": "2017",
      "cedula": "43815231",
      "nombres": "LENIS RAMIREZ, DIANA BEATRIZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/07/2024",
      "placa": "DMK399",
      "modelo": "2012",
      "cedula": "1015396314",
      "nombres": "FERNANDO AUGUSTO GARCIA BEJARANO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/08/2019",
      "placa": "MMR623",
      "modelo": "2001",
      "cedula": "43103941",
      "nombres": "DIANA MILENA CATAÑO VERGARA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/06/2023",
      "placa": "HGU162",
      "modelo": "2014",
      "cedula": "21286606",
      "nombres": "MARIA LIGIA VALENCIA DE MARIN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "09/03/2023",
      "placa": "EIN306",
      "modelo": "2018",
      "cedula": "1143871666",
      "nombres": "DANIELA MARIA BELALCAZAR SALAZAR"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "04/03/2024",
      "placa": "USX602",
      "modelo": "2015",
      "cedula": "19329381",
      "nombres": "JOSE ARMANDO FAJARDO FONTECHA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "20/06/2023",
      "placa": "GRS504",
      "modelo": "2020",
      "cedula": "43111984",
      "nombres": "MEJIA YEPES PAOLA ANDREA,"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "20/08/2024",
      "placa": "GDZ627",
      "modelo": "2020",
      "cedula": "8125132",
      "nombres": "RICARDO MORENO SOTO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "03/09/2024",
      "placa": "JCO706",
      "modelo": "2017",
      "cedula": "22081174",
      "nombres": "GOMEZ RAMIREZ, ROSA MARIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/06/2024",
      "placa": "HXX869",
      "modelo": "2015",
      "cedula": "1152444144",
      "nombres": "ALEJANDRA SALAZAR PEÑA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "20/08/2024",
      "placa": "HYT686",
      "modelo": "2017",
      "cedula": "43874408",
      "nombres": "SANDRA MILENA MONSALVE LOPERA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/05/2022",
      "placa": "GHZ432",
      "modelo": "2019",
      "cedula": "43910268",
      "nombres": "LYDA MILENA SALAZAR RAMIREZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "25/10/2024",
      "placa": "EOS314",
      "modelo": "2019",
      "cedula": "43579351",
      "nombres": "Katy Alexandra Leon Arango"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "20/08/2024",
      "placa": "GCR507",
      "modelo": "2020",
      "cedula": "72148641",
      "nombres": "PALMIRI MELO, FRANKLIN"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "24/11/2024",
      "placa": "GEZ551",
      "modelo": "2020",
      "cedula": "8348899",
      "nombres": "MARIN LOPEZ LUIS ALFONSO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "12/04/2024",
      "placa": "MIP488",
      "modelo": "2013",
      "cedula": "1037632303",
      "nombres": "YEFERSON STIVEN BENITEZ USUGA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/03/2024",
      "placa": "HYU387",
      "modelo": "2017",
      "cedula": "42976418",
      "nombres": "LUZ MERY RODRIGUEZ HENAO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/10/2022",
      "placa": "MTM725",
      "modelo": "2013",
      "cedula": "71730729",
      "nombres": "NELSON MAURICIO RUIZ SANDOVAL"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "08/08/2023",
      "placa": "DEW153",
      "modelo": "2011",
      "cedula": "1099202150",
      "nombres": "DANIEL ALFREDO ACEVEDO GARCIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "18/08/2024",
      "placa": "JIV208",
      "modelo": "2017",
      "cedula": "43871915",
      "nombres": "SANCHEZ SANCHEZ LILLY VETH"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "25/08/2024",
      "placa": "DJL643",
      "modelo": "2012",
      "cedula": "71377265",
      "nombres": "ALVAREZ GARRO WILLIAM ALBEIRO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/01/2025",
      "placa": "EPQ323",
      "modelo": "2018",
      "cedula": "1040737217",
      "nombres": "YOBANY SANTA PAREDES"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "20/08/2024",
      "placa": "JSV577",
      "modelo": "2021",
      "cedula": "32295812",
      "nombres": "ANA MARCELA LARGO ARCILA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "21/07/2024",
      "placa": "GRO475",
      "modelo": "2020",
      "cedula": "98504353",
      "nombres": "JHON JAIRO ARANGO MARQUEZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "20/08/2024",
      "placa": "GRL970",
      "modelo": "2020",
      "cedula": "98495168",
      "nombres": "GIRALDO GAVIRIA LUIS ALBERTO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/08/2021",
      "placa": "FGS119",
      "modelo": "2008",
      "cedula": "71378824",
      "nombres": "CARLOS ALBERTO CORDOBA CORDOBA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/09/2019",
      "placa": "IOT631",
      "modelo": "2016",
      "cedula": "43726410",
      "nombres": "BERMUDEZ ALZATE, FLOR ENITH"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "12/12/2024",
      "placa": "IYO888",
      "modelo": "2016",
      "cedula": "1037582780",
      "nombres": "LOPEZ JAIRO ANDRES"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "25/07/2024",
      "placa": "GCR303",
      "modelo": "2019",
      "cedula": "80093353",
      "nombres": "PINEDA MOSCOSO, CESAR IGNACIO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "28/01/2024",
      "placa": "DKR856",
      "modelo": "2012",
      "cedula": "3585229",
      "nombres": "HERNANDEZ LOPEZ JAIME OLIVERIO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2021",
      "placa": "MFZ629",
      "modelo": "2013",
      "cedula": "1040738763",
      "nombres": "PALACIO GARCIA JULIAN ESTEBAN ."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/03/2019",
      "placa": "JHO655",
      "modelo": "2017",
      "cedula": "71277135",
      "nombres": "JUAN GABRIEL MORENO SIERRA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "20/08/2024",
      "placa": "JOQ834",
      "modelo": "2020",
      "cedula": "43733434",
      "nombres": "AGUIRRE RESTREPO ADRIANA LUCIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "19/12/2024",
      "placa": "FQS452",
      "modelo": "2018",
      "cedula": "1045106737",
      "nombres": "RUA GUTIERREZ, HUGO ARMANDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/02/2023",
      "placa": "KHR949",
      "modelo": "2012",
      "cedula": "79673658",
      "nombres": "JOHN JAIME HENAO SANCHEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2024",
      "placa": "DFL952",
      "modelo": "2012",
      "cedula": "1020419057",
      "nombres": "G?MEZ MONTOYA, RICARDO ANTONIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/06/2022",
      "placa": "MOL702",
      "modelo": "2009",
      "cedula": "70064910",
      "nombres": "PEDRO HORACIO FRANCO ROLDAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "28/01/2025",
      "placa": "FUN520",
      "modelo": "2019",
      "cedula": "32107583",
      "nombres": "LUZ MARINA BUITRAGO ZULUAGA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "27/04/2024",
      "placa": "EOK643",
      "modelo": "2019",
      "cedula": "38792205",
      "nombres": "GARCIA CORREA DIANA CAROLINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "20/08/2024",
      "placa": "ENZ932",
      "modelo": "2019",
      "cedula": "8047700",
      "nombres": "NEBER ANTONIO CORRALES VIVANCO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "09/12/2024",
      "placa": "IMK132",
      "modelo": "2016",
      "cedula": "43871478",
      "nombres": "VASQUEZ JARAMILLO NIDIA AZUCENA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "14/02/2025",
      "placa": "GEN996",
      "modelo": "2020",
      "cedula": "19193358",
      "nombres": "PICO HERNANDEZ PEDRO ELIAS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "07/04/2020",
      "placa": "MNI263",
      "modelo": "2006",
      "cedula": "1020446103",
      "nombres": "VASQUEZ VARGAS LEIDY"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "19/02/2024",
      "placa": "HZN742",
      "modelo": "2015",
      "cedula": "42898785",
      "nombres": "MESA HINCAPIE ELIZABETH DE LA CHINCA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "21/08/2024",
      "placa": "JPV224",
      "modelo": "2021",
      "cedula": "42897589",
      "nombres": "ADRIANA MARIA ACEVEDO KELDAY"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "09/03/2024",
      "placa": "MTY350",
      "modelo": "2013",
      "cedula": "42877241",
      "nombres": "LILIANA LEMA VELEZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "24/02/2025",
      "placa": "JYY852",
      "modelo": "2022",
      "cedula": "71617541",
      "nombres": "WALTER LEON GOMEZ SANCHEZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "21/08/2024",
      "placa": "JOR223",
      "modelo": "2020",
      "cedula": "21527307",
      "nombres": "GONZALEZ MU?OZ FARIDE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/01/2024",
      "placa": "JIV519",
      "modelo": "2017",
      "cedula": "1109297761",
      "nombres": "JORGE IVAN RAMIREZ OLMOS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "21/08/2021",
      "placa": "HYZ536",
      "modelo": "2014",
      "cedula": "79982750",
      "nombres": "GERMAN ANDRES ARISTIZABAL HERNANDEZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "23/08/2024",
      "placa": "HYZ966",
      "modelo": "2015",
      "cedula": "43877000",
      "nombres": "DIANA CRISTINA QUINTERO ORTIZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/09/2024",
      "placa": "GEL964",
      "modelo": "2020",
      "cedula": "39358466",
      "nombres": "YARELLY ANDREA CARMONA BUSTAMANTE"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "23/07/2024",
      "placa": "OCF005",
      "modelo": "2012",
      "cedula": "890980782",
      "nombres": "MUNICIPIO DE LA ESTRELLA"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "26/10/2024",
      "placa": "GVK367",
      "modelo": "2019",
      "cedula": "32242539",
      "nombres": "DAZA ATEHORTUA NATALIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "29/09/2024",
      "placa": "LAX074",
      "modelo": "2017",
      "cedula": "1004669113",
      "nombres": "DIEGO ALEJANDRO LARGO GONZALEZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "26/10/2024",
      "placa": "JHT752",
      "modelo": "2018",
      "cedula": "32015314",
      "nombres": "OBANDO RAMIREZ MARTHA LUCIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/03/2023",
      "placa": "MSQ991",
      "modelo": "2014",
      "cedula": "6382446",
      "nombres": "CARLOS ALBERTO CADENA TELLEZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "LAX939",
      "modelo": "2022",
      "cedula": "71747780",
      "nombres": "JUAN CARLOS VELANDIA GALENAO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/12/2024",
      "placa": "IAW200",
      "modelo": "2015",
      "cedula": "1001359661",
      "nombres": "ISABELLA TABORDA SEPULVEDA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "04/10/2024",
      "placa": "JCR259",
      "modelo": "2017",
      "cedula": "9010287538",
      "nombres": "BRITISH GROUP SAS"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "31/08/2024",
      "placa": "FXP418",
      "modelo": "2019",
      "cedula": "1035853231",
      "nombres": "TOBON PATI?O NATALIA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "29/08/2024",
      "placa": "FHD750",
      "modelo": "2009",
      "cedula": "42887211",
      "nombres": "Luz Bibiana Sanchez Gomez"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/06/2023",
      "placa": "KBX343",
      "modelo": "2010",
      "cedula": "1007110465",
      "nombres": "DEISY NATALIA GUZM?N MONSALVE"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "06/01/2025",
      "placa": "GEM667",
      "modelo": "2020",
      "cedula": "42790430",
      "nombres": "GIRALDO GARCIA GLORIA EMILSE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/12/2024",
      "placa": "GZR260",
      "modelo": "2020",
      "cedula": "811011779",
      "nombres": "RENTING COLOMBIA S.A.S."
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "02/10/2024",
      "placa": "MJZ515",
      "modelo": "2013",
      "cedula": "70068594",
      "nombres": "LOPEZ GIL IGNACIO ALEJANDRO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/09/2021",
      "placa": "GEX874",
      "modelo": "2019",
      "cedula": "71384762",
      "nombres": "JOSE LUIS DAVID VALDERRAMA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "29/11/2024",
      "placa": "EPT636",
      "modelo": "2019",
      "cedula": "1069743631",
      "nombres": "BRILLIT HASBREIDY URREGO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "17/07/2024",
      "placa": "DMK067",
      "modelo": "2012",
      "cedula": "71226745",
      "nombres": "OSCAR RAUL MARIN ROJAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/11/2024",
      "placa": "KGD674",
      "modelo": "2011",
      "cedula": "1017202043",
      "nombres": "FANNY LOPEZ LOAIZA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "22/08/2024",
      "placa": "IAO610",
      "modelo": "2015",
      "cedula": "43592806",
      "nombres": "ROSAS WALTEROS, SANDRA MILENA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/02/2019",
      "placa": "FHC369",
      "modelo": "2009",
      "cedula": "98575993",
      "nombres": "GABRIEL DE JESUS HENAO MOLINA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "08/09/2024",
      "placa": "GFK886",
      "modelo": "2019",
      "cedula": "85202767",
      "nombres": "ALVARO GABRIEL GOMEZ DURAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "GXK748",
      "modelo": "2020",
      "cedula": "42685412",
      "nombres": "CLAUDIA PATRICIA MADRID ROLDAN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "19/03/2023",
      "placa": "BXU902",
      "modelo": "2011",
      "cedula": "42788140",
      "nombres": "MONICA PATRICIA HERRERA HERNAN"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "15/08/2022",
      "placa": "IJP573",
      "modelo": "2016",
      "cedula": "68247244",
      "nombres": "ARELYS RAMIREZ ESCOBAR"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/09/2023",
      "placa": "EOX873",
      "modelo": "2019",
      "cedula": "1128389376",
      "nombres": "YEHISON DAVID VERGARA QUICENO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/12/2023",
      "placa": "ICZ698",
      "modelo": "2015",
      "cedula": "43057886",
      "nombres": "MORALES DE LAYOS MARTHA LUCIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/08/2024",
      "placa": "JCN324",
      "modelo": "2017",
      "cedula": "43924666",
      "nombres": "MARIA VICTORIA CADAVID PALACIO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "18/08/2024",
      "placa": "JPT417",
      "modelo": "2021",
      "cedula": "8031376",
      "nombres": "FABIO ALEXANDER MU?OZ ESCOBAR"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/06/2024",
      "placa": "GHV938",
      "modelo": "2019",
      "cedula": "1039450003",
      "nombres": "RESTREPO JARAMILLO, CAROLINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/06/2024",
      "placa": "MXY759",
      "modelo": "2014",
      "cedula": "8291893",
      "nombres": "HUMBERTO DE JESUS PEREZ ARIAS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "28/01/2024",
      "placa": "EOL994",
      "modelo": "2019",
      "cedula": "32327776",
      "nombres": "MARTA ELDENIVE BECERRA GOMEZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "05/03/2023",
      "placa": "ISS571",
      "modelo": "2016",
      "cedula": "71669152",
      "nombres": "JUAN FERNANDO TORO TOBON"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/12/2024",
      "placa": "EIP044",
      "modelo": "2018",
      "cedula": "3563249",
      "nombres": "OSCAR ALBERTO RUEDA VARGAS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "01/09/2024",
      "placa": "RZH637",
      "modelo": "2010",
      "cedula": "49765707",
      "nombres": "DISNARDA DIAZ MARQUEZ"
  },
  {
      "compañia": "SBS",
      "finvigencia": "03/02/2024",
      "placa": "FCZ457",
      "modelo": "2008",
      "cedula": "43323768",
      "nombres": "CANO MARIN, ERICA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "24/05/2024",
      "placa": "JOQ027",
      "modelo": "2021",
      "cedula": "52267275",
      "nombres": "GUZMAN MARTINEZ, DIANA CRISTINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/12/2024",
      "placa": "FSX411",
      "modelo": "2019",
      "cedula": "811011779",
      "nombres": "RENTING COLOMBIA S.A.S."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/08/2024",
      "placa": "EOK909",
      "modelo": "2019",
      "cedula": "38872003",
      "nombres": "GLORIA MATILDE SALAZAR ARANA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/08/2024",
      "placa": "HEY026",
      "modelo": "2013",
      "cedula": "3614565",
      "nombres": "GILBERTO JARAMILLO JARAMILLO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "22/12/2024",
      "placa": "GEP017",
      "modelo": "2019",
      "cedula": "42867051",
      "nombres": "MARTHA ELENA LEON MAYA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "30/10/2024",
      "placa": "JPV169",
      "modelo": "2021",
      "cedula": "8265331",
      "nombres": "GILBERTO HINCAPIE SOTO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/08/2024",
      "placa": "INN273",
      "modelo": "2016",
      "cedula": "42797351",
      "nombres": "LUZ ANGELA QUICENO ARIAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/06/2023",
      "placa": "EPR108",
      "modelo": "2019",
      "cedula": "16686753",
      "nombres": "ROBERTO GRANADOS MERA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "15/08/2024",
      "placa": "JPS835",
      "modelo": "2021",
      "cedula": "70099634",
      "nombres": "MARIN OCAMPO, JAIRO DE JESUS"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "27/02/2024",
      "placa": "JSR341",
      "modelo": "2021",
      "cedula": "8085131",
      "nombres": "PATINO ALVAREZ, JORGE IVAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/07/2022",
      "placa": "ITX954",
      "modelo": "2008",
      "cedula": "98584025",
      "nombres": "JOHN JAIRO NARANJO RAMIREZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "28/01/2025",
      "placa": "EPT424",
      "modelo": "2019",
      "cedula": "8058215",
      "nombres": "Jose Luis Tapia Vergara"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "22/08/2024",
      "placa": "HWK457",
      "modelo": "2014",
      "cedula": "43973651",
      "nombres": "LAURA RUA OSORIO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "22/08/2024",
      "placa": "FQW410",
      "modelo": "2019",
      "cedula": "43873886",
      "nombres": "LINA MARIA FERNANDEZ RESTREPO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/11/2023",
      "placa": "FIR882",
      "modelo": "2019",
      "cedula": "32426867",
      "nombres": "LUZ MARINA YEPES MESA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "24/06/2024",
      "placa": "JBL007",
      "modelo": "2016",
      "cedula": "43618098",
      "nombres": "GOMEZ RAMIREZ, LILIANA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/10/2023",
      "placa": "MSQ318",
      "modelo": "2013",
      "cedula": "43811601",
      "nombres": "DIANA MARIA OSORIO AGUIRRE"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "22/08/2024",
      "placa": "URT920",
      "modelo": "2015",
      "cedula": "51590719",
      "nombres": "GLORIA STELLA GARNICA CASTA?ED"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "21/12/2024",
      "placa": "JFU061",
      "modelo": "2017",
      "cedula": "1037580081",
      "nombres": "ANDREA RESTREPO MONTOYA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/11/2019",
      "placa": "IYQ774",
      "modelo": "2017",
      "cedula": "4851948",
      "nombres": "PALACIOS PINILLA EDWIN ANUAR"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/06/2024",
      "placa": "EHM761",
      "modelo": "2018",
      "cedula": "98639718",
      "nombres": "ARANGO ZAPATA, JOSE ALADIEL"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2020",
      "placa": "JJK172",
      "modelo": "2017",
      "cedula": "1039452684",
      "nombres": "GIL JARAMILLO,SEBASTIAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/02/2024",
      "placa": "JBQ812",
      "modelo": "2017",
      "cedula": "71211368",
      "nombres": "CARLOS ALEJANDRO ESCOBAR MARULANDA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "28/12/2024",
      "placa": "JBK883",
      "modelo": "2017",
      "cedula": "8266003",
      "nombres": "MIRA LONDO?O, JOSE DE JESUS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "07/02/2024",
      "placa": "HXU024",
      "modelo": "2015",
      "cedula": "21437235",
      "nombres": "TABORDA TRUJILLO, LUZ STELLA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "06/11/2023",
      "placa": "JKL007",
      "modelo": "2017",
      "cedula": "70120348",
      "nombres": "RODRIGO ALBERTO CARDONA OLTALVARO"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "13/12/2024",
      "placa": "MOX975",
      "modelo": "2011",
      "cedula": "3655921",
      "nombres": "HERLINDO DE JESUS AGUDELO RESTREPO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/03/2019",
      "placa": "KHO774",
      "modelo": "2011",
      "cedula": "39302836",
      "nombres": "PRAXEDE GERTRUDI GARCIA OYOLA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "02/09/2024",
      "placa": "DSX791",
      "modelo": "2017",
      "cedula": "21659698",
      "nombres": "GOMEZ ARISTIZABAL DORISQ"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "22/08/2023",
      "placa": "HXR251",
      "modelo": "2014",
      "cedula": "15206929",
      "nombres": "IGUARAN HERNANDEZ, ORLANDO FRA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "12/09/2024",
      "placa": "HZL020",
      "modelo": "2015",
      "cedula": "71776567",
      "nombres": "CRISTIAN FELIPE DURANGO GONZALEZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "02/08/2022",
      "placa": "ENX836",
      "modelo": "2018",
      "cedula": "1036606945",
      "nombres": "GIRALDO ALVAREZ CARLOS ANDRES"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "22/08/2024",
      "placa": "HPK994",
      "modelo": "2014",
      "cedula": "1036613666",
      "nombres": "ECHAVARRIA SEBASTIAN"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "20/12/2024",
      "placa": "JHT400",
      "modelo": "2018",
      "cedula": "1152196822",
      "nombres": "BETANCUR RESTREPO MANUELA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "27/03/2024",
      "placa": "GHV915",
      "modelo": "2020",
      "cedula": "1130603606",
      "nombres": "PAZ FRANCO, VERONICA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "10/11/2024",
      "placa": "KGW002",
      "modelo": "2010",
      "cedula": "32307104",
      "nombres": "LUZ MARINA ORTEGA ROJAS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2024",
      "placa": "EIM112",
      "modelo": "2018",
      "cedula": "43983701",
      "nombres": "ZULETA TOBON, JESSICA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "03/04/2022",
      "placa": "MFU835",
      "modelo": "2012",
      "cedula": "11805059",
      "nombres": "ALEXANDER MACHADO MENA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/09/2024",
      "placa": "DFW028",
      "modelo": "2011",
      "cedula": "70137581",
      "nombres": "URLEY ALBERTO ARISMENDY IDARRAGA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/12/2024",
      "placa": "MIU027",
      "modelo": "2013",
      "cedula": "8407163",
      "nombres": "ORTEGA ALBEIRO JARAMILLO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2019",
      "placa": "BVA992",
      "modelo": "2001",
      "cedula": "10089968",
      "nombres": "JULIO CESAR ARTEAGA PINEDA. ."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "07/01/2024",
      "placa": "MFV575",
      "modelo": "2012",
      "cedula": "1036645029",
      "nombres": "SANTIAGO PATINO CANO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "29/06/2024",
      "placa": "ELK316",
      "modelo": "2008",
      "cedula": "43524177",
      "nombres": "CASTRILLON VILLEGAS MARIA TERESA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "25/08/2024",
      "placa": "GRM190",
      "modelo": "2019",
      "cedula": "43252129",
      "nombres": "ALEJANDRA NULL TAMAYO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "21/02/2024",
      "placa": "GXR209",
      "modelo": "2020",
      "cedula": "80102074",
      "nombres": "ALVARADO GONZALEZ, EDGAR EMIRO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/05/2024",
      "placa": "EPT529",
      "modelo": "2019",
      "cedula": "3383695",
      "nombres": "ANDRES GOMEZ ANGEL"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "01/05/2024",
      "placa": "EPT716",
      "modelo": "2019",
      "cedula": "1152188060",
      "nombres": "DANIEL DAVID OSORIO DUARTE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/03/2020",
      "placa": "KDM745",
      "modelo": "2013",
      "cedula": "13487418",
      "nombres": "JOSE HOLGER GARAY GARAY"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/12/2024",
      "placa": "IAT215",
      "modelo": "2015",
      "cedula": "1020398014",
      "nombres": "MARIA CLARA OVIEDO MARTINEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2024",
      "placa": "MOV536",
      "modelo": "2010",
      "cedula": "51615308",
      "nombres": "OCHOA ESCOBAR, MARIA DEL PILAR"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/08/2022",
      "placa": "DFW479",
      "modelo": "2011",
      "cedula": "1152209055",
      "nombres": "SARA MARIA FEO RAMIREZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/08/2022",
      "placa": "GRN259",
      "modelo": "2020",
      "cedula": "9735618",
      "nombres": "ANDRES FELIPE CASTRILLON RAMIREZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "24/01/2025",
      "placa": "GRO126",
      "modelo": "2020",
      "cedula": "43681529",
      "nombres": "Marta Cecilia Velez Vallejo"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "25/08/2024",
      "placa": "MSV435",
      "modelo": "2013",
      "cedula": "1130597228",
      "nombres": "HERRERA ANGELICA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "07/10/2022",
      "placa": "DFN694",
      "modelo": "2013",
      "cedula": "1152188135",
      "nombres": "RESTREPO ZAPATA,SEBASTIAN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "23/08/2024",
      "placa": "DSV520",
      "modelo": "2017",
      "cedula": "32427702",
      "nombres": "PIEDAD QUINTERO BERMUDEZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "23/12/2024",
      "placa": "DMZ053",
      "modelo": "2017",
      "cedula": "1018446971",
      "nombres": "SERGIO DANIELE DAL BONI GOMEZ"
  },
  {
      "compañia": "SBS",
      "finvigencia": "22/12/2024",
      "placa": "FSX946",
      "modelo": "2019",
      "cedula": "71592626",
      "nombres": "URIBE TABORDA, RAFAEL ALBERTO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "03/01/2025",
      "placa": "KHO392",
      "modelo": "2011",
      "cedula": "1152712424",
      "nombres": "SARA DELPILAR ECHEVERRI ZAPATA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "11/10/2020",
      "placa": "FGY404",
      "modelo": "2008",
      "cedula": "1017150799",
      "nombres": "MONICA MARIA CHICA DIAZ"
  },
  {
      "compañia": "SBS",
      "finvigencia": "01/07/2024",
      "placa": "GRL857",
      "modelo": "2019",
      "cedula": "1072252250",
      "nombres": "VERGARA POLO, VICTOR JULIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/10/2024",
      "placa": "EIN457",
      "modelo": "2018",
      "cedula": "1098688095",
      "nombres": "LUZ NIDIA GAFARO OROZCO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "02/09/2024",
      "placa": "EPT663",
      "modelo": "2019",
      "cedula": "71713924",
      "nombres": "RAMIREZ VINASCO ROBERT ALEXIS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "09/07/2024",
      "placa": "JZO781",
      "modelo": "2022",
      "cedula": "71731272",
      "nombres": "OSORIO OSORIO, FREDY ARBEY"
  },
  {
      "compañia": "SBS",
      "finvigencia": "30/04/2023",
      "placa": "GEK457",
      "modelo": "2020",
      "cedula": "8388071",
      "nombres": "AGUDELO GIL, NESTOR"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "30/11/2024",
      "placa": "FGL579",
      "modelo": "2008",
      "cedula": "43026684",
      "nombres": "ANGELA MARIA BEDOYA URREGO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "06/05/2023",
      "placa": "IYQ225",
      "modelo": "2017",
      "cedula": "3621091",
      "nombres": "MONTOYA RODRIGUEZ RUBEN EMILIO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "18/12/2024",
      "placa": "IOV806",
      "modelo": "2016",
      "cedula": "15339446",
      "nombres": "JULIAN DARIO MEJIA GRAJALES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/07/2019",
      "placa": "FAU545",
      "modelo": "2004",
      "cedula": "70112941",
      "nombres": "RAUL MONSALVE QUINTERO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "16/08/2023",
      "placa": "MFX031",
      "modelo": "2013",
      "cedula": "1040737069",
      "nombres": "PULGARIN VALENCIA, STEPHANY"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "25/07/2023",
      "placa": "MXR638",
      "modelo": "2015",
      "cedula": "44006576",
      "nombres": "LILIANA ANDREA GALEANO LOAIZA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "04/08/2024",
      "placa": "JHV290",
      "modelo": "2019",
      "cedula": "43089370",
      "nombres": "ISAZA RODAS, BLANCA MERLY"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "24/08/2024",
      "placa": "JOQ620",
      "modelo": "2021",
      "cedula": "43665046",
      "nombres": "CASTRILLON ARENAS, MARIA BENILDA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "05/04/2023",
      "placa": "JKL096",
      "modelo": "2016",
      "cedula": "98668074",
      "nombres": "CARO QUINTERO, GUSTAVO ADOLFO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "16/12/2024",
      "placa": "KHR714",
      "modelo": "2012",
      "cedula": "71364808",
      "nombres": "JUAN CAMILO GUTIERREZ SERRANO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/09/2023",
      "placa": "JBQ076",
      "modelo": "2017",
      "cedula": "43276126",
      "nombres": "PUERTA DUQUE JULIANA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/12/2023",
      "placa": "EIK019",
      "modelo": "2018",
      "cedula": "98499944",
      "nombres": "ALBEIRO VASQUEZ CARDONA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/07/2023",
      "placa": "HEZ473",
      "modelo": "2014",
      "cedula": "8160799",
      "nombres": "SEBASTIAN PEREZ MONSALVE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "02/02/2025",
      "placa": "JIX635",
      "modelo": "2017",
      "cedula": "1121840918",
      "nombres": "PETRO MORALES,ANGEL MAURICIO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "24/08/2024",
      "placa": "JHU248",
      "modelo": "2017",
      "cedula": "98715397",
      "nombres": "ARBOLEDA TOBON,VICTOR MANUEL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/03/2022",
      "placa": "JOS260",
      "modelo": "2021",
      "cedula": "71672714",
      "nombres": "FRANCISCO JAVIER GIL GOMEZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "26/10/2024",
      "placa": "JOS109",
      "modelo": "2021",
      "cedula": "32502076",
      "nombres": "MARIA LUCIA GALEANO ALZATE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/07/2024",
      "placa": "EHZ800",
      "modelo": "2018",
      "cedula": "21998285",
      "nombres": "BLANCA ROSA CANO ALZATE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/09/2023",
      "placa": "JCQ298",
      "modelo": "2017",
      "cedula": "15510725",
      "nombres": "HECTOR GUILLERMO FRANCO OCHOA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/10/2023",
      "placa": "UEK677",
      "modelo": "2015",
      "cedula": "43615281",
      "nombres": "REGINA ANDREA SEPULVEDA MONTOYA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "24/08/2024",
      "placa": "EPU427",
      "modelo": "2019",
      "cedula": "43872068",
      "nombres": "Carolina Jaramillo"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "19/12/2023",
      "placa": "MIX891",
      "modelo": "2013",
      "cedula": "1067836470",
      "nombres": "GREY MILENA MARIMON SIBAJA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/02/2024",
      "placa": "FHN004",
      "modelo": "2009",
      "cedula": "43626978",
      "nombres": "ANA MERCEDES OSORIO PELAEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "24/09/2024",
      "placa": "GHW562",
      "modelo": "2020",
      "cedula": "3347736",
      "nombres": "HECTOR GABRIEL DE JESUS HINCAPIE ARROYAVE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "10/09/2024",
      "placa": "HNV594",
      "modelo": "2014",
      "cedula": "1007626207",
      "nombres": "FABIAN ESTIVEN TEJADA QUINTERO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "22/09/2022",
      "placa": "MFY327",
      "modelo": "2013",
      "cedula": "79162841",
      "nombres": "MILCIADES CARREQO QUINTERO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "27/04/2024",
      "placa": "JHR556",
      "modelo": "2017",
      "cedula": "43166414",
      "nombres": "MARIA MAZO ZULUAGA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "01/02/2024",
      "placa": "KPQ304",
      "modelo": "2022",
      "cedula": "1214731544",
      "nombres": "DANIELA NULL ECHEVERRY OJEDA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "02/11/2024",
      "placa": "FGR107",
      "modelo": "2008",
      "cedula": "1035416851",
      "nombres": "VARGAS YARCE JULIAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/06/2023",
      "placa": "IHP906",
      "modelo": "2016",
      "cedula": "43740333",
      "nombres": "ISMAT ZAMYR CASTRO MENDEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/02/2023",
      "placa": "FXP874",
      "modelo": "2019",
      "cedula": "1037629806",
      "nombres": "KELLY YELITZA MONTOYA MUÑOZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "02/03/2023",
      "placa": "JYZ751",
      "modelo": "2021",
      "cedula": "1146437728",
      "nombres": "PINO PIEDRAHITA JHON MARIO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "MXL144",
      "modelo": "2013",
      "cedula": "70290829",
      "nombres": "CASTA?O MORALES LUIS, FERNANDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/03/2024",
      "placa": "JQO951",
      "modelo": "2022",
      "cedula": "71656978",
      "nombres": "JORGE HUMBERTO ARAQUE TAMAYO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "06/12/2024",
      "placa": "EHK093",
      "modelo": "2018",
      "cedula": "71657660",
      "nombres": "DUQUE LEMA GUSTAVO ADOLFO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/10/2020",
      "placa": "EOM944",
      "modelo": "2019",
      "cedula": "42799430",
      "nombres": "NATALIA ANDREA LOPEZ FONNEGRA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/09/2022",
      "placa": "HBR430",
      "modelo": "2014",
      "cedula": "8061335",
      "nombres": "JUAN DAVID TORO BEDOYA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/04/2023",
      "placa": "DSL708",
      "modelo": "2018",
      "cedula": "71618780",
      "nombres": "FABIO LEON MONTOYA OSPINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/04/2024",
      "placa": "GVM916",
      "modelo": "2020",
      "cedula": "98771775",
      "nombres": "JULIAN ESTEBAN RESTREPO MONTOYA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "31/05/2024",
      "placa": "EOU187",
      "modelo": "2019",
      "cedula": "43566159",
      "nombres": "IRMA LILIANA FERNANDEZ DIEZ"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "24/08/2021",
      "placa": "MVV919",
      "modelo": "2014",
      "cedula": "1017263246",
      "nombres": "CHRISTOPHER BRANDON SANCHEZ CHECA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "24/08/2024",
      "placa": "EFV741",
      "modelo": "2018",
      "cedula": "15527772",
      "nombres": "RUBEN DARIO GUTIERREZ BONILLA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "07/02/2025",
      "placa": "EIO041",
      "modelo": "2018",
      "cedula": "21660226",
      "nombres": "PELAEZ SERNA, GLORIA ANGELA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/09/2024",
      "placa": "FQS575",
      "modelo": "2019",
      "cedula": "8298380",
      "nombres": "RUBEN DARIO OSPINA ORTIZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "20/10/2024",
      "placa": "EFY139",
      "modelo": "2017",
      "cedula": "21804824",
      "nombres": "Maria Raquel Velasquez Mu?oz"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/05/2024",
      "placa": "HZL134",
      "modelo": "2015",
      "cedula": "43555668",
      "nombres": "ANA MARIA CANO JARAMILLO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "31/08/2024",
      "placa": "EFW667",
      "modelo": "2018",
      "cedula": "39384784",
      "nombres": "MESA RIOS DIANA PATRICIA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "28/01/2022",
      "placa": "JQS996",
      "modelo": "2021",
      "cedula": "21969384",
      "nombres": "CONCHA ROJO OLGA LUCIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/09/2022",
      "placa": "EOL646",
      "modelo": "2019",
      "cedula": "1035231512",
      "nombres": "LAURA ALEJANDRA ARANGO LOPEZ"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "31/10/2024",
      "placa": "JOR743",
      "modelo": "2021",
      "cedula": "43746762",
      "nombres": "MONICA PATRICIA PEREZ SANCHEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/12/2024",
      "placa": "GRS084",
      "modelo": "2020",
      "cedula": "1128440626",
      "nombres": "CARLOS ANDRES GALVIS POSADA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "30/06/2024",
      "placa": "JON376",
      "modelo": "2020",
      "cedula": "36545910",
      "nombres": "LUCY ROSA DIAZ GRANADOS CUENCA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/06/2024",
      "placa": "HJL849",
      "modelo": "2013",
      "cedula": "34540672",
      "nombres": "LUZ HELENA CALDERON ADRADA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "21/11/2024",
      "placa": "GWU773",
      "modelo": "2020",
      "cedula": "71613423",
      "nombres": "JARAMILLO MOLINA, JORGE LEON"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "25/08/2023",
      "placa": "EPS605",
      "modelo": "2018",
      "cedula": "43879382",
      "nombres": "LICET PAOLA MOLINA GUZMAN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "21/11/2024",
      "placa": "USX119",
      "modelo": "2016",
      "cedula": "15531145",
      "nombres": "ELMAN SULEY GARCIA VELASQUEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "29/06/2024",
      "placa": "EIK051",
      "modelo": "2017",
      "cedula": "1140875131",
      "nombres": "CASTRESANA ZU?IGA,GABRIELA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "27/12/2024",
      "placa": "JYU488",
      "modelo": "2022",
      "cedula": "10883456",
      "nombres": "CESAR OTERO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "23/08/2024",
      "placa": "MFU697",
      "modelo": "2013",
      "cedula": "1152456758",
      "nombres": "VALENTINA BURGOS CARDONA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "06/04/2022",
      "placa": "KMR880",
      "modelo": "2012",
      "cedula": "1089745451",
      "nombres": "cristian vasco lopez"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "13/04/2024",
      "placa": "MGV591",
      "modelo": "2013",
      "cedula": "1020427745",
      "nombres": "HOYOS ZAPATA, DANIEL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/05/2024",
      "placa": "HXV769",
      "modelo": "2014",
      "cedula": "8301516",
      "nombres": "WILLIAM VELASQUEZ OSORIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "09/01/2022",
      "placa": "IUD528",
      "modelo": "2021",
      "cedula": "1036640807",
      "nombres": "SEBASTIAN ZULETA ZEA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/06/2024",
      "placa": "FQS029",
      "modelo": "2018",
      "cedula": "8695773",
      "nombres": "PEDRO ALEJANDRO REYES ALMARIO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "03/09/2024",
      "placa": "JKX045",
      "modelo": "2021",
      "cedula": "16934500",
      "nombres": "CRUZ ZU?IGA,ALEJANDRO GUILLERMO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/07/2024",
      "placa": "JOQ695",
      "modelo": "2021",
      "cedula": "1036601246",
      "nombres": "ANA MARIA ARTEAGA ESTRADA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/07/2024",
      "placa": "DVZ191",
      "modelo": "2018",
      "cedula": "1067947396",
      "nombres": "SAMIRA MARIA LOPEZ MILANE"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/09/2023",
      "placa": "JOS528",
      "modelo": "2020",
      "cedula": "1128406768",
      "nombres": "MORALES GARCES LUIS ENRIQUE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "05/05/2024",
      "placa": "MVV911",
      "modelo": "2013",
      "cedula": "98697580",
      "nombres": "ISAIAS JOSE NAVARRO NAVARRO, ISAIAS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "25/08/2024",
      "placa": "KBP640",
      "modelo": "2010",
      "cedula": "72272853",
      "nombres": "JULIO CESAR ATENCIO GUTIERREZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "16/05/2024",
      "placa": "JYQ098",
      "modelo": "2021",
      "cedula": "83057877",
      "nombres": "ROMERO CARO FERNEY JOSE"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "29/08/2024",
      "placa": "GEP396",
      "modelo": "2020",
      "cedula": "42887201",
      "nombres": "MARTHA NIRIA ARANGO ARROYAVE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/05/2024",
      "placa": "FZV401",
      "modelo": "2019",
      "cedula": "71752471",
      "nombres": "DIEGO ALBERTO ESTRADA HERNANDEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "20/02/2025",
      "placa": "JYQ653",
      "modelo": "2021",
      "cedula": "43272084",
      "nombres": "LINA MARIA MINA CARMONA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "27/06/2024",
      "placa": "UEL492",
      "modelo": "2015",
      "cedula": "43817132",
      "nombres": "CLAUDIA PATRICIA ARISTIZABAL ARISTIZABAL"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "06/09/2023",
      "placa": "USU916",
      "modelo": "2016",
      "cedula": "24947487",
      "nombres": "CIFUENTES MESA ESNEDA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "28/11/2023",
      "placa": "ISS352",
      "modelo": "2016",
      "cedula": "1036627139",
      "nombres": "NATALIA ANDREA ACEVEDO RUA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/04/2024",
      "placa": "GVO252",
      "modelo": "2020",
      "cedula": "29292463",
      "nombres": "MEJIA POTES, ISABEL CRISTINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/12/2023",
      "placa": "IOV384",
      "modelo": "2016",
      "cedula": "901496529",
      "nombres": "COLAM SOLUTIONS S.A.S."
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "13/12/2024",
      "placa": "MWY181",
      "modelo": "2014",
      "cedula": "70466584",
      "nombres": "GIRALDO MARTINEZ DUQUEIRO DE JESUS"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "24/01/2024",
      "placa": "FSW484",
      "modelo": "2019",
      "cedula": "66972102",
      "nombres": "GIRALDO RAMIREZ NORHA PATRICIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "30/06/2024",
      "placa": "MJY415",
      "modelo": "2013",
      "cedula": "1128269790",
      "nombres": "JULIANA BALAGUERA MEJIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "09/09/2018",
      "placa": "MSR156",
      "modelo": "2013",
      "cedula": "12239063",
      "nombres": "PERDOMO CLAROS JOSE HENRY"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "10/05/2024",
      "placa": "JQU487",
      "modelo": "2022",
      "cedula": "75101362",
      "nombres": "VELASQUEZ MARULANDA, CRISTIAN ANDRES"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "14/03/2023",
      "placa": "FXP742",
      "modelo": "2020",
      "cedula": "1039454371",
      "nombres": "LUISA FERNANDA MANTILLA MANTIL"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "22/03/2023",
      "placa": "JON961",
      "modelo": "2021",
      "cedula": "42886456",
      "nombres": "MESA MONTOYA, SOL BEATRIZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "10/02/2023",
      "placa": "MVX031",
      "modelo": "2014",
      "cedula": "98624071",
      "nombres": "YHOJAN ALEXIS GUTIERREZ CALLE"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "29/06/2024",
      "placa": "EOV159",
      "modelo": "2019",
      "cedula": "1088308016",
      "nombres": "JUAN DAVID ESCAMILLA SANCHEZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "20/09/2022",
      "placa": "JCO832",
      "modelo": "2017",
      "cedula": "71277919",
      "nombres": "BUSTAMANTE ROMAN DAVID JULIAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/04/2024",
      "placa": "JZM319",
      "modelo": "2021",
      "cedula": "43544144",
      "nombres": "DIANA RUTH GIL MELENDEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "GVK816",
      "modelo": "2020",
      "cedula": "1102794511",
      "nombres": "LILIANA LUCIA FERIA HERNANDEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/04/2024",
      "placa": "GDZ705",
      "modelo": "2020",
      "cedula": "42984472",
      "nombres": "MERCEDES STELLA, ZAPATA ALVAREZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "17/01/2025",
      "placa": "GLV429",
      "modelo": "2020",
      "cedula": "9012374285",
      "nombres": "INVERLANDES SAS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "11/10/2024",
      "placa": "EPP373",
      "modelo": "2018",
      "cedula": "1128397251",
      "nombres": "QUINTERO CA?AS, LUIS FERNANDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "17/12/2022",
      "placa": "DTR808",
      "modelo": "2016",
      "cedula": "43646860",
      "nombres": "BIBIANA MARIA CLAVIJO NORENA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/10/2024",
      "placa": "DST568",
      "modelo": "2017",
      "cedula": "71606491",
      "nombres": "LUIS FERNANDO LOPERA AGUIRRE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "28/03/2024",
      "placa": "KIK487",
      "modelo": "2012",
      "cedula": "70826696",
      "nombres": "RIGOBERTO DE JESUS NOREÑÑA NOREÑÑA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "29/05/2024",
      "placa": "EIM766",
      "modelo": "2018",
      "cedula": "1017132757",
      "nombres": "LINA MARIA, BALLESTEROS GARCIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/09/2019",
      "placa": "IFU081",
      "modelo": "2016",
      "cedula": "8903002794",
      "nombres": "BANCO DE OCCIDENTE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "25/08/2024",
      "placa": "IHQ087",
      "modelo": "2016",
      "cedula": "43579928",
      "nombres": "ECHEVERRI PAREJA, GLORIA PATRICIA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "02/03/2024",
      "placa": "GVP776",
      "modelo": "2020",
      "cedula": "70038758",
      "nombres": "GUILLERMO RESTREPO GONZALEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "05/02/2025",
      "placa": "MOR688",
      "modelo": "2009",
      "cedula": "32520439",
      "nombres": "MARLENY DEL SOCORRO ARISTIZABAL GOMEZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "MJL292",
      "modelo": "2013",
      "cedula": "24686009",
      "nombres": "MARIA NELIDA MONCADA PARRA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "09/12/2022",
      "placa": "JBK652",
      "modelo": "2016",
      "cedula": "1037591629",
      "nombres": "CARLOS ANDRES TABARES CARVAJAL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "06/07/2023",
      "placa": "EGW807",
      "modelo": "2018",
      "cedula": "70419161",
      "nombres": "JOHN WILMAR JIMENEZ TABORDA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "IAZ729",
      "modelo": "2015",
      "cedula": "1040737530",
      "nombres": "TATIANA BERRIO AGUIRRE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/08/2024",
      "placa": "JKP393",
      "modelo": "2018",
      "cedula": "43687516",
      "nombres": "ISABEL CRISTINA MORALES ZAPATA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/03/2021",
      "placa": "MOX481",
      "modelo": "2011",
      "cedula": "80888186",
      "nombres": "ANDRES STEEVEN GIL BOLIVAR"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/09/2024",
      "placa": "ISX776",
      "modelo": "2019",
      "cedula": "78029768",
      "nombres": "PACHECO PACHECO LUIS MIGUEL"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "26/09/2021",
      "placa": "MVU872",
      "modelo": "2013",
      "cedula": "42689430",
      "nombres": "LUZ ELENA ARROYAVE HERNANDEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "23/05/2024",
      "placa": "JKL253",
      "modelo": "2017",
      "cedula": "71655747",
      "nombres": "ACOSTA BOTERO, JULIO CESAR"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "13/11/2024",
      "placa": "GHX114",
      "modelo": "2020",
      "cedula": "42688450",
      "nombres": "ISABEL CRISTINA GARCIA RIVERA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "05/11/2022",
      "placa": "MVR576",
      "modelo": "2013",
      "cedula": "52397411",
      "nombres": "LINA ANDREA CABEZA CIFUENTES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "EOS394",
      "modelo": "2019",
      "cedula": "15507955",
      "nombres": "JORGE MARIO GAVIRIA HINCAPIE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/01/2024",
      "placa": "GIK347",
      "modelo": "2021",
      "cedula": "31578234",
      "nombres": "LORENA GIRALDO SILVA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "22/10/2024",
      "placa": "GWV961",
      "modelo": "2020",
      "cedula": "43279773",
      "nombres": "YEIMY CRISTINA LOPEZ QUINTERO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "04/08/2023",
      "placa": "FHO384",
      "modelo": "2010",
      "cedula": "1017221286",
      "nombres": "ALEJANDRO VASQUEZ FRANCO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/08/2024",
      "placa": "INS162",
      "modelo": "2017",
      "cedula": "43520301",
      "nombres": "LUZ STELLA VARGAS MONCADA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "26/08/2022",
      "placa": "GCV272",
      "modelo": "2020",
      "cedula": "15436922",
      "nombres": "HENRY ANTONIO RIVERA PAMPLONA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "26/12/2024",
      "placa": "JYR806",
      "modelo": "2022",
      "cedula": "1037611080",
      "nombres": "ECHAVARRIA URREA MARIANA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "22/09/2024",
      "placa": "IFV406",
      "modelo": "2016",
      "cedula": "88144994",
      "nombres": "MEJIA PORTILLO JAIRO LEONARDO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "14/09/2024",
      "placa": "NEN498",
      "modelo": "2013",
      "cedula": "91161952",
      "nombres": "MEJIA CALLE DANIEL"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "01/12/2024",
      "placa": "GXK401",
      "modelo": "2021",
      "cedula": "1152197505",
      "nombres": "MORALES HERNANDEZ JOHAN"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "21/05/2024",
      "placa": "MUY173",
      "modelo": "2014",
      "cedula": "66853953",
      "nombres": "JARAMILLO NAVARRO, MARTA ORELLA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "10/12/2022",
      "placa": "MST536",
      "modelo": "2013",
      "cedula": "1037655550",
      "nombres": "JAVIER HELI RINCON JIMENEZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "27/08/2024",
      "placa": "GWU493",
      "modelo": "2020",
      "cedula": "71311799",
      "nombres": "CARLOS ANDRES RESTREPO RICO"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "01/02/2023",
      "placa": "INM804",
      "modelo": "2016",
      "cedula": "1035913963",
      "nombres": "HERRERA ZAPATA JESUS ARMANDO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/12/2023",
      "placa": "GWW402",
      "modelo": "2020",
      "cedula": "1128282554",
      "nombres": "SERGIO VERGARA OSPINA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "04/04/2024",
      "placa": "JYR593",
      "modelo": "2021",
      "cedula": "32481754",
      "nombres": "LUZ ANGELA GRAJALES GRAJALES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/08/2024",
      "placa": "MSO532",
      "modelo": "2012",
      "cedula": "1020802578",
      "nombres": "JULIAN TRUJILLO CHARRY"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "22/02/2025",
      "placa": "IAW081",
      "modelo": "2015",
      "cedula": "71748727",
      "nombres": "LLANO BEDOYA, JOHN JAIME"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "21/04/2024",
      "placa": "KHN259",
      "modelo": "2010",
      "cedula": "11172848",
      "nombres": "JULIO ME?ACA JOSE CARLOS"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "20/12/2024",
      "placa": "IHR367",
      "modelo": "2015",
      "cedula": "1002206091",
      "nombres": "CASTRILLON ACEVEDO MANUELA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "06/04/2024",
      "placa": "ISR040",
      "modelo": "2016",
      "cedula": "1152438027",
      "nombres": "HERRERA MEJIA, ANDERSON"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/08/2024",
      "placa": "GFK741",
      "modelo": "2020",
      "cedula": "21484040",
      "nombres": "GILMA ESTER RESTREPO DE ZEA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "02/12/2024",
      "placa": "IHS168",
      "modelo": "2015",
      "cedula": "71655145",
      "nombres": "MARTINEZ MARIN HUGO ALBEIRO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/08/2024",
      "placa": "EOV415",
      "modelo": "2018",
      "cedula": "98671244",
      "nombres": "RESTREPO RESTREPO, SANTIAGO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "05/05/2024",
      "placa": "GDZ397",
      "modelo": "2020",
      "cedula": "1067840367",
      "nombres": "HERNANDEZ CONDE, ELKER RAFAEL"
  },
  {
      "compañia": "SBS",
      "finvigencia": "05/09/2023",
      "placa": "IEU805",
      "modelo": "2014",
      "cedula": "1152438227",
      "nombres": "VARGAS BETANCUR, CRISTINA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "29/12/2022",
      "placa": "IEM230",
      "modelo": "2015",
      "cedula": "1098639398",
      "nombres": "GABRIEL ORDO?EZ PICO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/06/2024",
      "placa": "FHL876",
      "modelo": "2009",
      "cedula": "98676755",
      "nombres": "CARLOS ANDREY MORALES MONTOYA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "05/04/2024",
      "placa": "MXY738",
      "modelo": "2014",
      "cedula": "39270815",
      "nombres": "MARIA EUGENIA HOLGUIN ESCOBAR"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/07/2024",
      "placa": "FSX949",
      "modelo": "2018",
      "cedula": "43467767",
      "nombres": "BETANCUR ZULUAGA NORA CECILIA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "06/07/2023",
      "placa": "JBL195",
      "modelo": "2017",
      "cedula": "1017251080",
      "nombres": "HERNANDEZ MAYA, KEVIN JOHAN"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "11/06/2022",
      "placa": "JKR238",
      "modelo": "2018",
      "cedula": "1037632805",
      "nombres": "BALBIN SILVA,JUAN FERNANDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/09/2024",
      "placa": "MTZ339",
      "modelo": "2013",
      "cedula": "15515935",
      "nombres": "DIEGO ALEJANDRO RAMIREZ PEREZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/09/2024",
      "placa": "JPT604",
      "modelo": "2021",
      "cedula": "1017198217",
      "nombres": "GALEANO GARCES, KEYLA YURANI"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "27/09/2024",
      "placa": "IFT881",
      "modelo": "2016",
      "cedula": "1034986490",
      "nombres": "CORTES SILVA MATEO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "19/07/2024",
      "placa": "JIW136",
      "modelo": "2017",
      "cedula": "98710350",
      "nombres": "GILBERTO DE JESUS URIBE GAVIRI"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/08/2024",
      "placa": "EFX432",
      "modelo": "2017",
      "cedula": "8160329",
      "nombres": "ALEJANDRO JARAMILLO TORRES"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "09/09/2023",
      "placa": "MSR448",
      "modelo": "2013",
      "cedula": "42976976",
      "nombres": "ORTIZ LOPERA MARIA GLADYS ."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "FUM480",
      "modelo": "2019",
      "cedula": "1040744337",
      "nombres": "SUSANA MAYA RESTREPO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/07/2022",
      "placa": "IOU679",
      "modelo": "2016",
      "cedula": "1152187680",
      "nombres": "CARMEN ELISA LOPERA ARBELAEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/10/2021",
      "placa": "FVM745",
      "modelo": "2019",
      "cedula": "43739762",
      "nombres": "CLAUDIA PATRICIA CESPEDES QUINTERO"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "05/04/2024",
      "placa": "EGK081",
      "modelo": "2018",
      "cedula": "1044932957",
      "nombres": "SUAREZ MARTINEZ JUAN DIEGO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "10/06/2024",
      "placa": "JCN771",
      "modelo": "2017",
      "cedula": "71580772",
      "nombres": "OSORIO MOLINA, JOSE EDILBERTO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "19/09/2024",
      "placa": "JOS149",
      "modelo": "2021",
      "cedula": "15516529",
      "nombres": "CORREA VELASQUEZ, ALEJANDRO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "28/08/2024",
      "placa": "KFN325",
      "modelo": "2019",
      "cedula": "1020488636",
      "nombres": "GALLEGO GARCIA NIKOLAS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "23/12/2024",
      "placa": "FRS633",
      "modelo": "2019",
      "cedula": "3757703",
      "nombres": "GRISELDO RAFAEL PANTOJA SANCHE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "10/09/2024",
      "placa": "GHV119",
      "modelo": "2020",
      "cedula": "1037586213",
      "nombres": "ARANGO CALDERON,SEBASTIAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/08/2021",
      "placa": "JPW979",
      "modelo": "2021",
      "cedula": "1017143707",
      "nombres": "JULIANA SANCHEZ ZABALA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "10/09/2024",
      "placa": "FXN215",
      "modelo": "2019",
      "cedula": "21853278",
      "nombres": "LUZ AYDEE URREGO LOPERA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "31/05/2023",
      "placa": "JZM328",
      "modelo": "2022",
      "cedula": "79759879",
      "nombres": "OSCAR JAVIER GARZON TEATINO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "10/09/2024",
      "placa": "HDW284",
      "modelo": "2016",
      "cedula": "75064509",
      "nombres": "JUAN CARLOS SALAZAR MARIN"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "30/01/2024",
      "placa": "HZM508",
      "modelo": "2015",
      "cedula": "43883897",
      "nombres": "ARDILA OCAMPO MARIA EDILIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/01/2025",
      "placa": "JIV347",
      "modelo": "2017",
      "cedula": "1040039681",
      "nombres": "MARTINEZ RAMIREZ,STEFANIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "29/03/2024",
      "placa": "JQT572",
      "modelo": "2022",
      "cedula": "32018704",
      "nombres": "MESA ESTRADA, MARIANA DE JESUS ."
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "10/09/2024",
      "placa": "DJP049",
      "modelo": "2012",
      "cedula": "43799657",
      "nombres": "GOMEZ ECHEVERRI,LUZ ANGELA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/07/2024",
      "placa": "GEP848",
      "modelo": "2020",
      "cedula": "21769341",
      "nombres": "PALACIO YEPES ISABEL CRISTINA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "28/10/2024",
      "placa": "FQW845",
      "modelo": "2019",
      "cedula": "1189200",
      "nombres": "ALVARO JOSE GOMEZ CRUZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "02/12/2021",
      "placa": "JSU651",
      "modelo": "2021",
      "cedula": "71690420",
      "nombres": "SALAZAR GUTIERREZ JORGE WILLIAM"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "11/09/2024",
      "placa": "GEP518",
      "modelo": "2020",
      "cedula": "1037975018",
      "nombres": "ALVARO DANIEL VILLA MORALES"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "02/05/2023",
      "placa": "KBQ833",
      "modelo": "2010",
      "cedula": "24937807",
      "nombres": "ALEYDA VALLEJO DE LOAIZA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/08/2019",
      "placa": "DJP367",
      "modelo": "2013",
      "cedula": "42976435",
      "nombres": "ELOISA DEL SOCORRO MESA ALVAREZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "29/01/2023",
      "placa": "GVP108",
      "modelo": "2020",
      "cedula": "43634979",
      "nombres": "GALLO CHAVARRIA,DHIZ NORY ."
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "24/08/2024",
      "placa": "UEN300",
      "modelo": "2016",
      "cedula": "1017270543",
      "nombres": "ANGY PAOLA MONCADA GAVIRIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "27/09/2024",
      "placa": "DHV567",
      "modelo": "2012",
      "cedula": "66866845",
      "nombres": "RAMIREZ GOMEZ LUZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/01/2024",
      "placa": "ISV811",
      "modelo": "2016",
      "cedula": "43568098",
      "nombres": "TATIHANA ZEA CORREA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "17/08/2024",
      "placa": "JZK556",
      "modelo": "2022",
      "cedula": "1020403635",
      "nombres": "CADENA SERNA, YURY LORENA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "11/09/2022",
      "placa": "DHZ591",
      "modelo": "2012",
      "cedula": "22056434",
      "nombres": "ZAPATA ARANGO DE PEREZ,MARIA FABIOLA DE LOS M"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "16/09/2024",
      "placa": "JOR254",
      "modelo": "2021",
      "cedula": "1239488931",
      "nombres": "GABRIELA INES TAPIAS SANCHEZ"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "21/01/2025",
      "placa": "UEO483",
      "modelo": "2015",
      "cedula": "1016041334",
      "nombres": "GABANZO MONTOYA ANDRES FELIPE"
  },
  {
      "compañia": "SBS",
      "finvigencia": "09/12/2024",
      "placa": "DSX382",
      "modelo": "2018",
      "cedula": "1017124904",
      "nombres": "RIVERA GARAY, LORENA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "07/10/2023",
      "placa": "IMQ806",
      "modelo": "2015",
      "cedula": "52739989",
      "nombres": "FORERO ALGARRA, DORA CECILIA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "03/03/2023",
      "placa": "JIZ687",
      "modelo": "2017",
      "cedula": "1030556242",
      "nombres": "CRISTIAN ALEXANDER CHICA OSORIO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "11/12/2024",
      "placa": "EPL383",
      "modelo": "2019",
      "cedula": "8393535",
      "nombres": "RESTREPO BERMUDEZ HERNAN DARIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/09/2024",
      "placa": "FQQ763",
      "modelo": "2019",
      "cedula": "540876",
      "nombres": "RAMIRO ANTONIO MONTIEL URDANETA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/09/2024",
      "placa": "GEK423",
      "modelo": "2019",
      "cedula": "1128438912",
      "nombres": "CRISTIAN DAVID ZUÑIGA FLOREZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/10/2024",
      "placa": "JHS111",
      "modelo": "2017",
      "cedula": "28548432",
      "nombres": "BETANCUR GONZALEZ,ELEONORA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "03/11/2019",
      "placa": "IOU783",
      "modelo": "2016",
      "cedula": "98618371",
      "nombres": "ORLANDO DE JESUS SAJONA CASTAÑEDA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/05/2024",
      "placa": "GVP236",
      "modelo": "2020",
      "cedula": "1017192266",
      "nombres": "ANA GABRIELA BARCO CHARFUELAN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "12/09/2024",
      "placa": "HNW617",
      "modelo": "2014",
      "cedula": "98560831",
      "nombres": "EDWIN HERNAN AGUILAR ESCOBAR"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "09/02/2025",
      "placa": "JKL678",
      "modelo": "2018",
      "cedula": "43114405",
      "nombres": "ADRIANA BERNAL"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "25/02/2025",
      "placa": "GTS777",
      "modelo": "2021",
      "cedula": "98708134",
      "nombres": "ARISTIZABAL GONZALEZ, SANTIAGO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "29/12/2023",
      "placa": "FQT618",
      "modelo": "2019",
      "cedula": "71733965",
      "nombres": "OSPINA JHON FREDY"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "06/07/2024",
      "placa": "JKQ161",
      "modelo": "2017",
      "cedula": "43883770",
      "nombres": "Luz Creidy Pati?o Orozco"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "24/09/2022",
      "placa": "DSY064",
      "modelo": "2018",
      "cedula": "1152686092",
      "nombres": "BRAYAN BANQUEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/11/2024",
      "placa": "KMS331",
      "modelo": "2012",
      "cedula": "43068098",
      "nombres": "GLADYS DEL S OSORIO OSORIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/11/2020",
      "placa": "MIR425",
      "modelo": "2013",
      "cedula": "98669754",
      "nombres": "DAIRO ALEJANDRO CARDONA OCAMPO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "11/01/2025",
      "placa": "GVO085",
      "modelo": "2020",
      "cedula": "8431808",
      "nombres": "CARLOS ANDRES BARREIRO HINCAPI"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/02/2024",
      "placa": "UDZ274",
      "modelo": "2015",
      "cedula": "32296796",
      "nombres": "ELIZABETH CARDONA RENDON"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "12/09/2024",
      "placa": "HZK802",
      "modelo": "2014",
      "cedula": "71754660",
      "nombres": "CORONADO GARCIA JOHN JAIME"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/09/2024",
      "placa": "GEV763",
      "modelo": "2019",
      "cedula": "71753209",
      "nombres": "JORGE ALBERTO VARGAS OSORIO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/06/2024",
      "placa": "GEL418",
      "modelo": "2020",
      "cedula": "32182299",
      "nombres": "GALVIS GIL,CATALINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/06/2024",
      "placa": "JKM570",
      "modelo": "2017",
      "cedula": "71388551",
      "nombres": "ALEJANDRO FERNANDEZ CHAVERRA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "12/09/2024",
      "placa": "GEP844",
      "modelo": "2020",
      "cedula": "43482426",
      "nombres": "LUZ MARIA RIOS ALZATE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/12/2024",
      "placa": "JSS864",
      "modelo": "2021",
      "cedula": "32109216",
      "nombres": "CLAUDIA PATRICIA GARCIA MARIN"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "12/09/2024",
      "placa": "KHG166",
      "modelo": "2011",
      "cedula": "71684854",
      "nombres": "PAREJA CARLOS MARIO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "31/03/2024",
      "placa": "JSU992",
      "modelo": "2021",
      "cedula": "1128456790",
      "nombres": "DANIELA . VALLE BEDOYA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/02/2025",
      "placa": "JBN797",
      "modelo": "2017",
      "cedula": "42766125",
      "nombres": "MARCELA ADRIANA GOMEZ GOMEZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "13/09/2024",
      "placa": "INR765",
      "modelo": "2017",
      "cedula": "1066178417",
      "nombres": "SARMIENTO EDGAR JOSE"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "13/09/2024",
      "placa": "JPT399",
      "modelo": "2020",
      "cedula": "98634963",
      "nombres": "EDISSON GARCIA QUINTERO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/08/2024",
      "placa": "DJO426",
      "modelo": "2012",
      "cedula": "1214715992",
      "nombres": "JULIAN DAVID MESA VANEGAS"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "02/11/2024",
      "placa": "EGZ198",
      "modelo": "2018",
      "cedula": "43927401",
      "nombres": "TATIANA MARCELA OSORIO OTALVAR"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/04/2024",
      "placa": "DEV773",
      "modelo": "2012",
      "cedula": "8163617",
      "nombres": "GABRIEL JAIME VALDERRAMA TORRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/09/2024",
      "placa": "JOS602",
      "modelo": "2020",
      "cedula": "43787581",
      "nombres": "LUZ MILENA VILLEGAS ALZATE"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "11/09/2024",
      "placa": "JOS713",
      "modelo": "2021",
      "cedula": "44004290",
      "nombres": "DENNIS CATALINA AGUILAR VARGAS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "28/07/2024",
      "placa": "JPT157",
      "modelo": "2021",
      "cedula": "14250946",
      "nombres": "BAEZ APARICIO PABLO ANTONIO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "25/10/2024",
      "placa": "HGY722",
      "modelo": "2013",
      "cedula": "71603729",
      "nombres": "LONDO?O JORGE ALBERTO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/07/2024",
      "placa": "KIV869",
      "modelo": "2011",
      "cedula": "70418892",
      "nombres": "JAIME HERNANDO GOMEZ RUIZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "14/09/2022",
      "placa": "JOS359",
      "modelo": "2021",
      "cedula": "1017222539",
      "nombres": "JULIANA RESTREPO GIRALDO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/11/2018",
      "placa": "HYS193",
      "modelo": "2015",
      "cedula": "71721968",
      "nombres": "VALENCIA GAVIRIA ALEXANDER VALENCIA GAVIRIA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "GEZ151",
      "modelo": "2020",
      "cedula": "1128480860",
      "nombres": "ANA MARIA HORTA MAYA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "25/11/2024",
      "placa": "HZL547",
      "modelo": "2014",
      "cedula": "1077442859",
      "nombres": "ASPRILLA CORDOBA MARIA ISABEL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/03/2024",
      "placa": "DIL037",
      "modelo": "2012",
      "cedula": "43977020",
      "nombres": "JULIANA VASCO ACOSTA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "27/09/2024",
      "placa": "IAU998",
      "modelo": "2015",
      "cedula": "1039453665",
      "nombres": "DIANA RODRIGUEZ HOLGUIN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "22/11/2022",
      "placa": "HYT363",
      "modelo": "2017",
      "cedula": "8162895",
      "nombres": "CARLOS ANDRES NAVARRO VARGAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "06/02/2023",
      "placa": "EHL979",
      "modelo": "2017",
      "cedula": "43834386",
      "nombres": "SANDRA AUXILIO ARIAS CASTRO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "21/03/2024",
      "placa": "FQU504",
      "modelo": "2019",
      "cedula": "45531533",
      "nombres": "Pajaro Tilbes, Carmen Cecilia"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/12/2024",
      "placa": "JQO945",
      "modelo": "2021",
      "cedula": "1036644263",
      "nombres": "LUZ MARINA SANCHEZ YEPES"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "20/06/2024",
      "placa": "JPU068",
      "modelo": "2020",
      "cedula": "15377609",
      "nombres": "HECTOR DARIO CIFUENTES DUQUE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/08/2024",
      "placa": "FOT754",
      "modelo": "2019",
      "cedula": "1018509736",
      "nombres": "ANA DANIELA QUIROZ QUIROZ"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "20/06/2023",
      "placa": "FXR266",
      "modelo": "2019",
      "cedula": "70903717",
      "nombres": "VILLEGA GIRALDO, LUIS FERNANDO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "08/09/2024",
      "placa": "HAL783",
      "modelo": "2014",
      "cedula": "8104092",
      "nombres": "VILLADA Gil, Stiven"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "29/10/2024",
      "placa": "EPR931",
      "modelo": "2019",
      "cedula": "43755298",
      "nombres": "BETANCUR MEJIA JULIANA ANDREA"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "15/09/2024",
      "placa": "UUU951",
      "modelo": "2016",
      "cedula": "1088304430",
      "nombres": "LEON RAMIREZ JERALDIN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "16/01/2025",
      "placa": "MNW317",
      "modelo": "2008",
      "cedula": "314886",
      "nombres": "LUIS ALEJANDRO CAMACHO CUBEDO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/12/2024",
      "placa": "GWU561",
      "modelo": "2019",
      "cedula": "42008170",
      "nombres": "GALLEGO FIGUEROA LUZ CARIME"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/02/2020",
      "placa": "ENY415",
      "modelo": "2018",
      "cedula": "8909039388",
      "nombres": "BANCOLOMBIA S.A."
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/10/2021",
      "placa": "ICZ105",
      "modelo": "2015",
      "cedula": "43574119",
      "nombres": "NATALIA MARIA ESTRADA MARTINEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "21/12/2024",
      "placa": "IGO229",
      "modelo": "2016",
      "cedula": "43738840",
      "nombres": "OCHOA VALENCIA,NORMA LUCIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/09/2024",
      "placa": "MTT800",
      "modelo": "2017",
      "cedula": "356877",
      "nombres": "FERNANDO ANTONIO ACEVEDO PEREZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "17/03/2024",
      "placa": "FQT832",
      "modelo": "2019",
      "cedula": "71274427",
      "nombres": "CARLOS MARIO AGUDELO GARZON"
  },
  {
      "compañia": "SBS",
      "finvigencia": "02/08/2024",
      "placa": "GEV984",
      "modelo": "2019",
      "cedula": "1128443160",
      "nombres": "ARANGO DUQUE LAURA,"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "20/02/2024",
      "placa": "MSP579",
      "modelo": "2013",
      "cedula": "1038360488",
      "nombres": "MIRA HERRERA MARLON"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "13/09/2024",
      "placa": "HYR792",
      "modelo": "2015",
      "cedula": "98703778",
      "nombres": ". JOHN JAIRO LOPEZ GOMEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/07/2019",
      "placa": "KAZ260",
      "modelo": "2014",
      "cedula": "43512377",
      "nombres": "LILIANA ISABEL OCAMPO ASPRILLA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/08/2024",
      "placa": "BXT512",
      "modelo": "2011",
      "cedula": "92032248",
      "nombres": "RAUL JOSE LARA ROMERO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "17/01/2025",
      "placa": "GES219",
      "modelo": "2020",
      "cedula": "32105576",
      "nombres": "GOMEZ GARCIA, CAROLINA"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "08/08/2023",
      "placa": "GRQ574",
      "modelo": "2019",
      "cedula": "32299197",
      "nombres": "Nataly Echeverri Marin"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "01/08/2024",
      "placa": "FXS108",
      "modelo": "2019",
      "cedula": "1037575825",
      "nombres": "JOHNY ALEXANDER VELASQUEZ ARIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "12/09/2024",
      "placa": "JCO422",
      "modelo": "2017",
      "cedula": "71265715",
      "nombres": "ALEXANDER CHICA ZAPATA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "29/03/2024",
      "placa": "FXR142",
      "modelo": "2019",
      "cedula": "1128281699",
      "nombres": "Alberto Ram?rez Velasquez"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/04/2024",
      "placa": "IYR050",
      "modelo": "2016",
      "cedula": "43509604",
      "nombres": "GLORIA CHIRLEY NOREÑA NOREÑA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/01/2023",
      "placa": "RLY795",
      "modelo": "2012",
      "cedula": "35897139",
      "nombres": "LINA MARIA PALACIOS GARRIDO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "26/12/2024",
      "placa": "JCQ226",
      "modelo": "2017",
      "cedula": "43036080",
      "nombres": "MU?OZ MARGARITA MARIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/03/2024",
      "placa": "IAU870",
      "modelo": "2015",
      "cedula": "71279108",
      "nombres": "STEVEN GIRALDO, CALLE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "07/09/2024",
      "placa": "GVP043",
      "modelo": "2020",
      "cedula": "890936126",
      "nombres": "MOTOFRENOS S.A.S."
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "18/06/2024",
      "placa": "JIW025",
      "modelo": "2017",
      "cedula": "50979373",
      "nombres": "LUZ ANGELA ALVAREZ LARGO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "24/02/2025",
      "placa": "MSS921",
      "modelo": "2013",
      "cedula": "31897532",
      "nombres": "ESMERALDA SANTACRUZ CASTA?O"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/05/2022",
      "placa": "JQU711",
      "modelo": "2022",
      "cedula": "17716092",
      "nombres": "ANA MARIA PARRA MUÑOZ"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "25/01/2024",
      "placa": "JPV646",
      "modelo": "2021",
      "cedula": "37577993",
      "nombres": "LINA YANETH JAIME PEDROZO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/11/2022",
      "placa": "HFK399",
      "modelo": "2015",
      "cedula": "1042763511",
      "nombres": "JOHN ALEJANDRO BALVIN TORRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/09/2021",
      "placa": "MUK217",
      "modelo": "2013",
      "cedula": "1037601178",
      "nombres": "ALVARO ARIAS PALACIO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "06/02/2025",
      "placa": "ENZ535",
      "modelo": "2019",
      "cedula": "34983498",
      "nombres": "ORSINIS MARIA ELLES LOPEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "05/10/2024",
      "placa": "IYU061",
      "modelo": "2017",
      "cedula": "1152192024",
      "nombres": "CARLOS ANDRES RAMIREZ URREA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/03/2021",
      "placa": "UDY689",
      "modelo": "2015",
      "cedula": "1017141207",
      "nombres": "VERONICA GONZALEZ AGUDELO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/09/2023",
      "placa": "DHW664",
      "modelo": "2012",
      "cedula": "1152203441",
      "nombres": "ANDRES FELIPE MEZA RENGIFO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "15/09/2024",
      "placa": "JBO428",
      "modelo": "2017",
      "cedula": "13843182",
      "nombres": "PEREZ CANIZALES GUSTAVO A"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/09/2024",
      "placa": "HFM501",
      "modelo": "2014",
      "cedula": "1017164128",
      "nombres": "LAURA DUQUE RESTREPO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "15/06/2024",
      "placa": "EOM377",
      "modelo": "2019",
      "cedula": "1152210241",
      "nombres": "VALENCIA VARELA,MARIA CAMILA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/09/2024",
      "placa": "JOR310",
      "modelo": "2021",
      "cedula": "32352278",
      "nombres": "MARTHA IRENE LONDONO JARAMILLO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "IYQ214",
      "modelo": "2017",
      "cedula": "70505728",
      "nombres": "GUILLERMO NICOLAS SEPULVEDA MEJIA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/02/2024",
      "placa": "JSV154",
      "modelo": "2021",
      "cedula": "3522864",
      "nombres": "Carlos Roberto Londo?o David"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "21/12/2024",
      "placa": "GMZ834",
      "modelo": "2020",
      "cedula": "1073532912",
      "nombres": "ESPERANZA GAUTA LIDIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "07/10/2023",
      "placa": "HTT079",
      "modelo": "2014",
      "cedula": "70502536",
      "nombres": "FRANCISCO ALBERTO VALENCIA RESTREPO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "19/08/2024",
      "placa": "LAX144",
      "modelo": "2017",
      "cedula": "1037625242",
      "nombres": "TORRES ARIAS, MARIA JAZMIN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "19/10/2024",
      "placa": "JOS263",
      "modelo": "2021",
      "cedula": "1037628828",
      "nombres": "SEBASTIAN GOMEZ GRANADOS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "10/02/2024",
      "placa": "ISU397",
      "modelo": "2016",
      "cedula": "1039702348",
      "nombres": "YESENIA AREIZA LEZCANO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "29/06/2024",
      "placa": "JYU376",
      "modelo": "2021",
      "cedula": "43974977",
      "nombres": "DIAZ CASTRO MARIA ADELAIDA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "03/04/2024",
      "placa": "GEX830",
      "modelo": "2020",
      "cedula": "43916257",
      "nombres": "VALENCIA ARIAS, NANCY ENITH"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/07/2024",
      "placa": "JPU135",
      "modelo": "2020",
      "cedula": "70056167",
      "nombres": "RAUL DUQUE MARIN"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "17/01/2025",
      "placa": "ISU381",
      "modelo": "2016",
      "cedula": "1214748148",
      "nombres": "MURCIA PORTILLO OMAR DAVID"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/12/2023",
      "placa": "JSU431",
      "modelo": "2021",
      "cedula": "43259051",
      "nombres": "LUISA FERNANDA ALVAREZ HERNANDEZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "11/02/2024",
      "placa": "KHS268",
      "modelo": "2011",
      "cedula": "1037649457",
      "nombres": "CAMILA ANDREA CARDONA MU?OZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "30/12/2024",
      "placa": "JIX164",
      "modelo": "2017",
      "cedula": "43257473",
      "nombres": "PENA LADY NORAYA, ."
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "29/12/2024",
      "placa": "DJN400",
      "modelo": "2012",
      "cedula": "43542732",
      "nombres": "BOLIVAR OLAYA MARIA VICTORIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/09/2020",
      "placa": "DEW731",
      "modelo": "2012",
      "cedula": "1017194842",
      "nombres": "YEISON GARCES ATEHORTUA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "29/05/2024",
      "placa": "GWU457",
      "modelo": "2020",
      "cedula": "1090368570",
      "nombres": "DEIDY YAJAIRA CARDENAS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "09/11/2023",
      "placa": "EOW941",
      "modelo": "2018",
      "cedula": "3399992",
      "nombres": "EDINSON GABRIEL BRAND MONSALVE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "16/09/2022",
      "placa": "DFR208",
      "modelo": "2012",
      "cedula": "43252265",
      "nombres": "NU?EZ MORALES LAURA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "16/09/2024",
      "placa": "GRO717",
      "modelo": "2020",
      "cedula": "70566705",
      "nombres": "AGUILAR ARRIETA, JOSE MIGUEL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "GWZ240",
      "modelo": "2020",
      "cedula": "71384582",
      "nombres": "JOSE DAVID MENESES ANAYA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "16/09/2024",
      "placa": "HZK066",
      "modelo": "2014",
      "cedula": "11794268",
      "nombres": "EZEQUIEL VARELA VALENCIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "16/02/2024",
      "placa": "KAS474",
      "modelo": "2014",
      "cedula": "94538894",
      "nombres": "GONZALEZ HOYOS FERNANDO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "27/10/2023",
      "placa": "EIO397",
      "modelo": "2016",
      "cedula": "43984693",
      "nombres": "DUQUE SANCLEMENTE, PAULA ANDRE"
  },
  {
      "compañia": "SBS",
      "finvigencia": "29/01/2025",
      "placa": "JPY270",
      "modelo": "2021",
      "cedula": "1128427037",
      "nombres": "ACEVEDO RUIZ, SANDRA MILENA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "04/11/2024",
      "placa": "JOT119",
      "modelo": "2020",
      "cedula": "1017169355",
      "nombres": "NATALIA ORTIZ ROJAS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "03/02/2025",
      "placa": "HZK389",
      "modelo": "2014",
      "cedula": "1128268304",
      "nombres": "CLAUDIA CRISTINA GARCIA GIRALD"
  },
  {
      "compañia": "SBS",
      "finvigencia": "26/08/2024",
      "placa": "JOS745",
      "modelo": "2020",
      "cedula": "15988041",
      "nombres": "FLOREZ GIRALDO, JOSE GILDARDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/06/2023",
      "placa": "MIZ705",
      "modelo": "2012",
      "cedula": "8273420",
      "nombres": "LUIS CARLOS PADILLA PALACIOS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/04/2023",
      "placa": "MFW390",
      "modelo": "2012",
      "cedula": "42895613",
      "nombres": "TERESA ANGELINA ARBOLEDA GUERRA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "22/12/2024",
      "placa": "HBN299",
      "modelo": "2013",
      "cedula": "71381232",
      "nombres": "GARCIA CORRALES ANDRES FELIPE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "12/05/2024",
      "placa": "JOR868",
      "modelo": "2020",
      "cedula": "1082912840",
      "nombres": "MARIA JOSE LLINAS VIDAL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "JHS566",
      "modelo": "2018",
      "cedula": "1020423797",
      "nombres": "DUVERNEY LONDOÑO SANCHEZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/09/2020",
      "placa": "HAK628",
      "modelo": "2014",
      "cedula": "43502764",
      "nombres": "ESNEDA MARIA CASTRILLON TRUJILLO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "16/09/2024",
      "placa": "EPT629",
      "modelo": "2019",
      "cedula": "1069465396",
      "nombres": "ALZATE GIRALDO, HEIDY CRISTINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "14/01/2025",
      "placa": "CYO440",
      "modelo": "2008",
      "cedula": "71319952",
      "nombres": "WILFREDO MEJIA PALACIO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/02/2023",
      "placa": "HXX285",
      "modelo": "2015",
      "cedula": "1128450918",
      "nombres": "MEJIA AGUDELO,LUISA FERNANDA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "16/09/2024",
      "placa": "IAV464",
      "modelo": "2015",
      "cedula": "42679831",
      "nombres": "JIMENEZ PAMPLONA DORA MARIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "26/08/2021",
      "placa": "MSP247",
      "modelo": "2013",
      "cedula": "32106234",
      "nombres": "ELIZABETH ANDREA OCAMPO DEL BA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/04/2023",
      "placa": "DHY318",
      "modelo": "2011",
      "cedula": "71709286",
      "nombres": "WALTER ENRIQUE RUA MADRIGAL"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "22/03/2024",
      "placa": "IHR714",
      "modelo": "2016",
      "cedula": "25969802",
      "nombres": "Rubi Regina Romero Reyes"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "18/09/2024",
      "placa": "HZL993",
      "modelo": "2015",
      "cedula": "24395498",
      "nombres": "LINA MARIA MARULANADA BARAONA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "17/09/2022",
      "placa": "QHT516",
      "modelo": "2008",
      "cedula": "72130467",
      "nombres": "ZAPATA GONZALEZ JOSE ABELARDO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "16/09/2024",
      "placa": "HZK024",
      "modelo": "2015",
      "cedula": "1017126259",
      "nombres": "YULIETH CRISTINA CANO ORTIZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "17/09/2024",
      "placa": "JOS845",
      "modelo": "2020",
      "cedula": "71744233",
      "nombres": "JARAMILLO NIEVES, JHON JAIRO"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "20/12/2023",
      "placa": "KHP243",
      "modelo": "2011",
      "cedula": "1020470447",
      "nombres": "CADAVID MORENO ALEJANDRA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "16/09/2024",
      "placa": "GRN896",
      "modelo": "2019",
      "cedula": "71745491",
      "nombres": "RAMIREZ CEBALLOS WILLIAM ALBER"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/09/2023",
      "placa": "IOR314",
      "modelo": "2016",
      "cedula": "8350297",
      "nombres": "DE LA TORRE GOMEZ LORENZO ."
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "22/02/2024",
      "placa": "JIY403",
      "modelo": "2017",
      "cedula": "42749589",
      "nombres": "Maria Emperatriz Londo?o"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "INO164",
      "modelo": "2016",
      "cedula": "43573685",
      "nombres": "EDNA MARGARITA RODRIGUEZ GAVIRIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/06/2024",
      "placa": "IAV978",
      "modelo": "2015",
      "cedula": "10000348",
      "nombres": "ANDRES VELASQUEZ RESTREPO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/09/2024",
      "placa": "GIK891",
      "modelo": "2020",
      "cedula": "1017152712",
      "nombres": "PELAEZ ARROYAVE,ESTEBAN"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "02/12/2023",
      "placa": "FOQ552",
      "modelo": "2018",
      "cedula": "1032425319",
      "nombres": "CASTRO GONZALEZ JORGE ALBERTO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/09/2024",
      "placa": "JPU159",
      "modelo": "2021",
      "cedula": "15383626",
      "nombres": "ANDRES FELIPE SIERRA PELAEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/07/2024",
      "placa": "MFY859",
      "modelo": "2013",
      "cedula": "71671920",
      "nombres": "GABRIEL ALBERTO HOYOS MAYA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/09/2024",
      "placa": "EHL209",
      "modelo": "2017",
      "cedula": "42899496",
      "nombres": "GONZALEZ SANCHEZ,FLOR PATRICIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "03/04/2024",
      "placa": "JJK017",
      "modelo": "2017",
      "cedula": "32488125",
      "nombres": "COLORADO ESTRADA, LUZ MERY DEL SOCORRO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/03/2023",
      "placa": "USU541",
      "modelo": "2015",
      "cedula": "71271208",
      "nombres": "ANDRES MAURICIO MESA ARCILA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "18/12/2024",
      "placa": "JST882",
      "modelo": "2021",
      "cedula": "98628402",
      "nombres": "JUAN PABLO CORTES RESTREPO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/06/2024",
      "placa": "HGW694",
      "modelo": "2014",
      "cedula": "98514357",
      "nombres": "JORGE ORLANDO GARCIA TORO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "18/09/2021",
      "placa": "ZXY585",
      "modelo": "2014",
      "cedula": "32553595",
      "nombres": "LUZ MARINA MEDINA RESTREPO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "26/08/2022",
      "placa": "BVJ640",
      "modelo": "2005",
      "cedula": "1059814083",
      "nombres": "COLORADO JHOAN ALEXANDER"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "18/09/2023",
      "placa": "KIY847",
      "modelo": "2011",
      "cedula": "71747798",
      "nombres": "CARLOS ALBERTO LONDO?O RESTREP"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "18/09/2022",
      "placa": "HGV024",
      "modelo": "2013",
      "cedula": "70878701",
      "nombres": "DIEGO ALEXANDER COLORADO GIRAL"
  },
  {
      "compañia": "SBS",
      "finvigencia": "22/02/2025",
      "placa": "JDR826",
      "modelo": "2017",
      "cedula": "1073232255",
      "nombres": "ALDANA GUTIERREZ, LEIDY PAOLA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "28/03/2024",
      "placa": "EOK360",
      "modelo": "2018",
      "cedula": "25991748",
      "nombres": "SAMARIS JUDITH MORAT VANEGAS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "09/03/2023",
      "placa": "UEN181",
      "modelo": "2015",
      "cedula": "71632145",
      "nombres": "LUIS FERNANDO VILLEGAS PEREZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "25/10/2024",
      "placa": "JPV241",
      "modelo": "2021",
      "cedula": "1039465827",
      "nombres": "NAVARRETE MARQUEZ MARIA ALEJAN"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/12/2024",
      "placa": "DSV084",
      "modelo": "2017",
      "cedula": "1037575537",
      "nombres": "GONZALEZ CEBALLOS, NATALIA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "18/11/2024",
      "placa": "HPL348",
      "modelo": "2014",
      "cedula": "43728308",
      "nombres": "QUINTERO MEJIA, LUZ YENY"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "18/09/2024",
      "placa": "MNF754",
      "modelo": "2006",
      "cedula": "6787319",
      "nombres": "BUSTAMANTE JOSE JESUS"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "11/08/2023",
      "placa": "HDT911",
      "modelo": "2015",
      "cedula": "43447589",
      "nombres": "QUINTERO VILLA, ANGELA DE JESU"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/10/2024",
      "placa": "FQQ134",
      "modelo": "2019",
      "cedula": "98633706",
      "nombres": "JUAN FERNANDO CASTAÑO HOYOS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "23/06/2024",
      "placa": "EPQ936",
      "modelo": "2018",
      "cedula": "15336927",
      "nombres": "CANAVERAL CARDONA LUIS ALBERTO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/09/2024",
      "placa": "JOS692",
      "modelo": "2020",
      "cedula": "1037608685",
      "nombres": "OSPINA VASQUEZ,PAOLA MILENA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "06/03/2024",
      "placa": "JIV487",
      "modelo": "2017",
      "cedula": "33199115",
      "nombres": "ATENCIO LOZANO EUGENIA CRISTINA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "27/11/2024",
      "placa": "EIO719",
      "modelo": "2019",
      "cedula": "1037578123",
      "nombres": "JARAMILLO FRANCO, DIANA ISABEL"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/09/2024",
      "placa": "IHR126",
      "modelo": "2015",
      "cedula": "43220878",
      "nombres": "JIMENEZ PALACIO, LINA MARCELA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "01/07/2023",
      "placa": "FQS347",
      "modelo": "2018",
      "cedula": "7162302",
      "nombres": "MIGUEL ANGEL PULIDO AGUILAR"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "22/06/2024",
      "placa": "JPV181",
      "modelo": "2021",
      "cedula": "11830008",
      "nombres": "MACHADO GUERRERO,ORCILO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "19/11/2024",
      "placa": "BXT797",
      "modelo": "2011",
      "cedula": "71607208",
      "nombres": "PULGARIN CORREA, FABIO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "19/09/2024",
      "placa": "DXT039",
      "modelo": "2016",
      "cedula": "64702659",
      "nombres": "GIL G, JULIETA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "05/03/2024",
      "placa": "JPS507",
      "modelo": "2021",
      "cedula": "71775082",
      "nombres": "JUAN CAMILO LOPEZ HORTA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "15/01/2025",
      "placa": "FQS689",
      "modelo": "2018",
      "cedula": "1128281914",
      "nombres": "BARRERA RAMIREZ SANTIAGO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "17/06/2024",
      "placa": "JOP910",
      "modelo": "2021",
      "cedula": "1022098133",
      "nombres": "QUINTERO MORA, SANTIAGO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/05/2024",
      "placa": "GEK907",
      "modelo": "2019",
      "cedula": "70074906",
      "nombres": "LUIS GONZAGA ACOSTA DUQUE"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "19/04/2023",
      "placa": "HZM351",
      "modelo": "2015",
      "cedula": "25878053",
      "nombres": "ALBANIA VIRGINIA PERDOMO JIMENEZ"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "20/11/2023",
      "placa": "JIY817",
      "modelo": "2017",
      "cedula": "1017164537",
      "nombres": "Luz Viviana Ospina Fernandez"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "GRO846",
      "modelo": "2020",
      "cedula": "72229429",
      "nombres": "ERITZ SANCHEZ MENA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/02/2025",
      "placa": "IOW050",
      "modelo": "2016",
      "cedula": "15285790",
      "nombres": "GIRALDO VELEZ,LUIS FERNANDO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "26/11/2024",
      "placa": "KBS851",
      "modelo": "2010",
      "cedula": "41525728",
      "nombres": "Angelica Hernandez De Rivera"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "25/10/2024",
      "placa": "FQW946",
      "modelo": "2019",
      "cedula": "1128274209",
      "nombres": "PATI?O GOMEZ, VERONICA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/07/2024",
      "placa": "FYK780",
      "modelo": "2020",
      "cedula": "43008403",
      "nombres": "ESCOBAR MEJIA, ELENA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/05/2024",
      "placa": "INN785",
      "modelo": "2016",
      "cedula": "43069257",
      "nombres": ", GLORIA MARIA CHACON FERNANDEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/03/2024",
      "placa": "IAZ778",
      "modelo": "2016",
      "cedula": "71584059",
      "nombres": "FABIO ARTURO CEBALLOS VERGARA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/12/2024",
      "placa": "IHR410",
      "modelo": "2014",
      "cedula": "21526352",
      "nombres": "ASTRID CAROLINA HINCAPIE SALAZAR"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "20/09/2024",
      "placa": "DLZ640",
      "modelo": "2013",
      "cedula": "3391932",
      "nombres": "HUGO ARMANDO ECHEVERRY GUZMAN"
  },
  {
      "compañia": "SBS",
      "finvigencia": "07/07/2022",
      "placa": "GEN724",
      "modelo": "2020",
      "cedula": "6786772",
      "nombres": "PEREZ SALAZAR, BERNARDO DE JESUS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "27/08/2024",
      "placa": "EHL629",
      "modelo": "2018",
      "cedula": "43627962",
      "nombres": "HENAO RESTREPO,CLARA ISABEL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/08/2024",
      "placa": "HGV136",
      "modelo": "2014",
      "cedula": "1152193381",
      "nombres": "HEIDY MESA BALLESTEROS"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "21/09/2024",
      "placa": "MTW811",
      "modelo": "2013",
      "cedula": "43924798",
      "nombres": "CARMEN MARITZA MUNOZ VILLA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "11/03/2021",
      "placa": "MMC020",
      "modelo": "1997",
      "cedula": "43876425",
      "nombres": "Vanesa Velasquez Gonzalez"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "11/12/2024",
      "placa": "FSW320",
      "modelo": "2019",
      "cedula": "1056781478",
      "nombres": "ANGIE JULIETH CORTES GIRALDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/11/2022",
      "placa": "IAP118",
      "modelo": "2015",
      "cedula": "1037586185",
      "nombres": "ANA MARIA CANO RUIZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "GVP536",
      "modelo": "2020",
      "cedula": "1017214281",
      "nombres": "JHONGER DAVID FORERO RODRIGUEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "23/08/2024",
      "placa": "JBN541",
      "modelo": "2017",
      "cedula": "1127234049",
      "nombres": "OBREGON GAVIRIA, ESTEBAN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "29/03/2023",
      "placa": "JKM151",
      "modelo": "2016",
      "cedula": "70561488",
      "nombres": "JOHN FERNANDO LOPEZ LOPEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "02/09/2024",
      "placa": "IRO811",
      "modelo": "2016",
      "cedula": "63299538",
      "nombres": "OLAVE MARTINEZ, MARIA ELISA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "19/11/2023",
      "placa": "IEW184",
      "modelo": "2015",
      "cedula": "40047634",
      "nombres": "RUSSI VELASQUEZ LUZ ELVIRA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "24/10/2018",
      "placa": "IPW052",
      "modelo": "2016",
      "cedula": "96342068",
      "nombres": "CABRERA VARGAS, MARIO ."
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "07/09/2022",
      "placa": "JZK635",
      "modelo": "2022",
      "cedula": "71272379",
      "nombres": "BERMUDEZ RUDA,DIDIER ANDRES"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "11/03/2022",
      "placa": "GLL081",
      "modelo": "2020",
      "cedula": "38888080",
      "nombres": "DIANA ISABEL ECHEVERRI COLONIA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "24/07/2023",
      "placa": "DOS205",
      "modelo": "2017",
      "cedula": "24695523",
      "nombres": "JENY PAOLA MEJIA GALVEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/04/2024",
      "placa": "IYO756",
      "modelo": "2016",
      "cedula": "70556258",
      "nombres": "ALEJANDRO TORO POSADA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/10/2024",
      "placa": "HZN436",
      "modelo": "2015",
      "cedula": "71385053",
      "nombres": "JUAN GABRIEL ROJAS MACIAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/10/2020",
      "placa": "HSP313",
      "modelo": "2014",
      "cedula": "70073646",
      "nombres": "JORGE IVAN OSPINA ESTRADA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "25/11/2023",
      "placa": "JBO900",
      "modelo": "2017",
      "cedula": "70049418",
      "nombres": "MIGUEL ANGEL JIMENEZ GOMEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/07/2024",
      "placa": "DJM343",
      "modelo": "2012",
      "cedula": "42828275",
      "nombres": "ALEJANDRA HENAO HINCAPIE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/10/2024",
      "placa": "JOS135",
      "modelo": "2021",
      "cedula": "71738254",
      "nombres": "CASTRO JARAMILLO PABLO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/07/2024",
      "placa": "FUS446",
      "modelo": "2020",
      "cedula": "10778473",
      "nombres": "MARIO ALBERTO PINILLA FUENTES"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "30/06/2022",
      "placa": "DEQ630",
      "modelo": "2011",
      "cedula": "43559093",
      "nombres": "POSADA GARCIA BEATRIZ HELENA"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "11/04/2024",
      "placa": "GRQ878",
      "modelo": "2020",
      "cedula": "1007291872",
      "nombres": "VARGAS RINCON MARIA JOSE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/06/2024",
      "placa": "MJP813",
      "modelo": "2013",
      "cedula": "900450673",
      "nombres": "TRANSNORMAG S.A.S"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/01/2024",
      "placa": "GWV851",
      "modelo": "2020",
      "cedula": "15429450",
      "nombres": "JHON MARIO GIRALDO RAMIREZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "12/03/2023",
      "placa": "JYR606",
      "modelo": "2022",
      "cedula": "1127597848",
      "nombres": "CORTES RENNY MORENO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "02/08/2024",
      "placa": "DSY192",
      "modelo": "2018",
      "cedula": "1128478541",
      "nombres": "VERGARA ORREGO SANTIAGO ALEXANDER,"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2022",
      "placa": "MBN919",
      "modelo": "2012",
      "cedula": "98495227",
      "nombres": "AREIZA RAMIREZ NELSON ENRIQUE"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "02/03/2024",
      "placa": "HPK869",
      "modelo": "2015",
      "cedula": "43794777",
      "nombres": "HENAO GOMEZ, LUZ YANET"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "05/12/2024",
      "placa": "GEK595",
      "modelo": "2019",
      "cedula": "1128429955",
      "nombres": "MU?OZ MORALES, CATERINE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/10/2023",
      "placa": "JBP786",
      "modelo": "2016",
      "cedula": "900359547",
      "nombres": "MEDETOURS S A S"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "15/01/2024",
      "placa": "EOL759",
      "modelo": "2019",
      "cedula": "1111196650",
      "nombres": "VARGAS ALVAREZ, DANIELA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "07/04/2024",
      "placa": "GEZ884",
      "modelo": "2019",
      "cedula": "1128469438",
      "nombres": "CHAVARRO RODRIGUEZ, JEFFREY JEROME"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "15/10/2023",
      "placa": "KAP251",
      "modelo": "2012",
      "cedula": "1047431946",
      "nombres": "MORENO RESTREPO, JONATHAN"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "26/10/2024",
      "placa": "DSR687",
      "modelo": "2018",
      "cedula": "43570555",
      "nombres": "OROZCO DUQUE GLORIA MARCELA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/03/2022",
      "placa": "EIK353",
      "modelo": "2018",
      "cedula": "1067092714",
      "nombres": "CARMEN ADOLIS PACHECO VERGARA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/12/2020",
      "placa": "ABO388",
      "modelo": "2012",
      "cedula": "71397361",
      "nombres": "VANEGAS ALVAREZ ANDRES MAURICI"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "16/07/2024",
      "placa": "LAX737",
      "modelo": "2020",
      "cedula": "43632822",
      "nombres": "YEPES BENJUMEA ELDA YANETH"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "17/03/2024",
      "placa": "EOK180",
      "modelo": "2019",
      "cedula": "32426447",
      "nombres": "CARDONA FRANCO, DIOSELINA DE JESUS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "26/11/2024",
      "placa": "EGK274",
      "modelo": "2018",
      "cedula": "1152683874",
      "nombres": "ALEJANDRO MORA CALDERON"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "04/12/2024",
      "placa": "EGK570",
      "modelo": "2018",
      "cedula": "71491972",
      "nombres": "JOHN MARIO GUERRA LEON"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "06/06/2024",
      "placa": "EIL503",
      "modelo": "2018",
      "cedula": "1037602368",
      "nombres": "NATHALIA SEPULVEDA RIOS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "24/12/2022",
      "placa": "KHJ003",
      "modelo": "2011",
      "cedula": "1037591598",
      "nombres": "CAMILO ESTRADA RAIGOZA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "07/12/2024",
      "placa": "GRM598",
      "modelo": "2020",
      "cedula": "1128469486",
      "nombres": "WILLIAM ALBERTO CUARTAS VANEGA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "23/02/2025",
      "placa": "EGX886",
      "modelo": "2018",
      "cedula": "1037617843",
      "nombres": "ANDREA VELEZ LONDO?O"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/09/2021",
      "placa": "EGX570",
      "modelo": "2018",
      "cedula": "70130748",
      "nombres": "GABRIEL DE JESUS PEREZ MUÑOZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/07/2024",
      "placa": "DFT606",
      "modelo": "2012",
      "cedula": "98541260",
      "nombres": "LUIS GERMAN VELEZ PAREJA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "21/04/2024",
      "placa": "GRS172",
      "modelo": "2020",
      "cedula": "1037644808",
      "nombres": "MESA MOLINA, LAURA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/02/2023",
      "placa": "NAB371",
      "modelo": "1999",
      "cedula": "43605872",
      "nombres": "LYDA EUGENIA CASTAÑEDA ESTRADA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/12/2022",
      "placa": "KHR184",
      "modelo": "2012",
      "cedula": "32507218",
      "nombres": "MARIA IDALBA GARCIA ARAQUE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/02/2023",
      "placa": "IYO709",
      "modelo": "2016",
      "cedula": "71575155",
      "nombres": "CARLOS ALBERTO PATIÑO ARANGO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "23/01/2025",
      "placa": "MSR209",
      "modelo": "2013",
      "cedula": "1037591753",
      "nombres": "RICARDO VELEZ FERNANDEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "03/10/2024",
      "placa": "EFV264",
      "modelo": "2018",
      "cedula": "1192713154",
      "nombres": "YULISA ARANGO ROJAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "EFW622",
      "modelo": "2018",
      "cedula": "1128281712",
      "nombres": "VIVIANA LEZCANO ARANGO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "26/09/2024",
      "placa": "HQP118",
      "modelo": "2019",
      "cedula": "21833273",
      "nombres": "SELENE CENELIA MONCADA DUQUE"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/08/2024",
      "placa": "JOS322",
      "modelo": "2021",
      "cedula": "1036933281",
      "nombres": "SARA ARIAS MENDIETA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "31/08/2024",
      "placa": "JYZ519",
      "modelo": "2021",
      "cedula": "52516123",
      "nombres": "SOTELO RAMIREZ MIRYAM ADRIANA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "JCN823",
      "modelo": "2017",
      "cedula": "1152455121",
      "nombres": "ANDREA CASTRILLON OSPINA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/02/2024",
      "placa": "EIN081",
      "modelo": "2018",
      "cedula": "11437437",
      "nombres": "MIGUEL ANGEL QUINTERO RAMIREZ"
  },
  {
      "compañia": "SBS",
      "finvigencia": "05/04/2024",
      "placa": "FIS144",
      "modelo": "2020",
      "cedula": "39193224",
      "nombres": "RIVERA CARMONA, ANA MARIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "27/12/2024",
      "placa": "DES156",
      "modelo": "2012",
      "cedula": "1017141806",
      "nombres": "4MU?OZ VAHOS MONICA MARCELA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/11/2024",
      "placa": "JST124",
      "modelo": "2021",
      "cedula": "70141189",
      "nombres": "FABIAN ALONSO MADRID HERRERA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/12/2024",
      "placa": "JIX267",
      "modelo": "2017",
      "cedula": "43265104",
      "nombres": "CLAUDIA YULIE MARULANDA LOPEZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "04/11/2024",
      "placa": "FZK300",
      "modelo": "2019",
      "cedula": "949269",
      "nombres": "RODRIGUEZ MAXIMILIANO NESTOR"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "12/02/2025",
      "placa": "HZM325",
      "modelo": "2015",
      "cedula": "42791058",
      "nombres": "GALEANO ,MARTHA CECILIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "04/03/2024",
      "placa": "JJO831",
      "modelo": "2019",
      "cedula": "15260100",
      "nombres": "BEDOYA ORTIZ,FABIAN ANTONIO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "07/12/2024",
      "placa": "USX250",
      "modelo": "2016",
      "cedula": "1128407994",
      "nombres": "LUZ MARIA YEPES RIVERA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "03/04/2023",
      "placa": "MTZ675",
      "modelo": "2013",
      "cedula": "70113624",
      "nombres": "ARMANDO RAFAEL MARTINEZ NAVAS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "28/11/2023",
      "placa": "FQP336",
      "modelo": "2020",
      "cedula": "38255631",
      "nombres": "MARIA IBA?EZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "07/12/2024",
      "placa": "IHT175",
      "modelo": "2016",
      "cedula": "43564156",
      "nombres": "RIVILLAS UPEGUI BETTY MARITZA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "24/06/2024",
      "placa": "GVP628",
      "modelo": "2020",
      "cedula": "8433385",
      "nombres": "ANGEL GIRALDO,JUAN DAVID"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "31/03/2024",
      "placa": "DSX988",
      "modelo": "2018",
      "cedula": "8355369",
      "nombres": "WILLMAR MEJIA CORREA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/03/2024",
      "placa": "FUP110",
      "modelo": "2019",
      "cedula": "1035854588",
      "nombres": "ERIKA JOHANA CADAVID SIERRA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/08/2019",
      "placa": "JCO669",
      "modelo": "2017",
      "cedula": "79417263",
      "nombres": "JUAN DAVID ATEHORTUA MEJIA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "28/12/2024",
      "placa": "MOW272",
      "modelo": "2010",
      "cedula": "1026157036",
      "nombres": "Melisa Montoya Montoya"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2020",
      "placa": "HJW998",
      "modelo": "2014",
      "cedula": "52714053",
      "nombres": "GINA PAOLA RIVERA FAJARDO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "27/10/2024",
      "placa": "MTY370",
      "modelo": "2013",
      "cedula": "1127347147",
      "nombres": "DELGADO TORRES EDGAR FRANCISCO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/11/2024",
      "placa": "MTW029",
      "modelo": "2013",
      "cedula": "98582337",
      "nombres": "LUIS EVELIO MALDONADO BETANCURTH"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "25/02/2023",
      "placa": "IAZ846",
      "modelo": "2015",
      "cedula": "1001004602",
      "nombres": "DUVAN DAVID OLARTE OSORIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/12/2019",
      "placa": "JIR573",
      "modelo": "2018",
      "cedula": "1094934169",
      "nombres": "PAOLA ANDREA VILLA LONDOÑO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "29/05/2023",
      "placa": "DHZ999",
      "modelo": "2012",
      "cedula": "43275649",
      "nombres": "ELIANA ANDREA, PEREZ A"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "12/07/2024",
      "placa": "IGM533",
      "modelo": "2015",
      "cedula": "324750",
      "nombres": "ZALTZ , MARTIN"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "03/03/2023",
      "placa": "IAO348",
      "modelo": "2015",
      "cedula": "31277948",
      "nombres": "ELSY MARIA FLOREZ GARCIA"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "23/11/2023",
      "placa": "JBL577",
      "modelo": "2016",
      "cedula": "1037620487",
      "nombres": "Daniel Alejandro Parra Vasquez"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "27/05/2024",
      "placa": "HYR887",
      "modelo": "2016",
      "cedula": "1020746321",
      "nombres": "HUMBERTO JOSE OCAMPO LEA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "31/03/2024",
      "placa": "DMX579",
      "modelo": "2017",
      "cedula": "79321575",
      "nombres": "MAYOR ROMERO LUIS ALBERTO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "28/05/2024",
      "placa": "HFM817",
      "modelo": "2014",
      "cedula": "15517107",
      "nombres": "OSWALDO ALEXIS QUIROZ MUÑOZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/09/2024",
      "placa": "ZYZ166",
      "modelo": "2015",
      "cedula": "79921000",
      "nombres": "JOHN FERNANDO ROLDAN MADRID"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "17/09/2024",
      "placa": "MIX441",
      "modelo": "2012",
      "cedula": "42791870",
      "nombres": "SANDRA LILIANA OSORIO SUAREZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "16/12/2024",
      "placa": "JSV818",
      "modelo": "2020",
      "cedula": "43068724",
      "nombres": "FORONDA MONTOYA, ANA PIEDAD"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/10/2024",
      "placa": "JBL065",
      "modelo": "2016",
      "cedula": "41670098",
      "nombres": "MARIA CONSTANZA TRINIDAD NAVARRETE DE BERMUDEZ"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "27/07/2024",
      "placa": "EPQ136",
      "modelo": "2019",
      "cedula": "1019017048",
      "nombres": "JULIANA ALMANZA PERDOMO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "29/12/2023",
      "placa": "GVK843",
      "modelo": "2019",
      "cedula": "1143384408",
      "nombres": "LUIS DAVID CARRILLO GOMEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "21/04/2022",
      "placa": "USU622",
      "modelo": "2015",
      "cedula": "39176882",
      "nombres": "MARIA FERNANDA SUAREZ CUBEROS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "21/06/2024",
      "placa": "USV355",
      "modelo": "2015",
      "cedula": "32351150",
      "nombres": "HERNANDEZ PINEDA, LUZ MILENA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "04/09/2017",
      "placa": "BYC575",
      "modelo": "2007",
      "cedula": "73127197",
      "nombres": "MIER GRANDA ABEL JOSE"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "27/08/2024",
      "placa": "GEN845",
      "modelo": "2018",
      "cedula": "79241181",
      "nombres": "CARLOS ANIBAL CARRERA MARTINEZ"
  },
  {
      "compañia": "SBS",
      "finvigencia": "05/04/2024",
      "placa": "HFL436",
      "modelo": "2014",
      "cedula": "43503695",
      "nombres": "TORO, PATRICIA DEL SOCORRO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "27/12/2017",
      "placa": "MNI179",
      "modelo": "2006",
      "cedula": "8298430",
      "nombres": "SANCHEZ RUIZ CARLOS ARTUR"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "10/04/2024",
      "placa": "HAL928",
      "modelo": "2014",
      "cedula": "1102842276",
      "nombres": "PORRAS BARRAZA MARIA ISABEL"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "28/01/2018",
      "placa": "DIK692",
      "modelo": "2012",
      "cedula": "32433910",
      "nombres": "RICO TEJADA, LUZ MARIA DE LOS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/05/2024",
      "placa": "DFR407",
      "modelo": "2011",
      "cedula": "71637134",
      "nombres": "JULIO CESAR VELEZ CASTAÑEDA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "17/02/2024",
      "placa": "BLA825",
      "modelo": "2006",
      "cedula": "21862986",
      "nombres": "SOR FIDELIA BARRERA LOPEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "04/06/2024",
      "placa": "JYQ353",
      "modelo": "2021",
      "cedula": "43667957",
      "nombres": "ADRIANA OBANDO AGUIRRE"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "28/01/2018",
      "placa": "MVR536",
      "modelo": "2013",
      "cedula": "32503979",
      "nombres": "BAREÑO DE DUARTE, ISAURA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "27/10/2024",
      "placa": "JSR525",
      "modelo": "2021",
      "cedula": "43039540",
      "nombres": "LONDO?O OSORIO, FRANCIA CRISTINA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "08/11/2024",
      "placa": "JBL740",
      "modelo": "2017",
      "cedula": "1035917156",
      "nombres": "DUQUE ZAPATA, ANA MARIA NATALIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "24/12/2024",
      "placa": "FXO688",
      "modelo": "2019",
      "cedula": "75046583",
      "nombres": "LOPEZ MARIN, ALBERTO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "21/07/2023",
      "placa": "DSV231",
      "modelo": "2018",
      "cedula": "32531959",
      "nombres": "GRISALES LUGO AIDA ROSA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "04/06/2024",
      "placa": "FXN577",
      "modelo": "2019",
      "cedula": "32142179",
      "nombres": "CARO GARCIA, DIANA MARIA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "30/01/2018",
      "placa": "KBS508",
      "modelo": "2010",
      "cedula": "71317345",
      "nombres": "GARCIA GUZMAN, JUAN DAVID"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "30/06/2024",
      "placa": "IAZ903",
      "modelo": "2016",
      "cedula": "52322190",
      "nombres": ", ,, , ,,YINA YULIZA MURI"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "27/04/2024",
      "placa": "ISR184",
      "modelo": "2016",
      "cedula": "71213864",
      "nombres": "RODRIGUEZ LOPEZ, ENRRIQUE ALEJANDRO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "16/08/2024",
      "placa": "JOQ019",
      "modelo": "2021",
      "cedula": "1039451735",
      "nombres": "IVAN DARIO CALLEJAS MORA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/04/2024",
      "placa": "FXP036",
      "modelo": "2019",
      "cedula": "43269052",
      "nombres": "CAROLINA SANCHEZ VILLA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/09/2024",
      "placa": "HXV420",
      "modelo": "2014",
      "cedula": "15513342",
      "nombres": "JUAN CARLOS VASQUEZ ORTIZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/05/2023",
      "placa": "EFX688",
      "modelo": "2018",
      "cedula": "1152707981",
      "nombres": "AGUDELO TAMAYO CAMILO ERNESTO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "16/01/2024",
      "placa": "FOU797",
      "modelo": "2019",
      "cedula": "53102412",
      "nombres": "CIFUENTES GUEVARA YURLEY"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/12/2024",
      "placa": "JHP944",
      "modelo": "2017",
      "cedula": "1017249649",
      "nombres": "SERNA POSADA PAOLA ANDREA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "27/07/2022",
      "placa": "JJK247",
      "modelo": "2017",
      "cedula": "42974409",
      "nombres": "MOLINA ARROYAVE ALBA AMPARO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "15/10/2024",
      "placa": "JHS473",
      "modelo": "2017",
      "cedula": "15264626",
      "nombres": "SANCHEZ RESTREPO EDISON FERNAN"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "21/03/2018",
      "placa": "BWP992",
      "modelo": "2006",
      "cedula": "71678055",
      "nombres": "MESA MOLINA JUAN DIEGO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/09/2023",
      "placa": "DJN581",
      "modelo": "2012",
      "cedula": "13873904",
      "nombres": "JUAN WILMER PARRA VERA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "13/04/2018",
      "placa": "RZS632",
      "modelo": "2010",
      "cedula": "1039447564",
      "nombres": "DIAZ MONTOYA, JUAN JOSE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "25/07/2024",
      "placa": "GVP804",
      "modelo": "2020",
      "cedula": "1020403349",
      "nombres": "VICTOR ALFONSO SIERRA CARDENAS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "18/03/2022",
      "placa": "MFY565",
      "modelo": "2013",
      "cedula": "1037593800",
      "nombres": "MORENO CANO STEVE NELSON"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "20/04/2018",
      "placa": "FGU358",
      "modelo": "2008",
      "cedula": "43873839",
      "nombres": "MONCADA ZAPATA ELISABETH"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "01/04/2023",
      "placa": "JYU447",
      "modelo": "2022",
      "cedula": "43628169",
      "nombres": "GIRALDO MESA CATALINA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "01/03/2023",
      "placa": "JYT289",
      "modelo": "2022",
      "cedula": "1039451670",
      "nombres": "ESTRADA GOMEZ MANUELA"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "27/03/2024",
      "placa": "DGV078",
      "modelo": "2012",
      "cedula": "10143244",
      "nombres": "Jhon Harol Posada Cardoso"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "31/12/2024",
      "placa": "UBM173",
      "modelo": "2015",
      "cedula": "1030555137",
      "nombres": "TATIS GONZALEZ JUAN DAVID"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "21/09/2023",
      "placa": "MSR212",
      "modelo": "2012",
      "cedula": "1037621342",
      "nombres": "JULIANA TOBON GAVIRIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "GIK181",
      "modelo": "2021",
      "cedula": "43832958",
      "nombres": "PALACIO JARAMILLO, ISABEL CRISTINA."
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "16/11/2024",
      "placa": "GEL727",
      "modelo": "2019",
      "cedula": "43483487",
      "nombres": "BOHORQUEZ CATA?O, IHOMARA ASTRID"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/03/2020",
      "placa": "IAS353",
      "modelo": "2015",
      "cedula": "1101708317",
      "nombres": "EDITH ROCIO ANGULO FRANCO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2024",
      "placa": "IEV603",
      "modelo": "2015",
      "cedula": "31166264",
      "nombres": "SERRANO PENAGOS, MARIA DEL SOCORRO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "30/05/2018",
      "placa": "HZM374",
      "modelo": "2015",
      "cedula": "1077433515",
      "nombres": "JHONIER IVAN MENA ROMAÑA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/04/2024",
      "placa": "INN163",
      "modelo": "2016",
      "cedula": "1037237229",
      "nombres": "YEISON ARLEY RESTREPO NARANJO"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "06/06/2018",
      "placa": "MSP123",
      "modelo": "2013",
      "cedula": "1101686657",
      "nombres": "GUEVARA PEÑA IVONNE JULIETH"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "30/05/2019",
      "placa": "MFZ941",
      "modelo": "2013",
      "cedula": "1016061508",
      "nombres": "ALDANA RODRIGUEZ, NATALIA JULI"
  },
  {
      "compañia": "SBS",
      "finvigencia": "13/06/2018",
      "placa": "HQX780",
      "modelo": "2015",
      "cedula": "80270775",
      "nombres": "RODRIGUEZ CALLEJAS, JOSE EDUARDO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "27/11/2022",
      "placa": "JPV406",
      "modelo": "2020",
      "cedula": "1017144395",
      "nombres": "MORENO MORENO KENNY VANESSA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "15/06/2018",
      "placa": "UER678",
      "modelo": "2015",
      "cedula": "30339838",
      "nombres": "VILLALOBOS GARCIA YAMILED"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "01/12/2024",
      "placa": "JPY239",
      "modelo": "2021",
      "cedula": "43538041",
      "nombres": "SOR VIRGELINA BRAND ROJAS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/07/2024",
      "placa": "KPR158",
      "modelo": "2022",
      "cedula": "3562937",
      "nombres": "LLANO CASTA?O,GONZALO DE JESUS"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "04/07/2018",
      "placa": "HCS641",
      "modelo": "2013",
      "cedula": "1090441742",
      "nombres": "CHACON CHAVARRO CARLOS MANUEL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "06/07/2024",
      "placa": "KHL451",
      "modelo": "2011",
      "cedula": "1088335527",
      "nombres": "VALENTINA MIRANDA GALVIS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "27/08/2023",
      "placa": "DFV495",
      "modelo": "2012",
      "cedula": "43747775",
      "nombres": "MARIA YOLIMA VILLEGAS ZULUAGA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "09/12/2018",
      "placa": "UTS549",
      "modelo": "2016",
      "cedula": "7715600",
      "nombres": "BRAVO ARAGON FRANCISCO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "29/12/2024",
      "placa": "DQZ368",
      "modelo": "2018",
      "cedula": "31199194",
      "nombres": "MYRIAM DE JESUS MARIN PENA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "31/10/2023",
      "placa": "JBQ750",
      "modelo": "2017",
      "cedula": "43206609",
      "nombres": "SANDRA MILENA TORRES LONDO?O"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/12/2022",
      "placa": "BXT207",
      "modelo": "2011",
      "cedula": "16289149",
      "nombres": "OSCAR EDUARDO ROSSO CORONADO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "08/09/2018",
      "placa": "KHJ767",
      "modelo": "2011",
      "cedula": "42866590",
      "nombres": "LUZ ANGELA RESTREPO VELEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/08/2024",
      "placa": "GRN944",
      "modelo": "2020",
      "cedula": "1133604490",
      "nombres": "ONEIDA CORDOBA RENTERIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "01/11/2018",
      "placa": "KFL362",
      "modelo": "2010",
      "cedula": "70692160",
      "nombres": "ZULUAGA GOMEZ LUIS GERVASIO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "27/12/2024",
      "placa": "MVR421",
      "modelo": "2013",
      "cedula": "75060328",
      "nombres": "SALAZAR BUITRAGO, JAMES"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "08/06/2024",
      "placa": "GVO208",
      "modelo": "2020",
      "cedula": "70950036",
      "nombres": "Gilberto Gil Atehortua"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "21/03/2023",
      "placa": "DQP815",
      "modelo": "2018",
      "cedula": "98515134",
      "nombres": "NELSON DE JESUS ARANGO QUIROZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/07/2024",
      "placa": "FQW927",
      "modelo": "2019",
      "cedula": "1048016858",
      "nombres": "INGRID MELISA DURANGO ARROYAVE"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "11/01/2019",
      "placa": "MFW270",
      "modelo": "2013",
      "cedula": "26666547",
      "nombres": "GOMEZ TORRES MONICA ALEXANDRA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "29/01/2019",
      "placa": "IAX261",
      "modelo": "2015",
      "cedula": "70141405",
      "nombres": "EDWIN TAPIAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/06/2024",
      "placa": "KCL724",
      "modelo": "2017",
      "cedula": "1017246964",
      "nombres": "MARIA CAMILA VASCO ZAPATA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "09/01/2024",
      "placa": "EHK491",
      "modelo": "2018",
      "cedula": "45506211",
      "nombres": "MONICA MARIN BLANCO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "06/03/2024",
      "placa": "IAU759",
      "modelo": "2015",
      "cedula": "1017170646",
      "nombres": "HERRERA SERRANO, DIANA MARCELA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2024",
      "placa": "GEK843",
      "modelo": "2019",
      "cedula": "98695725",
      "nombres": "OTALVARO RAMIREZ, FRANK DARIO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "01/02/2019",
      "placa": "JGP373",
      "modelo": "2017",
      "cedula": "4881140",
      "nombres": "FAJARDO GONZALEZ JAIRO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "25/04/2024",
      "placa": "MVR377",
      "modelo": "2013",
      "cedula": "1017198490",
      "nombres": "LUIS FELIPE PLAZAS RIA O"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "04/02/2018",
      "placa": "DML523",
      "modelo": "2015",
      "cedula": "88254893",
      "nombres": "RUBIANO PI?EROS HERNANDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/11/2024",
      "placa": "GRS183",
      "modelo": "2020",
      "cedula": "37942666",
      "nombres": "ROSMIRA CALA OSORIO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "21/02/2019",
      "placa": "CZZ314",
      "modelo": "2009",
      "cedula": "8487514",
      "nombres": "GONZALEZ TORO ANDRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/11/2023",
      "placa": "EFX134",
      "modelo": "2018",
      "cedula": "1152707968",
      "nombres": "MANUELA AVENDAÑO JIMENEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/02/2025",
      "placa": "ENQ997",
      "modelo": "2018",
      "cedula": "66993401",
      "nombres": "ZARAMA CORDOBA,VIRGINIA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "25/04/2024",
      "placa": "GVN179",
      "modelo": "2020",
      "cedula": "1128479896",
      "nombres": "MOSQUERA, SANDRA MILENA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "15/09/2024",
      "placa": "USY306",
      "modelo": "2016",
      "cedula": "1035831054",
      "nombres": "OSORIO VILLA, SINDY JULIET"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "31/12/2024",
      "placa": "HNW607",
      "modelo": "2014",
      "cedula": "3802439",
      "nombres": "WILSON FERNEY ECHEVERRY CEBALL"
  },
  {
      "compañia": "SBS",
      "finvigencia": "06/06/2024",
      "placa": "HPL163",
      "modelo": "2013",
      "cedula": "43979015",
      "nombres": "LAINEZ RAMIREZ, MARY ISABEL"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2024",
      "placa": "MMY181",
      "modelo": "2003",
      "cedula": "43439661",
      "nombres": "TOBON GUZMAN, DORA ESTELA."
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/01/2025",
      "placa": "EDX555",
      "modelo": "2018",
      "cedula": "1032459976",
      "nombres": "CATALINA MARIA HERNANDEZ RUIZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "28/04/2022",
      "placa": "JFZ684",
      "modelo": "2017",
      "cedula": "72137386",
      "nombres": "GALAN PINILLA SANTIAGO"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "06/03/2019",
      "placa": "KMQ935",
      "modelo": "2012",
      "cedula": "42824837",
      "nombres": "VELEZ CASTA?O DIANA MARIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "21/04/2019",
      "placa": "MAY523",
      "modelo": "2012",
      "cedula": "43613338",
      "nombres": "SANDRA LILIANA EVAN CUBILLOS"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "02/08/2022",
      "placa": "GZR621",
      "modelo": "2020",
      "cedula": "72256260",
      "nombres": "BARRAZA GUTIERREZ, LUIS ALBERT"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "12/11/2021",
      "placa": "ISU990",
      "modelo": "2017",
      "cedula": "22025337",
      "nombres": "ARBOLEDA PULGARIN MARTHA ESTELLA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2024",
      "placa": "FGW988",
      "modelo": "2008",
      "cedula": "71657010",
      "nombres": "CARLOS EDUARDO FIGUEROA SUESCUN"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "19/01/2025",
      "placa": "IOR877",
      "modelo": "2016",
      "cedula": "71688797",
      "nombres": "SANCHEZ RODOLFO RESTREPO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "10/05/2019",
      "placa": "DJO671",
      "modelo": "2012",
      "cedula": "98644766",
      "nombres": "JAMES OLVANY MURILLO ECHEVERRY"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "15/09/2024",
      "placa": "EJV981",
      "modelo": "2018",
      "cedula": "98662411",
      "nombres": "VICTOR HUGO, PALACIO ALVAREZ"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "04/05/2024",
      "placa": "NBX913",
      "modelo": "2013",
      "cedula": "1036650151",
      "nombres": "FELIPE QUICENO GOMEZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2018",
      "placa": "HZK933",
      "modelo": "2014",
      "cedula": "42770595",
      "nombres": "ESTRADA RODRIGUEZ CLAUDIA PATR"
  },
  {
      "compañia": "SBS",
      "finvigencia": "27/10/2024",
      "placa": "JPV216",
      "modelo": "2021",
      "cedula": "1038132172",
      "nombres": "FELIPE HUMANES, ANDRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/04/2023",
      "placa": "RCO646",
      "modelo": "2011",
      "cedula": "1038360091",
      "nombres": "JULIETH CATALINA BARRIENTOS CORREA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "27/09/2024",
      "placa": "FQS964",
      "modelo": "2019",
      "cedula": "42894185",
      "nombres": "JIMENEZ ARBOLEDA, CLAUDIA LUCIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "07/07/2024",
      "placa": "ENZ248",
      "modelo": "2018",
      "cedula": "1020415078",
      "nombres": "TORO ALZATE JOHN JAIRO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "21/11/2024",
      "placa": "DFV806",
      "modelo": "2012",
      "cedula": "79650537",
      "nombres": "JAVIER EDUARDO AGUIRRE FORERO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "24/09/2021",
      "placa": "IHP487",
      "modelo": "2016",
      "cedula": "1017186098",
      "nombres": "ELIANA HIGUITA LOPEZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "27/02/2023",
      "placa": "HZM855",
      "modelo": "2015",
      "cedula": "1128283639",
      "nombres": "RESTREPO GUZMAN SARA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "30/06/2024",
      "placa": "FXP026",
      "modelo": "2019",
      "cedula": "43166406",
      "nombres": "BERTHA LINA ARARILES TORRES,"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "10/09/2023",
      "placa": "DJL396",
      "modelo": "2012",
      "cedula": "32451816",
      "nombres": "RENDON ARBOLEDA LUCELLY"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "IYR741",
      "modelo": "2017",
      "cedula": "44002716",
      "nombres": "NATALIA LOPERA CARMONA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/12/2023",
      "placa": "FGO260",
      "modelo": "2008",
      "cedula": "900851028",
      "nombres": "VALDES PALACIO OBRAS Y SERVICIOS SAS"
  },
  {
      "compañia": "SBS",
      "finvigencia": "12/10/2024",
      "placa": "MOY491",
      "modelo": "2011",
      "cedula": "3351741",
      "nombres": "LUIS ANIBAL, MONA AGUDELO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "14/06/2019",
      "placa": "HGW585",
      "modelo": "2014",
      "cedula": "42976423",
      "nombres": "LOPEZ ZAPATA GLORIA CECILIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "20/10/2024",
      "placa": "EHL069",
      "modelo": "2018",
      "cedula": "1152472303",
      "nombres": "VALENTINA VILLAMIL RENDON"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "08/06/2023",
      "placa": "EOU241",
      "modelo": "2019",
      "cedula": "17114566",
      "nombres": "GARCIA , JAIME DE JESUS"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "04/07/2024",
      "placa": "DJP294",
      "modelo": "2013",
      "cedula": "98560590",
      "nombres": "GIRALDO GIL FREDY ALEXANDER"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "30/10/2023",
      "placa": "KOO118",
      "modelo": "2012",
      "cedula": "71215269",
      "nombres": "GOEZ GIRALDO CARLOS ALBEIRO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "19/09/2023",
      "placa": "JVN827",
      "modelo": "2020",
      "cedula": "30310254",
      "nombres": "JIMENA MARIA SUAREZ CARVAJAL"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "06/03/2024",
      "placa": "HGY295",
      "modelo": "2014",
      "cedula": "21690225",
      "nombres": "HENAO HENAO, CONSUELO"
  },
  {
      "compañia": "SBS",
      "finvigencia": "01/02/2024",
      "placa": "EPT893",
      "modelo": "2019",
      "cedula": "32299093",
      "nombres": "LARGO BERMUDEZ, AURA MILENA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/10/2019",
      "placa": "UCZ153",
      "modelo": "2015",
      "cedula": "9003141137",
      "nombres": "VOTTA FRANCO INGENIERIA SAS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "01/05/2024",
      "placa": "EGK926",
      "modelo": "2018",
      "cedula": "1128430761",
      "nombres": "RUBEN DARIO MARIN MOLINA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "13/10/2024",
      "placa": "IMM332",
      "modelo": "2015",
      "cedula": "79211630",
      "nombres": "RODOLFO CHARRY ROJAS"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "22/11/2023",
      "placa": "MTY845",
      "modelo": "2013",
      "cedula": "42841251",
      "nombres": "ZALAZAR MONTES MARLENY CECILIA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "27/04/2024",
      "placa": "JYS014",
      "modelo": "2021",
      "cedula": "34996223",
      "nombres": "HERRERA NARANJO SOL JASHMED"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "24/08/2019",
      "placa": "HRR886",
      "modelo": "2017",
      "cedula": "1090427151",
      "nombres": "CRISTANCHO DURAN HOSWART RAPHAEL"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "04/06/2024",
      "placa": "HXY831",
      "modelo": "2015",
      "cedula": "15383142",
      "nombres": "RAMIREZ ALVAREZ,WILLIAM DE JESUS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/05/2023",
      "placa": "HXU259",
      "modelo": "2014",
      "cedula": "8058269",
      "nombres": "LUIS FERNANDO VERGARA VILLEGAS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2023",
      "placa": "JPX168",
      "modelo": "2021",
      "cedula": "15354205",
      "nombres": "CORONADO GARCIA, ROBINSON"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "29/11/2021",
      "placa": "FQW291",
      "modelo": "2019",
      "cedula": "98503492",
      "nombres": "NELSON TOBON"
  },
  {
      "compañia": "SBS",
      "finvigencia": "28/08/2019",
      "placa": "USX053",
      "modelo": "2015",
      "cedula": "45472367",
      "nombres": "GARCIA OYOLA, IRMINA GENOVEVA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "21/12/2024",
      "placa": "KKK177",
      "modelo": "2012",
      "cedula": "71772386",
      "nombres": "JAIME ALONSO, BOTERO BOTERO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/10/2022",
      "placa": "HHK256",
      "modelo": "2014",
      "cedula": "71630342",
      "nombres": "CASTRILLON URREGO DARIO ALBERTO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "27/07/2022",
      "placa": "MWZ033",
      "modelo": "2015",
      "cedula": "1038542516",
      "nombres": "CORTES ZAPATA CINDY DANIELA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "31/08/2024",
      "placa": "GWV856",
      "modelo": "2020",
      "cedula": "81717464",
      "nombres": "ARIEL CAMILO CARVAJAL OLAYA"
  },
  {
      "compañia": "MUNDIAL",
      "finvigencia": "09/12/2022",
      "placa": "DFT731",
      "modelo": "2011",
      "cedula": "15373032",
      "nombres": "RICHARD STVES MUÑOZ ALVAREZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "03/04/2023",
      "placa": "HAK307",
      "modelo": "2014",
      "cedula": "22189465",
      "nombres": "YOLANDA PATRICIA JIMENEZ POSADA"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "15/06/2021",
      "placa": "DSU872",
      "modelo": "2018",
      "cedula": "1037613605",
      "nombres": "OSPINA DIAZ MATEO ALEJANDRO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "19/01/2024",
      "placa": "HPK393",
      "modelo": "2014",
      "cedula": "1017175647",
      "nombres": "CHICA FLOREZ LILIANA ANDREA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2023",
      "placa": "UUM338",
      "modelo": "2015",
      "cedula": "1037588337",
      "nombres": "OSPINA SALDARRIAGA, LEIDY JULI"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "29/12/2024",
      "placa": "JRN589",
      "modelo": "2021",
      "cedula": "1015417311",
      "nombres": "CINDY ALEXANDRA REAL VELASQUEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/11/2024",
      "placa": "GEZ396",
      "modelo": "2020",
      "cedula": "1104417919",
      "nombres": "LIZETH MARGARITA VERGARA RUSSO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "05/01/2024",
      "placa": "MXY225",
      "modelo": "2013",
      "cedula": "98451282",
      "nombres": "JOSE DARIO OQUENDO RUIZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "31/08/2022",
      "placa": "FQQ595",
      "modelo": "2019",
      "cedula": "43520371",
      "nombres": "SILVIA RUTH CUENCA MONTOYA ."
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "26/04/2023",
      "placa": "KCL927",
      "modelo": "2018",
      "cedula": "71793681",
      "nombres": "CARLOS ALBERTO RIOS CHANCI"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/08/2021",
      "placa": "GIK604",
      "modelo": "2020",
      "cedula": "1036399956",
      "nombres": "ERIKA ALEJANDRA GOMEZ OSORIO"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "02/11/2019",
      "placa": "FHD184",
      "modelo": "2009",
      "cedula": "900323201",
      "nombres": "RECEPTUREX COLOMBIA SAS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/09/2023",
      "placa": "INO611",
      "modelo": "2016",
      "cedula": "43747979",
      "nombres": "NURY AYDE MONTAÑO ESCOBAR"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "13/04/2024",
      "placa": "LAW131",
      "modelo": "2014",
      "cedula": "8014185",
      "nombres": "RAMIREZ ARBOLEDA ROBINSON DE J"
  },
  {
      "compañia": "SBS",
      "finvigencia": "24/09/2024",
      "placa": "ENZ969",
      "modelo": "2019",
      "cedula": "70383273",
      "nombres": "ZULUAGA PINEDA, FREY ALONSO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "10/08/2018",
      "placa": "USX566",
      "modelo": "2016",
      "cedula": "43275912",
      "nombres": "LINA MARCELA PANIAGUA LOPERA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "27/10/2024",
      "placa": "JCP913",
      "modelo": "2017",
      "cedula": "1036625152",
      "nombres": "LAURA MARIA SANCHEZ CONGOTE"
  },
  {
      "compañia": "SBS",
      "finvigencia": "27/05/2024",
      "placa": "JZO349",
      "modelo": "2022",
      "cedula": "1152196568",
      "nombres": "GUTIERREZ SEPULVEDA, SARA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/03/2024",
      "placa": "DSK161",
      "modelo": "2019",
      "cedula": "8160899",
      "nombres": "YOAN SNEIDER MAZO POSADA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/03/2022",
      "placa": "UCM339",
      "modelo": "2015",
      "cedula": "1152701575",
      "nombres": "NATALY TORRES TORO"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "06/11/2019",
      "placa": "KHG242",
      "modelo": "2010",
      "cedula": "1041202570",
      "nombres": "PARRA GIRALDO YORMARY"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "18/10/2024",
      "placa": "EFM426",
      "modelo": "2018",
      "cedula": "5821773",
      "nombres": "SAPUY POLANIA FREDY YOVANY"
  },
  {
      "compañia": "SBS",
      "finvigencia": "30/09/2024",
      "placa": "IAZ231",
      "modelo": "2015",
      "cedula": "72130274",
      "nombres": "DUQUE VELEZ, JHON BAIRON"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "27/11/2020",
      "placa": "MTT637",
      "modelo": "2013",
      "cedula": "1047994446",
      "nombres": "MEJIA AGUDELO NATALIA ANDREA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "09/02/2018",
      "placa": "FGU284",
      "modelo": "2008",
      "cedula": "39205442",
      "nombres": "NALLYVE JARAMILLO MUNERA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "01/07/2024",
      "placa": "ISQ448",
      "modelo": "2016",
      "cedula": "1036611154",
      "nombres": "GUTIERREZ SUAREZ, JUAN GUILLERMO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "04/12/2019",
      "placa": "IAY817",
      "modelo": "2016",
      "cedula": "42869212",
      "nombres": "CORREA BLANCA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "11/09/2021",
      "placa": "MIZ878",
      "modelo": "2013",
      "cedula": "29620775",
      "nombres": "VANEGAS ROJAS, LUZ MARY"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "13/04/2023",
      "placa": "GFK864",
      "modelo": "2020",
      "cedula": "71755043",
      "nombres": "PULGARIN MU?OZ HERNAN DARIO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "23/03/2024",
      "placa": "HZL769",
      "modelo": "2015",
      "cedula": "1152435262",
      "nombres": "LAURA YANETH ZAPATA MU?OZ"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "29/01/2024",
      "placa": "FCY090",
      "modelo": "2007",
      "cedula": "8349681",
      "nombres": "GERARDO DE JESUS ARISTIZABAL ARISTIZABAL"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "11/01/2025",
      "placa": "EIN123",
      "modelo": "2018",
      "cedula": "43502076",
      "nombres": "DIANA MANCIPE HOYOS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "12/07/2024",
      "placa": "MIL710",
      "modelo": "2013",
      "cedula": "16052974",
      "nombres": "GIRALDO MEJIA, CARLOS EDUARDO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "24/05/2022",
      "placa": "MNW650",
      "modelo": "2008",
      "cedula": "71735523",
      "nombres": "PINTO SANTA CARLOS ALBERTO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "13/12/2019",
      "placa": "BWA625",
      "modelo": "2006",
      "cedula": "14874823",
      "nombres": "BETANCOUR HECTOR FERNANDO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "18/12/2019",
      "placa": "DFT175",
      "modelo": "2012",
      "cedula": "71735361",
      "nombres": "OSWALDO ALEXIS PALACIO GIRALDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/07/2024",
      "placa": "MSL281",
      "modelo": "2012",
      "cedula": "15506557",
      "nombres": "JOSE NELSON CHICA ARIAS"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "10/05/2024",
      "placa": "GEW355",
      "modelo": "2019",
      "cedula": "71317320",
      "nombres": "OTALVARO CORREA, RICARDO ANDRES"
  },
  {
      "compañia": "SBS",
      "finvigencia": "12/10/2022",
      "placa": "USX820",
      "modelo": "2015",
      "cedula": "71399117",
      "nombres": "HERNANDEZ LONDO?O, JUAN GUILERMO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/01/2018",
      "placa": "USX596",
      "modelo": "2016",
      "cedula": "1129537885",
      "nombres": "FONTALVO OROZCO JOENIS MARIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "18/12/2024",
      "placa": "IUD008",
      "modelo": "2016",
      "cedula": "1013617017",
      "nombres": "LIZETH MEJIA GALVEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/12/2024",
      "placa": "GEX783",
      "modelo": "2020",
      "cedula": "93437772",
      "nombres": "FRANCISCO FABIAN VERGEL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/02/2023",
      "placa": "EHZ871",
      "modelo": "2018",
      "cedula": "70191007",
      "nombres": "BERNARDO ALBERTO LONDOÑO LONDOÑO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "16/05/2024",
      "placa": "MTX216",
      "modelo": "2013",
      "cedula": "72195357",
      "nombres": "L?PEZ DEL VALLE CARLOS DAVID"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "21/02/2024",
      "placa": "JYZ079",
      "modelo": "2021",
      "cedula": "43800018",
      "nombres": "TAMAYO RAMOS, MARIA LISDEDIS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "11/01/2022",
      "placa": "DWN954",
      "modelo": "2017",
      "cedula": "43102730",
      "nombres": "LEIDY PATRICIA VELEZ MURILLO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "10/08/2023",
      "placa": "EOV949",
      "modelo": "2018",
      "cedula": "407312",
      "nombres": "KOHRING KARSTEN, SILVIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "08/05/2023",
      "placa": "UEO023",
      "modelo": "2016",
      "cedula": "901496529",
      "nombres": "COLAM SOLUTIONS S.A.S."
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "15/07/2024",
      "placa": "JBO622",
      "modelo": "2017",
      "cedula": "43208708",
      "nombres": "ALVAREZ BERNAL,BEATRIZ ALEJANDRA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "26/03/2024",
      "placa": "USU353",
      "modelo": "2016",
      "cedula": "63251031",
      "nombres": "MEJIA MEJIA, EMMA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "14/01/2020",
      "placa": "JBO701",
      "modelo": "2017",
      "cedula": "71223463",
      "nombres": "FRANKLIN ESTEBAN ARCILA GALLEG"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "15/07/2024",
      "placa": "KJA871",
      "modelo": "2011",
      "cedula": "8353392",
      "nombres": "FIGUEROA MIRANDA, CARLOS ENRIQUE"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "28/10/2024",
      "placa": "JSQ770",
      "modelo": "2020",
      "cedula": "26259942",
      "nombres": "MENA IBARGUEN LUZ STELLA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "19/01/2020",
      "placa": "FHA557",
      "modelo": "2009",
      "cedula": "3415176",
      "nombres": "JULIAN ANDRES CASTILLO GRISALES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "12/04/2019",
      "placa": "JBO441",
      "modelo": "2017",
      "cedula": "22004291",
      "nombres": "MARTA LIA GALEANO GONZALEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/03/2024",
      "placa": "IAY149",
      "modelo": "2015",
      "cedula": "71693473",
      "nombres": "GILDARDO DE JESUS ECHEVERRI BUITRAGO"
  },
  {
      "compañia": "MUNDIAL",
      "finvigencia": "30/09/2022",
      "placa": "MUK245",
      "modelo": "2013",
      "cedula": "71226525",
      "nombres": "DANNY DANIEL JARAMILLO JARAMILLO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "12/08/2022",
      "placa": "JEZ094",
      "modelo": "2017",
      "cedula": "16115674",
      "nombres": "HIGUITA GALEANO, JUAN DAVID"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "28/11/2023",
      "placa": "HXU970",
      "modelo": "2015",
      "cedula": "1020404255",
      "nombres": "GALLEGO RAMIREZ EDWAR ANDRES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "20/04/2019",
      "placa": "DKW381",
      "modelo": "2013",
      "cedula": "98761029",
      "nombres": "DIEGO ANDRES CASTAÑO SANCHEZ"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "29/01/2022",
      "placa": "MCL320",
      "modelo": "2012",
      "cedula": "42776543",
      "nombres": "LOPEZ ARANGO, BEATRIZ"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "03/03/2024",
      "placa": "HGW574",
      "modelo": "2013",
      "cedula": "71629222",
      "nombres": "MESA SIERRA FERNANDO DE JESUS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "29/08/2024",
      "placa": "GIK145",
      "modelo": "2019",
      "cedula": "21576449",
      "nombres": "LUZ MERY GOMEZ GALLEGO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/11/2024",
      "placa": "GEW717",
      "modelo": "2020",
      "cedula": "32320401",
      "nombres": "MAR?A NANCY, CARDONA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "29/01/2024",
      "placa": "IUB901",
      "modelo": "2015",
      "cedula": "8346404",
      "nombres": "LUIS GUILLERMO JARAMILLO VELEZ"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "10/03/2024",
      "placa": "MVU820",
      "modelo": "2013",
      "cedula": "98664506",
      "nombres": "OSPINA ARBOLEDA ALEXANDRO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "17/08/2022",
      "placa": "PEX183",
      "modelo": "2005",
      "cedula": "71227650",
      "nombres": "FABIO ANDRES TAMAYO MARIN"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "19/04/2024",
      "placa": "JON837",
      "modelo": "2021",
      "cedula": "1020414610",
      "nombres": "MARIZABEL VASQUEZ BEDOYA"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "30/01/2025",
      "placa": "DQY769",
      "modelo": "2018",
      "cedula": "1112473412",
      "nombres": "ARAGON CALAPZU GIOVANY"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "10/09/2020",
      "placa": "USU327",
      "modelo": "2015",
      "cedula": "1017152593",
      "nombres": "NATALIA YEPES CASTRO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "30/07/2024",
      "placa": "HHK275",
      "modelo": "2014",
      "cedula": "39325944",
      "nombres": "LUZ GAVIRIA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/10/2024",
      "placa": "MTY200",
      "modelo": "2013",
      "cedula": "901373701",
      "nombres": "GRUPO ANTIOQUEÑO DE EDUCACION PARA EL EMPLEO GAEE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "05/06/2024",
      "placa": "KHF129",
      "modelo": "2011",
      "cedula": "1128273126",
      "nombres": "GRISALES PELAEZ, YONY ALEXIS"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "24/01/2024",
      "placa": "HAN005",
      "modelo": "2015",
      "cedula": "43265931",
      "nombres": "BERRIO URAN, DIANA MARCELA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "05/08/2023",
      "placa": "HNU269",
      "modelo": "2014",
      "cedula": "8012400",
      "nombres": "JHON JAIRO BEDOYA TORRES"
  },
  {
      "compañia": "SBS",
      "finvigencia": "15/10/2024",
      "placa": "HGV934",
      "modelo": "2014",
      "cedula": "21877743",
      "nombres": "GUTIERREZ MARIN, Blanca Ines"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "26/02/2020",
      "placa": "INP740",
      "modelo": "2016",
      "cedula": "43514185",
      "nombres": "PIMIENTA RESTREPO, GLORIA ELEN"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "06/02/2024",
      "placa": "FXO671",
      "modelo": "2019",
      "cedula": "41963883",
      "nombres": "LOAIZA RENDON LINA MARCELA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "28/06/2024",
      "placa": "RKV226",
      "modelo": "2012",
      "cedula": "39433982",
      "nombres": "GLORIA EUGENIA VARGAS DE GOMEZ"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "01/12/2024",
      "placa": "GHY914",
      "modelo": "2020",
      "cedula": "71796971",
      "nombres": "CRISTIAN QUEBRADAS MARTINEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "26/02/2024",
      "placa": "FCM830",
      "modelo": "2006",
      "cedula": "8315728",
      "nombres": "FRANCISCO JOSE ROLDAN ARANGO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "04/11/2023",
      "placa": "EFW047",
      "modelo": "2018",
      "cedula": "1053809133",
      "nombres": "DIANA JULIETH MEZA CAMPOS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "21/12/2024",
      "placa": "JSS301",
      "modelo": "2021",
      "cedula": "8161447",
      "nombres": "JIMENEZ CUENCAR CARLOS SANTIAGO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "17/06/2024",
      "placa": "FOQ194",
      "modelo": "2019",
      "cedula": "1020798198",
      "nombres": "CASTRO ROJAS,DANIEL EDUARDO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "23/07/2024",
      "placa": "EFX658",
      "modelo": "2018",
      "cedula": "70042948",
      "nombres": "MARIO FERNANDO CALLE URIBE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2024",
      "placa": "EIK016",
      "modelo": "2018",
      "cedula": "71663699",
      "nombres": "CAMPUZANO PEREZ,JOHN FREDY"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "23/05/2024",
      "placa": "GVP232",
      "modelo": "2020",
      "cedula": "8064175",
      "nombres": "JOHN DAVIS BETANCURTH BETANCURTH"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "24/02/2024",
      "placa": "UCZ718",
      "modelo": "2015",
      "cedula": "1045021658",
      "nombres": "OCAMPO URREA, DIONE CAMILA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "02/10/2022",
      "placa": "MIX621",
      "modelo": "2013",
      "cedula": "25097939",
      "nombres": "ALBA LUCIA GIRALDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/06/2020",
      "placa": "JCM996",
      "modelo": "2017",
      "cedula": "1017150587",
      "nombres": "YESID ANDREY USUGA DIAZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "28/06/2024",
      "placa": "GEM076",
      "modelo": "2020",
      "cedula": "71318182",
      "nombres": "OSORIO ATEHORTUA, OMAR ARLEX"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "24/11/2024",
      "placa": "JJU634",
      "modelo": "2018",
      "cedula": "79062058",
      "nombres": "CARLOS EFRAIN RODRIGUEZ"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "26/08/2024",
      "placa": "EGZ857",
      "modelo": "2018",
      "cedula": "1037589294",
      "nombres": "DIEZ GIRALDO, LUISA FERNANDA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "20/02/2024",
      "placa": "USV073",
      "modelo": "2015",
      "cedula": "1152187070",
      "nombres": "FERRARO REYES, EDWARD"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/12/2024",
      "placa": "EPP153",
      "modelo": "2019",
      "cedula": "71850059",
      "nombres": "JOSE IGNACIO MACHADO FLOREZ"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "16/06/2024",
      "placa": "MTY203",
      "modelo": "2013",
      "cedula": "98659147",
      "nombres": "Sergio Leon Bedoya Alzate"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "30/11/2024",
      "placa": "HZQ088",
      "modelo": "2016",
      "cedula": "1128421050",
      "nombres": "SEBASTIAN GONZALEZ GONZALEZ"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "02/08/2024",
      "placa": "NAU001",
      "modelo": "2009",
      "cedula": "42964197",
      "nombres": "DORIS ELENA, GOMEZ TOBON"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "09/12/2024",
      "placa": "JBQ194",
      "modelo": "2017",
      "cedula": "900595365",
      "nombres": "RAMTEX S.A.S"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "15/06/2024",
      "placa": "GVO914",
      "modelo": "2020",
      "cedula": "1053805853",
      "nombres": "ARCILA HENAO SANTIAGO ALBERTO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "27/08/2022",
      "placa": "GWY971",
      "modelo": "2021",
      "cedula": "1037626602",
      "nombres": "MARCELA CARDONA CONTRERAS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2023",
      "placa": "ISS730",
      "modelo": "2016",
      "cedula": "1152447628",
      "nombres": "CAMILA VELEZ GOMEZ"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "09/02/2022",
      "placa": "FHL654",
      "modelo": "2010",
      "cedula": "1037651985",
      "nombres": "BUITRAGO BUITRAGO RUIZ MARIA CAMILA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "31/08/2024",
      "placa": "INQ074",
      "modelo": "2016",
      "cedula": "66862848",
      "nombres": "KARIN ADRIANA RODR?GUEZ RODR?GUEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "16/02/2022",
      "placa": "EFY683",
      "modelo": "2018",
      "cedula": "71731971",
      "nombres": "ELEAZAR ANTONIO ARBOLEDA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "19/09/2020",
      "placa": "DOU987",
      "modelo": "2017",
      "cedula": "80003653",
      "nombres": "MONTOYA ARTEAGA CARLOS ANDRES"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "15/06/2023",
      "placa": "JZP313",
      "modelo": "2022",
      "cedula": "43274852",
      "nombres": "LOPEZ ZULUAGA JAQUELINE"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "13/04/2023",
      "placa": "DFS708",
      "modelo": "2012",
      "cedula": "15334782",
      "nombres": "ESCOBAR RIVILLAS,CARLOS ALBERTO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "EFW759",
      "modelo": "2017",
      "cedula": "21443119",
      "nombres": "MARTINEZ VAHOS, YAQUELINE"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "20/08/2024",
      "placa": "IOQ587",
      "modelo": "2016",
      "cedula": "98576700",
      "nombres": "MAURICIO MAZO POSADA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "28/11/2024",
      "placa": "GEN611",
      "modelo": "2019",
      "cedula": "1026140456",
      "nombres": "CASTRILLON OCAMPO LUIS MIGUEL"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "27/04/2024",
      "placa": "GYU520",
      "modelo": "2021",
      "cedula": "91182353",
      "nombres": "Ruben Dario Bueno Bueno"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "18/03/2021",
      "placa": "IHQ121",
      "modelo": "2015",
      "cedula": "1036668982",
      "nombres": "BRYAN ALEXIS GOMEZ AGUIRRE"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "15/04/2022",
      "placa": "UEM419",
      "modelo": "2016",
      "cedula": "1152699687",
      "nombres": "ANGIE MELISSA QUINTANA MUNERA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "23/05/2023",
      "placa": "UEV719",
      "modelo": "2016",
      "cedula": "1053772311",
      "nombres": "JUAN CAMILO ESCOBAR DUQUE"
  },
  {
      "compañia": "SBS",
      "finvigencia": "15/11/2024",
      "placa": "JCR443",
      "modelo": "2017",
      "cedula": "98710737",
      "nombres": "ARANGO AYALA, JAIME ALEJANDRO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "27/09/2024",
      "placa": "FQS628",
      "modelo": "2019",
      "cedula": "71668900",
      "nombres": "JORGE ALBERTO CARDONA CASTANO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "28/12/2024",
      "placa": "FQS985",
      "modelo": "2019",
      "cedula": "43695509",
      "nombres": "Sonia Stella P?rez Ospina"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "26/08/2024",
      "placa": "IAO382",
      "modelo": "2015",
      "cedula": "8353582",
      "nombres": "JOSE LUIS RAMIREZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "06/05/2023",
      "placa": "HYR579",
      "modelo": "2016",
      "cedula": "1020416648",
      "nombres": "CARLOS ANDRES HERRERA OSPINA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "30/05/2024",
      "placa": "EKZ611",
      "modelo": "2008",
      "cedula": "8294294",
      "nombres": "OCAMPO ISAZA OSCAR JOSE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "24/12/2020",
      "placa": "NDU444",
      "modelo": "2013",
      "cedula": "43795709",
      "nombres": "MARIA PATRICIA ARCILA SALAZAR"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "18/11/2023",
      "placa": "DNT957",
      "modelo": "2017",
      "cedula": "1130660624",
      "nombres": "DAMIR STEAVEN BUITRAGO MARIN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/03/2024",
      "placa": "EGK154",
      "modelo": "2018",
      "cedula": "71716533",
      "nombres": "ELKIN FABIO TAMAYO MONTES"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "22/10/2020",
      "placa": "HXT584",
      "modelo": "2014",
      "cedula": "43030775",
      "nombres": "HERNANDEZ DE VELASQUEZ MARTA CECILIA ."
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "21/12/2024",
      "placa": "UEM007",
      "modelo": "2015",
      "cedula": "1128274824",
      "nombres": "ECHEVERRI MEDINA LEON DARIO, ."
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "08/09/2023",
      "placa": "JPV448",
      "modelo": "2021",
      "cedula": "42788213",
      "nombres": "MENDEZ RAMIREZ, JANET ROCIO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "29/01/2025",
      "placa": "EPP944",
      "modelo": "2019",
      "cedula": "42998650",
      "nombres": "SEPULVEDA MEJIA LISED"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "17/12/2021",
      "placa": "GRS131",
      "modelo": "2020",
      "cedula": "15518421",
      "nombres": "BEDOYA BEDOYA JHONATTAN"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "24/06/2024",
      "placa": "KMR353",
      "modelo": "2012",
      "cedula": "43045636",
      "nombres": "MORENO SALAZAR MARIA VICTORIA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "28/07/2024",
      "placa": "HGR965",
      "modelo": "2014",
      "cedula": "98633025",
      "nombres": "MAURICIO CARDONA JARAMILLO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "24/02/2022",
      "placa": "MNZ965",
      "modelo": "2009",
      "cedula": "71661045",
      "nombres": "PEREZ CALDERON FELIX ESTEBAN"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/02/2024",
      "placa": "HWN021",
      "modelo": "2014",
      "cedula": "43106511",
      "nombres": "LEDYN TORO RENDON"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "30/11/2024",
      "placa": "GWV862",
      "modelo": "2020",
      "cedula": "43543639",
      "nombres": "HERNANDEZ MESA, ALEXANDRA MARIA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "27/09/2024",
      "placa": "GRN434",
      "modelo": "2020",
      "cedula": "1017136666",
      "nombres": "TEST QA AUTO MORALES"
  },
  {
      "compañia": "SBS",
      "finvigencia": "27/11/2024",
      "placa": "GWV428",
      "modelo": "2020",
      "cedula": "1128427491",
      "nombres": "ROLDAN VELEZ, SERGIO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "10/05/2023",
      "placa": "RKV797",
      "modelo": "2012",
      "cedula": "1035426928",
      "nombres": "MOLINA MENESES, SEBASTIAN"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "07/06/2024",
      "placa": "JOR473",
      "modelo": "2021",
      "cedula": "15606569",
      "nombres": "MUÑOZ POSADA, ALVARO DE JESUS"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "09/09/2020",
      "placa": "KBU089",
      "modelo": "2011",
      "cedula": "43482230",
      "nombres": "CARVAJAL SERNA ZULIMA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/08/2024",
      "placa": "ELM299",
      "modelo": "2010",
      "cedula": "71172901",
      "nombres": "JORGE LEON HERNANDEZ ACEVEDO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "15/08/2024",
      "placa": "FUN516",
      "modelo": "2019",
      "cedula": "71536128",
      "nombres": "VALENCIA AGUDELO, JESUS ALBEIR"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "29/09/2024",
      "placa": "FOU924",
      "modelo": "2019",
      "cedula": "1053327573",
      "nombres": "ANDREA DEL ROSARIO MURCIA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2024",
      "placa": "GVN622",
      "modelo": "2020",
      "cedula": "1040733428",
      "nombres": "YEPES PAMPLONA, LADY JOHANNA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "31/08/2019",
      "placa": "HXT332",
      "modelo": "2014",
      "cedula": "43220346",
      "nombres": "MARIA ELVIRA OSPINA LONDOÑO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "10/05/2022",
      "placa": "KBV713",
      "modelo": "2010",
      "cedula": "42894170",
      "nombres": "SIERRA HERNANDEZ ANA ALEJANDRA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "31/10/2023",
      "placa": "IAP526",
      "modelo": "2015",
      "cedula": "1018344819",
      "nombres": "CARDENAS LOPEZ OSMAN ALFREDO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "KIW389",
      "modelo": "2011",
      "cedula": "1036677293",
      "nombres": "ZULETA OROZCO, MELISSA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "07/04/2024",
      "placa": "FXR713",
      "modelo": "2019",
      "cedula": "42786038",
      "nombres": "LINA MARIA RESTREPO PALACIO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "12/11/2021",
      "placa": "USY241",
      "modelo": "2016",
      "cedula": "1017142699",
      "nombres": "CALDERON DUQUE, ANA PAULINA"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "01/02/2024",
      "placa": "HEY199",
      "modelo": "2013",
      "cedula": "901407783",
      "nombres": "PERSONAL DRIVER SAS"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "28/09/2024",
      "placa": "PFV643",
      "modelo": "2012",
      "cedula": "39179684",
      "nombres": "PAULA ANDREA PEREZ LOPEZ"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "15/06/2023",
      "placa": "KGW142",
      "modelo": "2011",
      "cedula": "98471738",
      "nombres": "LUIS FERNANDO HOYOS YARCE"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "10/04/2022",
      "placa": "IAO878",
      "modelo": "2015",
      "cedula": "8388641",
      "nombres": "ARGELIO ARTURO MEJIA MARIN"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "25/05/2023",
      "placa": "GEX904",
      "modelo": "2020",
      "cedula": "71264181",
      "nombres": "ROMAN EDUARDO PINEDA RUIZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "27/08/2022",
      "placa": "HEX747",
      "modelo": "2014",
      "cedula": "1017130788",
      "nombres": "LINA MARCELA GIRALDO CARMONA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "03/07/2023",
      "placa": "USY797",
      "modelo": "2016",
      "cedula": "901003581",
      "nombres": "CENTRO DE ENSEÑANZA AUTOMOVILISTICO AUTOGABI S.A.S"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/12/2024",
      "placa": "HGV518",
      "modelo": "2013",
      "cedula": "98641393",
      "nombres": "BEDOYA GONZALEZ,JAVIER ALEXANDER"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "25/08/2023",
      "placa": "HHK197",
      "modelo": "2013",
      "cedula": "1000547224",
      "nombres": "RAMIREZ ECHAVARRIA SEBASTIAN"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "24/05/2020",
      "placa": "KMQ362",
      "modelo": "2012",
      "cedula": "17191895",
      "nombres": "JIMENEZ PIEDRAHITA ORIOL"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "12/06/2021",
      "placa": "KHI131",
      "modelo": "2011",
      "cedula": "43678265",
      "nombres": "ACENED BURITICA MONCADA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/06/2024",
      "placa": "IAZ500",
      "modelo": "2016",
      "cedula": "43621060",
      "nombres": "AURA MARIA GOMEZ MONTOYA"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/06/2022",
      "placa": "HSW308",
      "modelo": "2014",
      "cedula": "1020435553",
      "nombres": "ROBINSON TABORDA MAZO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/02/2024",
      "placa": "GEK551",
      "modelo": "2020",
      "cedula": "1128276666",
      "nombres": "CAMILO ACOSTA ARREDONDO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "28/05/2024",
      "placa": "IAP974",
      "modelo": "2015",
      "cedula": "43119175",
      "nombres": "URREGO DURANGO FLOR MARIA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "16/12/2020",
      "placa": "HTV681",
      "modelo": "2014",
      "cedula": "8309901",
      "nombres": "HERNANDEZ ACEVEDO HUMBERTO DE JESUS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "01/07/2023",
      "placa": "GEN872",
      "modelo": "2020",
      "cedula": "1020412821",
      "nombres": "JHON HENRY VELASQUEZ MARIN"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "29/10/2021",
      "placa": "FQQ789",
      "modelo": "2019",
      "cedula": "40378131",
      "nombres": "MARIA LILIANA HENAO DIAZ"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "27/02/2024",
      "placa": "JQP236",
      "modelo": "2021",
      "cedula": "24829986",
      "nombres": "GOMEZ MORALES, LUZ ADRIANA"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "05/12/2024",
      "placa": "DJP839",
      "modelo": "2013",
      "cedula": "43511104",
      "nombres": "GOMEZ LOPEZ MARIA NANCY"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "30/05/2024",
      "placa": "KBV907",
      "modelo": "2010",
      "cedula": "3512621",
      "nombres": "Pedro Garces Garces"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "01/11/2024",
      "placa": "IAQ390",
      "modelo": "2015",
      "cedula": "1037572276",
      "nombres": "MARIN ALZATE ADRIANA CAROLINA"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "02/10/2021",
      "placa": "HAN387",
      "modelo": "2015",
      "cedula": "71706273",
      "nombres": "GONZALEZ ARROYAVE JUAN CARLOS"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "28/02/2025",
      "placa": "JYZ415",
      "modelo": "2021",
      "cedula": "71939187",
      "nombres": "FLOREZ FERNANDO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "27/08/2024",
      "placa": "GBS545",
      "modelo": "2019",
      "cedula": "23265216",
      "nombres": "FAJARDO DE OTALORA FLOR ALBA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "28/06/2024",
      "placa": "KIC098",
      "modelo": "2016",
      "cedula": "75093229",
      "nombres": "OCAMPO AGUIRRE,CESAR AUGUSTO"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "10/08/2024",
      "placa": "MSP586",
      "modelo": "2013",
      "cedula": "8408949",
      "nombres": "Hernando Lopez Gonzalez"
  },
  {
      "compañia": "MUNDIAL",
      "finvigencia": "15/09/2024",
      "placa": "MIZ985",
      "modelo": "2012",
      "cedula": "1017223901",
      "nombres": "DANIELA GARCIA NOREÑA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "24/03/2024",
      "placa": "JHP818",
      "modelo": "2017",
      "cedula": "1013363463",
      "nombres": "Elkin Correa Lopez"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "05/04/2021",
      "placa": "ISV887",
      "modelo": "2017",
      "cedula": "43279284",
      "nombres": "RAMIREZ ARANGO SANDRA ELENA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "29/08/2024",
      "placa": "JHT320",
      "modelo": "2018",
      "cedula": "1140815334",
      "nombres": "UTRIA BOLIVAR, ADRIANA ISABEL"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "14/07/2024",
      "placa": "IOT891",
      "modelo": "2016",
      "cedula": "1017245248",
      "nombres": "VILLADA ZAPATA, TATIANA"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "28/07/2023",
      "placa": "JPT151",
      "modelo": "2020",
      "cedula": "1010205735",
      "nombres": "MONICA CATERINE BUITRAGO PUENTES"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "23/12/2024",
      "placa": "EGX999",
      "modelo": "2018",
      "cedula": "71643997",
      "nombres": "OSCAR FERNANDO SANCHEZ DUQUE"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "15/01/2022",
      "placa": "HZK699",
      "modelo": "2016",
      "cedula": "32075171",
      "nombres": "ESCOBAR DE HENAO MARIA INES"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/06/2022",
      "placa": "IYS425",
      "modelo": "2016",
      "cedula": "71703256",
      "nombres": "JIMENEZ FANDIO,LUIS FERNANDO"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "01/11/2024",
      "placa": "EGK833",
      "modelo": "2018",
      "cedula": "39449707",
      "nombres": "RESTREPO BEDOYA ANA MILENA"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "11/04/2024",
      "placa": "JYS408",
      "modelo": "2022",
      "cedula": "1037622834",
      "nombres": "LUCAS ANDRADE RESTREPO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "11/02/2024",
      "placa": "IYR213",
      "modelo": "2017",
      "cedula": "1152445737",
      "nombres": "JESSICA ALEJANDRA GIRALDO GOMEZ"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "29/01/2024",
      "placa": "FSX611",
      "modelo": "2019",
      "cedula": "1017262611",
      "nombres": "BEDOYA TORRES JHONATHAN ESTEBAN"
  },
  {
      "compañia": "ZURICH-QBE",
      "finvigencia": "29/06/2024",
      "placa": "INP413",
      "modelo": "2016",
      "cedula": "53083525",
      "nombres": "Gutierrez Agudelo Sandra Ximena"
  },
  {
      "compañia": "EQUIDAD",
      "finvigencia": "20/01/2021",
      "placa": "KMT775",
      "modelo": "2013",
      "cedula": "30078993",
      "nombres": "PALACIO GIRALDO SONIA"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "27/07/2024",
      "placa": "MXY528",
      "modelo": "2014",
      "cedula": "15332294",
      "nombres": "HERRERA VALENCIA JESUS MARIA"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "29/12/2023",
      "placa": "ICZ539",
      "modelo": "2015",
      "cedula": "72179008",
      "nombres": "DONADO GARCIA WILLIAM ENRIQUE"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "07/07/2024",
      "placa": "DIL791",
      "modelo": "2012",
      "cedula": "43741736",
      "nombres": "ZULETA ZULUAGA CLAUDIA PATRICI"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "02/11/2019",
      "placa": "DHS869",
      "modelo": "2012",
      "cedula": "1020478374",
      "nombres": "EMANUEL YARCE METRIO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "11/09/2024",
      "placa": "JOQ902",
      "modelo": "2021",
      "cedula": "71380909",
      "nombres": "ANDRES FELIPE HENAO CATAÑO"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "13/07/2024",
      "placa": "EHM385",
      "modelo": "2018",
      "cedula": "98661997",
      "nombres": "SACARDENAS GARCIA, JAIME ALBERTO"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "16/07/2023",
      "placa": "INR328",
      "modelo": "2016",
      "cedula": "1042061359",
      "nombres": "RICARDO QUINTANA PEREZ"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "18/06/2021",
      "placa": "IUA813",
      "modelo": "2012",
      "cedula": "3587263",
      "nombres": "OCHOA CARMONA ALIRIO DE JESUS"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/04/2023",
      "placa": "JYT723",
      "modelo": "2021",
      "cedula": "37088337",
      "nombres": "DANIELA FRANCISCA PIEDRAHITA MONTES"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "19/06/2024",
      "placa": "FCT282",
      "modelo": "2007",
      "cedula": "8060579",
      "nombres": "JULIAN DAVID CASTA?EDA GOMEZ"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "01/10/2024",
      "placa": "GEM030",
      "modelo": "2019",
      "cedula": "98633556",
      "nombres": "MERCADO WILLIAM JESUSREBOLLEDO"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "21/01/2023",
      "placa": "JKN952",
      "modelo": "2018",
      "cedula": "30079315",
      "nombres": "LONDOÑO AGUIRRE, FLOR MARLENY"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "29/01/2025",
      "placa": "MXY663",
      "modelo": "2014",
      "cedula": "43564085",
      "nombres": "DIANA SOLANGE ATEHORTUA CASTIL"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "13/07/2021",
      "placa": "KMS138",
      "modelo": "2012",
      "cedula": "12589638",
      "nombres": "CRISTOBAL JOSE DIAZ ANAYA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/03/2022",
      "placa": "KDM478",
      "modelo": "2013",
      "cedula": "18497784",
      "nombres": "FERNAN PINEDA PINEDA"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "05/07/2024",
      "placa": "JKK036",
      "modelo": "2017",
      "cedula": "50871143",
      "nombres": "HOYOS PATERNINA, AURA ESTELA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "27/08/2024",
      "placa": "HZK308",
      "modelo": "2014",
      "cedula": "98699077",
      "nombres": "GERMAN CAMILO OCHOA PEREZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "19/02/2024",
      "placa": "ENZ352",
      "modelo": "2018",
      "cedula": "43675691",
      "nombres": "ROSA NELLY HENAO BEDOYA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "01/09/2024",
      "placa": "JQP532",
      "modelo": "2021",
      "cedula": "1040356604",
      "nombres": "JIMENEZ FORONDA, SINDY KATHERINE"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "27/07/2024",
      "placa": "FGI298",
      "modelo": "2008",
      "cedula": "43989754",
      "nombres": "CAROLINA MARCELA URREGO VILLEGAS"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "08/09/2024",
      "placa": "KHS042",
      "modelo": "2012",
      "cedula": "9729219",
      "nombres": "andres guevara"
  },
  {
      "compañia": "SBS",
      "finvigencia": "13/12/2024",
      "placa": "GWW649",
      "modelo": "2020",
      "cedula": "16050171",
      "nombres": "GUTIERREZ OCAMPO, ALDEMAR"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "25/05/2024",
      "placa": "DSY349",
      "modelo": "2018",
      "cedula": "43006883",
      "nombres": "HINCAPIE CASTA?O,DORIS ELENA"
  },
  {
      "compañia": "ALLIANZ",
      "finvigencia": "18/05/2024",
      "placa": "IAZ674",
      "modelo": "2015",
      "cedula": "43677184",
      "nombres": "JULIA MARIA, RIVERA GOMEZ"
  },
  {
      "compañia": "PREVISORA",
      "finvigencia": "01/01/2024",
      "placa": "OKE546",
      "modelo": "2012",
      "cedula": "8909800938",
      "nombres": "MUNICIPIO DE ITAGUI"
  },
  {
      "compañia": "LIBERTY",
      "finvigencia": "28/10/2022",
      "placa": "KHG438",
      "modelo": "2011",
      "cedula": "15332154",
      "nombres": "Francisco Valencia"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "30/11/2024",
      "placa": "EON153",
      "modelo": "2019",
      "cedula": "71744233",
      "nombres": "JHON JAIRO JARAMILLO NIEVES"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "16/12/2024",
      "placa": "JKK159",
      "modelo": "2017",
      "cedula": "71705662",
      "nombres": "JOHNNY ALBERTO ARCILA MARIN"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "29/01/2024",
      "placa": "DUM336",
      "modelo": "2017",
      "cedula": "1128425056",
      "nombres": "PEREZ PEREZ, JORGE URIAS"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "07/12/2023",
      "placa": "UUP975",
      "modelo": "2016",
      "cedula": "98572186",
      "nombres": "GARCIA HENAO LUIS FERNANDO"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "01/01/2025",
      "placa": "GEV915",
      "modelo": "2019",
      "cedula": "1017154576",
      "nombres": "CRISTIAN CAMILO VASQUEZ GIRALD"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "22/10/2024",
      "placa": "EON368",
      "modelo": "2020",
      "cedula": "1152472141",
      "nombres": "HERNAN DAVID ALVAREZ ARENAS"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "07/12/2024",
      "placa": "INP453",
      "modelo": "2016",
      "cedula": "1020440841",
      "nombres": "VANESSA BAENA GAVIRIA"
  },
  {
      "compañia": "SBS",
      "finvigencia": "15/02/2023",
      "placa": "DMK311",
      "modelo": "2013",
      "cedula": "1035391292",
      "nombres": "SUAREZ JIMENEZ, WILLIAM GREIDY"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "16/09/2024",
      "placa": "IHQ603",
      "modelo": "2016",
      "cedula": "1000654360",
      "nombres": "ZAPATA BOTERO VALENTINA"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "29/12/2019",
      "placa": "JHP572",
      "modelo": "2017",
      "cedula": "900304940",
      "nombres": "TOUR VACATION HOTELES AZUL S.A.S"
  },
  {
      "compañia": "HDI SEGUROS",
      "finvigencia": "13/11/2023",
      "placa": "GVM200",
      "modelo": "2020",
      "cedula": "8100498",
      "nombres": "HENAO PINEDA, ANDRES FELIPE"
  },
  {
      "compañia": "ESTADO",
      "finvigencia": "18/04/2022",
      "placa": "DSV543",
      "modelo": "2018",
      "cedula": "8432308",
      "nombres": "SAMUELL ANTONIO VALENCIA CASTAÑO"
  },
  {
      "compañia": "MAPFRE",
      "finvigencia": "07/03/2024",
      "placa": "HYU109",
      "modelo": "2017",
      "cedula": "71605898",
      "nombres": "SALINAS AGUDELO JAVIER LEONARDO"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "10/08/2024",
      "placa": "JBR022",
      "modelo": "2017",
      "cedula": "1037502820",
      "nombres": "JHOVANI ANDRES VALENCIA HENAO"
  },
  {
      "compañia": "AXA COLPATRIA",
      "finvigencia": "18/01/2023",
      "placa": "ISR727",
      "modelo": "2016",
      "cedula": "8395660",
      "nombres": "VIRGEN DEL CARMEN ALVAREZ YEPE"
  },
  {
      "compañia": "BOLIVAR",
      "finvigencia": "23/06/2024",
      "placa": "DSU462",
      "modelo": "2017",
      "cedula": "1001229510",
      "nombres": "LAURA GALLEGO CHAVES"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "21/04/2021",
      "placa": "ELY925",
      "modelo": "2019",
      "cedula": "1127353528",
      "nombres": "YULY KATHERINE TOLEDO GONZALEZ"
  },
  {
      "compañia": "SURAMERICANA",
      "finvigencia": "15/06/2024",
      "placa": "IRV063",
      "modelo": "2016",
      "cedula": "79436395",
      "nombres": "CESAR AUGUSTO RAMIREZ TORO"
  },
  {
      "compañia": "SOLIDARIA",
      "finvigencia": "02/03/2024",
      "placa": "OUC323",
      "modelo": "2018",
      "cedula": "800141397",
      "nombres": "POLICIA NACIONAL -DIRECCION ADMINISTRATIVA Y FINAN"
  }
]

module.exports = { dataPlacas }
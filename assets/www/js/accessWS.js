/* ==========================================================================
    WEBSERVICE METHODS
========================================================================== */

var url = "http://localhost:4026/WCFService1/WSTime.asmx";


    /* ==========================================================================
    AUTHOR'S CUSTOM METHODS
    ========================================================================== */
    
    

/*  carregar select cidades */

function getCities() {

        
    var selectCity = document.getElementById("sltCity");

    // apagar anteriores
    while (selectCity.firstChild) {
        selectCity.removeChild(selectCity.firstChild);
    }
       var option = document.createElement("option");
        var optionText = document.createTextNode("");
        option.appendChild(optionText);
        selectCity.appendChild(option);
    
        var cities = getCitiesWS();
    
    // preenche select com as cidades
    for (var i = 0; i < cities.length; i++) {

        option = document.createElement("option");
        optionText = document.createTextNode(cities[i]);
        option.appendChild(optionText);
        selectCity.appendChild(option);
    }
}

function getTime() {

    var city = getSelectedText("sltCity");

    if (city != "") {
        
        var time = getTimeWS(city);
        hours = time["hours"];
        minutes = time["minutes"];
        seconds = time["seconds"];

        // criar tabela com informação
        var table = "<table> ";
        table += "<tr><td>" + hours + ":</td><td>" + minutes + ":</td><td>" + seconds + "</td></tr>";
        table += "</table>";

        // alteração do conteúdo textual do div resposta
        document.getElementById("response-content").innerHTML = table;
    } else {
        alert("chooses one city !! ");
        document.getElementById("response-content").innerHTML = "";
    }
}

function getCitiesWS()
{
    /*  fazer pedido ao WS do nome das cidades   */
    var c = new Array("Lisboa", "Porto", "Ponta Delgada", "Vigo");   //  array de teste 
    return c;
}

/* =============================================
TIME: { hours: INT, minutes: INT, seconds: INT }
============================================= */

function getTimeWS(city) {

    /*  fazer pedido ao WS time da cidade   */
    var time = { hours: 03, minutes: 47, seconds: 10 };     /*  usado para teste    */

    return time;
}


function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}

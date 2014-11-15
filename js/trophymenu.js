/************************************
 * Trophy menu
 * Genererer en meny med status 
 * i python skolen
 ************************************/

function initTrophyMenu()
{
    menu = document.getElementById("trophyMenu");

    // bruker trophystorage.js
    ts = connectTrophyStorage();
    trophies = ts.getTrophies();
    sumPoints = 0;

    /* teller totale poeng **/
    for(i in trophies)
    {
	points = trophies[i];
	sumPoints += points;
    }	  
    if(sumPoints)
    {
	out = document.getElementById("totalPoints");
	out.value = sumPoints;
    }

    loadTitlesXML();
    
}
window.addEventListener("load", initTrophyMenu);



/***********************************************
 * Load XML title list 
 * Laster inn XML fil som definerer tittler man 
 * kan få.
 ************************************************/
function loadTitlesXML()
{
    // load xml file
    if (window.XMLHttpRequest) 
    {
	xhttp = new XMLHttpRequest();
    } 
    else 
    {    // IE 5/6
	xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.overrideMimeType('text/xml');
    // false forteller at det skal lastes synkront
    xhttp.open("GET", "../trophies/titles.xml", false);

    try
    {
	xhttp.send(null);
    }
    catch(e)
    {
	console.log("Kan ikke laste XML url.");
	console.log("XML kan ikke befinne seg på et lokalt filområdet");
    }
    return xhttp.responseXML;
}

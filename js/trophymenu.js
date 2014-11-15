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
    
    function setTitleOutput(title)
    {
	console.log(title);
	tout = document.getElementById("title");
	tout.value = title;
    }


    /** set tittel når lasting av xml er ferdig **/
    function setTitle(data)
    {
	xml = data.target.responseXML;
	if(!xml){return;}
	titles = xml.getElementsByTagName("title");
	for(i in titles)
	{
	    title = titles[i];
	    if(!title.children){return;}
	    pointsText = title.children[0].textContent;
	    titleText = title.children[1].textContent;

	    console.log(pointsText +" "+sumPoints);
	    if(pointsText < sumPoints)
	    {
		setTitleOutput(titleText);
	    }
	}
    }
    loadTitlesXML(setTitle);

    
}
window.addEventListener("load", initTrophyMenu);



/***********************************************
 * Load XML title list 
 * Laster inn XML fil som definerer tittler man 
 * kan få. callBack er funksjonen som skal kjøres
 * når lastingen av xmlfilen er gjort. 
 ************************************************/
function loadTitlesXML(callBack)
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
    xhttp.onreadystatechange = callBack;
    xhttp.open("GET", "../trophies/titles.xml");

    try
    {
	xhttp.send(null);
    }
    catch(e)
    {
	console.log("Kan ikke laste XML url.");
	console.log("XML kan ikke befinne seg på et lokalt filområdet");
    }
}

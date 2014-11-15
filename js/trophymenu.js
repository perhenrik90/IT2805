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
    if(!ts){console.log("Can not connect to Trophy Storage, is trophystorage.js included?");}
    trophies = ts.getTrophies();
    sumPoints = 0;

    // setter opp paragrafer
    titleTag = document.createElement("h1");
    titleTag.innerHTML = "Nybegynner";
    menu.appendChild(titleTag);

    pointsTag = document.createElement("p");
    pointsTag.innerHTML  = "Du har ingen poeng.";
    menu.appendChild(pointsTag);

    /* teller totale poeng **/
    for(i in trophies)
    {
	points = trophies[i];
	sumPoints += points;
    }	  
    if(sumPoints)
    {
	pointsTag.innerHTML = "Du har "+sumPoints+" poeng";
    }
    
    function setTitleOutput(title)
    {
	titleTag.innerHTML = title;
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
 * Load XML title list - OBS av sikkerhetsmessige grunner 
 * fungerer ikke dette når xml ligger lokalt.
 * 
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

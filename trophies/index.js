/****************************************
 * Controller for trophies/index.html
 * 
 * @author Per-Henrik Kvalnes
 *****************************************/

function initSite()
{
    tl = document.getElementById("trophylist");
    
    ts = connectTrophyStorage();
    trophies = ts.getTrophies();
    
    if(!trophies || trophies.length == 0)
    {
	tl.innerHTML = "Du har ingen trofeer ennå!";
	return;
    }

    for(i in trophies)
    {
	div = document.createElement("div");
	div.className = "trophyCase";
	tl.appendChild(div);

	// add trophy image
	value = trophies[i]
	img = valueToTrophy(value);
	div.appendChild(img);

	// add trophy text/type
	p = document.createElement("p");
	div.appendChild(p);
	p.className = "trophyText";
	p.innerHTML = i;
	
    }
}
window.addEventListener("load", initSite);


/***********************************************
 * Tar en verdi (1,2,3) og gir et pokalbilde
 ***********************************************/
function valueToTrophy(value)
{
    var img = new Image();
    img.className = "smallTrophy";
    var path = "../img/"
    if(value == 1)
    {
	img.src = path+"pokal_bronze.png";
    }
    else if(value == 2)
    {
	img.src = path+"pokal_silver.png";
    }
    else if(value == 3)
    {
	img.src = path+"pokal_gold.png";
    }
    
    return img;
}

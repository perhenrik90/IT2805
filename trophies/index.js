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

    table = document.createElement("table");
    table.className = "trophyTable";

    tl.appendChild(table);
    for(i in trophies)
    {
	value = trophies[i]
	tr = document.createElement("tr");
	table.appendChild(tr);

	td1 = document.createElement("td");
	tr.appendChild(td1);
	td1.innerHTML = i;

	td2 = document.createElement("td");
	tr.appendChild(td2);
	img = valueToTrophy(value);
	td2.appendChild(img);
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

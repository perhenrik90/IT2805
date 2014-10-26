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
    
    if(trophies.length == 0)
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
	td2.innerHTML = value;
    }
}
window.addEventListener("load", initSite);

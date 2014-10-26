/****************************************
 * Controller for trophies/index.html
 * 
 * @author Per-Henrik Kvalnes
 *****************************************/

function initSite()
{
    tl = document.getElementById("tropylist");
    
    ts = connectTrophyStorage();
    trophies = ts.getTrophies();

    table = document.createElement("table");
    tl.appendChild(table);
    for(i in trophies)
    {
	value = trophies[i]
	tr = document.createElement("tr");

	td1 = document.createElement("td");
	tr.appendChild(td1);
	td1.innerHTML = i;

	td2 = document.createElement("td");
	tr.appendChild(td2);
	td2.innerHTML = value;
    }
}
window.addEventListener("load", initSide);

/********************************
 * Controller for side menu
 * @author Per-Henrik Kvalnes
 ********************************/

function initSideMenu()
{
    sm = document.getElementById("sidemenu");
    
    function addButton(title, href)
    {
	a = document.createElement("a");
	a.href = href;
	sm.appendChild(a);

	p = document.createElement("p");
	p.innerHTML = title;
	a.appendChild(p);
    }
    addButton("Introduksjon", "../introduksjon/index.html");
    addButton("Variabler", "../variabler/index.html");
    addButton("Lister", "../lister/index.html");
    addButton("Betingelser", "../betingelser/index.html");
    addButton("Pakker", "../pakker/index.html");
    addButton("Funksjoner", "../funksjoner/index.html");
    addButton("Objekter", "../objekter/index.html");
}
window.addEventListener("load", initSideMenu);

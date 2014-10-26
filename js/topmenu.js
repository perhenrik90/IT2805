/*******************************
 * JavaScript for top menu
 * @author Per-Henrik Kvalnes
 *******************************/

function initTopmMenu()
{
    div = document.getElementById("topmenu");
    
    function addButton(title, href)
    {
	a = document.createElement("a");
	a.innerHTML = title;
	a.href = href;
	div.appendChild(a);
    }
    addButton("Skole", "../index.html");
    addButton("Kontakt oss", "../kontakt/index.html");
    addButton("Sidekart", "../sidekart.html");
}
window.addEventListener("load", initTopmMenu);

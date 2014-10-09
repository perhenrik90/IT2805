/**************************************
 * Enkel Syntaxheadlighter for python
 * 
 * @author Per-Henrik Kvalnes
 **************************************/

function applyHeadlight()
{
    elements = document.getElementsByClassName("syntax:python");
    alert(elements.length);
    for(i = 0; i < elements.length; i ++)
    {
	element = elements[i];

	applyHeadlightForElement(element);
    }
}

function applyHeadlightForElement(preElement)
{
    // hent kode
    c = preElement.innerHTML;
    
    // headlight keywords
    c = c.replace(/(def)/g, "<key>$1</key>");
    c = c.replace(/(print)/g, "<key>$1</key>");
    c = c.replace(/(return)/g, "<key>$1</key>");
    c = c.replace(/(class)/g, "<key>$1</key>");
    c = c.replace(/(if)/g, "<key>$1</key>");
    c = c.replace(/(else)/g, "<key>$1</key>");
    c = c.replace(/(while)/g, "<key>$1</key>");
    c = c.replace(/(and)/g, "<key>$1</key>");
    c = c.replace(/(del)/g, "<key>$1</key>");
    c = c.replace(/(from)/g, "<key>$1</key>");
    c = c.replace(/(not)/g, "<key>$1</key>");
    c = c.replace(/(as)/g, "<key>$1</key>");
    c = c.replace(/(elif)/g, "<key>$1</key>");
    c = c.replace(/(global)/g, "<key>$1</key>");
    c = c.replace(/(or)/g, "<key>$1</key>");
    c = c.replace(/(width)/g, "<key>$1</key>");
    c = c.replace(/(assert)/g, "<key>$1</key>");
    c = c.replace(/(pass)/g, "<key>$1</key>");
    c = c.replace(/(yield)/g, "<key>$1</key>");
    c = c.replace(/(break)/g, "<key>$1</key>");
    c = c.replace(/(except)/g, "<key>$1</key>");
    c = c.replace(/(import)/g, "<key>$1</key>");
    c = c.replace(/(exec)/g, "<key>$1</key>");
    c = c.replace(/(in)/g, "<key>$1</key>");
    c = c.replace(/(raise)/g, "<key>$1</key>");
    c = c.replace(/(continue)/g, "<key>$1</key>");
    c = c.replace(/(finaly)/g, "<key>$1</key>");
    c = c.replace(/(is)/g, "<key>$1</key>");
    c = c.replace(/(for)/g, "<key>$1</key>");
    c = c.replace(/(lambda)/g, "<key>$1</key>");
    c = c.replace(/(try)/g, "<key>$1</key>");

    // headlight tall
    c = c.replace(/(\d+)/g, "<number>$1</number>");

    // headlight strings
    c = c.replace(/(".*")/g, "<string>$1</string>");


    // headlight comments
    c = c.replace(/(#.*\n)/g, "<comment>$1</comment>");
    preElement.innerHTML = c;
}




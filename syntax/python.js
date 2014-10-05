/**************************************
 * Enkel Syntaxheadlighter for python
 * 
 * @author Per-Henrik Kvalnes
 **************************************/

function applyHeadlight(preElement)
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

    // headlight tall
    c = c.replace(/(\d+)/g, "<number>$1</number>");

    // headlight strings
    c = c.replace(/(".*")/g, "<string>$1</string>");
    preElement.innerHTML = c;
}




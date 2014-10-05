/**************************************
 * Enkel Syntaxheadlighter for python
 * 
 * @author Per-Henrik Kvalnes
 **************************************/

function applyHeadlight(preElement)
{
    // hent kode
    c = preElement.innerHTML;
    lines = c.split("\n")
    newc = "";
    for(i in lines)
    {
	line = lines[i];
	line = higlightKeywords(line);
	line = higlightNumbers(line);
	newc += line;
	newc += "\n";
    }
    preElement.innerHTML = newc;
}


keywordlist = new Object();
keywordlist.def = 1;

function higlightKeywords(line)
{
    if(line.indexOf("def"))
    {
	line = line.replace("def", "<key>def</key>");
    }
    if(line.indexOf("return"))
    {
	line = line.replace("return", "<key>return</key>");
    }
    if(line.indexOf("print"))
    {
	line = line.replace("print", "<key>print</key>");
    }
    if(line.indexOf("class"))
    {
	line = line.replace("class", "<key>class</key>");
    }

    return line;
}

function higlightNumbers(line)
{
    return line.replace(/(\d+)/g, "<number>$1</number>");
}

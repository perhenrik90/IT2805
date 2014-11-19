Gruppe-prosjekt IT2805
=====================

Dette repositoriet inneholder gruppeprosjekt it IT2805.
Deltakere i prosjektet er:

 - Emil S. Andersen
 - Syver Bolstad
 - Per-Henrik Kvalnes

JavaScript
----------

css:
All css er definert i filen main.css (bortsett fra python syntaxheadlighter; se syntax).

js:
Mappen js inneholder javascript kode som skal kjøre på alle 
sider. Filene sidemenu.js og topmenu.js genererer knappene.
På denne måten kan man legge til knapper på alle sidene 
bare ved å endre disse javascript filene. (Se filen doc/javascriptoverview.png)
Alle html filer ligger i en undermappe slik at dette er lettere å vedlikeholde menyene
generert av javascriptfilene. 
index.html i rootmappen inneholder bare en fast forward til
main/index.html som er den egentlige indexsiden. 

syntax:
Mappen "syntax" inneholder javascript filen "python.js" som 
traverserer alle elementer av klassen "syntax:python" og setter
tags foran python nøkkelord. For eksempel alle forekomster av
ordet "if" blir oversatt til "<key>if</key>". På den måten
kan man bruke css for å sette farge på forskjellige deler av
python koden.

Mappen syntax inneholder også css filen python.css som setter 
styling på formarteringen gjort av python.js







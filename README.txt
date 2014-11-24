Gruppe-prosjekt IT2805
=====================

Dette repositoriet inneholder gruppeprosjekt it IT2805.
Deltakere i prosjektet er:

 - Emil S. Andersen
 - Syver Bolstad
 - Per-Henrik Kvalnes

For å skrive kode har vi brukt emacs og sublime teksteditor. 

Vi har valgt å lage prosjektet som et "stand alone" webprosjekt
for å kunne gjøre nettsidene portable slik at python skolen kan 
benyttes på forskjellige læringsplattformer. Ved bruk av server-side
skripting knytter man prosjektet mer til serveren som siden ligger på.

Hvert tema er organisert i hver sin mappe. Alle undersidene i 
tema-mappene har en lenket struktur. Navigering mellom tema er
organisert i en hierarkisk struktur generert av js/sidemenu.js .
Navigering utennom tema i python skolen er definert i top menyen. 
På høyre side er en meny som viser status på brukerens progresjon i kurset,
samt en leneke til en side han/hun kan se trofeer som er oppnåd. 

JavaScript
----------
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


CSS
---
css:
All css er definert i filen main.css (bortsett fra python syntaxheadlighter; se syntax).

XML
---
Xml fil ligger i trophies mappen. Denne brukes for å beskrive tittler som 
brukeren av siden kan få, og poengsum som trengs for å oppnå den. 
XSD valideringsskjema, og css for xml ligger også vedlagt i samme mappe. 




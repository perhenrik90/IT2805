/*************************************************
 * Pointsstorage 
 * Lagrer unna poeng via nøkkler i local storage
 *************************************************/

function connectTrophyStorage()
{
    storageString = null;
    storageid = "Trophypoints";
    try
    {
	storageString = window.localStorage.getItem(storageid);
    }
    catch(e)
    {
	console.log("Could not open window.localStorage");
	return null;
    }

    if(storageString == null){storageString = "{}";}
    obj = new Object();
    obj.points = JSON.parse(storageString);
    

    /** set et trofe for lagring ***/
    obj.setTrophy = function(key, value)
    {

	// hvis nøkkelen har en lavere verdi en allerede
	// lagret: ignorer oppdatering.
	tr = this.getTrophies();
	if(!tr[key])
	{	
	    this.points[key] = value;
	    string = JSON.stringify(this.points);
	    storageString = window.localStorage.setItem(storageid,string);
	}
	if(tr[key] && tr[key] > value){return 0;}
	
	// set nytt trofe. 
	this.points[key] = value;
	string = JSON.stringify(this.points);
	storageString = window.localStorage.setItem(storageid,string);
    }
    
    /** få alle trofeer **/ 
    obj.getTrophies = function()
    {
	str = window.localStorage.getItem(storageid);
	// hvis ikke noe er lagret i local storage, lag et objekt
	if(!str){str = "{}";}
	return JSON.parse(str);
    }

    return obj;
}

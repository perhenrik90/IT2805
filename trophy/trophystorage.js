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
	this.points[key] = value;
	string = JSON.stringify(this.points);
	storageString = window.localStorage.setItem(storageid,string);
    }
    
    /** få alle trofeer **/ 
    obj.getTrophys = function()
    {
	str = window.localStorage.getItem(storageid);
	return JSON.parse(str);
    }

    return obj;
}

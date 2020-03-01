//get current tempurature 
const temp = parseFloat(document.getElementById("current").textContent);
// get current windspeed
const wspeed = parseFloat(document.getElementById("windspeed").textContent);

// calculate wind chill 
let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wspeed,0.16)) + (0.4275 * temp * Math.pow(wspeed,0.16));

//round wind chill to two digits 
windchill = Math.round(windchill);

//display wind chill only if conditions are correct for there to be a wind chill

if(temp<=50 && wspeed >3){
    document.getElementById("wchill").textContent = "Wind Chill:" +windchill+ "\xB0F";

}
else{
    document.getElementById("chill").textContent = "Wind Chill: 0/xB0F" 
}
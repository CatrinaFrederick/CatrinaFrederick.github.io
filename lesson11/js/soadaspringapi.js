const currentapiURL = "//api.openweathermap.org/data/2.5/weather?id=5607916&appid=a72e98b2027752aff87eca6d48238b05&units=imperial";

//Fetch informatin from API .
fetch(currentapiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    


    document.getElementById("current").innerHTML = (weatherInfo.main.temp).toFixed(0);
    document.getElementById("high").innerHTML = weatherInfo.main.temp_max;
    document.getElementById("feelslike").innerHTML = weatherInfo.main.feels_like;
    document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;
    document.getElementById("windspeed").innerHTML = weatherInfo.wind.speed;
    getWindChill();

    const iconcode = weatherInfo.weather[0].icon;
    
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
 

    document.getElementById('weather_icon').src = icon_path;
  }); //end of "then" fat arrow function

function getWindChill() {
  //get current tempurature 
  const temp = parseFloat(document.getElementById("current").textContent);
  // get current windspeed
  const wspeed = parseFloat(document.getElementById("windspeed").textContent);

  // calculate wind chill 
  let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wspeed, 0.16)) + (0.4275 * temp * Math.pow(wspeed, 0.16));

  //round wind chill to two digits 
  windchill = Math.round(windchill);

  //display wind chill only if conditions are correct for there to be a wind chill

  if (temp <= 50 && wspeed > 3) {
    document.getElementById("wchill").textContent = "Wind Chill: " + windchill + "\xB0F";

  } else {
    document.getElementById("wchill").textContent = "Wind Chill: None";
  }
}


// 7 Day Forcast 


const datetoday = new Date();

const dayoftheWeek = datetoday.getDay();

const myweekday = new Array(7);

myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

//console.log(myweekday[3]);
const fiveDayapiURL= "//api.openweathermap.org/data/2.5/forecast?id=5607916&appid=a72e98b2027752aff87eca6d48238b05&units=imperial";

fetch(fiveDayapiURL)
  .then((response) => response.json())
  .then((weeklyforcastInfo) => {

    console.log(weeklyforcastInfo);

    let mylist = weeklyforcastInfo.list;

    let forcastDayNumber = dayoftheWeek; 

    for (i=0; i < mylist.length; i++) {

      let time = mylist[i].dt_txt;

      if (time.includes('18:00:00')) {
        
        forcastDayNumber += 1; 
        
      if (forcastDayNumber === 7){
        forcastDayNumber = 0; 
      }  

      let theDayName = document.createElement("h5");
      theDayName.textContent = myweekday[forcastDayNumber];
      console.log(">"+ myweekday[forcastDayNumber]);

      let theTemp = document.createElement("p");
      theTemp.textContent = weeklyforcastInfo.list[i].main.temp + "\xB0F"
      console.log(theTemp);

      let iconCode = weeklyforcastInfo.list[i].weather[0].icon;
      let iconPath = "//openweathermap.org/img/w/" + iconCode + ".png";
      let theIcon = document.createElement("img")
      theIcon.src = iconPath; 

      let theDay = document.createElement ("div");
      theDay.appendChild(theDayName);
      theDay.appendChild(theTemp);
      theDay.appendChild(theIcon);

      document.getElementById("fivedayforcast").appendChild(theDay);
        
      }//end if statement
    } //end for statement

  });
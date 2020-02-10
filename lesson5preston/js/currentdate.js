/*button toggle function to toggle hamburger button for small view ports*/

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("hide");
}
/*pancake breakfast banner*/

let today = new Date();
let dayofWeek = today.getDay();
let banner = document.getElementById("pancakebreakfast");

if (dayofWeek == 3) {
    banner.classlist.add("showme");
} 
else {
    banner.classlist.add("hideme");
}

/* date for footer */
let today = new Date();
let date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
/*var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;*/
let dateTime = date;
document.write("Today is: " + dateTime);



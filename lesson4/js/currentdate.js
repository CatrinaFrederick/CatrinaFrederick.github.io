/*button toggle function to toggle hamburger button for small view ports*/

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("hide");
}

/* date for footer */
var today = new Date();
var date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
/*var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;*/
var dateTime = date;
document.write("Today is: " + dateTime);



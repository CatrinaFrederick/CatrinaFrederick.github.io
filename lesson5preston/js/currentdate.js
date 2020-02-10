

/* date for footer */
let today = new Date();
let date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
/*var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;*/
let dateTime = date;
document.write("Today is: " + dateTime);



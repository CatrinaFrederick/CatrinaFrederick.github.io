/*pancake breakfast banner*/

let today = new Date();
let dayofWeek = today.getDay();

let banner = document.getElementById("pancake");

if (dayofWeek == 5) {
    banner.classList.add("showme");
} 
else {
    banner.classList.add("hideme");
}
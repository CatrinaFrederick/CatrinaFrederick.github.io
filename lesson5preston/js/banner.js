/*pancake breakfast banner*/

let today = new Date();
let dayofWeek = today.getDay();

let banner = document.getElementById("pancake");

if (dayofWeek == 4) {
    banner.classList.add("showme");
} 
else {
    banner.classList.add("hideme");
}
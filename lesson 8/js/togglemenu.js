/*-------Butoon toggle menu in small viewport ---------*/

function toggleMenu() {
    document.getElementById("mainNav").classList.toggle("hide");
}

/*------adjust rating-------*/
function adjustRating() {
    document.getElementById("ratingvalue").innerHTML = document.getElementById("rating").value;
}
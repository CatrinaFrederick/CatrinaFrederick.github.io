function displayBanner(){
    const today = new Date();
    const dayNumber = today.getDay();
    const element = document.getElementById("pancakebreakfast")
}

if( dayNumber==5){
    element.classlist.add("showme")    
}
else{
    element.classlist.add("hideme")  
}
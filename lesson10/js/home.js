const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    //loop to check array for requested infromation 
    for (let i = 0; i < towns.length; i++ ) {
    //specifiy specific towns in town array to display 
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){
   //create html elements       
        let card = document.createElement('section');
        let h2 = document.createElement('h2'); 
        let h3 =document.createElement('h3');
        let year = document.createElement('p');
        let pop = document.createElement('p')
        let rain = document.createElement('p');
        let image = document.createElement('img');
   //assign content to the elements 
        h2.textContent = towns[i].name; 
        h3.textContent = towns[i].motto;
        year.textContent = 'Year Founded: ' + towns[i].yearFounded;
        pop.textContent = 'Population: ' + towns[i].currentPopulation;
        rain.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
        image.setAttribute('src', 'images/' + towns[i].photo);


   //Append content to HTML 
     
        card.appendChild(h2); 
        card.appendChild(h3); 
        card.appendChild(year)
        card.appendChild(pop);
        card.appendChild(rain);
        card.appendChild(image);

     



    //commit to document 
        document.querySelector('div.cards').appendChild(card);

    }
    }
  });
    

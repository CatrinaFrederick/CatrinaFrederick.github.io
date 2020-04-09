const requestURL = "\CatrinaFrederick.github.io\lesson13_14final\activities.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const acitiviies = jsonObject['activities'];
    console.log ('acitiviies')
      
    //loop to check array for requested infromation 
    for (let i = 0; i < acitiviies.length; i++ ) {
  
        let card = document.createElement('section');

        let infodiv = document.createElement('div');

        let h2 = document.createElement('h2'); 
        let image = document.createElement('img');
        let descript = document.createElement('p');
        let visit= document.createElement('p')
        
       
   //assign content to the elements 
        h2.innerHTML = acitiviies[i].name; 
        image.setAttribute('src', 'images/' + acitiviies[i].photo);
        image.setAttribute('alt', towns[i].name);
        descript.innerHTML= acitiviies[i].description;
        visit.innerHTML = 'Visitors Last Year: ' + acitiviies[i].visitors;  
      

   //Append content to HTML 
     
        infodiv.appendChild(h2); 
        card.appendChild(image);
        infodiv.appendChild(descript);
        infodiv.appendChil(visit);
        card.appendChild(infodiv);
     

     



    //commit to document 
        
        document.querySelector('div.parkactivities').appendChild(card);
      

    }
    }
  );
    

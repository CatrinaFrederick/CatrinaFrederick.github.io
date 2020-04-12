const requestURL= "//activities.json"

fetch(requestURL)
 .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const activities = jsonObject['activities'];
console.log(activities);

    //loop to check array for requested infromation 
    for (let i = 0; i < activities.length; i++ ) {
  
        let card = document.createElement('section');

        let infodiv = document.createElement('div');

        let h2 = document.createElement('h2'); 
        let image = document.createElement('img');
        let descript = document.createElement('p');
        let visit= document.createElement('p');
        
       
   //assign content to the elements 
        h2.innerHTML = activities[i].name; 
        console.log (activities[i].name);
        image.setAttribute('src', 'images/' + activities[i].photo);
        image.setAttribute('alt', activities[i].name);
        descript.innerHTML= activities[i].description;
        visit.innerHTML = 'Visitors Last Year: ' + activities[i].visitors;  
      

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
    

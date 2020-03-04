
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';




//requests argument and then recieves returned promise 
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++ ){
            let card = document.createElement('section'); 
            let h2 = document.createElement('h2');
            
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            
            card.appendChild(h2);

            let p = document.createElement('p');
            p.textContent = 'Date of Birth: '+ prophets[i].birthdate;
             
            card.appendChild(p);

            let p2 = document.createElement('p');
            p2.textContent = 'Place of Birth: '+ prophets[i].birthplace;
             
            card.appendChild(p2);

            let image = document.createElement('img');
            image.setAttribute('src', prophets[i].imageurl);

            card.append(image)
            
            document.querySelector('div.cards').appendChild(card);
                        
        }
        
    
    });
   
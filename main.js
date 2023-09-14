const searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', performSearch);

function performSearch()
 {

  const searchInput = document.querySelector('#searchInput');


  const searchQuery = searchInput.value;

  // Make the API request with the searchQuery
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchQuery}`, 
  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'use your API key from the IMDb cheak the comment => ',//https://rapidapi.com/apidojo/api/imdb8/
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    },

  })
    .then(response => response.json())

    .then(data => {

      const list = data.d;

      const moviesElement = document.querySelector('.movies');
      moviesElement.innerHTML = ''; 

      list.forEach((item) => {

        const name = item.l;
        const poster = item.i.imageUrl;
        const cast = item.s;

        const rank = item.rank;

        const year = item.y;

        const movie = document.createElement('li');

        const img = document.createElement('img');
        img.src = poster;

        movie.appendChild(img);

        const h2Name = document.createElement('h2');

        h2Name.textContent = name;


        movie.appendChild(h2Name);

        const h2Cast = document.createElement('h2');
        h2Cast.textContent = cast;
        movie.appendChild(h2Cast);

        const h2Rank = document.createElement('h2');

        h2Rank.textContent = rank;
        movie.appendChild(h2Rank);

        const h2Year = document.createElement('h2');

        h2Year.textContent = year;

        movie.appendChild(h2Year);

        moviesElement.appendChild(movie);


      });

    })
    .catch(err => 
      
      {
      console.error(err);
    });
}
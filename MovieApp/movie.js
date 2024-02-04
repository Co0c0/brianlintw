const APLINK = 'https://api.themoviedb.org/3/movie/550?api_key=2716caebb598e24dc4385b7cfeb91427'
const IMG_PATH = 'https://iamge.tmdb.org/t/p/w1280'
const SEARCHAPI = 'https://api.themovie.org/3/search/movie?api_key=2716caebb598e24dc4385b7cfeb91427&query="'

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("query")

returnMovies(APLINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.result);
        data.result.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card')
            const div_row = document.createElement('div');
            div_card.setAttribute('class', 'row')
            const div_column = document.createElement('div');
            div_card.setAttribute('class', 'column')
            const image = document.createElement('img');
            div_card.setAttribute('class', 'thumbnail')
            div_card.setAttribute('id', 'image')
            const title = document.createElement('h3');
            div_card.setAttribute('id', 'title')
            
            title.innerHTML = `${element.titile}`;
            image.src = IMG_PATH + element.poster_path;
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row)
        });
    });
};

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    main.innerHTML = ''

    const searchItem = search.value;

    if(searchItem){
        returnMovies(SEARCHAPI + searchItem)
        search.value = "";
    }

});
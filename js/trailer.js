const url = new URL(window.location.href)
const id = url.search.slice(9)

var settings = {
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=15",
    "method": "GET",
    "timeout": 0,
    "headers": {
    "api-version": "v200",
    "Authorization": "Basic Q1JUTV9YWDpsTUhGWGU3azJ6QVk=",
    "client": "CRTM",
    "x-api-key": "N1VKriN0z01rTs3lakrgn1zGCxtjBZa03ryXBwR3",
    "device-datetime": "2022-09-27T10:07:57.296Z",
    "territory": "XX",
    },
    };
$.ajax(settings).done(function (response) {
    console.log(response.films)
    response.films.forEach(i => {
        if(i.imdb_id == id){
            console.log(i.film_trailer)
            if(i.film_trailer === null){
                var trailer = `<h1>Unable to find trailer</h1>`
            }
            else{
                var trailer = `<video controls autoplay id="videoYes"><source src=${i.film_trailer} type="video/mp4">Your browser does not support the video tag.</video>`
            }
            var title = `<h2 class="card-title">${i.film_name}</h2><br>`
            var Synopsis = `<h3> Synopsis of ${i.film_name}</h3><br> `
            var description = `<p class="card-text">${i.synopsis_long}</p><br>`
            var movie = `<div class="movieTrailer"><div class="trailer-body">${title+trailer}</div></div>`
            var movieDesc = `<div class="movieDesc"><div class="trailer-body">${Synopsis + description}</div></div>`
            $(".trailer").append(movie);
            $(".description").append(movieDesc)
        }
        else
        console.log("False")
    });
});
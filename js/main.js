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
        var num = 0;
        console.log(response)
        response.films.forEach(i => {
            var onclick = `<P>Press on card to view trailer<P>`
            
            if(i.images.poster[1] === undefined){
                var img = `<h2>No img found</h2>`
            }
            else{
                var img = `<img src=${i.images.poster[1].medium.film_image} alt='movie poster'><br>`
            }
            var title = `<h5 class="card-title">${i.film_name}</h5><br>`
            var rating = `<p class="card-text">${i.age_rating[0].rating}</p><br>`
            var release = `<p class="card-text">${i.release_dates[0].release_date}</p><br>`
            var movie = (`<div class="mainDiv card-mainVC"><div class="card-body" onclick="changeweb(${i.imdb_id})" id="card`+num+`">${img+title+onclick+release}<div>${rating}</div></div></div>`)
            $(".cards").append(movie);    
            num++;                
        });
    });

function changeweb(i){
    window.location.href = `trailer.html?imdb_id=${i}`
}
function infoweb(){
    window.location.href = `info.html`
}
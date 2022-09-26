var visible = true;

var settings = {
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=15",
    "method": "GET",
    "timeout": 0,
    "headers": {
    "api-version": "v200",
    "Authorization": "Basic Q1JUTV9YWDpsTUhGWGU3azJ6QVk=",
    "client": "CRTM",
    "x-api-key": "N1VKriN0z01rTs3lakrgn1zGCxtjBZa03ryXBwR3",
    "device-datetime": "2022-09-22T10:07:57.296Z",
    "territory": "DE",
    },
    };
    $.ajax(settings).done(function (response) {
        var num = 0;
        console.log(response)
        response.films.forEach(i => {
            if(i.film_trailer === null){
                var onclick = `<p>No trailer</p><br>`
            }
            else{
                var onclick = `<a href="`+i.film_trailer+`">View Trailer</a><br>`
            }
            if(i.images.poster[1] === undefined){
                var img = `<h2>No img found</h2>`
            }
            else{
                var img = `<img src=${i.images.poster[1].medium.film_image} alt='movie poster'><br>`
            }
            var title = `<h5 class="card-title">${i.film_name}</h5><br>`
            var rating = `<p class="card-text">${i.age_rating[0].rating}</p><br>`
            var description = `<p class="card-text">${i.synopsis_long}</p><br>`
            var movie = (`<div class="mainDiv card-mainVC"><div class="card-body id="card`+num+`">${img+title}<div class="content Collapsed">${onclick+rating+description}</div></div></div>`)
            $(".cards").append(movie);    
            num++;                
        });
    });

let toggleCol = () => {
    $(".content").toggleClass("Collapsed");
    $(".mainDiv").toggleClass(" card-mainVC card-mainVNC");
    $("#cardsMain").toggleClass("cards cardsTog")
}

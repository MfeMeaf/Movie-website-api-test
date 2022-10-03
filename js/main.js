var settings = {
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=X",
    // Note that N=X is the amount of movies it will show max 15 default is 10
    "method": "GET",
    "timeout": 0,
    "headers": {
    "api-version": "Input Version",
    "Authorization": "Input auth, Example - Basic 46jragjo12j5iarg=",
    "client": "CRTM",
    "x-api-key": "Input API Key here",
    "device-datetime": "Input date, Example - 2022-09-27T10:07:57.296Z",
    "territory": "XX",
    },
    };
    $.ajax(settings).done(function (response) {
        var num = 0;
        console.log(response)
        response.films.forEach(i => {
            // Thses create variables for the content 
            var onclick = `<P>Press on card to view trailer<P>`
            // Checks if there is a img for the movie 
            if(i.images.poster[1] === undefined){
                var img = `<h2>No img found</h2>`
            }
            else{
                //Creates a variable with img element and src of movie link
                var img = `<img src=${i.images.poster[1].medium.film_image} alt='movie poster'><br>`
            }
            var title = `<h5 class="card-title">${i.film_name}</h5><br>`
            var rating = `<p class="card-text">${i.age_rating[0].rating}</p><br>`
            var release = `<p class="card-text">${i.release_dates[0].release_date}</p>`
            // Adds all the variables together and makes a seperate var
            var movie = (`<div onclick="changeweb(${i.imdb_id})" class="mainDiv card-body card-mainVC" id="card`+num+`">${img+title+onclick+release+rating}</div>`)
            // Appends movie variable to index.html
            $(".cards").append(movie);    
            // Can be removed - Not really used for anything 
            num++;                
        });
    });

// This function takes you to a trailer html using the imdb id from the API
function changeweb(i){
    window.location.href = `trailer.html?imdb_id=${i}`
}
// This was WIP but much like Changeweb function would take you to a different 
// website to view information about a movie
function infoweb(){
    window.location.href = `info.html`
}
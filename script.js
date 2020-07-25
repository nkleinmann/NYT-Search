$(function() {

    let topic = 

    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic +
    "&api-key=qS1KrSPDOGp7zKrIs176AiGWJAD6EG0k";
    
    $.ajax({
            url: queryURL,
            method: "GET" 
        }) 
});

// // Constructing a queryURL using the animal name
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
// animal + "&api_key=dc6zaTOxFJmzC&limit=10";
// // Performing an AJAX request with the queryURL
// $.ajax({
// url: queryURL,
// method: "GET"
// })
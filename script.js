$(function() {

    let topic = $(".topic").val();

    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic +
    "&api-key=qS1KrSPDOGp7zKrIs176AiGWJAD6EG0k";
    
    $.ajax({
            url: queryURL,
            method: "GET" 
        }) 
});


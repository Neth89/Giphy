//Event listener
$(document).ready(function(){
$("button").on("click", function() {

    var animal = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=Uql7Z8bTVaY1IowV4cnAc35sdnHmZXjp";

    //Get request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {

        var results = response.data;

        //loop results

        for (var i = 0; i < results.length; i++) {

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animalImage = $("<img>");

                animalImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.append(p);
                gifDiv.append(animalImage);

                $("#gifs").prepend(gifDiv);

            }

        }

    });

});
});
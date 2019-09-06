$(document).ready(function () {

    var cars = ["corvette", "ferrari", "trans am", "lamborghini", "koenigsegg", "supra", "street racing"]
  
    // Display Buttons
    function showButtons() {
        $("#buttons-area").empty();
  
        cars.forEach(function (val, i) {
            var topic = cars[i];
            topicNoSpace = topic.split(" ").join("+");
            console.log(topicNoSpace);
            var newButton = $("<button>");
            newButton.addClass("topic-btn");
            newButton.attr("data-name",topicNoSpace);
            newButton.text(topic);
            $("#buttons-area").append(newButton);
  
        });
    }
    
    // Display Gifs when button click
    function displayGifs() {
               
        var searchTopic = $(this).attr("data-name");
        var apiURL = "https://api.giphy.com/v1/gifs/search?q="+ searchTopic +"&api_key=lyjGjWxcgbDM3z1AfvMYWxbRhsXmOyC4&limit=6";
  
        $.ajax({
            url: apiURL,
            method:"GET"
        }).then(function(response) {
            $("#gifs-area").empty();
  
            var gifDiv = $("<div class='new-gif'>");
            var gif = response.data.length;
  
            for(var i = 0; i < gif; i++){
                var newRow = $("<div>");
                var individualDiv = $("<div class='single float-left'>");
                var rating = $("<p>").text("RATED: "+grabRating);
                var grabRating = response.data[i].rating;
                
                
                var grabStill = response.data[i].images.fixed_height_still.url;
                var grabAnimate = response.data[i].images.fixed_height.url;
                var imageElmt = $("<img>");
                imageElmt.addClass("gifImg");
                imageElmt.attr("src", grabStill);
                imageElmt.attr("data-status","still");
                imageElmt.attr("data-still", grabStill);
                imageElmt.attr("data-animate", grabAnimate);
                
                individualDiv.prepend(imageElmt);
                newRow.prepend(rating);
                individualDiv.prepend(newRow);
                gifDiv.append(individualDiv);
  
                $("#gifs-area").append(gifDiv);
            }
        })
    }
  
    // Start and Stop Animations when clicked 
    function animateGif() {
        if( $(this).attr("data-status") === "still" ){
            $(this).attr("data-status", "animate");
            $(this).attr("src", $(this).attr("data-animate"));
        }else {
            $(this).attr("data-status", "still");
            $(this).attr("src", $(this).attr("data-still"));
        }
    }
  
    // Run Function to Show Giphys
    $(document).on("click",".topic-btn",displayGifs);
    // Starts animateGif Function
    $(document).on("click",".gifImg",animateGif);
  
    // Add New Buttons 
    $("#add-giphy").on("click", function(){
        event.preventDefault();
        var giphyNew = $("#gif-input-area").val().trim();
        $("#gif-input-area").val("");
        cars.push(giphyNew);
        showButtons();
    })
  
    showButtons();
  
  
  });
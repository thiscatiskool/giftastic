
//create an array to make buttons from and to input user inputs from the search bar

var topics= ["planes", "trains", "automobiles"]


//write a function to make a button with the string names from the array; a for loop that appends each string
function printBtn(){

    $("#buttonsdiv").empty();
for( i=0; i<topics.length; i++){
    var btn= document.createElement("button");
    var t= document.createTextNode(topics[i]);
    btn.appendChild(t);
    document.body.appendChild(btn);
//assign the buttons a value based on the string associated with it in the array
    btn.value = topics[i];
    
    }
    
}
//window.onload = printBtn("#buttonsdiv");


//write a function to get the gifs from the giphy website using the api
function getData(){


var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + + "&api_key=YERQXnmfbNKMHk1LmAm76UTeH1TPXVQj&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response);

var jiff= response.data

    for (i in jiff) {
    $('.inner').append("<img src='"+jiff[i].images.original.url+"' style= 'height:200px; width:200px;'/>")
        }
    });
}
//write a function that assigns a variable a value when a topics button is clicked

//var chosenTopic= $(btn).click()

//write another funtction that takes the above variable of the gifName and places it into the search critera in the api url

//Write a function to display the api gif search as an image to the DOM

//Inside the attributes for the images make it so the image apears in a mobile friendly size

//At the same time assign all images to a still state when it is first displayed

//write a function calling and displaying the ratings, titles, and tags of the gifs under the images

//write a function with an on click event that changes the images state from still to animate, and vice versa

//write a fucntion that when a different gifName button is pressed all the previous images are deleted before the new images are displayed

//Next write a function to take the user inputs from the search bar

//var input= $("#searchtext").val()


//turn the user inputs into a string and place it into the array

//Make sure that these new array strings create a button same as the others

//clear out the search bar so that a new search query can be entered

//Write a function that if the same topics button is clicked additional images will be displayed instead of resetting the DOM



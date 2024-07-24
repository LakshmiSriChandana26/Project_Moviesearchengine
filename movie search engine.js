/*
var searchBtn= document.getElementById("search-btn");
var movieNameElement = document.createElement("movie-name");
var moviesContainerElement = document.getElementById("movies-container")

searchBtn.addEventListener("click", function(){
    
        console.log(movieNameElement.value);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if(this.readyState == 4){
       let result = (JSON.parse(this.responseText));
console.log(result.Search);
let movies = result.Search;
movies.map((item,i) => 
{
    console.log(item);
    oviesContainerElement.innerHtml +=
    `<div class="Mocie-csrd">
    <img src="${item.Poster}"/>
    <p> Title ${item.Title}</p>
    <p>Year ${item.Year}</p>
    <p> Type: ${item.Type}</p>
    </div>`
})
    }
    }

    xhttp.open("GET", "https;//www.omdbapi.com/?apikey=45f0782a&s="+ movieNameElement.value , true)
    xhttp.send();
})
   */
let moviesContainer = document.getElementById("movies-container")

var searchBtn= document.getElementById("search-btn");
var movieInputElement = document.getElementById("movie-name");
var movieStatusElement = document.getElementById("movie-status");

searchBtn.addEventListener("click" , function()
{
    moviesContainer.innerHTML= " "
  movieStatusElement.innerText = "Loading..."
  let xhttp =  new XMLHttpRequest();
   xhttp.onreadystatechange = function(){

    if (this.readyState == 4){
        movieStatusElement.innerText = ""
    let result = JSON.parse(this.responseText);
    console.log(result);
    if( result.Response == "True" ){
    let movies = result.Search;
    movies.map((item,i) => {
console.log(item);
console.log(item);
            moviesContainer.innerHTML += `
            <div class="movie-card" >
         <img 
         class="movie-poster"
         src= ${item.Poster}/>
         
         <p>  <b> Name :  </b> ${item.Title} </p>
         <p> <b> Year : </b> ${item.Year}  </p>
         <p> <b> Type : </b> ${item.Type}  </p>

     </div>
     
            `
    })
}else{
            movieStatusElement.innerText = "404 Movies Not Found!"
    }
    }
}    
    
    xhttp.open( "GET" , `https://www.omdbapi.com/?apikey=45f0782a&s=${movieInputElement.value}`  , true );
    xhttp.send();
    
})
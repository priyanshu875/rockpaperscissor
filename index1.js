

var randomnumber1 = Math.floor(Math.random() * 3) + 1;
var randomimage1 = "rock" + randomnumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage1);


var randomnumber2 = Math.floor(Math.random() * 3) + 1;
var randomimage2 = "rock" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomimage2);



if(randomnumber1==1 && randomnumber2==2){
    document.querySelector("h1").innerHTML= "Player2 Wins &#128681";
}
if(randomnumber1==1 && randomnumber2==3){
    document.querySelector("h1").innerHTML="&#127988 Player 1 wins";
}
if(randomnumber1==2 && randomnumber2==1){
    document.querySelector("h1").innerHTML="&#127988 Player 1 Wins";
}
if(randomnumber1==2 && randomnumber2==3){
    document.querySelector("h1").innerHTML="Player 2 Wins &#128681";
}
if(randomnumber1==3 && randomnumber2==1){
    document.querySelector("h1").innerHTML="Player 2 Wins &#128681";
}
if(randomnumber1==3 && randomnumber2==2){
    document.querySelector("h1").innerHTML="&#127988 Player 1 Wins";
}
if(randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML="&#127884 Draw &#127884";
}
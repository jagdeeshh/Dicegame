// dice1
var randomnumber1=Math.floor(Math.random()*6)+1;
var source="dice"+randomnumber1+".png";
document.querySelector("img.img1").setAttribute("src",source);
// dice2
var randomnumber2=Math.floor(Math.random()*6)+1;
var source2="dice"+randomnumber2+".png";
console.log(source2);
document.querySelector(".img2").setAttribute("src",source2);
// winner declaration
if (randomnumber1>randomnumber2){
	document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(randomnumber1<randomnumber2){
	document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
	document.querySelector("h1").innerHTML="match draw !:"
}
alert("hello");
var numsquares= 6;
var colors= generateRandomColors(numsquares);
var h1=document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var messageDisplay= document.querySelector("#message");
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var easyBtn= document.querySelector("#easybtn");
var hardBtn= document.querySelector("#hardbtn");

easyBtn.addEventListener("click", function(){
	h1.style.background="steelblue";
	messageDisplay.textContent="";
	numsquares= 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
    colors= generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0; i<squares.length; i++){
	if(colors[i]){
		squares[i].style.background= colors[i];
	}
    else
    	{squares[i].style.display = "none";}
}

})

hardBtn.addEventListener("click", function(){
	messageDisplay.textContent="";
	h1.style.background="steelblue";
	numsquares= 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
    colors= generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0; i<squares.length; i++){
	
		squares[i].style.background= colors[i];
	
    	squares[i].style.display = "block";}


	
})

resetButton.addEventListener("click", function(){
	this.textContent= "new colors";
	messageDisplay.textContent="";
	h1.style.backgroundColor= "steelblue";
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];}
})


for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor)
			{for(var j=0; j<squares.length; j++){
	         squares[j].style.background = pickedColor;}
	         resetButton.textContent= "PLAY AGAIN?";
   			 messageDisplay.textContent="CORRECT!";
   			 messageDisplay.style.color= pickedColor;
   			 h1.style.background= pickedColor;

	         }
	    else{
	    	this.style.backgroundColor = "#232323"; 
	    	messageDisplay.textContent = "TRY AGAIN";
	    	messageDisplay.style.color="#232323";
   			
	       }
	});
}


function pickColor(){
var random=Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num){
	var arr=[];
    for(var i=0; i<num; i++){
    	arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb("+ r + ", " + g +", "+ b +")";
}








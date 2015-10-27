"use strict"
var simonsequence = [];
var userinput = [];
var colors= ["blue", "green", "orange", "red"];
//var roundnumber=0;
var random= getRandom(0,4);

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function nextRound(){
			var random = getRandom(0,4)
			pushsimon(colors,random)
			console.log(simonsequence);
			var i=0;
			var intervalId=setInterval(function(){
				animate(simonsequence[i]);
				console.log(i);
				i+=1;
				if (i>=simonsequence.length) {
					clearInterval(intervalId)
				}
			},1000)	 
	};

$("#startbutton").click(function(){
	nextRound();
	
});


function animate (simonanswer) {
	$('#' + simonanswer).animate({
		        opacity: 1
			},1000).animate({opacity:0.4},500)
 	}

function pushsimon (colors, random) {
	
simonsequence.push(colors[random]);
//console.log(simonsequence);
$("#startbutton").prop("disabled", true)
}

$(".lightbuttons").click(function(){
	var idpicked= $(this).attr("id");
	userinput.push(idpicked);
	//console.log(userinput);
		if(simonsequence[userinput.length-1]!==userinput[userinput.length-1]){
		alert("Game over!")
		userinput=[];
		simonsequence=[];
		$("#startbutton").prop("disabled", false)
		} else if (simonsequence.length==userinput.length){ 
		//alert("You did it!  Time for next round.")
		userinput=[];
		nextRound();
		}	 
});

$("#blue").click(function() {
$("#dory").get(0).play();
});

$("#green").click(function() {
$("#puffer").get(0).play();
});

	//for (var i=0; i<simonsequence.length; i++)
	//console.log(simon_string);
	// if(simon_string=userinput_string) {
	// 	console.log("You got it right")
	// } else console.log("You got it wrong");
	
	// var simon_string=simonsequence.toString()
	// var userinput_string=userinput.toString()
	

// $("#green").click(function(){
// 	userinput.push("green");
// 	console.log(userinput);
// });

// $("#orange").click(function(){
// 	userinput.push("orange");
// 	console.log(userinput);
// });

// $("#red").click(function(){
// 	userinput.push("red");
// 	console.log(userinput);
// });

// $("#startbutton").click(function(){
// 	var random= getRandom(1,4);
// 	roundnumber++
// 	if (random==1){
// 		simonsequence.push("blue");
// 	} else if(random==2){
// 		simonsequence.push("green");
// 	} else if(random==3){
// 		simonsequence.push("orange");
// 	} else if(random==4){
// 		simonsequence.push("red");
// 	} 
// 	console.log(simonsequence);

// })














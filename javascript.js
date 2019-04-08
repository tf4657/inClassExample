console.log("javascript loaded");
$( document ).ready(function() {

	console.log("document ready");
	$( "#menu" ).click(function() {
		
		$("#navigation-bar").toggleClass("navigation-bar--hidden");
		$("#content").toggleClass("content--no-navigation");
		
	});	
	
	//When the FAB is clicked
	$( "#button-card-transition").click(function() {
		
		//Animate button when clicked 
		//$("#button-card-transition").addClass("button-click");
		
		//Remove the button click class after 
		//The animation
		//setTimeout(function(){
		//	$("#button-card-transition").removeClass("button-click");
		//},300);
		
		//If the red card is faded out,
		//Fade in red, fade out blue
		if($(".card__red").hasClass("fade-through-out")){
			fadeThrough(
			$(".card__blue"),
			$(".card__red")
		);
			rotateToggle(
			$("#icon-broadcast-tower"),
			$("#icon-plus")
		);
		}
	
	
	//If the red card is Not faded out
	//Fade in blue fade out 
		else{
			fadeThrough(
			$(".card__red"),
			$(".card__blue")
		);
			rotateToggle(
			$("#icon-plus"),
			$("#icon-broadcast-tower")
		);
	}
});
	
	function fadeThrough(elementFadeOut, elementFadeIn){
		
		//Remove the fade in class from the red card
			elementFadeOut.removeClass("fade-through-in");
		
			//Fade in red content
			elementFadeOut.addClass("fade-through-out");
		
			//Remove the fade out class from the blue card
			elementFadeIn.removeClass("fade-through-out");
		
			//Add the fade in class to the blue card
			elementFadeIn.addClass("fade-through-in");
			
	}
	
	function rotateToggle(elementRotateOut, elementRotateIn){
		
		//Remove the fade in class from the red card
			elementRotateOut.removeClass("rotate-in");
		
			//Fade in red content
			elementRotateOut.addClass("rotate-out");
		
			//Remove the fade out class from the blue card
			elementRotateIn.removeClass("rotate-out");
		
			//Add the fade in class to the blue card
			elementRotateIn.addClass("rotate-in");
			
	
			
	}
	
	
});
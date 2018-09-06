// front end features design for 
// erzh.info index.html
// designed by mscbr

function main() {
	//each buton receives event listener - opens ~ tab when clicked
	// debugger;
	var buttonLength = document.getElementsByTagName("button").length;
	setVideos();
	//function that clears display class from all content-box 
	//and then add display class according to clicked button
	//it also refreshes and add button icon accordingly
	function addClass(buttonNum) {
		refreshVideos();
		for (var i = 0; i < buttonLength; i++) {
			document.getElementsByClassName("content-box")[i].classList.remove("display-block");
			document.getElementsByClassName("triangle-icon")[i].classList.remove("display-inline");
		}
		document.getElementsByClassName("animated-title")[0].classList.remove("display-block");
		document.getElementsByClassName("content-box")[buttonNum].classList.add("display-block");
		document.getElementsByClassName("triangle-icon")[buttonNum].classList.add("display-inline");

	}

	//DO THE SAME FUNCTION AS refreshVideos for MUSIC section!!!

	//function that stops videos in VIDEOS tab playing when tab is not displayed 
	//and loads videos when respective tab button is clicked
	//---------
	function setVideos() {
		//inserting HTML with YT videos into videos section
		// debugger;
		var videosContainer = document.getElementById("videos-container");
		// videosContainer.innerHTML = "";
		videosContainer.innerHTML = document.getElementById("yt-videos").innerHTML;

	}
	function refreshVideos() {
		if(document.getElementById("videos-container").classList.value === "content-box display-block") {
			setVideos();
		}
	}
	//assigning function tu buttons
	document.getElementsByTagName("button")[0].addEventListener("click", function() {addClass(0);});
	document.getElementsByTagName("button")[1].addEventListener("click", function() {addClass(1);});
	document.getElementsByTagName("button")[2].addEventListener("click", function() {addClass(2);});
	document.getElementsByTagName("button")[3].addEventListener("click", function() {addClass(3);});
	document.getElementsByTagName("button")[4].addEventListener("click", function() {addClass(4);});

}
$(document).ready(main);

//functions for slider's onclicks
function fillButton(index) {
	//changing color of slider button
	var button = document.getElementsByClassName("slider-button");
	for (var i = 0; i < button.length; i++) {
		button[i].classList.remove("slider-button-white");
	}
	button[index].classList.add("slider-button-white");

	//changing currently displayed content
	var slide = document.getElementsByClassName("slide");
	for (i = 0; i < slide.length; i++) {
		slide[i].classList.remove("slide-block");
	}
	slide[index].classList.add("slide-block");
}




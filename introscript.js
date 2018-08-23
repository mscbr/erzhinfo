//intro-circle button functions setup
var setButton = function() {
		//getting DOM elements
		var enterTitle = document.getElementsByClassName("enter")[0];
		var innerCircle = document.getElementsByClassName("inner-circle")[0];
		// hiding/showing .enter functions
		function visVisible() {
			enterTitle.style.visibility = "visible";
		}
		function visHidden() {
			enterTitle.style.visibility = "hidden";
		}
		//background fade to white function
		function changeBackground() {
			var introBody = document.getElementsByTagName("body")[0];
			innerCircle.style.animationName = "toWhite";
			innerCircle.style.animationDuration = "2s";
			innerCircle.style.animationIterationCount = "1";
			innerCircle.style.animationFillMode = "forwards";
			introBody.classList.add("page-fadeout");
		}
		//add event listeners
		innerCircle.addEventListener("mouseover", visVisible);
		innerCircle.addEventListener("mouseout", visHidden);
		innerCircle.addEventListener("click", changeBackground);
}
$(document).ready(setButton);

//function that delays a href to index.html
var delay = function(url) {
	setTimeout( function() { window.location = url }, 2000);
}



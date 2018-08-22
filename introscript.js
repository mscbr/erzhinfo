
var showEnter = function() {
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
		//executing hide/show when hover on .inner-circle
		innerCircle.addEventListener("mouseover", visVisible);
		innerCircle.addEventListener("mouseout", visHidden);
}


$(document).ready(showEnter);


function showEnter() {
		//getting DOM elements
		var enterTitle = document.getElementsByClassName("enter")[1];
		var innerCircle = document.getElementsByClassName("inner-circle")[1];
		// hiding/showing .enter functions
		var visVisible = function(element) {
			element.style.visibility = "visible";
		}
		var visHidden = function(element) {
			element.style.visibility = "hidden";
		}
		//executing hide/show when hover on .inner-circle
		innerCircle.onmouseover = function() {visVisible(enterTitle)};
		innerCircle.onmouseout = function() {visHidden(enterTitle)};
	}

document.addEventListener("DOMContentLoaded", function(event) {
	//function execution when all DOM elements are already loaded
  	showEnter();
});
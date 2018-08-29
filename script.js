// front end features design for 
// erzh.info index.html
// designed by mscbr

function iconTab() {
	//each buton receives event listener - opens ~ tab when clicked
	// debugger;
	var buttonLength = document.getElementsByTagName("button").length;

	//function that clears display class from all content-box 
	//and then add display class according to clicked button
	function addClass(buttonNum) {
		for (var i = 0; i < buttonLength; i++) {
			document.getElementsByClassName("content-box")[i].classList.remove("display-block");
		}
		document.getElementsByClassName("animated-title")[0].classList.remove("display-block");
		document.getElementsByClassName("content-box")[buttonNum].classList.add("display-block");
	}
	//assigning function tu buttons
	document.getElementsByTagName("button")[0].addEventListener("click", function() {addClass(0);});
	document.getElementsByTagName("button")[1].addEventListener("click", function() {addClass(1);});
	document.getElementsByTagName("button")[2].addEventListener("click", function() {addClass(2);});
	document.getElementsByTagName("button")[3].addEventListener("click", function() {addClass(3);});
	document.getElementsByTagName("button")[4].addEventListener("click", function() {addClass(4);});

}
$(document).ready(iconTab);
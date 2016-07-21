var slideIndex = 0;
//carousel();

function carousel(){
	var i;
	var x = document.getElementsByClassName("mySlides");
	var div= document.getElementById('div');
	for(i=0; i<x.length; i++){
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex>x.length) {
		slideIndex = 1;
		}
	x[slideIndex-1].style.display ="block";
	x[slideIndex-1].style.left='100px';
	setTimeout(carousel, 2000);
}
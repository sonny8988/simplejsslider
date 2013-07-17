var bar, slider,button;
 
function init(){
	
	bar = document.getElementById('bar');
	value = document.getElementById('value');
	info = document.getElementById('info');
        button = document.getElementById('button');
	bar.addEventListener('mousedown', startSlide, false);	
}
 
function startSlide(event){
	var limit = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
	document.addEventListener('mouseup', stopSlide, false);
	if (limit>=0 && limit<=1) {
		var set_perc = limit;
	}
	else{
		if (limit<= 0) {
			var set_perc = 0; 
		}
		if (limit>= 1) {
			var set_perc = 1; 
		}
	}
	info.innerHTML = 'start';
	value.innerHTML = Math.round(set_perc*100);
	document.addEventListener('mousemove', moveSlide, false);
	//Position the Button
	button.style.left = set_perc*bar.offsetWidth - (button.clientWidth/2) + 'px';
	//Dehighlight Any Text
	button.focus();
	//Do Not Allow Highlighting
	document.onselectstart = function () { return false; };   
}
 
function moveSlide(event){
	var limit = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
	console.log("slide");
	if (limit>=0 && limit<=1) {
		var set_perc = limit;
	}
	else{
		if (limit<= 0) {
			var set_perc = 0; 
		}
		if (limit>= 1) {
			var set_perc = 1; 
		}
	}
	info.innerHTML = 'moving';
	value.innerHTML = Math.round(set_perc*100);
	button.style.left = set_perc*bar.offsetWidth - (button.clientWidth/2)  + 'px';	
	
}
 
function stopSlide(event){
	var limit = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
	document.removeEventListener('mousemove',moveSlide,false)
	document.removeEventListener('mouseup',stopSlide,false)
	document.onselectstart = null;
	if (limit>=0 && limit<=1) {
		var set_perc = limit;
	}
	else{
		if (limit<= 0) {
			var set_perc = 0; 
		}
		if (limit>= 1) {
			var set_perc = 1; 
		}
	}
	info.innerHTML = 'done';
	value.innerHTML = Math.round(set_perc*100);
	button.style.left = set_perc*bar.offsetWidth - (button.clientWidth/2)  + 'px';
}


 
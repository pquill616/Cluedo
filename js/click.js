var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

function chooseCharacter(){
	var character = document.querySelectorAll(".chooseCharacter span");
	for(i of character){
		i.addEventListener(touchEvent, function(){
			console.log("OK");
		});
	}
}
chooseCharacter();
var touchEvent = 'onclick' in window ? 'click' : 'touchend';

function chooseCharacter(){
	var character = document.querySelectorAll(".chooseCharacter span");
	for(i of character){
		i.addEventListener(touchEvent, function(){
			changeDisplay(this.id);
		});
	}
}
function changeDisplay(id) {
	document.querySelector(".display.active").classList.remove("active");
	document.querySelector(".display.gamePaper").classList.add("active");
	document.querySelector(".display.gamePaper").id = (id);
}
function titleReset() {
	var title = document.querySelector(".titleReset");
	title.addEventListener(touchEvent, function(){
		document.querySelector(".display.active").classList.remove("active");
		document.querySelector(".display.chooseCharacter").classList.add("active");
		document.querySelector(".display.gamePaper").id = ("");
	});
}
function checkItem() {
	var check = document.querySelectorAll("table tbody td:last-child");
	for(i of check){
		i.addEventListener(touchEvent, function(){
				if(this.classList.contains("active")) {
					this.classList.remove("active");
				}
				else if(this.classList.contains("mine")){
					this.classList.remove("mine");
					this.classList.add("active");
				}
				else {
					this.classList.add("mine");
				}
		});
	}
}
chooseCharacter();
window.onload = function() {
	titleReset();
	checkItem();
}
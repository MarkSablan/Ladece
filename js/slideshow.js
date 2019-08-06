let images = document.querySelectorAll('.image-cont');
let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let index = 0;

function slideShowInit(){
	for(let i = 0; i < images.length; i++){
		images[i].style.display = 'none';
	}
	images[index].style.display = 'block';
}

function fadeOut(element){
	let op = 1;
	let timer = setInterval(function(){
		if(op <= 0.1){
			clearInterval(timer);
			element.style.display = 'none';
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity='+ op * 100 + ')';
		op -= op * 0.05;
		// console.log(op);
	},10);
}

function fadeIn(element){
	let op = 0.1;
	element.style.display = 'block';
	element.style.opacity = op;
	let timer = setInterval(function(){
		if(op >= 1){
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity='+ op * 100 + ')';
		op += op * 0.02;
	},10);
}

function slideRight(){
	let previous = images[index];
	if(index >= images.length-1) index = 0;
	else index++;
	fadeOut(previous);
	fadeIn(images[index]);
}

function slideLeft(){
	let previous = images[index];
	if(index <= 0) index = images.length -1;
	else index--;
	fadeOut(previous);
	fadeIn(images[index]);
}

rightBtn.addEventListener('click', function() {
	slideRight();
});

leftBtn.addEventListener('click', () => {
	slideLeft();
});

slideShowInit();
setInterval(() => slideRight(), 5000);
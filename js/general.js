window.onload = function() {
			AOS.init();

// ---- CALENDAR ----
	let calendarBtn = document.querySelector("#cal-btn");
	// let calendarBtnI = document.querySelector("#cal-btn-i");
	let calendar = document.querySelector('.calendar');
	let time = $('#time');
	let indicator = $('.selected-icon');
	let body = document.querySelector('body');
// ---- NAVIGATION ----
	let hamburger = $('.hamburger');
	let ulLinks = $('ul');
	let hbg1 = $('.hbg-line:nth-child(1)');
	let hbg2 = $('.hbg-line:nth-child(2)');
	let hbg3 = $('.hbg-line:nth-child(3)');

	// fix double click to open bug
	if(calendar != null){calendar.style.display = 'none';}
	

	// document.addEventListener('click', (e) => {
	// 	// console.log(e.target !== calendarBtn);
	// 	if(e.target !== calendar && calendar.style.display == 'block' && e.target !== calendarBtn && e.target !== calendarBtn){
	// 		calendar.style.display = 'none';
	// 		console.log('hide calendar');
	// 	}
	// });

		// display at bottom 60px if scroll < content/calendar
		// displat at top 60px if scroll > content/calendar
	if(calendarBtn != null){calendarBtn.addEventListener('click', toggleCalendar);}

	function toggleCalendar(){
		if(calendar.style.display == 'none') calendar.style.display= 'block';
		else calendar.style.display= 'none';
	}
	// body.addEventListener('focusout', () => calendar.style.display= 'none');
	// body.addEventListener('click', () => calendar.style.display= 'none');

	time.on('change', () => {
		indicator.html('');
		let icon = $('<i class="fas fa-2x"></i>');
		// icon.addClass('fas');
		// icon.addClass('fa-2x');
		console.log(time.val());
		if(time.val() == 'day'){
			icon.addClass('fa-sun');
			icon.css('color' ,'#ffc913');
		}else{
		 icon.addClass('fa-moon');
		 icon.css('color', '#d0d0d0');
		}
		console.log(icon);
		indicator.append(icon);
		// indicator.html('awew');

	});

	let c = new Calendar($('.calendar'));
	let okBtn = $('.ok-btn'),
	cancelBtn = $('.cancel-btn');
	let monthLbl = $('.month'),
	dayLbl = $('#day'),
	yearLbl = $('.year'),
	checkNow = $('#check-now');

	checkNow.on('click', ()=>{

		alert(`${monthLbl.html()} ${dayLbl.html()} ${yearLbl.html()} ${time.val()}`);
		console.log(time);

	});

	cancelBtn.on('click', toggleCalendar);

	okBtn.on('click', ()=>{

		let date = c.getSelectedDate();
		monthLbl.html(date.month);
		dayLbl.html(date.day);
		yearLbl.html(date.year);
		// alert(date.fullDate);
		openCalendar();
	});


// HUMBURGER MENU ANIMATION
	hamburger.on('click', function() {
		ulLinks.toggleClass('open-nav');
		hbg1.toggleClass('line-ani-1');
		hbg2.toggleClass('line-ani-2');
		hbg3.toggleClass('line-ani-3');
		console.log('toggle menu');
	});
}

function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();





const spoiler = document.querySelectorAll('.spoiler__item');
const title = document.querySelectorAll('.spoiler__title');

function button (ind) {
	for (let i = 0; i<=spoiler.length; i++) {
		if (i==ind && title[i].className !== 'spoiler__title active') {
			title[i].classList.add('active');
			spoiler[i].style.maxHeight = spoiler[i].scrollHeight + 'px';
		} else {
			title[i].classList.remove('active');
			spoiler[i].style.maxHeight = 0;	
		}
	}
};

const slider = document.querySelector('.slider__inner');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderWrapper = document.querySelector('.slider__wrapper');

let t = 0;

let j = 0;



function buttonS (ind) {
	j+=ind;
	if (j>=0 && j<sliderItem.length-1 && ind>0) {
		t += sliderItem[j-1].scrollHeight + 70;
	} else if (j>=0 && j<sliderItem.length && ind<0) {
		t -= sliderItem[j].scrollHeight + 70;
	} else if (j<0) {
		j = sliderItem.length-2;
		for (let i = 0; i <= j-1; i++) {
			t += sliderItem[i].scrollHeight + 70;
		}
	} else if (j>sliderItem.length-2) {
		t=0;
		j=0;
	}
	sliderWrapper.style.top = -t + 'px';
	slider.style.minHeight = sliderItem[j].scrollHeight + sliderItem[j+1].scrollHeight + 85 + 'px';
};

	slider.style.minHeight = sliderItem[j].scrollHeight + sliderItem[j+1].scrollHeight + 85 + 'px';





const teamItem = $('.team-item');
const teamImg = $('.team__img');

$('.team-item_active').fadeIn(0);

let i = 1;

$(teamImg).click(function() {
		$(teamItem).removeClass('team-item_active');
		$(teamImg).removeClass('team__img_active');
		$(teamImg[$(this).index()]).addClass('team__img_active');
		if ($(this).index() !== i) {
			$(teamItem).fadeOut(0);
			$(teamItem[$(this).index()]).fadeIn();
		};
		i = $(this).index();
});


$('input, textarea').focusin(function () {
	let placeholder = $(this).attr('placeholder');
	$(this).attr('placeholder', '');
	$('input, textarea').focusout(function () {
		$(this).attr('placeholder', placeholder);
	});
});

$('#subscribe').click(function() {
	if ($('#subscribe').prop('checked')) {
		$('button').prop({disabled: false});
	} else {
		$('button').prop({disabled: true});
	};
});


// $('.wrapper').click(function(){
// 	$(contact__error).fadeOut();
// });

let contactError = $('.contact__error');

$('button').click(function(event){
	event.preventDefault();
	$(".contact__form").each(function( index, element ) {
		if ($(this).val() == '') {
			let i = ($(this).index())/2;
			$(contactError[i]).fadeIn();
		};
	});
	$(contactError).delay(2000).fadeOut();
});


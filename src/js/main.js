import 'webp-in-css/polyfill';
import Glide from '@glidejs/glide';

document.addEventListener('DOMContentLoaded', () => {
	const changeThemeButton = document.querySelector('.fn_change_theme');
	const playVideoButton = document.querySelector('.fn_play_video');
	const video = document.querySelector('.video');
	const sliderCursor = document.querySelector('[data-slider-cursor]');

	changeThemeButton.onclick = function() {
		document.body.classList.toggle('theme-is-black');
	}

	playVideoButton.onclick = function() {
		playVideoButton.style.display = "none";
		video.play();
	}

	video.onclick = function() {
		playVideoButton.style.display = "block";
		video.pause();
	}

	document.querySelector('.burger-menu').onclick = function(){
    	document.querySelector('.burger-menu__button').classList.toggle('burger-menu__button--active');
    	document.querySelector('.header__navigation').classList.toggle('header__navigation--mobile');
	}

	const config = {
		type: 'slider',
		startAt: 0,
		perView: 2,
		peek: { before: 0, after: 250 },
		breakpoints: {
			1199: {
				perView: 1,
				peek: { before: -20, after: 0 }
			}
		}
	};
	

	const slider = new Glide('.glide', config).mount();
	slider.on('move', function() {
		sliderCursor.innerText = String(slider.index + 1) + '/';
	});
});
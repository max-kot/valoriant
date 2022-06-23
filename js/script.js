const swiperFirst = new Swiper('.first-swiper', {
	//Количество слайдов для показа
	slidesPerView: 3.9, // 1.5 или 'auto'
	// Отступы между слайдами
	spaceBetween: 120,
	// бесконечная прокрутка
	loop: true,
	// Автопрокрутка
	autoplay: {
		// пауза между прокруткой
		delay: 1500,
		// закончить на последнем слайде
		stopOnLastSlide: true,
		// отключить после ручного переключения
		disableOnInteraction: false,
	},
	// Скорость переключения
	speed: 800,
	//Включение/отключение перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа 0 = отключит, чем больше тем легче
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: { // '@1.00'
			slidesPerView: 1.9,
		},
		1024: { // '@1.50'
			slidesPerView: 2.9,
		},
		2360: {
			slidesPerView: 3.9,
		}
	},
});

const swiperAbout = new Swiper('.about-swiper', {
	//Количество слайдов для показа
	slidesPerView: 3, // 1.5 или 'auto'
	// Отступы между слайдами
	spaceBetween: 80,
	// бесконечная прокрутка
	loop: true,
	// Автопрокрутка
	autoplay: {
		// пауза между прокруткой
		delay: 1500,
		// закончить на последнем слайде
		stopOnLastSlide: true,
		// отключить после ручного переключения
		disableOnInteraction: false,
	},
	// Скорость переключения
	speed: 800,
	//Включение/отключение перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа 0 = отключит, чем больше тем легче
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
});
/*--- Меню ---*/
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
	menuList.classList.toggle('active')

})
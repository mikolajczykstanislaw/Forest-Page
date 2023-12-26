const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const heroText = document.querySelector('.hero-text');
const buttons = document.querySelectorAll('.choose-btn');
const buttonSend = document.querySelector('.choose-btn-send');
const footerYear = document.querySelector('.footer__year');

document.addEventListener('DOMContentLoaded', function () {
	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			buttons.forEach(function (btn) {
				btn.classList.remove('clicked');
			});

			this.classList.add('clicked');
		});
	});
});

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((e) =>
	e.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	})
);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

buttonSend.addEventListener('click', function () {
	buttonSend.classList.toggle('clicked')
})

function redirectToOfferPage() {
	window.location.href = "offer.html";
}
document.querySelector('.footer__copyright span').innerHTML = new Date().getFullYear();

const burgerButton = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__item a");

function toggleMenu() {
	menu.classList.toggle("nav--active");
	burgerButton.classList.toggle("close")
	document.documentElement.classList.toggle("overflow")
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

burgerButton.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
	link.addEventListener("click", () => {
		if (menu.classList.contains("nav--active")) {
			toggleMenu();
		}
	});
});

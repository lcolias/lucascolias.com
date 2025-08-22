// JS File for Navigation bar scripts
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item");

const observer = new IntersectionObserver(enteries => {

	enteries.forEach(entry => {

		const link = document.querySelector(`nav a[href="#${entry.target.id}"]`);

		if (!link) return;

		if (entry.isIntersecting) {
			navLinks.forEach(l => l.classList.remove("active"));
			link.classList.add("active");
		}
	});
}, { threshold: 0.75 });

sections.forEach(section => observer.observe(section));
console.log(navLinks);

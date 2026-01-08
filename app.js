document.addEventListener("DOMContentLoaded", () => {
	const yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	const navToggle = document.querySelector(".nav-toggle");
	const navList = document.getElementById("primary-menu");
	if (navToggle && navList) {
		navToggle.addEventListener("click", () => {
			const expanded = navToggle.getAttribute("aria-expanded") === "true";
			navToggle.setAttribute("aria-expanded", String(!expanded));
			navList.classList.toggle("open", !expanded);
		});
	}

	document.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener("click", (e) => {
			const target = document.querySelector(link.getAttribute("href"));
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		});
	});

	const form = document.querySelector(".contact-form");
	if (form) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			const name = document.getElementById("name").value.trim();
			const email = document.getElementById("email").value.trim();
			const message = document.getElementById("message").value.trim();
			if (!name || !email || !message) return;
			const to = "hello@argentia.consulting";
			const subject = encodeURIComponent(`Consultation Request from ${name}`);
			const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
			window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
		});
	}
});

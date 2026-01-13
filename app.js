document.addEventListener("DOMContentLoaded", () => {
	const yearEl = document.getElementById("year");
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	// Lenguaje actual
	let currentLang = localStorage.getItem("language") || "en";

	// Botón de idioma
	const langBtn = document.getElementById("lang-btn");
	if (langBtn) {
		langBtn.textContent = currentLang.toUpperCase();
		langBtn.addEventListener("click", () => {
			currentLang = currentLang === "en" ? "es" : "en";
			localStorage.setItem("language", currentLang);
			langBtn.textContent = currentLang.toUpperCase();
			updateLanguage();
		});
	}

	// Actualizar idioma al cargar
	function updateLanguage() {
		document.querySelectorAll("[data-en][data-es]").forEach((element) => {
			if (element.children.length === 0) {
				element.textContent = currentLang === "en" ? element.getAttribute("data-en") : element.getAttribute("data-es");
			}
		});
	}

	updateLanguage();

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
		const submitBtn = form.querySelector('button[type="submit"]');
		const statusEl = document.createElement("p");
		statusEl.className = "form-status";
		statusEl.style.marginTop = "8px";
		form.appendChild(statusEl);

		// Reemplaza este endpoint con tu ID de Formspree (ej: https://formspree.io/f/xyzzabcd)
		const FORM_ENDPOINT = "https://formspree.io/f/xykkydoq";

		form.addEventListener("submit", async (e) => {
			e.preventDefault();
			const name = document.getElementById("name").value.trim();
			const email = document.getElementById("email").value.trim();
			const message = document.getElementById("message").value.trim();
			if (!name || !email || !message) return;

			const sendingText = currentLang === "en" ? "Sending..." : "Enviando...";
			const successText = currentLang === "en" ? "Message sent! We'll reply soon." : "Mensaje enviado. Te responderemos pronto.";
			const errorText = currentLang === "en" ? "Could not send. Please try again." : "No se pudo enviar. Inténtalo de nuevo.";

			statusEl.textContent = sendingText;
			if (submitBtn) submitBtn.disabled = true;

			try {
				const res = await fetch(FORM_ENDPOINT, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name, email, message })
				});

				if (res.ok) {
					statusEl.textContent = successText;
					form.reset();
				} else {
					statusEl.textContent = errorText;
				}
			} catch (err) {
				statusEl.textContent = errorText;
			} finally {
				if (submitBtn) submitBtn.disabled = false;
			}
		});
	}
});

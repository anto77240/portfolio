(function () {
	document.documentElement.classList.add("js");
	document.getElementById("year").textContent = new Date().getFullYear();

	// Nav: bordure au scroll
	var nav = document.querySelector(".nav");
	function onScroll() {
		nav.classList.toggle("is-scrolled", window.scrollY > 8);
	}
	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();

	// Menu mobile
	var toggle = document.querySelector(".nav__toggle");
	var links = document.getElementById("nav-links");
	function setOpen(open) {
		toggle.setAttribute("aria-expanded", String(open));
		links.classList.toggle("is-open", open);
	}
	toggle.addEventListener("click", function () {
		setOpen(toggle.getAttribute("aria-expanded") !== "true");
	});
	links.addEventListener("click", function (e) {
		if (e.target.closest("a")) setOpen(false);
	});

	// Apparition des blocs au scroll
	var items = document.querySelectorAll(".reveal");
	if (!("IntersectionObserver" in window)) {
		items.forEach(function (el) {
			el.classList.add("is-visible");
		});
		return;
	}
	var io = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					io.unobserve(entry.target);
				}
			});
		},
		{ rootMargin: "0px 0px -8% 0px" }
	);
	items.forEach(function (el) {
		io.observe(el);
	});
})();

/** @format */

(function ($) {
	$(function () {
		$(".sidenav").sidenav();
		$(".parallax").parallax();

		// document.addEventListener("DOMContentLoaded", function () {
		// 	var elems = document.querySelectorAll(".dropdown-trigger");
		// 	var instances = M.Dropdown.init(elems, options);
		// });

		// Or with jQuery

		$(".dropdown-trigger").dropdown();

		// document.addEventListener("DOMContentLoaded", function () {
		// 	var elems = document.querySelectorAll(".carousel");
		// 	var instances = M.Carousel.init(elems, options);
		// });

		// Or with jQuery

		$(document).ready(function () {
			$(".carousel").carousel();
		});
	}); // end of document ready
})(jQuery); // end of jQuery name space

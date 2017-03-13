//= require jquery.min
//= require materialize
//= require_tree .
var items = []

window.onload = function() {
	items = document.querySelectorAll(".timeline li");
	callbackFunc();
}

function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
}

function callbackFunc() {
	for (var i = 0; i < items.length; i++) {
		if (isElementInViewport(items[i])) {
			items[i].classList.add("in-view");
		}
		else {
			items[i].classList.remove("in-view");
		}
	}
}

window.addEventListener("scroll", callbackFunc);
window.addEventListener("resize", callbackFunc);
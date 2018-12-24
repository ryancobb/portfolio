//= require jquery.min
//= require_tree .

var items = []

window.onload = function() {
	items = document.querySelectorAll(".timeline li");
	callbackFunc();
}

function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
		(rect.top + 150) >= 0 &&
		rect.left >= 0 &&
		(rect.bottom - 150) <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
}

function callbackFunc() {
	for (var i = 0; i < items.length; i++) {
		if (isElementInViewport(items[i])) {
			items[i].classList.add("in-view");
		}
	}
}

window.addEventListener("scroll", callbackFunc);
window.addEventListener("resize", callbackFunc);

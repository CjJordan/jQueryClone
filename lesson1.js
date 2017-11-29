var DOMobj = function (arg) {
	this.key = arg;
	this.addClass = function (className) {
		this.key.classList.add(className);
	}
}

var $ = function (sel) {
	var key = document.getElementById(sel);

	function addClass (className) {
		key.classList.add(className);
	}

	return {
		addClass: addClass
	}
}

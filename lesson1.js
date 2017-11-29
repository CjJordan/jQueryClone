var DOMobj = function (arg) {
	this.key = arg;
	this.addClass = function (className) {
		this.key.classList.add(className);
	}
}

var $ = function (sel) {
	return new DOMobj(document.getElementById(sel));
}

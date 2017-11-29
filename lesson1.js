var $ = function (sel) {
	var key = document.getElementById(sel);

	function addClass (className) {
		key.classList.add(className);
	}

	return {
		addClass: addClass
	}
}

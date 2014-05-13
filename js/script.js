/* JS STUB FILE FOR TIMELINE
* Internews-KE
* @auremoser
*/
if (window.postMessage) {
	var tlMouseupFunc = function() {
	var tlFrame = document.getElementById("tl-timeline-iframe");
		if (tlFrame.contentWindow && tlFrame.contentWindow.postMessage) {
			tlFrame.contentWindow.postMessage("mouseup","*");
		}
	}
	if (typeof window.addEventListener != "undefined") {
		window.addEventListener("mouseup", tlMouseupFunc, false);
	}
	else if (typeof window.attachEvent != "undefined") {
		window.attachEvent("onmouseup", tlMouseupFunc);
	}
}
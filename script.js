chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	  if (request.message == "GCE") {
		document.designMode = "on";
		var elements = document.getElementsByClassName("yzifAd");
		for (let i=0; i < elements.length; i++) {
			console.log(elements[i]);
			elements[i].innerHTML = "";
			console.log(elements[i].innerHTML);
		};
	  }
	}
  );
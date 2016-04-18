(function(){
	
	var add = document.getElementById("button");
	var userText = document.getElementById("text");
	var list = document.getElementById("list");
	var items = document.getElementsByTagName("li");
	var warn = document.getElementById("warn");
	
	add.addEventListener("click", addItem, false);
	userText.addEventListener("submit", addItem, false);
	list.addEventListener("dblclick", removeItem, false);
	
	userText.addEventListener("keypress", function(e) {
		if (e.keyCode === 13) {
			addItem();
		}
	}, false);
	
	userText.focus();
	
	function addItem() {
		if (userText.value === "") {
			
			userText.className = "warning";
			warn.style.visibility = "visible";
			
		} else {
			var entry = document.createElement("li");
			entry.appendChild(document.createTextNode(userText.value));
			list.appendChild(entry);
			
			userText.value = "";
			userText.focus();
			userText.className = "";
			warn.style.visibility = "hidden";
		}
	}
	
	function getTarget(e) {
		
		return e.target || e.srcElement;
		
	}
	
	function removeItem(e) {
		
		target = getTarget(e);
		list.removeChild(target);
		
		userText.focus();
		
	}
	
	
})();
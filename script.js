(function(){
	
	var add = document.getElementById("button");
	var userText = document.getElementById("text");
	var list = document.getElementById("list");
	var items = document.getElementsByTagName("li");
	
	add.addEventListener("click", addItem, false);
	userText.addEventListener("submit", addItem, false);
	list.addEventListener("dblclick", removeItem(this), false);
	
	
	function addItem() {
		
		var entry = document.createElement("li");
		entry.appendChild(document.createTextNode(userText.value));
		list.appendChild(entry);
		
		userText.value = "";
		userText.focus();
	}
	
	function removeItem(obj) {
		
		obj.remove();
		
	}
	
	
})();
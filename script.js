(function(){
	
	var add = document.getElementById("button");
	var userText = document.getElementById("text");
	var list = document.getElementById("list");
	var items = document.querySelectorAll("li");
	var warn = document.getElementById("warn");
	var dragSrc = null;
	
	add.addEventListener("click", addItem, false);
	userText.addEventListener("submit", addItem, false);
	list.addEventListener("dblclick", removeItem, false);
	
	[].forEach.call(items, function(i){
		
		i.addEventListener("dragstart", start, false);
		i.addEventListener("dragenter", enter, false);
		i.addEventListener("dragover", over, false);
		i.addEventListener("gradleave", leave, false);
		i.addEventListener("drop", drop, false);
		i.addEventListener("dragend", end, false);
		
	});
	
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
			entry.setAttribute("draggable", "true");
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
	
	function start(i) {
		
		dragSrc = this;
		i.dataTransfer.effectAllowed = "move";
		i.dataTransfer.setData("text/html", this.innerHTML);
		
	}
	
	function over(i) {
		
		if (i.preventDefault) {
			i.preventDefault();
		}
		
		i.dataTransfer.dropEffect = "move";
		
		return false;
		
	}
	
	function enter(i) {
		
		this.classList.add("over");
		
	}
	
	function leave(i) {
		
		this.classList.remove("over");
		
	}
	
	function drop(i) {
		
		if(i.stopPropagation) {
			i.stopPropagation();
		}
		
		if (dragSrc != this) {
			dragSrc.innerHTML = this.innerHTML;
			this.innerHTML = i.dataTransfer.getData("text/html");
		}
		
		return false;
		
	}
	
	function end(i) {
		
		[].forEach.call(items, function(e){
			
			e.classList.remove("over");
			
		});
		
	}
	
	
})();
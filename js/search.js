function rowSearch() {
	let form = $("#formSearch");
	form.show("slow");
}

function closeFormSearch() {
	let form = $("#formSearch");
	form.hide("slow");
}

function searchForm() {
	let search = document.getElementById("search").value;
	let textarea = document.getElementById("textarea").innerHTML;

	let textSplit = textarea.split(/\s/);

	var newString = "";

	for (let i = 0; i < textSplit.length ; i++){
		if(textSplit[i].toUpperCase() == search.toUpperCase()){
			newString = newString.concat("<span class='text'>");
			newString = newString.concat(textSplit[i]);
			newString = newString.concat("</span>");
			newString = newString.concat(" ");
		}else{
			newString = newString.concat(textSplit[i]);
			newString = newString.concat(" ");
		}
	}
	document.getElementById("textarea").innerHTML = newString;
}
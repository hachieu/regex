// function rowCharacter() {
// 	let form = $("#formCharacter");
// 	form.show("slow");
// }

function closeCharacter() {
	let form = $("#formCharacter");
	form.hide("slow");
}

function rowCharacter() {
	//let search = document.getElementById("char").value;

	let form = $("#formCharacter");
	form.show("slow");

	let chartext = document.getElementById("chartext").innerHTML;

	let textSplit = chartext.split(/\s/);

	var newString = "";

	let regex = /^|m|M/;
	
	for (let i = 0; i < textSplit.length ; i++){
		if(regex.test(textSplit[i])){
			newString = newString.concat("<span class='char'>");
			newString = newString.concat(textSplit[i]);
			newString = newString.concat("</span>");
			newString = newString.concat(" ");
		}else{
			newString = newString.concat(textSplit[i]);
			newString = newString.concat(" ");
		}
	}
	document.getElementById("chartext").innerHTML = newString;
}
function rowValidate() {
	let form = $("#validate");
	form.show("slow");
}

function closeValidate() {
	let form = $("#validate");
	form.hide("slow");
}

//onHandleSubmit
function submitValidate() {

	if(checkEmail() & checkUsername() & checkPhone() & checkFullName()){
		document.getElementById("messageValidate").innerHTML = "Đăng ký thành công";
		var style_message = setTimeout(function(){
		        document.getElementById("messageValidate").style.display = "none";
		    }, 4000);
	}else{
		document.getElementById("messageValidate").innerHTML = "";
	}
}

//check email
function checkEmail(){
	let email = document.getElementById("email").value;

	let filter = /^([A-Za-z]{1})+([A-Za-z0-9])+([@]{1})+([A-Za-z])+(?:\.[A-Za-z]+)+$/;

	if(!filter.test(email)){
		document.getElementById("messEmail").innerHTML = "Email nhập không hợp lệ";
		return false;
	}else{
		document.getElementById("messEmail").innerHTML = "";
		return true;
	}
}

//check username
function checkUsername(){
	let username = document.getElementById("username").value;

	let filter = /[A-Za-z0-9]+$/; //  /\w/

	if(!filter.test(username)){
		document.getElementById("messUsername").innerHTML = "Tên đăng nhập, nhập không hợp lệ";
		return false;
	}else{
		document.getElementById("messUsername").innerHTML = "";
		return true;
	}
}

//check phone number
function checkPhone() {
	let phone = document.getElementById("phone").value;

	let filter = /^(09|03|07|08|05|04)+(\d){8,9}$/; //  /^(09|03|07|08|05|04)+([0-9]){8}$/

	if(!filter.test(phone)){
		document.getElementById("messPhone").innerHTML = "Số điện thoại nhập không hợp lệ";
		return false;
	}else{
		document.getElementById("messPhone").innerHTML = "";
		return true;
	}
}

//check fullname
function checkFullName() {
	let name = document.getElementById("name").value;

	let filter_1 = /^(\D)+(\s)*$/;
	let filter_2 = /^([^.,!`~@#$%^&*()+=?<>;:""''|{}\[\]\/\-\_\\])+(\s)*$/;

	if(!filter_1.test(name) || !filter_2.test(name)){
		document.getElementById("messName").innerHTML = "Nhập họ tên không hợp lệ";
		return false;
	}else{
		document.getElementById("messName").innerHTML = "";
		return true;
	}
}
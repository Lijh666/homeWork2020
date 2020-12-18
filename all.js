/*
* @Author: 李家豪
* @Date:   2020-12-04 08:58:22
* @Last Modified by:   李家豪
* @Last Modified time: 2020-12-10 16:52:58
*/

function focusFun(that){
	id = setInterval(function(){
		if (that.value == ""){
			if (that.name == "name"){
				that.nextElementSibling.innerHTML = "用户名可以是中英文的";
			}
			if (that.name == "password"){
				that.nextElementSibling.innerHTML = "密码采用较难的";
			}
			
		}else{
			that.nextElementSibling.innerHTML = "";
		}
	}, 10);
	
}

function blurFun(that){
	if (that.value == ""){
		id = clearInterval(id);
		if (that.name == "name"){
			that.nextElementSibling.innerHTML = "用户名不能为空";
		}
		if (that.name == "password"){
			that.nextElementSibling.innerHTML = "密码不能为空";
		}
	}else{
		that.nextElementSibling.innerHTML = "";
	}
}


function yanzhen(){
	var popup = document.getElementById("popup");
	popup.style.display = "block";
	var popup_div2_p2 = document.getElementById("popup_div2_p2");
	num1 = parseInt((Math.random())*101);
	num2 = parseInt((Math.random())*101);
	popup_div2_p2.innerHTML = "" + num1 + "+" + num2 + "=?";
}

function closePopup(){
	var popup = document.getElementById("popup");
	popup.style.display = "none";
}

function submitAnswer(){
	var popup_div2_form_input = document.getElementById("popup_div2_form").firstElementChild;
	if (num1+num2 == popup_div2_form_input.value){
		closePopup();
	}else{
		yanzhen();
	}
}

function bannerChange(that){
	var t = that.firstChild.nodeValue;
	var banner = document.getElementById("banner");
	var temp = "images/banner_" + t + ".jpg";
	banner.src = temp;
}

function signUp(that){
	var sign = document.getElementById("sign");
	sign.style.display="block";
	sign.lastElementChild.lastElementChild.value = that.firstChild.nodeValue;
}

function closeSign(){
	var sign = document.getElementById("sign");
	sign.style.display="none";
}

var i = 0;
function bannerInterval(){
	div_1 = document.getElementById("div_1");
	setInterval(function(){
		if (parseInt(getComputedStyle(div_1)["right"])%1200 == 0){
			setTimeout(function(){
				right = parseInt(getComputedStyle(div_1)["right"]);
				right = right + 10;
				div_1.style.right = right + "px";
				if (parseInt(getComputedStyle(div_1)["right"]) >= 3600){
					div_1.style.right = "0px";
				}
			}, 2000);
		}else{
			right = parseInt(getComputedStyle(div_1)["right"]);
			right = right + 10;
			div_1.style.right = right + "px";
			if (parseInt(getComputedStyle(div_1)["right"]) >= 3600){
				div_1.style.right = "0px";
			}
		}
			
	}, 50);
}

document.getElementById("bottom_right_d1").parentNode.onmousemove = function(){
	document.getElementById("bottom_right_d1").style.display = "block";
}
document.getElementById("bottom_right_d1").parentNode.onmouseout = function(){
	document.getElementById("bottom_right_d1").style.display = "none";
}
document.getElementById("bottom_right_d2").parentNode.onmousemove = function(){
	document.getElementById("bottom_right_d2").style.display = "block";
}
document.getElementById("bottom_right_d2").parentNode.onmouseout = function(){
	document.getElementById("bottom_right_d2").style.display = "none";
}
document.getElementById("bottom_right_d3").parentNode.onmousemove = function(){
	document.getElementById("bottom_right_d3").style.display = "block";
}
document.getElementById("bottom_right_d3").parentNode.onmouseout = function(){
	document.getElementById("bottom_right_d3").style.display = "none";
}

var List1 = list1.getElementsByTagName("li");
var List2 = list2.getElementsByTagName("li");
var List3 = list3.getElementsByTagName("li");
for(var i = 0; i < List1.length; i++){
	
	List1[i].onmouseover = function(){
	document.getElementById("ul1").style.display = "block";
	}
	List1[i].onmouseout = function(){
		document.getElementById("ul1").style.cssText = "";
	}
}
for(var i = 0; i < List2.length; i++){
	
	List2[i].onmouseover = function(){
	document.getElementById("ul2").style.display = "block";
	}
	List2[i].onmouseout = function(){
		document.getElementById("ul2").style.cssText = "";
	}
}
for(var i = 0; i < List3.length; i++){
	
	List3[i].onmouseover = function(){
	document.getElementById("ul3").style.display = "block";
	}
	List3[i].onmouseout = function(){
		document.getElementById("ul3").style.cssText = "";
	}
}
var Img = Pic.getElementsByTagName("img");
var ImgH = Img[0].height;
console.log(Img[0].height)
var hh = document.getElementById("Pic");
document.getElementsByClassName("Img")[0].style.height = ImgH;
console.log(hh.offsetHeight);

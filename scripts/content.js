const el = document.querySelector("#mail-app-component > div > div > div > div > div > div > div > div > div > ul > li:nth-child(2) > div > a > div > button");
var value = el.innerHTML;
if (value == "Ad"){
	document.querySelector("#mail-app-component > div > div > div > div > div > div > div > div > div > ul > li:nth-child(2)").style.display = "none";
}
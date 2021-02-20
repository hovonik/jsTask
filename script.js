"use strict"
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrClone = arr;
let popupBg = document.getElementById("popupBg");
function resetData() {
	arr = arrClone;
	popupBg.style.display = "none";
}
function getRandomDigit() {
	if  (!arr.length) {
		popupBg.style.display = "flex";
		return;
	}
	const randomIndex = Math.floor(Math.random() * arr.length);
	const randomValue = arr[randomIndex];
	arr = arr.filter(num => num !== randomValue);
	alert(randomValue);
}
function closeWindow(){
	popupBg.style.display = "none";
}
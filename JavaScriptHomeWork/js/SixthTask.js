/**
 * Напишете JavaScript функция, която показва случайна снимка при
всяко едно отваряне на страницата.
 */
 
function changeImg()	{
	var myImages = ["images/1.jpg", "images/2.jpg", "images/3.jpg"]; 
	var imgShown = document.body.style.backgroundImage;	
	var newImgNumber =Math.floor(Math.random()*myImages.length);
	document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
}
window.onload=changeImg;
 
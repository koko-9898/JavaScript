/**
 * Напишете JavaScript функция, която смята обема на сфера по подаден
радиус.
 */

 
function checkk()
{
	var radius = document.querySelector('#here').value;
	var volume = 4/3*Math.PI*radius*radius*radius;
	document.querySelector('#there').value = volume;
	 
}
 
function clear()
{
	document.querySelector('#there').value="";
}

 
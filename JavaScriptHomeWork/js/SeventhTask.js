/**
 * Напише JavaScript функционалност, която конвертира от kg в lb и обратно.
		1kg = 2.20462262 lb
 */
function calc()
{
	var kg = 2.20462262;
	var lb = 0.45359237;
	var enter = document.querySelector('#kilo').value*kg;
	document.querySelector('#result').innerHTML = enter;
}
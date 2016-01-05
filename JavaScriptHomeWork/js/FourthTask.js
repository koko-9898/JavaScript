/**
 * Напишете JavaScript, който да връща innerHTML на първия anchor в
HTML документ
 */

function Content()
{
	var element = document.querySelector('a:first-child').innerHTML;
	console.log(element);
}
Content();
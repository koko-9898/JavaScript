/**
 * Напишете JavaScript, който да изкарава popup с innerHTML на елемент
по дадено id.
 */

function PopUp()
{
	var element = document.querySelector('#go').innerHTML;
	alert(element);
}

PopUp();
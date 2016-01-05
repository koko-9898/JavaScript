/**
 * Напишете JavaScript, който да връща броя на anchors (<а>) в HTML
документ.
 */

function JsAnchors()
{
	var anchors = document.querySelectorAll('a').length;
	console.log(anchors);
}

JsAnchors();
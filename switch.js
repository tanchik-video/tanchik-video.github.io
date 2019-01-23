$(document).ready(function() {
	
/* switches effect */

  $('.styleswitch').click(function() {

      $("#sector").fadeOut(700); 
// id will have real dom element identificator, you can add effects for other elements. Fade timing is 700 default

      switchStylestyle(this.getAttribute("rel"));

      $("#sector").fadeIn(900); 
 // see upper

			return false;

		});

		var c = readCookie('viden');

		if (c) switchStylestyle(c)
		else {createCookie('viden', 'style-norm', 365)
			switchStylestyle(readCookie('viden'));}

	});


/* walk style function */

function switchStylestyle(styleName) {

  	$('link[rel*=style][title]').each(function(i) {

			this.disabled = true;

			if (this.getAttribute('title') == styleName) this.disabled = false;

		});

		createCookie('viden', styleName, 365); 
 // cookie saving for one year

	}


/* cookie style core */

function createCookie(name,value,days) {

	if (days) {

		var date = new Date();

		date.setTime(date.getTime()+(days*24*60*60*1000));

		var expires = "; expires="+date.toGMTString();

	}

	else var expires = "";

	document.cookie = name+"="+value+expires+"; path=/";
}



/* read cookie */

function readCookie(name) {

	var nameEQ = name + "=";

	var ca = document.cookie.split(';');

	for(var i=0;i < ca.length;i++) {

		var c = ca[i];

		while (c.charAt(0)==' ') c = c.substring(1,c.length);

		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}

	return null;
}

/* replace cookie */
function eraseCookie(name) {
	createCookie(name,"",-1);
}

function getOffset(elem) {

	if (elem.getBoundingClientRect) {return getOffsetRect(elem)}

	else {return getOffsetSum(elem)}}
function getOffsetSum(elem) {

    var top=0, left=0
    while(elem) {
        top = top + parseInt(elem.offsetTop)

        left = left + parseInt(elem.offsetLeft)

        elem = elem.offsetParent}
    return {top: top, left: left}}
function getOffsetRect(elem) {

    var box = elem.getBoundingClientRect()
    var body = document.body
    var docElem = document.documentElement

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft

    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0
 
   var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft

    return { top: Math.round(top), left: Math.round(left)
 }}
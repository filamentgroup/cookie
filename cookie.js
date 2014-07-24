/*! cookie function. get, set, or forget a cookie. [c]2014 @scottjehl, Filament Group, Inc. Licensed MIT */
function cookie( name, value, days ){
	// if value is undefined, get the cookie value
	if( value === undefined ){
		var cookiestring = "; " + window.document.cookie;
		var cookies = cookiestring.split( "; " + name + "=" );
		if ( cookies.length === 2 ){
			return cookies.pop().split( ";" ).shift();
		}
		return null;
	}
	else {
		// if value is a false boolean, we'll treat that as a delete
		if( value === false ){
			days = -1;
		}
		var expires;
		if ( days ) {
			var date = new Date();
			date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
			expires = "; expires="+date.toGMTString();
		}
		else {
			expires = "";
		}
		window.document.cookie = name + "=" + value + expires + "; path=/";
	}
}

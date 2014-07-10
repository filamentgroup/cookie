cookie function
======

Get, set, or forget cookies.
Based on code from both http://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript and http://www.quirksmode.org/js/cookies.html

* [c]2014 @scottjehl, Filament Group, Inc. 
* Licensed MIT 

# API
* To get a cookie, pass only a name. It'll return `null` if undefined.
```js
cookie( "foo" );
```

* To set a cookie, pass a name, a string value, and optionally a number of days until the cookie expires
```js
cookie( "foo", "bar", 5 );
```

* To delete a cookie, pass a name, and a `false` value
```js
cookie( "foo", false );
```

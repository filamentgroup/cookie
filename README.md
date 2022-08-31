:warning: This project is archived and the repository is no longer maintained.

cookie function
======

Get, set, or forget cookies.

* [c]2014 @scottjehl, Filament Group, Inc. 
* Licensed MIT 

Based on code examples found at: 
- http://stackoverflow.com/posts/15724300/revisions by stackoverflow user kirlich
- http://www.quirksmode.org/js/cookies.html by PPK

# API

To get a cookie, pass only a name. It'll return `null` if undefined.
```js
cookie( "foo" );
```

To set a cookie, pass a name, a string value, and optionally a number of days until the cookie expires
```js
cookie( "foo", "bar", 5 );
```

To delete a cookie, pass a name, and a `false` value
```js
cookie( "foo", false );
```

# encrypted-cookie

Simply use aes encrypted cookie 

## framework support

- React JS _(no dependencies)_
- Angular JS _(no dependencies)_
- Node JS _(no dependencies)_
- pure JavaScript _(no dependencies)_

## Get started
## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

Using npm:

```bash
$ npm i encrypted-cookie
```

Using yarn:

```bash
$ yarn add encrypted-cookie
```

## Features

  * AES-unlimited encryption cookie service without key
  * AES-unlimited decryption cookie service without key
  * AES-unlimited encryption cookie service  with key
  * AES-unlimited decryption cookie service  with key
  * Store json array in cookie (Normally other cookie packages not support to store json array)
  * Set expire days
  * well secure AES Encryption
  * You can erase manually with erase function  


------

## Usage

```js
import CookieService from "encrypted-cookie";

//WithoutKey

CookieService.setCookie("userName", "Bavaram", 7); //set Cookie  (key,value,expire_days)
CookieService.getCookie("userName"); //get Cookie (key)
CookieService.setArrayCookie("userDetails", [{name:"bavaram",age:"23"}], 7);  //(key,jsonArray,expire_days)
CookieService.getArrayCookie("userDetails"); //get json array cookie (key)
CookieService.checkCookie("userDetails"); //Check cookie name available ,respones will be comes with boolean (key)
CookieService.eraseCookie("userDetails"); //erase set Cookie (key)

//WithKey
// Note: secretKey can be unlimited letters

CookieService.setCookie("userName", "Bavaram", 7,"passKey"); //set Cookie with encrypted key (key,value,expire_days,encrypt_Key)
CookieService.getCookie("userName","passKey"); //get Cookie with encrypted key (key,encrypt_Key)
CookieService.setArrayCookie("userDetails", [{name:"bavaram",age:"23"}], 7,"passKey"); //(key,jsonArray,expire_days,encrypt_Key)
CookieService.getArrayCookie("userDetails","passKey"); //(key,encrypt_Key)
CookieService.checkCookie("userDetails","passKey"); //Check cookie name available ,respones will be comes with boolean (key,encrypt_Key)
CookieService.eraseCookie("userDetails","passKey"); //erase set Cookie (key,encrypt_Key)

 
```


## Browser Support

Native support

- Chrome
- Safari
- FireFox
- Opera
- Internet Explorer 9+

Support for Internet Explorer 7 and 8 with [excanvas](https://code.google.com/p/explorercanvas/wiki/Instructions) polyfill.

## License

[MIT](LICENSE)


> Developed by Karunaaharan Bavaram

## Copyright

Copyright (c) 2022 Karunaaharan Bavaram, contributors. Released under the MIT licenses


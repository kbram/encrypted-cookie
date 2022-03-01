<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/kbram/encrypted-cookie">
    <img src="https://github.com/kbram/files/blob/main/encryption-icon.png" alt="Logo" width="160" height="160">
  </a>

  <h3 align="center">encrypted-cookie</h3>

  <p align="center">
    Simply use aes encrypted cookie
    <br />
    <a href="https://github.com/kbram/encrypted-cookie"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kbram/encrypted-cookie">View Demo</a>
    ·
    <a href="https://github.com/kbram/encrypted-cookie/issues">Report Bug</a>
    ·
    <a href="https://github.com/kbram/encrypted-cookie/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
   <li><a href="#about-project">About Project</a></li>
   <li><a href="#built-With">Built With</a></li>
   <li><a href="#features">Features</a></li>
   <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usages</a></li>
    <li><a href="#note">Note</a></li>
    <li><a href="#browser-support">Browser Support</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- PROJECT FEATHERS -->
## About Project

This is fully secure cookies with AES Encryption. You can store encrypted cookie. This is specially you can use unlimited length key and store unlimited length of string value in cookie. Encrypt Json array also storable. It's have default key value and you can change own key value to store.

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

* 100% [JavaScript](https://www.javascript.com/)


<p align="right">(<a href="#top">back to top</a>)</p>

## Features

  * AES-unlimited encryption cookie service without key
  * AES-unlimited decryption cookie service without key
  * AES-unlimited encryption cookie service  with key
  * AES-unlimited decryption cookie service  with key
  * Store json array in cookie (Normally other cookie packages not support to store json array)
  * Set expire days
  * well secure AES Encryption
  * You can erase manually with erase function  

<p align="right">(<a href="#top">back to top</a>)</p>

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
<p align="right">(<a href="#top">back to top</a>)</p>


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
<p align="right">(<a href="#top">back to top</a>)</p>

## Note
```js
CookieService.checkCookie() //=>returns boolean value 
// (If encrypted key is wrong => False)
// (cookie is not available   => False)

CookieService.eraseCookie()
// (If encrypted key is wrong  =>nothing happen)

```
<p align="right">(<a href="#top">back to top</a>)</p>

## Browser Support

Native support

- Chrome
- Safari
- FireFox

<p align="right">(<a href="#top">back to top</a>)</p>


## License

  [MIT](LICENSE)


>
> Developed by [`Karunaaharan Bavaram`](https://www.bavaram.info)

<p align="right">(<a href="#top">back to top</a>)</p>

## Copyright

Copyright (c) 2022 [`Karunaaharan Bavaram`](https://www.bavaram.info), contributors. Released under the MIT, GPL licenses

<p align="right">(<a href="#top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/kbram/encrypted-cookie.svg?style=for-the-badge
[contributors-url]: https://github.com/kbram/encrypted-cookie/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kbram/encrypted-cookie.svg?style=for-the-badge
[forks-url]: https://github.com/kbram/encrypted-cookie/network/members
[stars-shield]: https://img.shields.io/github/stars/kbram/encrypted-cookie.svg?style=for-the-badge
[stars-url]: https://github.com/kbram/encrypted-cookie/stargazers
[issues-shield]: https://img.shields.io/github/issues/kbram/encrypted-cookie.svg?style=for-the-badge
[issues-url]: https://github.com/kbram/encrypted-cookie/issues
[license-shield]: https://img.shields.io/github/license/kbram/encrypted-cookie.svg?style=for-the-badge
[license-url]: https://github.com/kbram/encrypted-cookie/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/bavaram


// @autor Karunaaharan Bavaram (Package owns by bavaram)

import AesEncryption from "./AesEncryption";
class CookieService {
  setCookie(name, value, exDate, key = "KarunaaharanBavaram") {
    var d = new Date();
    d.setTime(d.getTime() + exDate * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + AesEncryption.encrypt(value,key)+ ";" + expires + ";SameSite=Lax;path=/";
  }
  setArrayCookie(name, value, exDay,key = "KarunaaharanBavaram"){
    this.setCookie(name, JSON.stringify(value), exDay,key);
  }
  getArrayCookie(name,key = "KarunaaharanBavaram"){
    if(this.getCookie(name,key)===""){
      return "";
    }else{
      return JSON.parse(this.getCookie(name,key));
    }
  }
  getCookie(cname, key = "KarunaaharanBavaram") {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        try{
          return AesEncryption.decrypt(c.substring(name.length, c.length),key);
        }catch(error){
          return ""
        }
      }
    }
    return "";
  }

  checkCookie(name,key = "KarunaaharanBavaram") {
    var user = this.getCookie(name,key);
    if (user !== "") {
      return true;
    }
     return false;
    
  }
  eraseCookie(name,key = "KarunaaharanBavaram") {
    if(this.checkCookie(name,key)){
      this.setCookie(name,"",-1,key);
    }
  }
}

export default new CookieService();

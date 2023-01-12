/*

[rewrite_local]

^https:\/\/mime\.baidu\.com\/sapi\/v\d\/vip\/mywvip url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/BaiduKeyboard.js

[mitm] 

hostname = mime.baidu.com

*/

let Premium = $response.body
var modified = JSON.parse(Premium);

modified = {
  "ecode" : 0,
  "emsg" : "OK",
  "data" : {
    "vip_info" : "8MxeqfNsFYI_5xjP6O23I6pSAYyA5FjMIpAojIyZVf_TheoK85woYIMuBigia28bguvcfsvoA"
  }
};

$done({body:JSON.stringify(modified)});

/*

[rewrite_local]

^https:\/\/www\.40sishi\.com\/calculator\/user\/profile$ url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/CalculatorHD.js

[mitm] 

hostname = www.40sishi.com

*/

var Premium = $response.body;
var modified = JSON.parse(Premium);
modified = {"data":{"userId":"510004015","name":null,"gender":0,"avatar":null,"birthday":null,"mobile":null,"vipState":{"state":1,"forever":false,"startTime":1672502400000,"expireTime":4070880000000}},"code":1};
$done({body:JSON.stringify(modified)});

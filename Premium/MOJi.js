/*

[rewrite_local]

^https:\/\/api\.mojidict\.com\/parse\/functions\/getNPrivileges url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/MOJi.js

[mitm] 

hostname = api.mojidict.com

*/

let Premium = $response.body
var modified = JSON.parse(Premium);
modified.result.result[2] = {
        "identity" : "000-002-00001",
        "privilegeStatus" : "activated",
        "privilege" : {
          "status" : "cancel",
          "payType" : "4",
          "expiresDate" : 4070880000000,
          "purchaseDate" : 1672502400000,
        },
        "canPay" : true
      };
$done({body:JSON.stringify(modified)});

/*

> 应用名称：MOJi辞書:日语学习词典
> 软件版本：6.28.1
> 脚本作者：510004015
> 解锁说明：解锁部分高级会员功能，具体自测。
> 更新时间：2023-01-11

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

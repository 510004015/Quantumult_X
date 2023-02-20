/*

[rewrite_local]

^https:\/\/quark-api\.uc\.cn\/\d\/clouddrive\/member url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/Quark.js

[mitm] 

hostname = quark-api.uc.cn

*/

let Premium = $response.body;
var modified = JSON.parse(Premium);
modified.data = {
    "member_type" : "SUPER_VIP",
    "super_vip_exp_at" : 4070880000000,
    "total_capacity" : 6597069766656,
    "use_capacity" : modified.data.use_capacity,
  };
$done({body:JSON.stringify(modified)});

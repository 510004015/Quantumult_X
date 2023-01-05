/*

[rewrite_local]

^https:\/\/appwk\.baidu\.com\/naapi\/user\/getinfo url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/Baidulibrary.js

[mitm] 

hostname = appwk.baidu.com

*/

let Premium = $response.body;
var modified = JSON.parse(Premium);

modified.data.vip.base_vip_info = {"end_time":4070880000,"uid":510004015,"is_vip":1,"pro_total":0,"start_time":1672502400,"type":2,"remain_day":365,"normal_total":0};

$done({body:JSON.stringify(modified)});

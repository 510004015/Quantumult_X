/*

[rewrite_local]

^https:\/\/api-drive\.mypikpak\.com\/vip\/v\d\/vip\/info url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/PikPak.js

[mitm] 

hostname = api-drive.mypikpak.com

*/

let Premium = $response.body;
var modified = JSON.parse(Premium);
modified.data.status = "ok",
modified.data.expire = "2099-01-01T00:00:00+08:00",
modified.data.type = "platinum";
$done({body:JSON.stringify(modified)});

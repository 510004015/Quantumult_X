/*

[rewrite_local]

^https:\/\/appwk\.baidu\.com\/bgk\/(user\/getinfo|doc\/(getdocdownloadcopywriter|quedocsearch\?) url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/BuGuaKe.js

[mitm] 

hostname = appwk.baidu.com

*/

var url = $request.url;
var modified = JSON.parse($response.body);
const URL1 = '/user/getinfo';
const URL2 = '/doc/quedocsearch';
const URL3 = '/doc/getdocdownloadcopywriter';
if (url.indexOf(URL1) != -1) {
modified.data.saveMoney.sumMoney = "510004015";
modified.data.saveMoney.user_vip_tip = "永久会员";
modified.data.vip = {"jiaoyu_vip_info":{"uid":510004015,"is_vip":1,"start_time":1672502400,"end_time":4070880000,"pro_total":510004015,"remain_day":510004015}};
     body = JSON.stringify(modified);
};
if (url.indexOf(URL2) != -1) {
	var body = $response.body.replace(/"isLimit":\d/g, '"isLimit":0').replace(/"isPay":\d/g, '"isPay":0');
};
if (url.indexOf(URL3) != -1) {
modified.data.downloadStatus = 19;
modified.data.copywriter2 = "因为下载需要验证Token，So～想下载花钱吧。🤡";
     body = JSON.stringify(modified);
};
$done({ body });

/*

[rewrite_local]

# > 阿里云盘优化
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/aliyun.js

[mitm]

hostname=api.aliyundrive.com

*/

let obj = JSON.parse($response.body);
if (obj.result) {
    obj.result = Object.values(obj.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(obj) });

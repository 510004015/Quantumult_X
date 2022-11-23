/*

[rewrite_local]

# > 郑好办开屏广告
^https:\/\/app-izz\.zhengzhou\.gov\.cn:10019\/bizgw\/gateway\.do url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/zhbkp.js

[mitm]

hostname = app-izz.zhengzhou.gov.cn

*/

let OBJ = JSON.parse($response.body);
OBJ.data.modules.data=[{}]
$done({ body: JSON.stringify(OBJ) });

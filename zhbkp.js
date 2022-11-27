/*

[rewrite_local]

^https:\/\/app-izz\.zhengzhou\.gov\.cn url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/zhbkp.js

[mitm] 

hostname = app-izz.zhengzhou.gov.cn

*/

var body = $response.body;
var url = $request.url;
var op = JSON.parse(body);
const hs = '/bizgw\/gateway\.do';
if (url.indexOf(hs) != -1) {
    op.data.modules[0].data[0].imgUrl16x9 = "";
    op.data.modules[0].data[0].imgUrl19_5x9 = "";
    body = JSON.stringify(op);
}
$done({body});

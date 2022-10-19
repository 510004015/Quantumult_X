/*
[rewrite_local]

^https:\/\/unified-area-code-n-service\.jianguan\.henan\.gov\.cn url script-response-body csm.js

hostname = unified-area-code-n-service.jianguan.henan.gov.cn
/*
var body = $response.body;
var url = $request.url;
var op = JSON.parse(body);
const hs = '/nucleicapi/nucvac/info/v2';
if (url.indexOf(hs) != -1) {
    op.obj.nucleicInfo.timeDesc = "24";
    body = JSON.stringify(op);
}
$done({body});

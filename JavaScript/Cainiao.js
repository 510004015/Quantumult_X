var url = $request.url;
var body = JSON.parse($response.body);
const URL1 = 'cainiao.guoguo.nbnetflow.ads.index.cn';
const URL2 = 'cainiao.nbpresentation.protocol.homepage.get.cn';
const URL3 = 'cainiao.adkeyword.get.cn';
if (url.indexOf(URL1) != -1) {body.data.result.length=1};
if (url.indexOf(URL2) != -1) {
body.data.result.dataList.pop();
body.data.result.dataList[1].bizData.items.splice(0,5);
};
if (url.indexOf(URL3) != -1) {body.data.result.adHotKeywords.length=0};
$done({body:JSON.stringify(body)});

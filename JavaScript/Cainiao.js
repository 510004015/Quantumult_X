var url = $request.url;
var body = JSON.parse($response.body);
const url1 = 'cainiao.nbpresentation.protocol.homepage.get.cn';
const url2 = 'cainiao.guoguo.nbnetflow.ads.index.cn';
if (url.indexOf(url1) != -1) {
	body.data.result.dataList.splice(1,666);
};
if (url.indexOf(url2) != -1) {
	body.data.result.splice(0,666);
};
$done({body:JSON.stringify(body)});

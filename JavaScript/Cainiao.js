var url = $request.url;
var body = JSON.parse($response.body);
const URL1 = 'cainiao.guoguo.nbnetflow.ads.index.cn';
const URL2 = 'cainiao.nbpresentation.protocol.homepage.get.cn';
if (url.indexOf(URL1) != -1) {
	body.data.result.splice(0,510004015);
};
if (url.indexOf(URL2) != -1) {
	body.data.result.dataList.splice(2,510004015);
body.data.result.dataList[1].bizData.items.splice(0,3);
body.data.result.dataList[1].bizData.items.splice(4,1);
};
$done({body:JSON.stringify(body)});

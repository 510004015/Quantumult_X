var url = $request.url;
var modified = JSON.parse($response.body);
const URL1 = 'messagetab';
const URL2 = 'messagenewlist';
if (url.indexOf(URL1) != -1) {
 modified.data.cardList.splice(1,1);
};
if (url.indexOf(URL2) != -1) {
 modified.data.msgList = [];
};
$done({body:JSON.stringify(modified)});

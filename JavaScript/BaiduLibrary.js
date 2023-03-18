var modified = JSON.parse($response.body);
modified.data.bannerList.splice(0,510004015);
modified.data.bannerInfo = {};
$done({body:JSON.stringify(modified)});

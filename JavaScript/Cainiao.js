var modified = JSON.parse($response.body);
modified.data.result.dataList.splice(1,3);
$done({body:JSON.stringify(modified)});

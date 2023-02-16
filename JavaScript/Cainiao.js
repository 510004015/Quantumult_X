var modified = JSON.parse($response.body);
modified.data.result.dataList[1].bizData.items.splice(0,3);
modified.data.result.dataList[1].bizData.items.splice(1,1);
$done({body:JSON.stringify(modified)});

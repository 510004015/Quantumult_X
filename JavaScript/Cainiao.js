var modified = JSON.parse($response.body);
modified.data.result.dataList[1].bizData.items.splice(0,4);
modified.data.result.dataList.splice(2,1);
$done({body:JSON.stringify(modified)});

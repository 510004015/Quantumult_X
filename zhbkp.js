/*

[rewrite_local]

# > 郑好办开屏广告
^https:\/\/app-izz\.zhengzhou\.gov\.cn:10019\/bizgw\/gateway\.do url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/zhbkp.js

[mitm]

hostname = app-izz.zhengzhou.gov.cn

*/

let OBJ = JSON.parse($response.body);
OBJ.data.modules.data={
  "code" : "1000",
  "sign" : "cb52a218298ab4cf0e5af0510d8b008b",
  "data" : {
    "global" : {
      "trackMap" : "{\"pageFlag\":\"startPage\",\"pageId\":6}",
      "pageFlag" : "startPage",
      "navTransparent" : true,
      "pageId" : 6
    },
    "notModify" : false,
    "configVersion" : "1667537529743",
    "modules" : [
      {
        "indicator" : {
          "show" : false,
          "position" : "center",
          "type" : 0
        },
        "instanceId" : 49,
        "moduleFlag" : "startPage",
        "limitNum" : 1,
        "data" : [
          {
            "imgUrl16x9" : "",
            "trackMap" : "{\"pageFlag\":\"startPage\",\"pageId\":\"6\",\"instanceId\":49,\"slot\":0,\"title\":null,\"moduleFlag\":\"startPage\"}",
            "imgUrl19_5x9" : "",
            "targetUrl" : ""
          }
        ],
        "order" : 0,
        "interval" : 0
      }
    ]
  },
  "msg" : "success",
  "message" : "succ",
  "subCode" : "0"
}
;
$done({ body: JSON.stringify(OBJ) });

/*

[rewrite_local]

^https:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/Wps.js

[Mitm]

hostname = account.wps.cn

*/

let Premium = $response.body;
var modified = JSON.parse(Premium);
modified = {
  "result" : "ok",
  "total_cost" : -30,
  "privilege" : [
    {
      "times" : 0,
      "expire_time" : 4070880000,
      "spid" : "data_recover"
    },
    {
      "times" : 0,
      "expire_time" : 4070880000,
      "spid" : "ocr"
    },
    {
      "times" : 0,
      "expire_time" : 4070880000,
      "spid" : "pdf2doc"
    },
    {
      "times" : 0,
      "expire_time" : 4070880000,
      "spid" : "pdf_merge"
    },
    {
      "times" : 0,
      "expire_time" : 4070880000,
      "spid" : "pdf_sign"
    },
    {
      "times" : 0,
      "expire_time" : 4070880000,
      "spid" : "pdf_split"
    }
  ],
  "userid" : modified.userid,
  "wealth" : 0,
  "level" : 3,
  "expire_time" : 4070880000,
  "exp" : 0,
  "vip" : {
    "memberid" : 40,
    "expire_time" : 4070880000,
    "name" : "超级会员",
    "has_ad" : 0,
    "enabled" : [
      {
        "name" : "超级会员",
        "expire_time" : 4070880000,
        "memberid" : 40
      },
      {
        "name" : "WPS会员",
        "expire_time" : 4070880000,
        "memberid" : 20
      },
      {
        "name" : "稻壳会员",
        "expire_time" : 4070880000,
        "memberid" : 12
      }
    ]
  },
  "total_buy" : 0
};
$done({ body: JSON.stringify(modified)});

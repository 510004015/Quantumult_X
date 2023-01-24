/*

[rewrite_local]

^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/api\/users url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/Wps.js

[Mitm]

hostname = *account.wps.cn, *account.wps.com

*/

let Premium = $response.body;
var modified = JSON.parse(Premium);
modified = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 4070880000 },
    { spid: "ocr", times: 0, expire_time: 4070880000 },
    { spid: "pdf2doc", times: 0, expire_time: 4070880000 },
    { spid: "pdf_merge", times: 0, expire_time: 4070880000 },
    { spid: "pdf_sign", times: 0, expire_time: 4070880000 },
    { spid: "pdf_split", times: 0, expire_time: 4070880000 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: modified.userid,
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 4070880000,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 4070880000 },
      { memberid: 20, name: "WPS会员", expire_time: 4070880000 },
      { memberid: 12, name: "稻壳会员", expire_time: 4070880000 }
    ]
  },
  wealth: 0,
  expire_time: 4070880000
};
$done({ body: JSON.stringify(modified)});

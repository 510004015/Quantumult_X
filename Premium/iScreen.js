/*

[rewrite_local]

^https:\/\/cs\.kuso\.xyz\/configs url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/iScreen.js

[mitm] 

hostname = cs.kuso.xyz

*/

var Premium = $response.body;
var modified = JSON.parse(Premium);
modified = {
  "status" : 0,
  "data" : {
    "noAds" : 0,
    "showOurApp" : 1,
    "Hudong_Interval" : 900,
    "vipPopupType" : 1,
    "BannerAd" : 100,
    "country" : "tw",
    "FeedBanner" : "3333",
    "launchAd" : 3,
    "xiaohongshu" : "https://www.xiaohongshu.com/user/profile/5fa3bfe9000000000101faae",
    "mainPop" : {
      "mainPop_url" : "https://apps.apple.com/app/id1525347157",
      "mainPop_img" : "https://cdnq.kuso.xyz/images/mainpop/open_zmszhgg_cn.jpg"
    },
    "FeedAd" : 100,
    "douyin" : "https://v.douyin.com/FDTcBfg/",
    "lockscreen_noVip" : "0,1",
    "mainPop_open" : 0,
    "lang" : "zh",
    "SplashInter" : 150,
    "rewardAd" : 3,
    "ai_painting" : 1,
    "pic_lock_count" : 50
  },
  "ab" : 0
};
$done({body:JSON.stringify(modified)});

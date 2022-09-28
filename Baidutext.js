/******************************

脚本功能：百度文库+解锁VIP文档查看权限
脚本作者：510004015
更新时间：2022-9-28
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！


*******************************

[rewrite_local]

^https:\/\/appwk\.baidu\.com\/naapi\/user\/getinfo url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Baidutext.js

[mitm] 

hostname = appwk.baidu.com


*******************************/

var body = $response.body;
var data = JSON.parse(body);

data = {"status":{"code":0,"msg":""},"data":{"isNewVipSwitch":1,"invitationCode":"","newUserCenterMsg":"","myInvitationCode":"","isTodayNewUser":0,"username":"问好","avatar":"https:\/\/himg.bdimg.com\/sys\/portraitn\/item\/public.1.4f01cae2.KcHd6Qpv5Eyx1Td6QcmVQQ","auth":1,"popup":0,"userWealth":0,"downloadTicket":0,"impendingFailureTicket":0,"signinStatus":0,"stSigninStatus":0,"vip":{
      "base_vip_info":[],
      "edu_vip_info":[],
      "jiaoyu_vip_info":{
        "uid":888888,
        "type":2,
        "start_time":1621267200,
        "end_time":9876543210,
        "is_vip":1,
        "remain_day":1,
        "pro_total":5,
        "normal_total":0
      },"new_vip_info":[],"end_time":null,"remain_day":-19262},"task_list":[1,2,3,4,101,102,103,1001],"navipMutexInfo":{"status":0,"msg":""},"oldVipOrNewVip":1,"navipMutexInfoNew":[],"expireVipInfo":{"expireRemaindTime":0,"isExpireVip":false},"shopInfo":{},"isShop":0,"coin":"0.00","isLock":0,"lockReason":"","customerTag":1,"isNewCustomer":1,"newCustomerStyle":1,"newCustomerSwitch":0,"isSendVoucher":false,"voucherCount":1,"totalOff":0,"totalNum":0,"vipDoc":0,"doc8total":0,"freeDoc":0,"docConv":0,"vipDay":null,"uid_str":"1660e391a48da0116c175f0e7cd184254b351bcb","activityDesc":"","discountCard":{"isShow":false}}}
body = JSON.stringify(data);

$done({body});

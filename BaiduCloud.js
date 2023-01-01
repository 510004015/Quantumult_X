/*

[rewrite_local]

^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/BaiduCloud.js

[mitm] 

hostname = pan.baidu.com

*/
var opt=JSON.parse($response.body);
opt={
  "product_infos" : [
    {
      "product_id" : "5210897752128663390",
      "end_time" : 2147483648,
      "buy_time" : "1428229342",
      "cluster" : "offlinedl",
      "status" : "0",
      "start_time" : 1428229342,
      "function_num" : 2,
      "buy_description" : "离线下载套餐(永久)",
      "product_description" : "离线下载套餐(永久)",
      "detail_cluster" : "offlinedl",
      "product_name" : "offlinedl_permanent"
    },
    {
      "cur_svip_type" : "month",
      "product_name" : "svip2_nd",
      "product_description" : "",
      "function_num" : 0,
      "start_time" : 1671956816,
      "buy_description" : "",
      "buy_time" : 0,
      "product_id" : "",
      "auto_upgrade_to_svip" : 0,
      "end_time" : 1706198399,
      "cluster" : "vip",
      "detail_cluster" : "svip",
      "status" : 0
    },
    {
      "product_name" : "contentvip_nd",
      "product_description" : "",
      "function_num" : 0,
      "start_time" : 1671956817,
      "buy_description" : "",
      "buy_time" : 0,
      "product_id" : "",
      "auto_upgrade_to_svip" : 0,
      "end_time" : 1706198399,
      "cluster" : "contentvip",
      "detail_cluster" : "contentvip",
      "status" : 0
    }
  ],
  "center_skip_config" : {
    "action_type" : 0,
    "action_url" : "https://pan.baidu.com/buy/center?tag=8"
  },
  "last_privilege_card_v2" : {

  },
  "current_privilege_card" : [

  ],
  "current_product_v2" : {
    "product_id" : "12187135090581539740",
    "detail_cluster" : "svip",
    "cluster" : "vip",
    "product_type" : "vip2_1m_auto"
  },
  "request_id" : 14204963865703202,
  "current_privilege_card_v2" : {

  },
  "up_product_infos" : [

  ],
  "last_privilege_card" : [

  ],
  "level_info" : {
    "history_value" : 140,
    "current_level" : 1,
    "last_manual_collection_time" : 0,
    "current_value" : 140,
    "history_level" : 1,
    "v10_id" : ""
  },
  "user_tag" : "{\"has_buy_record\":1,\"has_buy_vip_svip_record\":1,\"last_buy_record_creat_time\":1671956796,\"is_vip\":0,\"is_svip\":1,\"last_vip_type\":1,\"last_vip_svip_end_time\":1674662399,\"is_svip_sign\":0,\"notice_user_type\":2,\"notice_user_status\":3,\"is_first_act\":0}",
  "currenttime" : 1672555317,
  "previous_product" : [

  ],
  "current_product" : {
    "product_id" : "12187135090581539740",
    "detail_cluster" : "svip",
    "cluster" : "vip",
    "product_type" : "vip2_1m_auto"
  },
  "reminder" : {
    "reminderWithContent" : [

    ],
    "advertiseContent" : [

    ],
    "svip" : {
      "leftseconds" : 2107082,
      "nextState" : "normal"
    }
  },
  "previous_product_v2" : {

  }
}
;
$done({body:JSON.stringify(opt)});

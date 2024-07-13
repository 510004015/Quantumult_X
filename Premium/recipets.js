/*

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/v1\/receipts$ url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/recipets.js

[mitm] 

hostname = api.revenuecat.com

*/

var jsonData;

try {
  jsonData = JSON.parse($response.body);
  console.log("已成功接收并解析 JSON 数据");
} catch (error) {
  console.log("未能解析 $response.body:", error.message);
  // 解析失败时，原样返回 $response.body
  $done({body: $response.body});
  return; // 直接返回，避免继续执行后续代码
}

// 继续后续操作，如果 jsonData 解析成功则进行相关处理
if (jsonData) {
  // 对 jsonData 进行修改
  jsonData = {
    "request_date_ms": 1720032357752,
    "request_date": "2024-07-03T18:45:57Z",
    "subscriber": {
      "non_subscriptions": {},
      "first_seen": "2024-07-02T19:08:38Z",
      "original_application_version": "142",
      "other_purchases": {},
      "management_url": "https://apps.apple.com/account/subscriptions",
      "subscriptions": {
        "smsguard_plus": {
          "original_purchase_date": "2024-07-03T18:44:31Z",
          "expires_date": "2099-01-01T00:00:00Z",
          "is_sandbox": false,
          "refunded_at": null,
          "store_transaction_id": "110002190946666",
          "unsubscribe_detected_at": null,
          "grace_period_expires_date": null,
          "period_type": "trial",
          "purchase_date": "2024-07-03T18:44:30Z",
          "billing_issues_detected_at": null,
          "ownership_type": "PURCHASED",
          "store": "app_store",
          "auto_resume_date": null
        }
      },
      "entitlements": {
        "pro_cn": {
          "grace_period_expires_date": null,
          "purchase_date": "2024-07-03T18:44:30Z",
          "product_identifier": "smsguard_plus",
          "expires_date": "2099-01-01T00:00:00Z"
        }
      },
      "original_purchase_date": "2023-01-08T16:45:27Z",
      "original_app_user_id": "$RCAnonymousID:9036d9d00b424d8d95220aa41e5278ac",
      "last_seen": "2024-07-03T18:38:17Z"
    }
  };
  console.log("已成功修改 JSON 数据");
} else {
  console.log("未能修改 JSON 数据");
}

// 将 jsonData 转换为 JSON 字符串并返回
$done({body: JSON.stringify(jsonData)});

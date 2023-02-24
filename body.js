/*
[rewrite_local]
  
# ～ 方弗相机☆解锁会员权限（2023-02-24）@ddgksf2013
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/body.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm]
 
hostname=api.revenuecat.com
*/
var modified = {"request_date_ms":1662599120248,"request_date":"2022-09-08T01:05:20Z","subscriber":{"last_seen":"2022-09-08T01:04:03Z","first_seen":"2022-09-08T01:04:03Z","original_application_version":"8","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{"com.ddgksf2013.premium.yearly":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"2029-12-18T01:04:17Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-09-08T01:04:18Z","purchase_date":"2022-09-08T01:04:17Z","store":"app_store"},"com.uzero.funforcam.monthlysub":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"2029-12-18T01:04:17Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-09-08T01:04:18Z","purchase_date":"2022-09-08T01:04:17Z","store":"app_store"}},"entitlements":{"ProVersion":{"expires_date":"2029-12-18T01:04:17Z","purchase_date":"2022-09-08T01:04:17Z","product_identifier":"com.uzero.funforcam.monthlysub","grace_period_expires_date":null},"Entitlement.Pro":{"expires_date":"2029-12-18T01:04:17Z","purchase_date":"2022-09-08T01:04:17Z","product_identifier":"com.uzero.funforcam.monthlysub","grace_period_expires_date":null}},"original_purchase_date":"2022-09-07T13:05:43Z","original_app_user_id":"$RCAnonymousID:ddgksf2013","non_subscriptions":{}},"Attention":"恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！"}
$done({body:JSON.stringify(modified)});

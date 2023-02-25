/*

[rewrite_local]

^https:\/\/backend\.mealligram\.com\/api\/v\d\/purchase\/verifyReceipt url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/Mg.js

[mitm]

hostname = backend.mealligram.com

*/

let Premium = $response.body;
var modified = JSON.parse(Premium);
modified = {
  "expiresAt" : 4070880000,
  "productId" : "com.LeFal.Mealligram.pro.oneYear"
};
$done({body:JSON.stringify(modified)});

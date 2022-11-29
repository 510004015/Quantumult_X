/*

[rewrite_local]

^https:\/\/tagit\.lanjie100\.com\/cypt\/block100\/get_vip_info url script-request-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Lanjie100.js

;^https:\/\/tagit\.lanjie100\.com\/cypt\/block100\/get_vip_info url script-request-body Lanjie100.js

[mitm] 

hostname = tagit.lanjie100.com

*/

var body = $request.body;
body = "xr4L2J3srJrGuS9a4ZXDKqHcedAmvNJjCe5+pWmMz7DJebCY0M+fNNMpRQJ8vceTn0zVGOedyHMCZg7uH3BOWC3GkY0LSSYzr5LDDmnX3+XUcvU7rEWe9vIbTbOhz66/0m38BC4NamJrzsoBq+mGteg85+wvehjBhWf/2knyLebe4Tg0v1YnGcIr/HkIHpyMlYZ5dY0DqHpS6nSUsQVS39Ds0FxmvLkhE5FJDVBCvSNtqH3wexs30MYsjjvt81tiCwMh7FpG40H0f5JjMnrbiL28rUtYfjWDE/Ax9/29Hr4t5+E3zLsSn4JBehvKTFDSHj++SWZmFMgUNvdjV0x5ctGCBVCDdkW9wVieeAaybVrC4U8OrAiC/Dc5rSBxUtVEz6qmaT7YG41D1BEd6idm+qaby+mHVtDIgYzb75l//pHLQ1e+sAnNCgoGj1bgHb4/iysb/CVB59a2vPtv7QrXcDsxuUYIiOphGWumS1IjD6w7rUG73nTFM2N8okUc8+GhWSzluH6qLB5/wn5coHJv3W5AHTN0EsAw4ZZ4vJyUVaY="
$done({body});

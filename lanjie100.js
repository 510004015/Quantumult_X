/*

[rewrite_local]

;^https:\/\/tagit\.lanjie100\.com\/cypt\/block100\/get_vip_info url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/lanjie100.js

^https:\/\/tagit\.lanjie100\.com\/cypt\/block100\/get_vip_info url script-response-body lanjie100.js

[mitm] 

hostname = tagit.lanjie100.com

*/

var body = $response.body;
body = "lvCQG8cCxqficLk+LttK+BvEyd/oY7iJQqXq5+HJjLo58nmryQhDhUse4Q8OeNvtguKrOGTiOOxMSHyKPWLF5xh6qYRnP1rMzNTNjc5Gvlf1TtiJxXE947TZNkIg+HkgQL4ngenyoJGIxAUcNE5W2muVtmF1XQsNWpJNXuRL8MDAcAox1dBV8ySgfy0RhFpWDU10AR4kjOq2EWyYT6xT5dJBuNT8OuJBjGRkovGUCbCPgxuRq4pe7Ly1JSyMbyD7";
$done({body});

/*

[rewrite_local]

^https:\/\/tagit\.lanjie100\.com\/cypt\/block100\/get_vip_info url script-request-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/Lanjie100.js

[mitm] 

hostname = tagit.lanjie100.com

*/

var body = $request.body;
body = "qGX99Jp/XnFeISA9cr67EYxlOFk7OFj+0WTjlk7dXRLoTaawj0WVpgMC3xgsbyrYsZjNQENqFQ9wTyObcZW9i9KY51GZTdenvr4mjmhFFhUmHu7AtrzNCNEzcLkUJwGk6yIdCN6q7j+CkAaC0qa/kPabi3jSC3Fwor3ETrRNI9d/TGOg1PuYOkiH71f0qCc2R589Y13lY7ccluiLKP2N2irBzJt/6IjqmGwJRRlJqMqNCdgFPpTiZ9SHtSLuDtdAmqqCqCiou0zvEodED6iPQ6grCZNHsugd/d4b2Ya7jYvSi3jhk9vwOZNl6z+0oni1hUt1JseDQmwoIoFb9ypSMKpBF0PNNxnyKJPcIbZfEVlWw5xw3QEvq77QK+r5wTHDttoDLeV13Fy2Ne2KfG+bNkdCN1H4L8J+I6FHazec715yD8ldPrGUYR3FMe3y6iSr5gyDMUluRAjCOZlN+Z3GHAZdsBUxYUOy2fP1MXaTx1oBTRlBkuzSMyp4mkPcR+hKC3rFraGmrDHY4PKn0JRip3LZSagkCecp+3TTF6ewBrxMceG2vY7hywZvjjlHjNF5";
$done({body});

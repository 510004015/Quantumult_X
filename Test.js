if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['city'] + ' ' + obj['query'] + ' ' + obj['timezone'];
var ip = obj['query'];
var description = "国家" + ":" + obj['country'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "IP" + ":" + obj['query'];


$done({title, subtitle, ip, description});

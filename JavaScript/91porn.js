let reg = '<head>';
let str = '<head>\
<link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
<script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>'
let body = $response.body.replace(reg, str).replace(/player\.preroll\([\s\S]+?\);/g, 'player.preroll();');
let headers = $response.headers;
headers['Content-Security-Policy'] = '';
$done({headers, body})

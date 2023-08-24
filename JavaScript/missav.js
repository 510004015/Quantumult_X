let window_open_reg = 'window.open';
let window_open_str = '';
let reg = '<head>';
let str = '<head>\
<link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />'
let body = $response.body.replace(reg, str).replace(window_open_reg, window_open_str);
let headers = $response.headers;
headers['Content-Security-Policy'] = "child-src	'self'";
$done({ headers, body})

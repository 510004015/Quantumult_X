let body = $response.body.replace(/player\.preroll\(\{[^}]+\}\);/, 'player.preroll();'))
$done({body})

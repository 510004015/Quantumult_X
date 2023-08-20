var body = $response.body.replace(/player\.preroll\([\s\S]+?\);/g, 'player.preroll();')
$done({body})

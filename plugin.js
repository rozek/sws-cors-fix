function onStart (server, options) {
  // nop
}

function onRequest (req, res, options, preventDefault) {
  if (req.method === 'OPTIONS') {
    if (typeof preventDefault === 'function') { preventDefault() }

    res.setHeader('access-control-allow-methods','*')
    res.setHeader('access-control-allow-origin', '*')
    res.setHeader('access-control-allow-headers','*')
    res.setHeader('access-control-allow-credentials','true')
    res.writeHead(200)
    res.end()
  }
}

module.exports = { onStart, onRequest }
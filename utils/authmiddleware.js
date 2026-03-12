const AUTH_TOKEN = process.env.AUTH_TOKEN || 'devtoken'

module.exports = function (req, res, next) {
  const auth = req.headers['authorization']
  if (!auth) return res.status(401).json({ error: 'Unauthorized' })

  const parts = auth.split(' ')
  if (parts.length !== 2) return res.status(400).json({ error: 'Bad Authorization header' })

  const token = parts[1]
  if (token !== AUTH_TOKEN) return res.status(403).json({ error: 'Forbidden' })

  next()
}

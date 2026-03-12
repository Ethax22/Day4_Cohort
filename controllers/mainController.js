const service = require('../services/mainService')

exports.create = (req, res) => {
   try {
      const item = service.create(req.body)
      const safeItem = {
         id: item.id,
         title: item.title
      }
      res.status(201).json(safeItem)
   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}

exports.list = (req, res) => {
   try {
      const data = service.list()
      const safeData = data.map(item => ({ id: item.id, title: item.title }))
      res.json(safeData)
   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}

exports.remove = (req, res) => {
   try {
      service.remove(req.params.id)
      res.status(204).end()
   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}
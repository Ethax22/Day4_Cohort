const service = require("../services/mainService")

exports.create = (req, res) => {
    if (!req.body.title || !req.body.secret) {
        return res.status(400).json({ message: "Missing required fields: title and secret" })
    }
    const item = service.create(req.body)
    res.json(item)
}

exports.list = (req, res) => {
    const data = service.list()
    res.json(data)
}

exports.remove = (req, res) => {
    service.remove(req.params.id)
    res.json({ message: "deleted" })
}
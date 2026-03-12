const service = require("../services/mainService")

exports.create = (req, res) => {
    const { title, secret, amount, type } = req.body;


    if (
        !title ||
        !secret ||
        amount === undefined || typeof amount !== 'number' || isNaN(amount) ||
        amount <= 0 || !['income', 'expense'].includes(type)
    ) {
        return res.status(400).json({ message: "Invalid or missing required fields" })
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
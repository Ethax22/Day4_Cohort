const { readData, writeData } = require("../utils/fileStorage")
const idGen = require("../utils/idGenerator")
const cryptoService = require("./cryptoService")

const FILE = "data/data.json"

exports.create = function (data) {

    const list = readData(FILE)

    const item = {
        id: idGen(list),
        title: data.title,
        secret: cryptoService.encrypt(data.secret),
        amount: data.amount,
        type: data.type
    }

    list.push(item)

    writeData(FILE, list)

    return item

}

exports.list = function () {
    const list = readData(FILE);
    let totalBalance = 0;

    list.forEach(item => {
        const amount = Number(item.amount) || 0;
        if (item.type === 'income') {
            totalBalance += amount;
        } else if (item.type === 'expense') {
            totalBalance -= amount;
        } else {
            totalBalance += amount;
        }
    });

    return { transactions: list, balance: totalBalance };
}


exports.remove = function (id) {

    const list = readData(FILE)

    const newList = list.filter(i => i.id != id)

    writeData(FILE, newList)

}
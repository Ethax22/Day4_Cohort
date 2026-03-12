const fs = require("fs")

exports.readData = function (path) {

  const raw = fs.readFileSync(path)

  return JSON.parse(raw)

}

exports.writeData = function (path, data) {
  try {

    fs.writeFileSync(path, JSON.stringify(data, null, 2))
  } catch (err) {
    console.error(err)

    throw err
  }
}

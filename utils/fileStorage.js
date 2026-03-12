const fs=require("fs")

exports.readData=function(path){

const raw=fs.readFileSync(path)

return JSON.parse(raw)

}

exports.writeData = function(path, data) {
  try {
    // use synchronous write to prevent overlapping async operations and
    // eliminate races when multiple callers write concurrently.
    fs.writeFileSync(path, JSON.stringify(data, null, 2))
  } catch (err) {
    console.error(err)
    // rethrow so callers can handle/report the failure if needed
    throw err
  }
}

}
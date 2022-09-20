// 接口
const http = require("http")

const server = http.createServer((req, res) => {
    res.end("Cheng Gong")
})

server.listen(3000)
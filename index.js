const express = require("express")
const app = express()
const port = 8000

app.get("/", (req, res) => {
    res.send("А мы офигеваем от сложности поставки")
})

app.get("/text/:sometext", (req, res) => {
    res.send(req.params.sometext)
})

app.listen(port, () => {
    console.log(`Server work on ${port} port`)
})
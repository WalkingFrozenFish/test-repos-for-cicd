const express = require("express")
const app = express()
const port = 8000

app.get("/", (req, res) => {
    res.send("1йцуйцwerwerwerwerwerуйцу")
})

app.listen(port, () => {
    console.log(`Server work on ${port} port`)
})
const express = require("express")
const app = express()
const port = 8000

app.get("/", (req, res) => {
    res.send("Some other response from server with deploy github actions. Ebaniy ubuntu...")
})

app.listen(port, () => {
    console.log(`Server work on ${port} port`)
})
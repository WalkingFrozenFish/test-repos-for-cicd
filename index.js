const express = require("express")
const app = express()
const port = 8000

app.get("/", (req, res) => {
    res.send("Some other 1 response from server. Ebaniy ubuntu...")
})

app.listen(port, () => {
    console.log(`Server work on ${port} port`)
})
const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())




app.listen(4004, () => console.log('Server is up on 40004'))
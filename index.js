const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

const imageRouter = require('./routers/image')
const userRouter = require('./routers/user')

app.use(imageRouter)
app.use(userRouter)








app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const jsonParser = express.json();

const auth = require('./routers/auth')
const imageRouter = require('./routers/image')
const userRouter = require('./routers/user')
const authMiddleware = require("./auth/middleware")


app.use(jsonParser);
app.use(auth);
app.use("/images", authMiddleware, imageRouter)
app.use(  userRouter)









app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
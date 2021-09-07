const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

const app = express()
app.use(express.json())
app.use('/api',userRouter)
app.use('/api',postRouter)

app.listen(3005,(req,res)=>{
    console.log("STARTED")
})
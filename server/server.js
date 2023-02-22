const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const db = "mongodb+srv://user:flqtTuNHvZufGtjG@cluster0.56s5rtb.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});
mongoose.set('strictQuery', false)





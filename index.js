const path = require('path')
const express = require ('express')
const mongoose = require ('mongoose')
const app = express()

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/shop_db')
 .then(() => console.log('MongoDB connected'))
.catch(error => console.log("error:", error));
 

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs' )

app.get('/', (req,res) =>{
    res.send('Hello world')
}
)


app.listen(3000, () =>{
    console.log('shop app listening on http://127.0.0.1:3000')
})

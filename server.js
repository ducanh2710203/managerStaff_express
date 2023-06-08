const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4343
app.set("view engine", "ejs")
app.set("views",'./views')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

let arrStaff = [
    {
        id: '1',
        name: 'ducanh',
        department : 'development',
    },
    {
        id: '2',
        name: 'binh',
        department : 'security',
    }
]
app.get('/',(req, res)=>{
    res.render('home',{arrStaff:arrStaff})
})
app.get("/delete" ,(req, res)=>{

    arrStaff.forEach((value, index)=>{
        let getId = req.query.id

        if (value.id === getId){

            arrStaff.splice(index, 1)
        }
    })
    res.redirect('/');
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
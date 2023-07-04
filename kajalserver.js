;;;;;;;;;;;;;;;;;;;;;;;;;install express, {json} from "express"

const app = express()
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(json())

app.get("/ajaxkajal",(req, res)=>{
    res.render("ajaxss")
})

app.get("/message", (req, res)=>{
    res.send({sender:"kajal", receiver:"rajodiya"})
})

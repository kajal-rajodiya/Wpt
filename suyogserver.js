install express, {json} from "express"

const app = express()
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(json())

app.get("/ajaxsuyog",(req, res)=>{
    res.render("ajaxss")
})

app.get("/message", (req, res)=>{
    res.send({sender:"suyog", receiver:"shejul"})
})
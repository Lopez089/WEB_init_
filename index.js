let express =  require("express");

let app = express();

app.set("view engine", "jade")
app.use(express.static('public'));
app.get("/", function(req,res){

    res.render("index");
    
});

app.get("/contacto", function(req,res){
    res.render("contacto")
})

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () =>{

});
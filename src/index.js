const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const productos = require("./routes/productos");
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use("/api",productos);
app.listen(PORT,()=>{
    console.log(`server is run on port ${PORT}`)
})
const express = require("express");
const fs = require("fs");
const { Router } = express;
const router = new Router;

const array = [{
    id:1,
    nombre:"Jordan 1 Hight Chicago",
    descripcion:"Icónicas jordan",
    codigo:1,
    imagen:"",
    precio:2000,
    stock:true
},{
    id:2,
    nombre:"Jordan retro 11",
    descripcion:"hermoso par",
    codigo:2,
    imagen:"",
    precio:250,
    stock:true
}]
const productos =[]

router.get("/productos",async (req,res)=>{
    try{
        // let obtener = await fs.promises.readFile("./productos/productos.json","utf-8");
        // let parsear = JSON.parse(obtener);
        // productos.push(parsear);
        res.send({disponibles:array})
    }catch{
        console.log("error al obtener elementos")
    }
})

router.get("/productos/:id",async(req,res)=>{
    try{
        // let obtener = await fs.promises.readFile("./productos/productos.json","utf-8");
        // let parsear = JSON.parse(obtener);
        // productos.push(parsear);
        let data = req.params.id
        let dataNumber = parseInt(data);
        let busqueda = array.find(x => x.id === dataNumber);
        if(busqueda){
            res.send({data:busqueda})
        }else{
            res.send("el producto no se encuentra")
        }
    }catch{
        res.send("error al encontrar producto")
    }
})


router.post("/productos",(req,res)=>{
    let {id,nombre,descripcion,codigo,foto,precio,stock} = req.body
    let obj = {
        id,
        nombre,
        descripcion,
        codigo,
        foto,
        precio,
        stock
    }
    array.push(obj);
    console.log(array)
    res.send({message:"producto añadido con exito"}).status(400);
})



module.exports = router;
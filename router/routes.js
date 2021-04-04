const express= require('express');
const router= express.Router();
const nodemailer= require('nodemailer');
// database mongodb connection
const mongoose = require('mongoose');
const Client=require('../models/clients');
const email= require('../email')
const uri=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uynsx.mongodb.net/${process.env.NOMBRE_DB}?retryWrites=true&w=majority`
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('Connected'))
    .catch(e=>console.log(e))

module.exports=router;

const oEmail= new email({
    "host":`${process.env.HOST}`,
    "port":465,
    "secure":true,
    "auth":{
        "user":"pruebaproyectos21@gmail.com",
        "pass":"qlqauhabgsmwfcwt"
    }
})

router.get('/', (req,res)=>{

    res.render("index", {titulo: 'mi titulo dinamico', cards_characteristics:[
        {icon:'laptop.svg',name:'Responsive', description:'All my projects are adaptable to any screen'},
        {icon:'bolt.svg',name:'Quick', description:'Projects focused on optimization'},
        {icon:'setting.svg',name:'Functional', description:'The main goal is to meet all the requirements.'}
    ], work:['ekkol.png','elcaminante.png','vibes.png','violette.jpg']})
})
router.get('/contact', (req,res)=>{

    res.render("contact", {})
})
router.post('/contact', async(req,res)=>{
    const body= req.body;
    const client={name:body.name, email:body.email, phone:body.phone}
    let email= await{
        from:"pruebaproyectos21@gmail.com",
        to:"shadi2523@gmail.com",
        subject:`${body.subject}`,
        html:`
            <div>
                <p>Correo: ${body.email}</p>
                <p>Nombre: ${body.name}</p>
                <p>Celular: ${body.phone}</p>
                <p>Asunto: ${body.subject}</p>
                <p>Mensaje: ${body.message}</p>
            </div>
        `
    }
    oEmail.enviarCorreo(email);
    try {
        // const clientDB= new Client(client);
        // await clientDB.save()
        await Client.create(client)
        res.redirect('/contact')
    } catch (error) {
        console.log(error)
    }
})

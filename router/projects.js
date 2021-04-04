const express= require('express');
const router= express.Router();

const Clients=require('../models/clients');


router.get('/', async (req,res) => {

    // const arrayMascotasDB = await Clients.find()
    // console.log(arrayMascotasDB)
    // res.render("projects",{
    //     arrayMascotas:arrayMascotasDB
    // })

})


module.exports = router;
const nodemailer= require('nodemailer');

class email{
    constructor(oconfig){
        this.createTransport=nodemailer.createTransport(oconfig)
    }

    enviarCorreo(oEmail){
        try {
            this.createTransport.sendMail(oEmail, (e, info)=>{
                if (e) {
                    console.log(e)
                } else {
                    console.log('Correo enviado correctamente')
                }
                this.createTransport.close();
            })
        } catch (e) {
            console.log(e)
        }
    }
}
module.exports=email;
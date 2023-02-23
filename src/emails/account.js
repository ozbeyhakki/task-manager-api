const sgMail= require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to :email,
        from:'m.hakkiozbey@gmail.com',
        subject:'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know if you need a hand`
    })
}

const sendCancelationEmail= (email,name) =>{
    sgMail.send({
        to :email,
        from:'m.hakkiozbey@gmail.com',
        subject:'Thanks for leaving out!',
        text: `Bye to the app, ${name}. Let me know if you need a hand`
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}

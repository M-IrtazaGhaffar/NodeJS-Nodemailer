const express = require('express')
const app = express()
const port = 3000

const nodemailer = require('nodemailer');

app.get('/mail', async(req, res) => {
    res.send("Hello World");

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pakclashers8699@gmail.com',
            pass: 'ihxjlwtuxyphduzy'
        }
    });

    var mailOptions = {
        from: 'pakclashers8699@gmail.com',
        to: 'irtazaghaffar@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
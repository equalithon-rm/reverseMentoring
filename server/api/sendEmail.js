const router = require('express').Router()
const nodeMailer = require('nodemailer')

module.exports = router

router.post('/', (req, res, next) => {
  const {email, targetId, skillId, currUserId, currUserName} = req.body
  try {
    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'elevate.app.info@gmail.com',
        pass: 'elevateapp123'
      }
    })

    const mailOptions = {
      from: 'elevate.app.info@gmail.com',
      to: email,
      subject: `${currUserName} would like to connect with you!`,
      html: `<!DOCTYPE html>
      <html>
        <head> </head>
        <body>
          <h4>Someone wants to connect with you!</h4>
          <a href="http://localhost:8080/api/connect/${currUserId}/${targetId}/${skillId}" target="_blank"><button type="button">TEST</button></a>

        </body>
      </html>`
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw err
      else console.log('Email sent: ', info.response)
    })
  } catch (err) {
    next(err)
  }
})

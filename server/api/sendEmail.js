const router = require('express').Router()
const nodeMailer = require('nodemailer')

module.exports = router

router.post('/', (req, res, next) => {
  const {email, targetName, userName} = req.body
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
      subject: `${userName} would like to connect with you!`,
      text: `Hello ${targetName}, ${userName} would like to connect with you.`
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw err
      else console.log('Email sent: ', info.response)
    })
  } catch (err) {
    next(err)
  }
})

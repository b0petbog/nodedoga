
import express from 'express'

const router = express.Router()

router.get('/express', (req, res, next) => {
  (() => {
    res.render('', {
      pageTitle: 'Az express egy minimalista keretrendszer, amely a Node.js-hez készült',
      path: '/express'
    })
  })
})

router.get('/greetings', (req, res, next) => {
    (() => {
      res.render('', {
        pageTitle: 'Hello, Pethő Boglárka',
        path: '/greetings'
      })
    })
  })

router.get('/nodejs', (req, res, next) => {
    (() => {
      res.render('', {
        pageTitle: 'A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 Javascript motorra épül',
        path: 'nodejs'
      })
    })
})


export default router
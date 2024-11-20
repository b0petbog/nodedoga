const app = express()
const PORT = 3000

import routes from './routes/routes.js'

app.use(routes)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: ''})
})

app.listen(PORT, () => console.log(`server listens on port http://localhost:${PORT}`))

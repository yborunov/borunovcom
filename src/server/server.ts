import * as express from 'express'

const app = express()

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'ejs')

app.listen(app.get('port'), (): void => {
	console.log('The app is listening on port: ' + app.get('port'))
})

app.use(express.static('public'))

app.get('/', (req, res): void => {
	res.render('index.ejs')
})

app.get('/about', (req, res): void => {
	res.redirect('/')
})

app.get('/work', (req, res): void => {
	res.render('work.ejs')
})

app.get('/projects', (req, res): void => {
	res.render('projects.ejs')
})

app.get('/skills', (req, res): void => {
	res.render('skills.ejs')
})

app.use((req, res): void => {
	res.send(404)
})
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const cartRoutes = require('./routes/cart')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
//регистрируем в express движок hbs
app.engine('hbs', hbs.engine)
//говорим express что мы будем его использовать
app.set('view engine', 'hbs')
//папка с нашими шаблонами
app.set('views', 'views')

//указываем папку статичных файлов
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}))

//использование роутов
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/cart', cartRoutes)

const PORT = process.env.PORT || 3000


app.listen(3000, () => {
    console.log(`Server is running on ${PORT}`)
})
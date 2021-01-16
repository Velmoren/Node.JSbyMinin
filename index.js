const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const mongoose = require('mongoose')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const cartRoutes = require('./routes/cart')
const ordersRoutes = require('./routes/orders')
const User = require('./models/user')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
})
//регистрируем в express движок hbs
app.engine('hbs', hbs.engine)
//говорим express что мы будем его использовать
app.set('view engine', 'hbs')
//папка с нашими шаблонами
app.set('views', 'views')

app.use(async (req, res, next) => {
    try {
        const user = await User.findById('6001ad72a162a73478de3e4b')
        req.user = user
        next()
    } catch(e) {
        console.log(e)
    }
})

//указываем папку статичных файлов
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}))

//использование роутов
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/cart', cartRoutes)
app.use('/orders', ordersRoutes)

const PORT = process.env.PORT || 3000

async function start() {
    try {
        const url = `mongodb+srv://velmoren:YSRmYMQUiDmO4dIi@courses-claster.9eohb.mongodb.net/coursesDB`

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        const candidate = await User.findOne()
        if(!candidate) {
            const user = new User({
                email: 'velmoren@yahoo.com',
                name: 'velmoren',
                cart: {items: []}
            })
            await user.save()
        }

        app.listen(3000, () => {
            console.log(`Server is running on ${PORT}`)
        })
    } catch(e) {
        console.log(e)
    }
}

start()



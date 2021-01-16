const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', async (req, res) => {
    //find() берет все из БД
    // const courses = await Course.find()
    //     .populate('userId', 'email name')
    //     .select('title price img')
    const courses = await Course.find()

    res.render('courses', {
        title: 'Курсы',
        isCourses: true,
        courses
    })
})

router.post('/remove/', async (req, res) => {
    try {
        //deleteOne() удаляет указанный элемент, настройка - условие удаления
        //_id должен быть равен req.body.id
        await Course.deleteOne({_id: req.body.id})
        res.redirect('/courses')
    } catch (e) {
        console.log(e)
    }
})

router.get('/:id/edit', async (req, res) => {
    if (!req.query.allow) {
        return  res.redirect('/')
    }
    //findById() искать в БД по id
    const course = await Course.findById(req.params.id)

    res.render('course-edit', {
        title: `Редактировать ${course.title}`,
        course
    })
})

router.post('/edit', async (req, res) => {
    const {id} = req.body
    delete req.body.id
    //findByIdAndUpdate() находит в БД по ID и изменяет
    await Course.findByIdAndUpdate(id, req.body)
    res.redirect('/courses')
})

router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id)
    res.render('course', {
        layout: 'empty',
        title: `Курс ${course.title}`,
        course
    })
})

module.exports = router
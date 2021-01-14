/*РАБОТА С ФАЙЛАМИ*/
const fs = require('fs')
const path = require('path')

//проверка а существование файла
fs.access(__dirname, fs.F_OK, (err) => {
    if (err) throw new err
    console.log('Файл существует')

    //удаление файла
    fs.unlink(path.join(__dirname, 'notes', 'notes.txt'), err => {
        if (err) throw new err
        console.log('Файл был удален')

        //удаление папки
        fs.rmdir(path.join(__dirname, 'notes'), err => {
            if (err) throw new err
            console.log('Папка была удалена')
        })

        //создание папки
        fs.mkdir(path.join(__dirname, 'notes'), err => {
            if (err) throw new err
            console.log('Папка была создана')

            //создание файла
            fs.writeFile(
                path.join(__dirname, 'notes', 'mynotes.txt'),
                'Hello world',
                (err) => {
                    if (err) throw new err
                    console.log('Файл был создан')

                    //дописать в созданный ранее файл
                    fs.appendFile(
                        path.join(__dirname, 'notes', 'mynotes.txt'),
                        ' From append file',
                        (err) => {
                            if (err) throw new err
                            console.log('Файл был изменен')

                            //чтение файлов
                            fs.readFile(
                                path.join(__dirname, 'notes', 'mynotes.txt'),
                                'utf-8',
                                (err, data) => {
                                    if (err) throw new err
                                    console.log(data)
                                    console.log('Содержимое файла')

                                    //переименование файла
                                    fs.rename(
                                        path.join(__dirname, 'notes', 'mynotes.txt'),
                                        path.join(__dirname, 'notes', 'notes.txt'),
                                        (err) => {
                                            if (err) throw new err
                                            console.log('Файл был переименован в notes.txt')
                                        }
                                    )
                                }
                            )
                        }
                    )
                }
            )
        })
    })
})

//дока File System https://nodejs.org/dist/latest-v15.x/docs/api/fs.html
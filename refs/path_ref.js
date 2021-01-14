/*РАБОТА С ПУТЯМИ*/
const path = require('path')

//выводит имя файла без пути
console.log(path.basename(__filename))
//выводит название папки в которой находится файл с абсолютным путем
console.log(path.dirname(__filename))
//выводит расширение файла
console.log(path.extname(__filename))

//разбивает всю строку пути на объект
console.log(path.parse(__filename))

//соединяет строки в путь
console.log(path.join(__dirname, 'test', 'second.html'))
//создает корректный путь как относительный, так и абсолютный
console.log(path.resolve(__dirname, './test/second.html'))

//дока PATH https://nodejs.org/dist/latest-v15.x/docs/api/path.html


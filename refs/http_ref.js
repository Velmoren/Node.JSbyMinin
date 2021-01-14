/*МОДУЛЬ ДЛЯ СОБСТВЕННЫХ HTTP СЕРВЕРОВ*/
const http = require('http')

//создание сервера
const server = http.createServer((req, res) => {})

//запуск сервера, коллбек отработает после запуска
server.listen(3000, () => {
    console.log('Server is running')
})

//настроен в index.js
//дока https://nodejs.org/dist/latest-v15.x/docs/api/http.html

/*ПРИМЕР ПРОСТЕЙШЕГО СЕРВЕРА*/
// const http = require('http')
//
// const server = http.createServer((req, res) => {
//     res.write('<h1>Hello from Node.JS</h1>')
//     res.write('<h2>Hello from Node.JS</h2>')
//     res.write('<h3>Hello from Node.JS</h3>')
//     res.end(`
//         <div style="background: red; width: 200px; height: 200px">
//             <h4>Test</h4>
//         </div>
//     `)
// })
//
// server.listen(3000, () => {
//     console.log('Server is running')
// })

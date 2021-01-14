/*ИНФОРМАЦИЯ ОБ ОПЕРАЦИОННОЙ СИСТЕМЕ*/
const os = require('os')

//информация о платформе
console.log(os.platform())

//архитектура
console.log(os.arch())

//общая информация по процессорам
console.log(os.cpus())

//свободная память
console.log(os.freemem())

//общий объем памяти
console.log(os.totalmem())

//корневая директория
console.log(os.homedir())

//время работы системы
console.log(os.uptime())

//дока https://nodejs.org/dist/latest-v15.x/docs/api/os.html

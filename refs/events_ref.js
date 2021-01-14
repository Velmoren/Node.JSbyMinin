/*РАБОТА С СОБЫТИЯМИ */
const EventEmitter = require('events')

// EventEmitter это класс, от которого мы можем наследоваться и прослушивать события
//наследуем
class Logger extends EventEmitter {
    //добавляем метод, который будет дергать событие по коммиту
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

//создаем прототип
const logger = new Logger()

//прослушиваем событие по коммиту message (когда его дернет метод log() он отработает)
logger.on('message', data => {
    console.log(data)
})

//запускаем метод log()
logger.log('Hello')

//дока https://nodejs.org/dist/latest-v15.x/docs/api/events.html
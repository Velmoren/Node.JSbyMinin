/*КОНСОЛЬНОЕ ПРИЛОЖЕНИЕ*/

function consoleToJSON() {
    const consoleInfo = {}

    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i].split('=')
        consoleInfo[arg[0]] = arg[1] ? arg[1] : true
    }

    return consoleInfo
}

console.log(consoleToJSON())

//запускается node console.js message=hello spec
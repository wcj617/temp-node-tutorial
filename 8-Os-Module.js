const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user);


//method return the system uptime in seconds

console.log(`The system Uptimeis ${os.uptime()} secons`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);
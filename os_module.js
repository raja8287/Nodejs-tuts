const os=require('os')
//info about current user
console.log(os.userInfo())


//method reuturns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)
//methdo to find the network info current connected

console.log(os.networkInterfaces())



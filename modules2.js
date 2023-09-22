const peter=require('./modules')//experting from moduels.js file
const sayHi=(name)=>{
    console.log(`hi i am a function of another
     moudels so u are using me to learn modules ${name}`)
}
console.log(peter)
module.exports=sayHi//exported to moduels.js
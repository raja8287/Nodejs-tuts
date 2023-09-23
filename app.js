const data=require('./alternative_flavour')
const name="raja";
require('./mind_grinade')
console.log(data);

//fileSystem(synchronus)
const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./cc/first.txt','utf-8')


writeFileSync('./cc/first.txt','hello world testing text')
console.log(first)



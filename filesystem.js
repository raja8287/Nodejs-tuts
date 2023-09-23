const {readFile,writeFile}=require('fs')
//if we dont write utf-8 we only can get the buffer like
//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 74 65 73 74 69 6e 67 20 74 65 78 74>

//readFileSync is synchromes but readfile is asynchorns
//multiple user can use this but inreadFileSync cant 
readFile('./cc/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(`ERROR FOUNDED:${err}`)
        return
    }
    console.log(result)

})

writeFile('./cc/second.txt','this is coole hello wordl',(err,result)=>{
    if(err){
        console.log(err)

    }
    console.log(result)
})
const fs = require('fs')
const data = require("./data.json");
// console.log(data)
fs.readFile('data.json',(err,file)=>{
    if (err) throw err
    else {
        let arr = data.map(i => `${i.id}\n${i.title}\n${i.description} \n\n`)
        let narr = arr.join('')
        fs.writeFile('textData.txt', narr,(err)=>{if(err) throw err})
    }
})




// fs.writeFileSync('textData.js', arr.toString())
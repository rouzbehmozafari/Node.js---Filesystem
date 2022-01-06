const fs = require('fs')

fs.readFile('data.json',(err,file)=>{
    if (err) throw err
    else {
        fs.writeFile('textData.txt', file.toString(),(err)=>{if(err) throw err})
    }
})
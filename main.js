const fs = require('fs')

fs.open('blog1.txt', (err,dir)=>{
    if (err){ console.log(err)} 
    else { 
        fs.writeFile('newFile.txt', 'new file',(err)=>{if (err) throw err})
        fs.mkdir('assets',(err)=>{if (err) throw err})
        // fs.unlink('delete.txt',(err)=>{if (err) throw err})
        fs.writeFile('Hello.txt','etwas',(err)=>{if (err) throw err})
        fs.rename('Hello.txt','HelloWorld.txt',(err)=>{if (err) throw err})
        console.log(dir.toString())
    }
})
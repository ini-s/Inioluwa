import express from "express"
import {dirname} from 'node:path'
import {fileURLToPath} from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname + "/public"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/submit', (req,res)=>{
    res.sendFile(__dirname + "/submit.html")
})

app.listen(3000, ()=>{
    console.log("Server listening on port 3000")
})
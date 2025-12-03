
const express = require ("express")
const cors = require ("cors")

const app = express ()
const PORT = 3000

app.use(cors());


//rota raiz
app.get("/",(req,res) => {
    res.send("API funcionando")
})


app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

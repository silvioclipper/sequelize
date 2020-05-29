const express = require('express');
const app = express();

const route = require('./routes')

app.use(express.json());
app.use(route)
const porta = process.env.PORT || 3004


app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
});
const fs = require('fs') 
const {uuidv4} = require('uuidv4')

function registrarLog(nomeAluno){
    const id = uuid();
    const dataHora = new Date().tolSOString().replace
    const logMensagem = `${id} - ${datahora} - ${nomeAluno}\n`

    fs.appendFileSync('logs.txt', logMensagem);
    return id;
}

module.export = registrarLog.Log;

const express = require('express');
const registrarLog = require('./logs');
const app = express();
app.use(express.json());

const PORT = 8000;
//Servidor iniciando
app.listen(PORT, () => {
    console.log("Servidor ta rodando na porta 8000 ")
})
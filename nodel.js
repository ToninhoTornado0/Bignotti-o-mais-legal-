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
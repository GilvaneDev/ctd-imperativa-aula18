const express = require('express');

// 2. Inicializar o contrutor do Express.
const app = new express();

// 3. Criando a Rota e retornando alguma informação.
app.get('/', function (requisicaoAoServidor, respostaDoServidor) {
    // 3.1. Manda um arquivo como resposta para o navegador.
    respostaDoServidor.sendFile(__dirname + '/home/index.html');
});

// 4. Inicializar o servidor.
app.listen(8081);
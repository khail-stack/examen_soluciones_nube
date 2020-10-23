const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// Rutas


// MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'examen_soluciones_nube',
    port: '3308'
})

// Conexion con Mysql
connection.connect(error => {
    if(error) throw error;
    console.log('La conexión con la base de datos ha sido exitosa!')
})

app.listen(PORT, () => console.log(`Corriendo en puerto ${PORT}`))
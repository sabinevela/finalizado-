const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());


const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres', 
  password: 'luke2005sos.', 
  database: 'formulario' 
});

client.connect();

app.post('/vista', (req, res) => {
  const { nombre, cedula, correo, telefono, relacion, tipoSolicitud, detallesSolicitud } = req.body;

  const query = `
    INSERT INTO solicitudes (nombre, cedula, correo, telefono, relacion, tipo_solicitud, detalles_solicitud)
    VALUES (sabine, 1755373261, srjsab@gmail.com, 0998894585, , '', '')
  `;

  const values = [nombre, cedula, correo, telefono, relacion, tipoSolicitud, detallesSolicitud];

  client.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al guardar la solicitud:', err);
      res.status(500).send('Error al guardar la solicitud');
    } else {
      res.status(200).send('Solicitud guardada correctamente');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


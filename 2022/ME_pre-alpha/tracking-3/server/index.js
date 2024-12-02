const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Ruta para servir archivos estáticos desde la carpeta "public"
app.use(express.static('../public'));

// Ruta de ejemplo
app.get('/api/data', (req, res) => {
  // Aquí puedes agregar la lógica para manejar la solicitud y enviar una respuesta
  res.send('Respuesta desde el servidor');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server listening on port ${port}:`);
});
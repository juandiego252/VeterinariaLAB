// Importar la variable app
import app from './server.js'

// Importar la funcion connection 
import connection from './database.js';

// Haicneod uso de la funcion connection()
connection()

// Iniciar la variable en el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})
import app from './app.js';
import { connectDB } from './db.js';

connectDB();
const PORT = 3333;

app.listen(PORT, () => {
    console.log( `Servidor corriendo en el puerto ${PORT}` );
});


import express, { urlencoded } from 'express';
import indexRoutes from './routes/index.routes.js';
const app = express();
const port = 3000;

app.use(express.json())
app.use(indexRoutes);

app.listen(port, () => {
    console.log(`server on port: http://localhost:${port}`)
});
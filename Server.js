import express from 'express';
import { globalError } from './src/utils/globalError.js';
import routeRoutes from './src/modules/routes/routeRoutes.js';
import driverRoutes from './src/modules/driver/driverRoutes.js';
import { connection } from './db/connection.js';
import "dotenv/config.js"
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';



const app = express();
app.use(express.json());
connection

app.use(cors());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use(limiter);


app.get('/' , (req, res, next) =>{
    res.send("Route Scheduling System API")
})


app.use(routeRoutes);
app.use(driverRoutes);

app.use(globalError)

app.listen(process.env.PORT, () => {
  console.log('Server is running');
});
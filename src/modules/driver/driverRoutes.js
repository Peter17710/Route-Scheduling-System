import express from 'express';
import { createDriver, getDriverHistory } from './driverController.js';

const driverRoutes = express.Router();

driverRoutes.post('/drivers', createDriver);
driverRoutes.get('/drivers/:id/history', getDriverHistory);

export default driverRoutes;
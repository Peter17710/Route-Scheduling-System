import express from 'express';
import { createRoute, getRoutes, getSchedule } from './routeController.js';

const routeRoutes = express.Router();

routeRoutes.post('/routes', createRoute);
routeRoutes.get('/routes', getRoutes);
routeRoutes.get('/schedule', getSchedule);

export default routeRoutes;
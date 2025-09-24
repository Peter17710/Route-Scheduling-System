import Route from '../../../db/models/route.model.js';
import Driver from '../../../db/models/driver.model.js';
import { handleAsyncError } from '../../middleware/handleAsyncError.js';

export const createRoute = handleAsyncError(async (req, res, next) => {
        const { startLocation, endLocation, distance, estimatedTime } = req.body;
        const availableDriver = await Driver.findOne({ availability: true });
        const route = new Route({ startLocation, endLocation, distance, estimatedTime });

        if (availableDriver) {
            route.assignedDriver = availableDriver._id;
            availableDriver.availability = false;
            availableDriver.history.push({ route: route._id });
            await availableDriver.save();
        }
        await route.save();
        res.status(201).json({Message:"Done!", route, assigned: !!availableDriver});    
}); 

export const getRoutes = handleAsyncError( async (req, res, next) => {

        const { page = 1, limit = 5 } = req.query;
        const routes = await Route.find().populate('assignedDriver', 'id name').skip((page - 1) * limit).limit(Number(limit));
        res.json({Message:"Done!", routes})
});

export const getSchedule = handleAsyncError(async (req, res, next) => {
        const routes = await Route.find().populate('assignedDriver', 'id name');
        const schedule = routes.map(route => ({
            routeId: route._id,
            startLocation: route.startLocation,
            endLocation: route.endLocation,
            driver: route.assignedDriver ? { id: route.assignedDriver.id, name: route.assignedDriver.name } : null
        }));
        res.json({Message:"Done!", schedule});
});
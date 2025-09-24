import Driver from '../../../db/models/driver.model.js';
import { handleAsyncError } from '../../middleware/handleAsyncError.js';

export const createDriver = handleAsyncError(async (req, res, next) => {
        const { id, name, licenseType, availability } = req.body;
        const driver = new Driver({ id, name, licenseType, availability });
        await driver.save();
        res.status(201).json({Message:"Done!" , driver});
});

export const getDriverHistory = handleAsyncError(async (req, res, next) => {
        const { id } = req.params;
        const driver = await Driver.findOne({ id }).populate('history.route');
        if (!driver) return res.status(404).json({ message: 'Driver not found' });
        res.status(201).json(driver.history);
});
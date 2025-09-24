import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
    startLocation: {
        type: String,
        required: true
    },
    endLocation: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    estimatedTime: {
        type: Number,
        required: true
    },
    assignedDriver: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Driver', default: null 
        }

});

routeSchema.methods.saveRoute = function() {
    return this.save();
};

const Route = mongoose.model('Route', routeSchema);
export default Route;
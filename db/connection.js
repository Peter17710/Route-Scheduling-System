import mongoose from "mongoose"; 
import "dotenv/config";

export const connection = mongoose.connect(process.env.CONNECT)

.then(() => {
    console.log('Connected to DB');
})
.catch((err) => {
    console.error('Failed to connect to DB:', err.message);
});
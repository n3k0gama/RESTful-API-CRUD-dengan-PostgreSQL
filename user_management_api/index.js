import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './src/routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads')); // ← penting

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

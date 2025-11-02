import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './src/routes/userRoutes.js';
import authRoutes from './src/routes/authRoutes.js'; 

dotenv.config();

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads')); 

app.use('/api/users', userRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

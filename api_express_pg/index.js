import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './src/routes/studentsRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

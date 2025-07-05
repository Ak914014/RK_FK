import express from 'express';
import cors from 'cors';
import consultationRoutes from './routes/consultation_call.js'; // Your router file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/consultation_call', consultationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();

// Configure CORS to allow requests from any origin
app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:5173' // Replace with your frontend domain
// }));

// Add middleware to parse JSON and limit request body size
app.use(express.json({ limit: "10mb" }));

// Add your API routes
app.use("/api/v1/dalle", dalleRoutes);

// Your root route
app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" });
});

const port = process.env.PORT || 5000;
// Start the server
app.listen(port, () => console.log(`Server has started on port ${port}`));

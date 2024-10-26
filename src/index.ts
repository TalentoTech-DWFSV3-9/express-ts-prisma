import express from 'express';
import customerRoutes from './routes/customer.routes';

const app = express();

app.use(express.json());
app.use('/customers', customerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';
import { User } from './types';
import { UsersController } from './controllers/users.controller';

const PORT = 5000;
const app = express();

const CLIENT_ORIGIN = 'http://localhost:3000';

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

const colors = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

app.get('/', (req, res) => {
  res.end('Hello, world');
});

app.get('/users', UsersController.getAll);

app.post('/users', express.json(), UsersController.create);

app.get('/users/:userId', UsersController.getById);

app.get('/colors', (req, res) => {
  res.send(colors);
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
})
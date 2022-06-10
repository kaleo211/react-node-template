import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const server = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});
server.use(express.static('client/dist'));

const port = process.env.PORT || 3000;
server.listen(port, () => console.warn(`listening on port ${port}`));

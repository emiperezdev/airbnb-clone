import express from 'express';

const app = express();
app.use(express.json());

app.get('/hi', (req, res) => {
  return res.send('hi user');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => (console.log(`Listening on port ${PORT}...`)));
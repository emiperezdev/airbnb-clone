import express from 'express';

const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
  return res.send('test ok');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => (console.log(`Listening on port ${PORT}...`)));
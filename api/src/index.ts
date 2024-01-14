import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.post("/register", (req, res) => {
  const {name, email, password} = req.body;
  res.send(`This is the data ${name} ${email} ${password}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

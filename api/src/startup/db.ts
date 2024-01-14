import mongoose from "mongoose";
import config from 'config';

export default function () {
  const db: string = config.get('db');
  mongoose
    .connect(db)
    .then(() => console.log(`Connected to ${db}...`))
    .catch((err) => console.log(`Could not connect to ${db}...`, err));
}

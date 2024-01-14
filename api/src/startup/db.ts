import mongoose from "mongoose";

export default function () {
  const db = "mongodb://localhost/airbnb-copy";
  mongoose
    .connect(db)
    .then(() => console.log(`Connected to ${db}...`))
    .catch((err) => console.log(`Could not connect to ${db}...`, err));
}

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRoutes from "./routes/students.js";
const app = express();

const PORT = 5000;

//MIDDLEWARES
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/students", studentRoutes);

const CONNECTION_URL =
  "mongodb+srv://sharonvijay2003:sharonvijay2003@mern.72x3pbl.mongodb.net/details?retryWrites=true&w=majority";

app.listen(PORT);

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log(`Server is Running on port : ${PORT}`);
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });

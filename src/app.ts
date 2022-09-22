import express, { Application } from "express";
import homeRoute from "./routes/home";
import { config } from "dotenv";
import logger from "morgan";
config();

// Express app
const app: Application = express();

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", homeRoute);

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});

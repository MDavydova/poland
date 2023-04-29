import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import userRouter from "./routes/users.js";
import cardRouter from "./routes/cards.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/cards", cardRouter);

app.get("/", (req, res) => {
  res.send("Welcome to tour API"); //http://localhost:5000/
});

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

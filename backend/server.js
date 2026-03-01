import express from "express";
import dotenv from "dotenv";
import emailRoutes from "./routes/email.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//routes
app.use("/api", emailRoutes);

//default, for checking only
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

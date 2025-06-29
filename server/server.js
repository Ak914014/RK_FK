import express from "express";
import cors from "cors";
import consultation_call from "./routes/consultation_call.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/consultation_call", consultation_call);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
import express from "express"
import healthRouter from "./routes/health.js"
const app = express();

app.use(express.json());

app.get("/api/health",healthRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


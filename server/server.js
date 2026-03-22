import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json({ limit: "64kb" }));

app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "Portfolio backend is running" });
});

app.use("/api", contactRoutes);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

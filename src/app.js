import mongoose from "mongoose";
import router from "./routes/product";
import UserRouter from "./routes/auth"
import CategoryRouter from "./routes/category"
import express from "express";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/api", UserRouter)
app.use("/api", CategoryRouter)

mongoose.connect("mongodb://127.0.0.1:27017/typeScript");
export const viteNodeApp = app;








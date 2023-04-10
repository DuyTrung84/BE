import express from "express";
import { getAll, get, remove, create, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkpermission";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", checkPermission, create);
router.delete("/products/:id", checkPermission, remove);
router.patch("/products/:id", checkPermission, update);



export default router
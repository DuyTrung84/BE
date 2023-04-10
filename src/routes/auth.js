import express from "express"
import { singup, singin, getUser, deletetUser } from "../controllers/auth";

const router = express.Router();

router.post("/signup", singup);
router.post("/signin", singin);
router.get("/signup", getUser);
router.delete("/signup", deletetUser);
export default router
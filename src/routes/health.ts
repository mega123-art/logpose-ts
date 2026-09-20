import { Router} from "express";
import { healthHandler } from "../handlers/health.js";
const router=Router();
router.get("/",healthHandler)
export default router;
import { Router } from "express";
import { getUrlsHandler,createUrl } from "../handlers/users.js";
const router=Router();
router.get("/:userId/urls",getUrlsHandler)
router.post("/user:Id/urls",createUrl)
export default router
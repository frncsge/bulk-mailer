import express from "express";
import upload from "../config/multer.config.js";
import { sendEmail } from "../controllers/email.controller.js";

const router = express.Router();

router.post("/email/send", upload.array("attachments"), sendEmail);

export default router;
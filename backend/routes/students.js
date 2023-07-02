import express from "express";

import { getStudents, createStudent } from "../controllers/students.js";
const router = express.Router();

//GET ROUTE
router.get("/", getStudents);

// //POST ROUTE
router.post("/", createStudent);

// //DELETE ROUTE
// router.delete("/:id");

// //PATCH ROUTE
// router.patch("/:id");

export default router;

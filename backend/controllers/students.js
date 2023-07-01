import express from "express";

import studentDetail from "../models/studentDetail.js";

const router = express.Router();

export const getStudents = async (req, res) => {
  try {
    const studentDetails = await studentDetail.find();
    console.log(studentDetails);
    res.status(200).json(studentDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const createStudent = async (req, res) => {
//   try {
//   } catch {}
// };

// export const deleteStudent = async (req, res) => {
//   try {
//   } catch {}
// };

// export const updateStudent = async (req, res) => {
//   try {
//   } catch {}
// };

export default router;

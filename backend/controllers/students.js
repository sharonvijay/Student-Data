import express from "express";

import studentDetail from "../models/studentDetail.js";

const router = express.Router();

export const getStudents = async (req, res) => {
  try {
    const studentDetails = await studentDetail.find();
    res.status(200).json(studentDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  const { Name, RegNo, Age, Course } = req.body;
  const newStudentDetail = new studentDetail({ Name, RegNo, Age, Course });
  try {
    await newStudentDetail.save();
    res.status(201).json(newStudentDetail);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// export const deleteStudent = async (req, res) => {
//   try {
//   } catch {}
// };

// export const updateStudent = async (req, res) => {
//   try {
//   } catch {}
// };

export default router;

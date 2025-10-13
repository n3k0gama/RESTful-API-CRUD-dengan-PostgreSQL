import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../models/studentsModel.js';

export const getStudents = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (error) {
    console.error('GET ALL ERROR:', error);
    res.status(500).json({ message: 'Error retrieving data' });
  }
};

export const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await getStudentById(id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    console.error('GET ONE ERROR:', error);
    res.status(500).json({ message: 'Error fetching student' });
  }
};

export const addStudent = async (req, res) => {
  try {
    const { name, major, age } = req.body;
    const newStudent = await createStudent(name, major, age);
    res.status(201).json(newStudent);
  } catch (error) {
    console.error('CREATE ERROR:', error); 
    res.status(500).json({ message: 'Error creating student' });
  }
};

export const editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, major, age } = req.body;
    const updatedStudent = await updateStudent(id, name, major, age);
    res.json(updatedStudent);
  } catch (error) {
    console.error('UPDATE ERROR:', error);
    res.status(500).json({ message: 'Error updating student' });
  }
};

export const removeStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteStudent(id);
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('DELETE ERROR:', error);
    res.status(500).json({ message: 'Error deleting student' });
  }
};

import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'User route working' });
});

// Upload avatar route
router.post('/avatar', verifyToken, upload, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const avatarUrl = `/uploads/${req.file.filename}`;
  return res.json({
    message: 'Avatar uploaded successfully',
    avatarUrl
  });
});

export default router;

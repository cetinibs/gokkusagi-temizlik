import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// Ensure upload directory exists
const uploadDir = path.join(process.cwd(), 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    },
});

// File filter for images
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Sadece resim dosyaları yüklenebilir (JPEG, PNG, GIF, WebP, SVG)'));
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB max
    },
});

// Upload single image (protected)
router.post('/image', authMiddleware, upload.single('image'), async (req: AuthRequest, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Dosya yüklenmedi' });
        }

        const fileUrl = `/uploads/${req.file.filename}`;

        res.json({
            success: true,
            url: fileUrl,
            filename: req.file.filename,
            originalname: req.file.originalname,
            size: req.file.size,
            mimetype: req.file.mimetype,
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Dosya yükleme hatası' });
    }
});

// Upload logo specifically (protected)
router.post('/logo', authMiddleware, upload.single('logo'), async (req: AuthRequest, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Logo dosyası yüklenmedi' });
        }

        const fileUrl = `/uploads/${req.file.filename}`;

        res.json({
            success: true,
            url: fileUrl,
            filename: req.file.filename,
            originalname: req.file.originalname,
            size: req.file.size,
            mimetype: req.file.mimetype,
        });
    } catch (error) {
        console.error('Logo upload error:', error);
        res.status(500).json({ error: 'Logo yükleme hatası' });
    }
});

// Upload favicon (protected)
router.post('/favicon', authMiddleware, upload.single('favicon'), async (req: AuthRequest, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Favicon dosyası yüklenmedi' });
        }

        const fileUrl = `/uploads/${req.file.filename}`;

        res.json({
            success: true,
            url: fileUrl,
            filename: req.file.filename,
            originalname: req.file.originalname,
            size: req.file.size,
            mimetype: req.file.mimetype,
        });
    } catch (error) {
        console.error('Favicon upload error:', error);
        res.status(500).json({ error: 'Favicon yükleme hatası' });
    }
});

// Delete uploaded file (protected)
router.delete('/:filename', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { filename } = req.params;
        const filePath = path.join(uploadDir, filename);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            res.json({ success: true, message: 'Dosya silindi' });
        } else {
            res.status(404).json({ error: 'Dosya bulunamadı' });
        }
    } catch (error) {
        console.error('Delete file error:', error);
        res.status(500).json({ error: 'Dosya silme hatası' });
    }
});

// List uploaded files (protected)
router.get('/list', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const files = fs.readdirSync(uploadDir).map(filename => {
            const filePath = path.join(uploadDir, filename);
            const stats = fs.statSync(filePath);
            return {
                filename,
                url: `/uploads/${filename}`,
                size: stats.size,
                createdAt: stats.birthtime,
            };
        });

        res.json(files);
    } catch (error) {
        console.error('List files error:', error);
        res.status(500).json({ error: 'Dosya listesi alınamadı' });
    }
});

export default router;

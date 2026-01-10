import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// Login
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email ve şifre gerekli' });
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({ error: 'Geçersiz email veya şifre' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Geçersiz email veya şifre' });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
            process.env.JWT_SECRET || 'default-secret',
            { expiresIn: '7d' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Get current user
router.get('/me', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user?.id },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                createdAt: true,
            },
        });

        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }

        res.json(user);
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Change password
router.put('/password', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ error: 'Mevcut ve yeni şifre gerekli' });
        }

        const user = await prisma.user.findUnique({
            where: { id: req.user?.id },
        });

        if (!user) {
            return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }

        const isValidPassword = await bcrypt.compare(currentPassword, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ error: 'Mevcut şifre yanlış' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { id: user.id },
            data: { password: hashedPassword },
        });

        res.json({ message: 'Şifre başarıyla güncellendi' });
    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

export default router;

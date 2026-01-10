import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string;
        name: string;
        role: string;
    };
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Yetkilendirme gerekli' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret') as {
            id: string;
            email: string;
            name: string;
            role: string;
        };

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Geçersiz veya süresi dolmuş token' });
    }
};

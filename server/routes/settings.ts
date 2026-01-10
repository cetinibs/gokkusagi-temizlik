import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();

// ==================== SITE SETTINGS ====================

// Get site settings (public)
router.get('/site', async (req: Request, res: Response) => {
    try {
        let settings = await prisma.siteSettings.findUnique({
            where: { id: 'default' },
        });

        // Create default if not exists
        if (!settings) {
            settings = await prisma.siteSettings.create({
                data: { id: 'default' },
            });
        }

        res.json(settings);
    } catch (error) {
        console.error('Get site settings error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Update site settings (protected)
router.put('/site', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const {
            siteName,
            siteTitle,
            siteDescription,
            siteKeywords,
            siteUrl,
            siteAuthor,
            logoUrl,
            faviconUrl,
            ogImageUrl,
            copyrightText,
            language,
            geoRegion,
            geoPlacename,
        } = req.body;

        const settings = await prisma.siteSettings.upsert({
            where: { id: 'default' },
            update: {
                siteName,
                siteTitle,
                siteDescription,
                siteKeywords,
                siteUrl,
                siteAuthor,
                logoUrl,
                faviconUrl,
                ogImageUrl,
                copyrightText,
                language,
                geoRegion,
                geoPlacename,
            },
            create: {
                id: 'default',
                siteName,
                siteTitle,
                siteDescription,
                siteKeywords,
                siteUrl,
                siteAuthor,
                logoUrl,
                faviconUrl,
                ogImageUrl,
                copyrightText,
                language,
                geoRegion,
                geoPlacename,
            },
        });

        res.json(settings);
    } catch (error) {
        console.error('Update site settings error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// ==================== ANALYTICS SETTINGS ====================

// Get analytics settings (public - needed for script injection)
router.get('/analytics', async (req: Request, res: Response) => {
    try {
        let settings = await prisma.analyticsSettings.findUnique({
            where: { id: 'default' },
        });

        // Create default if not exists
        if (!settings) {
            settings = await prisma.analyticsSettings.create({
                data: { id: 'default' },
            });
        }

        res.json(settings);
    } catch (error) {
        console.error('Get analytics settings error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Update analytics settings (protected)
router.put('/analytics', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const {
            googleAnalyticsId,
            googleAdsId,
            googleAdsPhoneLabel,
            googleAdsFormLabel,
            googleSearchConsole,
            yandexWebmaster,
            bingWebmaster,
            yandexMetricaId,
        } = req.body;

        const settings = await prisma.analyticsSettings.upsert({
            where: { id: 'default' },
            update: {
                googleAnalyticsId,
                googleAdsId,
                googleAdsPhoneLabel,
                googleAdsFormLabel,
                googleSearchConsole,
                yandexWebmaster,
                bingWebmaster,
                yandexMetricaId,
            },
            create: {
                id: 'default',
                googleAnalyticsId,
                googleAdsId,
                googleAdsPhoneLabel,
                googleAdsFormLabel,
                googleSearchConsole,
                yandexWebmaster,
                bingWebmaster,
                yandexMetricaId,
            },
        });

        res.json(settings);
    } catch (error) {
        console.error('Update analytics settings error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// ==================== CONTACT INFO ====================

// Get contact info (public)
router.get('/contact', async (req: Request, res: Response) => {
    try {
        let contact = await prisma.contactInfo.findUnique({
            where: { id: 'default' },
        });

        // Create default if not exists
        if (!contact) {
            contact = await prisma.contactInfo.create({
                data: { id: 'default' },
            });
        }

        res.json(contact);
    } catch (error) {
        console.error('Get contact info error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// Update contact info (protected)
router.put('/contact', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const {
            phones,
            whatsapp,
            email,
            address,
            workingHours,
            socialMedia,
            mapEmbedUrl,
        } = req.body;

        const contact = await prisma.contactInfo.upsert({
            where: { id: 'default' },
            update: {
                phones,
                whatsapp,
                email,
                address,
                workingHours,
                socialMedia,
                mapEmbedUrl,
            },
            create: {
                id: 'default',
                phones,
                whatsapp,
                email,
                address,
                workingHours,
                socialMedia,
                mapEmbedUrl,
            },
        });

        res.json(contact);
    } catch (error) {
        console.error('Update contact info error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

// ==================== ALL SETTINGS (Dashboard) ====================

// Get all settings combined
router.get('/all', async (req: Request, res: Response) => {
    try {
        const [site, analytics, contact] = await Promise.all([
            prisma.siteSettings.findUnique({ where: { id: 'default' } }),
            prisma.analyticsSettings.findUnique({ where: { id: 'default' } }),
            prisma.contactInfo.findUnique({ where: { id: 'default' } }),
        ]);

        res.json({
            site: site || null,
            analytics: analytics || null,
            contact: contact || null,
        });
    } catch (error) {
        console.error('Get all settings error:', error);
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

export default router;

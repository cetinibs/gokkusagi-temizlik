import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create admin user
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Admin123!', 10);

    const admin = await prisma.user.upsert({
        where: { email: process.env.ADMIN_EMAIL || 'admin@gokkusagitemizlik.com' },
        update: {},
        create: {
            email: process.env.ADMIN_EMAIL || 'admin@gokkusagitemizlik.com',
            password: hashedPassword,
            name: 'Admin',
            role: 'admin',
        },
    });
    console.log('✅ Admin user created:', admin.email);

    // Create default site settings
    await prisma.siteSettings.upsert({
        where: { id: 'default' },
        update: {},
        create: {
            id: 'default',
            siteName: 'Gökkuşağı Kurumsal Temizlik Hizmetleri',
            siteTitle: 'Gökkuşağı Kurumsal Temizlik Hizmetleri - İstanbul Profesyonel Temizlik Şirketi',
            siteDescription: 'İstanbul\'da profesyonel temizlik hizmetleri. Ev, ofis, AVM, otel, villa temizliği. Boş ev, inşaat sonrası, dış cephe cam temizliği. Uygun fiyat, kaliteli hizmet.',
            siteKeywords: 'temizlik şirketi istanbul, profesyonel temizlik hizmeti, ev temizliği, ofis temizliği, AVM temizliği, otel temizliği, villa temizliği, boş ev temizliği, inşaat sonrası temizlik, dış cephe cam temizliği, Gökkuşağı Temizlik',
            siteUrl: 'https://gokkusagitemizlik.com',
            siteAuthor: 'Gökkuşağı Kurumsal Temizlik Hizmetleri',
            ogImageUrl: 'https://gokkusagitemizlik.com/assets/logo_new.png',
            copyrightText: 'GÖKKUŞAĞI Temizlik Hizmetleri. Tüm hakları saklıdır.',
            language: 'tr',
            geoRegion: 'TR-34',
            geoPlacename: 'İstanbul',
        },
    });
    console.log('✅ Site settings created');

    // Create default analytics settings
    await prisma.analyticsSettings.upsert({
        where: { id: 'default' },
        update: {},
        create: {
            id: 'default',
            googleAnalyticsId: 'G-6WLCFMS9Q6',
            googleAdsId: 'AW-17651373667',
            googleAdsPhoneLabel: 'ctz6COfNqd4bEOOs6uBB',
            googleAdsFormLabel: 'sn1UCPfN564bEOOs6uBB',
        },
    });
    console.log('✅ Analytics settings created');

    // Create default contact info (JSON as string for SQLite)
    await prisma.contactInfo.upsert({
        where: { id: 'default' },
        update: {},
        create: {
            id: 'default',
            phones: JSON.stringify([
                { number: '0552 415 99 44', raw: '+905524159944', label: 'Telefon 1' },
                { number: '0546 763 02 61', raw: '+905467630261', label: 'Telefon 2' },
                { number: '0530 186 93 10', raw: '+905301869310', label: 'Telefon 3' },
            ]),
            whatsapp: '+905524159944',
            email: 'info@gokkusagitemizlik.com',
            address: 'İKİTELİ OSB MAH. İSTEKS B6 BLOK SK. NO:19 BAŞAKŞEHİR/İSTANBUL',
            workingHours: '7/24 Hizmet',
            socialMedia: JSON.stringify({
                facebook: 'https://www.facebook.com/gokkusagitemizlik',
                instagram: 'https://www.instagram.com/gokkusagitemizlik',
                twitter: '',
                linkedin: '',
            }),
        },
    });
    console.log('✅ Contact info created');

    console.log('🎉 Seeding completed!');
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

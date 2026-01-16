import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updatePhoneNumbers() {
    console.log('📞 Updating phone numbers in database...');

    try {
        // Update ContactInfo with new single phone number
        const result = await prisma.contactInfo.update({
            where: { id: 'default' },
            data: {
                phones: JSON.stringify([
                    { number: '0546 763 02 61', raw: '+905467630261', label: 'Telefon' },
                ]),
                whatsapp: '+905467630261',
            },
        });

        console.log('✅ ContactInfo updated successfully!');
        console.log('   📱 Phone:', result.phones);
        console.log('   💬 WhatsApp:', result.whatsapp);

    } catch (error) {
        console.error('❌ Error updating phone numbers:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

updatePhoneNumbers()
    .then(() => {
        console.log('🎉 Phone number update completed!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Failed to update phone numbers:', error);
        process.exit(1);
    });

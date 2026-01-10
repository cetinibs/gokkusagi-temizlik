import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Construction } from 'lucide-react';

interface PlaceholderProps {
    title: string;
    description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderProps) {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-600">{description}</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Construction className="h-5 w-5 text-yellow-500" />
                        Yapım Aşamasında
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600">
                        Bu sayfa henüz geliştirme aşamasındadır. Yakında kullanıma sunulacaktır.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

export function ContactSettingsPage() {
    return (
        <PlaceholderPage
            title="İletişim Bilgileri"
            description="Telefon, e-posta ve adres bilgilerini düzenleyin"
        />
    );
}

export function HeroSettingsPage() {
    return (
        <PlaceholderPage
            title="Hero Bölümü"
            description="Ana sayfa hero bölümünü düzenleyin"
        />
    );
}

export function AboutSettingsPage() {
    return (
        <PlaceholderPage
            title="Hakkımızda"
            description="Hakkımızda bölümünü düzenleyin"
        />
    );
}

export function ServicesSettingsPage() {
    return (
        <PlaceholderPage
            title="Hizmetler"
            description="Hizmetleri yönetin"
        />
    );
}

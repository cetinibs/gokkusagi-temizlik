import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Settings, BarChart3, Phone, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../../lib/api';

interface DashboardStats {
    site: { updatedAt: string } | null;
    analytics: { updatedAt: string } | null;
    contact: { updatedAt: string } | null;
}

function formatDate(dateString: string | undefined) {
    if (!dateString) return 'Henüz güncellenmedi';
    return new Date(dateString).toLocaleString('tr-TR', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });
}

export function Dashboard() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        api.getAllSettings()
            .then(setStats)
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    const cards = [
        {
            title: 'Site Ayarları',
            description: 'Site adı, açıklama, logo',
            icon: Settings,
            path: '/admin/site-settings',
            status: stats?.site ? 'configured' : 'pending',
            lastUpdate: stats?.site?.updatedAt,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Analitik & Etiketler',
            description: 'Google Analytics, Ads, Search Console',
            icon: BarChart3,
            path: '/admin/analytics',
            status: stats?.analytics ? 'configured' : 'pending',
            lastUpdate: stats?.analytics?.updatedAt,
            color: 'from-purple-500 to-pink-500',
        },
        {
            title: 'İletişim Bilgileri',
            description: 'Telefon, e-posta, adres',
            icon: Phone,
            path: '/admin/contact',
            status: stats?.contact ? 'configured' : 'pending',
            lastUpdate: stats?.contact?.updatedAt,
            color: 'from-green-500 to-emerald-500',
        },
    ];

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <p className="font-medium">Hata</p>
                <p className="text-sm">{error}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Gökkuşağı Temizlik site yönetimi</p>
            </div>

            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <a key={card.path} href={card.path}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${card.color}`}>
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        {card.status === 'configured' ? (
                                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        ) : (
                                            <AlertCircle className="h-5 w-5 text-yellow-500" />
                                        )}
                                    </div>
                                    <CardTitle className="mt-4">{card.title}</CardTitle>
                                    <CardDescription>{card.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Clock className="h-4 w-4" />
                                        <span>{formatDate(card.lastUpdate)}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    );
                })}
            </div>

            {/* Info */}
            <Card>
                <CardHeader>
                    <CardTitle>Hızlı Başlangıç</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Settings className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-medium text-blue-900">Site Ayarlarını Yapılandırın</h3>
                            <p className="text-sm text-blue-700">
                                Site adı, açıklama, anahtar kelimeler ve logo ayarlarını güncelleyin.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <BarChart3 className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="font-medium text-purple-900">Analitik Etiketleri Ekleyin</h3>
                            <p className="text-sm text-purple-700">
                                Google Analytics, Google Ads ve Search Console kodlarınızı ekleyin.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <Phone className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-medium text-green-900">İletişim Bilgilerini Güncelleyin</h3>
                            <p className="text-sm text-green-700">
                                Telefon numaraları, e-posta ve adres bilgilerinizi düzenleyin.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

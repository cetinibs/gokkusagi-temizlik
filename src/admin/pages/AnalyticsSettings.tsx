import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Loader2, Save, RefreshCw, ExternalLink } from 'lucide-react';
import api from '../../lib/api';
import type { AnalyticsSettings } from '../../types/settings';

export function AnalyticsSettingsPage() {
    const [settings, setSettings] = useState<AnalyticsSettings | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchSettings = async () => {
        setIsLoading(true);
        setError('');
        try {
            const data = await api.getAnalyticsSettings();
            setSettings(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!settings) return;

        setIsSaving(true);
        setError('');
        setSuccess('');

        try {
            const updated = await api.updateAnalyticsSettings(settings);
            setSettings(updated);
            setSuccess('Ayarlar başarıyla kaydedildi! Değişikliklerin yansıması için sayfayı yenilemeniz gerekebilir.');
            setTimeout(() => setSuccess(''), 5000);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSaving(false);
        }
    };

    const handleChange = (field: keyof AnalyticsSettings, value: string) => {
        if (!settings) return;
        setSettings({ ...settings, [field]: value || null });
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Analitik & Etiketler</h1>
                    <p className="text-gray-600">Google Analytics, Ads ve Search Console ayarları</p>
                </div>
                <Button variant="outline" onClick={fetchSettings} disabled={isLoading}>
                    <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                    Yenile
                </Button>
            </div>

            {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                    {error}
                </div>
            )}

            {success && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                    {/* Google Analytics */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="text-2xl">📊</span>
                                        Google Analytics
                                    </CardTitle>
                                    <CardDescription>Google Analytics 4 (GA4) izleme kodu</CardDescription>
                                </div>
                                <a
                                    href="https://analytics.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                                >
                                    Analytics'e Git <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                                <Input
                                    id="googleAnalyticsId"
                                    value={settings?.googleAnalyticsId || ''}
                                    onChange={(e) => handleChange('googleAnalyticsId', e.target.value)}
                                    placeholder="G-XXXXXXXXXX"
                                />
                                <p className="text-xs text-gray-500">
                                    GA4 ölçüm kimliği. Örnek: G-6WLCFMS9Q6
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Google Ads */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="text-2xl">📈</span>
                                        Google Ads
                                    </CardTitle>
                                    <CardDescription>Google Ads dönüşüm izleme kodları</CardDescription>
                                </div>
                                <a
                                    href="https://ads.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                                >
                                    Ads'e Git <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="googleAdsId">Google Ads Conversion ID</Label>
                                <Input
                                    id="googleAdsId"
                                    value={settings?.googleAdsId || ''}
                                    onChange={(e) => handleChange('googleAdsId', e.target.value)}
                                    placeholder="AW-XXXXXXXXXXX"
                                />
                                <p className="text-xs text-gray-500">
                                    Ads hesabınızın dönüşüm kimliği. Örnek: AW-17651373667
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="googleAdsPhoneLabel">Telefon Dönüşüm Etiketi</Label>
                                    <Input
                                        id="googleAdsPhoneLabel"
                                        value={settings?.googleAdsPhoneLabel || ''}
                                        onChange={(e) => handleChange('googleAdsPhoneLabel', e.target.value)}
                                        placeholder="ctz6COfNqd4bEOOs6uBB"
                                    />
                                    <p className="text-xs text-gray-500">
                                        Telefon araması dönüşüm etiketi
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="googleAdsFormLabel">Form Dönüşüm Etiketi</Label>
                                    <Input
                                        id="googleAdsFormLabel"
                                        value={settings?.googleAdsFormLabel || ''}
                                        onChange={(e) => handleChange('googleAdsFormLabel', e.target.value)}
                                        placeholder="sn1UCPfN564bEOOs6uBB"
                                    />
                                    <p className="text-xs text-gray-500">
                                        Form gönderimi dönüşüm etiketi
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Search Console */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <span className="text-2xl">🔍</span>
                                Search Console Doğrulama
                            </CardTitle>
                            <CardDescription>Arama motoru webmaster araçları doğrulama kodları</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="googleSearchConsole">Google Search Console</Label>
                                <Input
                                    id="googleSearchConsole"
                                    value={settings?.googleSearchConsole || ''}
                                    onChange={(e) => handleChange('googleSearchConsole', e.target.value)}
                                    placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                                />
                                <p className="text-xs text-gray-500">
                                    HTML meta etiketi content değeri. &lt;meta name="google-site-verification" content="BURAYA_YAPISTIR"&gt;
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="yandexWebmaster">Yandex Webmaster</Label>
                                <Input
                                    id="yandexWebmaster"
                                    value={settings?.yandexWebmaster || ''}
                                    onChange={(e) => handleChange('yandexWebmaster', e.target.value)}
                                    placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                                />
                                <p className="text-xs text-gray-500">
                                    &lt;meta name="yandex-verification" content="BURAYA_YAPISTIR"&gt;
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bingWebmaster">Bing Webmaster</Label>
                                <Input
                                    id="bingWebmaster"
                                    value={settings?.bingWebmaster || ''}
                                    onChange={(e) => handleChange('bingWebmaster', e.target.value)}
                                    placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                                />
                                <p className="text-xs text-gray-500">
                                    &lt;meta name="msvalidate.01" content="BURAYA_YAPISTIR"&gt;
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Yandex Metrica */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="text-2xl">🎯</span>
                                        Yandex Metrica
                                    </CardTitle>
                                    <CardDescription>Yandex Metrica analitik takip kodu</CardDescription>
                                </div>
                                <a
                                    href="https://metrica.yandex.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                                >
                                    Metrica'ya Git <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="yandexMetricaId">Yandex Metrica ID</Label>
                                <Input
                                    id="yandexMetricaId"
                                    value={settings?.yandexMetricaId || ''}
                                    onChange={(e) => handleChange('yandexMetricaId', e.target.value)}
                                    placeholder="12345678"
                                />
                                <p className="text-xs text-gray-500">
                                    Yandex Metrica sayaç numarası
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Submit */}
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            disabled={isSaving}
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Kaydediliyor...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    Kaydet
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

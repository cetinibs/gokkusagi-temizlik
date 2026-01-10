import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Loader2, Save, RefreshCw, Upload, X, Image as ImageIcon } from 'lucide-react';
import api from '../../lib/api';
import type { SiteSettings } from '../../types/settings';

// Image Upload Component
interface ImageUploadProps {
    label: string;
    value: string;
    onChange: (url: string) => void;
    onUpload: (file: File) => Promise<{ url: string }>;
    accept?: string;
    helpText?: string;
}

function ImageUpload({ label, value, onChange, onUpload, accept = 'image/*', helpText }: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState('');
    const [previewUrl, setPreviewUrl] = useState(value || '');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setPreviewUrl(value || '');
    }, [value]);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setError('Dosya boyutu 5MB\'dan küçük olmalı');
            return;
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setError('Sadece resim dosyaları yüklenebilir');
            return;
        }

        setIsUploading(true);
        setError('');

        try {
            const result = await onUpload(file);
            const fullUrl = `http://localhost:3001${result.url}`;
            onChange(fullUrl);
            setPreviewUrl(fullUrl);
        } catch (err: any) {
            setError(err.message || 'Yükleme hatası');
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleClear = () => {
        onChange('');
        setPreviewUrl('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="space-y-3">
            <Label>{label}</Label>

            {/* Preview */}
            {previewUrl && (
                <div className="relative inline-block">
                    <div className="relative w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-full h-full object-contain"
                            onError={() => setPreviewUrl('')}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}

            {/* Upload Area */}
            <div className="flex items-center gap-3">
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={accept}
                    onChange={handleFileSelect}
                    className="hidden"
                    id={`file-upload-${label.replace(/\s/g, '-')}`}
                />
                <label
                    htmlFor={`file-upload-${label.replace(/\s/g, '-')}`}
                    className={`
                        flex items-center gap-2 px-4 py-2 
                        bg-gradient-to-r from-blue-500 to-purple-500 
                        text-white rounded-lg cursor-pointer
                        hover:from-blue-600 hover:to-purple-600 
                        transition-all shadow-md hover:shadow-lg
                        ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                >
                    {isUploading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Yükleniyor...
                        </>
                    ) : (
                        <>
                            <Upload className="w-4 h-4" />
                            Dosya Seç
                        </>
                    )}
                </label>

                {/* Manual URL Input */}
                <span className="text-gray-400">veya</span>
                <Input
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                        setPreviewUrl(e.target.value);
                    }}
                    placeholder="URL girin..."
                    className="flex-1"
                />
            </div>

            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}

            {helpText && (
                <p className="text-xs text-gray-500">{helpText}</p>
            )}
        </div>
    );
}

export function SiteSettingsPage() {
    const [settings, setSettings] = useState<SiteSettings | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchSettings = async () => {
        setIsLoading(true);
        setError('');
        try {
            const data = await api.getSiteSettings();
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
            const updated = await api.updateSiteSettings(settings);
            setSettings(updated);
            setSuccess('Ayarlar başarıyla kaydedildi!');
            setTimeout(() => setSuccess(''), 3000);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSaving(false);
        }
    };

    const handleChange = (field: keyof SiteSettings, value: string) => {
        if (!settings) return;
        setSettings({ ...settings, [field]: value });
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
                    <h1 className="text-2xl font-bold text-gray-900">Site Ayarları</h1>
                    <p className="text-gray-600">Genel site bilgilerini ve SEO ayarlarını düzenleyin</p>
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
                    {/* Temel Bilgiler */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Temel Bilgiler</CardTitle>
                            <CardDescription>Site adı ve temel bilgiler</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="siteName">Site Adı</Label>
                                    <Input
                                        id="siteName"
                                        value={settings?.siteName || ''}
                                        onChange={(e) => handleChange('siteName', e.target.value)}
                                        placeholder="Gökkuşağı Temizlik"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="siteAuthor">Site Yazarı / Firma</Label>
                                    <Input
                                        id="siteAuthor"
                                        value={settings?.siteAuthor || ''}
                                        onChange={(e) => handleChange('siteAuthor', e.target.value)}
                                        placeholder="Gökkuşağı Kurumsal Temizlik Hizmetleri"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="siteUrl">Site URL</Label>
                                <Input
                                    id="siteUrl"
                                    value={settings?.siteUrl || ''}
                                    onChange={(e) => handleChange('siteUrl', e.target.value)}
                                    placeholder="https://gokkusagitemizlik.com"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* SEO Ayarları */}
                    <Card>
                        <CardHeader>
                            <CardTitle>SEO Ayarları</CardTitle>
                            <CardDescription>Arama motorları için meta bilgiler</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="siteTitle">Sayfa Başlığı (Title)</Label>
                                <Input
                                    id="siteTitle"
                                    value={settings?.siteTitle || ''}
                                    onChange={(e) => handleChange('siteTitle', e.target.value)}
                                    placeholder="Gökkuşağı Kurumsal Temizlik - İstanbul"
                                />
                                <p className="text-xs text-gray-500">
                                    Tarayıcı sekmesinde ve arama sonuçlarında görünür. Max 60 karakter önerilir.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="siteDescription">Site Açıklaması (Description)</Label>
                                <Textarea
                                    id="siteDescription"
                                    value={settings?.siteDescription || ''}
                                    onChange={(e) => handleChange('siteDescription', e.target.value)}
                                    placeholder="İstanbul'da profesyonel temizlik hizmetleri..."
                                    rows={3}
                                />
                                <p className="text-xs text-gray-500">
                                    Arama sonuçlarında görünür. Max 160 karakter önerilir.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="siteKeywords">Anahtar Kelimeler (Keywords)</Label>
                                <Textarea
                                    id="siteKeywords"
                                    value={settings?.siteKeywords || ''}
                                    onChange={(e) => handleChange('siteKeywords', e.target.value)}
                                    placeholder="temizlik şirketi, istanbul, profesyonel temizlik..."
                                    rows={2}
                                />
                                <p className="text-xs text-gray-500">
                                    Virgülle ayırarak yazın.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Görsel Ayarları */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ImageIcon className="w-5 h-5" />
                                Görsel Ayarları
                            </CardTitle>
                            <CardDescription>Logo, favicon ve sosyal medya görselleri</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Logo Upload */}
                            <ImageUpload
                                label="Site Logosu"
                                value={settings?.logoUrl || ''}
                                onChange={(url) => handleChange('logoUrl', url)}
                                onUpload={api.uploadLogo.bind(api)}
                                accept="image/png,image/jpeg,image/svg+xml,image/webp"
                                helpText="Önerilen boyut: 200x60 piksel. PNG veya SVG formatı önerilir."
                            />

                            {/* Favicon Upload */}
                            <ImageUpload
                                label="Favicon"
                                value={settings?.faviconUrl || ''}
                                onChange={(url) => handleChange('faviconUrl', url)}
                                onUpload={api.uploadFavicon.bind(api)}
                                accept="image/png,image/x-icon,image/svg+xml"
                                helpText="Tarayıcı sekmesinde görünen küçük ikon. Önerilen boyut: 32x32 veya 64x64 piksel."
                            />

                            {/* OG Image Upload */}
                            <ImageUpload
                                label="Sosyal Medya Görseli (OG Image)"
                                value={settings?.ogImageUrl || ''}
                                onChange={(url) => handleChange('ogImageUrl', url)}
                                onUpload={api.uploadImage.bind(api)}
                                accept="image/png,image/jpeg,image/webp"
                                helpText="Facebook, Twitter gibi platformlarda paylaşıldığında görünecek görsel. Önerilen boyut: 1200x630 piksel."
                            />
                        </CardContent>
                    </Card>

                    {/* Lokasyon Ayarları */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Lokasyon Ayarları</CardTitle>
                            <CardDescription>Coğrafi konum bilgileri</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="language">Dil</Label>
                                    <Input
                                        id="language"
                                        value={settings?.language || ''}
                                        onChange={(e) => handleChange('language', e.target.value)}
                                        placeholder="tr"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="geoRegion">Bölge Kodu</Label>
                                    <Input
                                        id="geoRegion"
                                        value={settings?.geoRegion || ''}
                                        onChange={(e) => handleChange('geoRegion', e.target.value)}
                                        placeholder="TR-34"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="geoPlacename">Şehir</Label>
                                    <Input
                                        id="geoPlacename"
                                        value={settings?.geoPlacename || ''}
                                        onChange={(e) => handleChange('geoPlacename', e.target.value)}
                                        placeholder="İstanbul"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Diğer */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Diğer Ayarlar</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="copyrightText">Copyright Metni</Label>
                                <Input
                                    id="copyrightText"
                                    value={settings?.copyrightText || ''}
                                    onChange={(e) => handleChange('copyrightText', e.target.value)}
                                    placeholder="GÖKKUŞAĞI Temizlik Hizmetleri. Tüm hakları saklıdır."
                                />
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

export interface SiteSettings {
    id: string;
    siteName: string;
    siteTitle: string;
    siteDescription: string;
    siteKeywords: string;
    siteUrl: string;
    siteAuthor: string;
    logoUrl: string | null;
    faviconUrl: string | null;
    ogImageUrl: string | null;
    copyrightText: string | null;
    language: string;
    geoRegion: string;
    geoPlacename: string;
    updatedAt: string;
}

export interface AnalyticsSettings {
    id: string;
    googleAnalyticsId: string | null;
    googleAdsId: string | null;
    googleAdsPhoneLabel: string | null;
    googleAdsFormLabel: string | null;
    googleSearchConsole: string | null;
    yandexWebmaster: string | null;
    bingWebmaster: string | null;
    yandexMetricaId: string | null;
    updatedAt: string;
}

export interface Phone {
    number: string;
    raw: string;
    label: string;
}

export interface SocialMedia {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
}

export interface ContactInfo {
    id: string;
    phones: Phone[];
    whatsapp: string;
    email: string;
    address: string;
    workingHours: string;
    socialMedia: SocialMedia;
    mapEmbedUrl: string | null;
    updatedAt: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

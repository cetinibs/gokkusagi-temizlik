const API_URL =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV ? 'http://localhost:3001/api' : '/api');

class ApiService {
    private token: string | null = null;

    constructor() {
        this.token = localStorage.getItem('admin_token');
    }

    setToken(token: string | null) {
        this.token = token;
        if (token) {
            localStorage.setItem('admin_token', token);
        } else {
            localStorage.removeItem('admin_token');
        }
    }

    getToken() {
        return this.token;
    }

    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (this.token) {
            (headers as Record<string, string>)['Authorization'] = `Bearer ${this.token}`;
        }

        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ error: 'Bir hata oluştu' }));
            throw new Error(error.error || 'Bir hata oluştu');
        }

        return response.json();
    }

    // Auth
    async login(email: string, password: string) {
        const response = await this.request<{ token: string; user: any }>('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
        this.setToken(response.token);
        return response;
    }

    async logout() {
        this.setToken(null);
    }

    async getMe() {
        return this.request<any>('/auth/me');
    }

    // Settings
    async getSiteSettings() {
        return this.request<any>('/settings/site');
    }

    async updateSiteSettings(data: any) {
        return this.request<any>('/settings/site', {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    async getAnalyticsSettings() {
        return this.request<any>('/settings/analytics');
    }

    async updateAnalyticsSettings(data: any) {
        return this.request<any>('/settings/analytics', {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    async getContactInfo() {
        return this.request<any>('/settings/contact');
    }

    async updateContactInfo(data: any) {
        return this.request<any>('/settings/contact', {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    async getAllSettings() {
        return this.request<any>('/settings/all');
    }

    // File Upload
    async uploadLogo(file: File) {
        const formData = new FormData();
        formData.append('logo', file);

        const response = await fetch(`${API_URL}/upload/logo`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ error: 'Logo yükleme hatası' }));
            throw new Error(error.error || 'Logo yükleme hatası');
        }

        return response.json();
    }

    async uploadFavicon(file: File) {
        const formData = new FormData();
        formData.append('favicon', file);

        const response = await fetch(`${API_URL}/upload/favicon`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ error: 'Favicon yükleme hatası' }));
            throw new Error(error.error || 'Favicon yükleme hatası');
        }

        return response.json();
    }

    async uploadImage(file: File) {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`${API_URL}/upload/image`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ error: 'Resim yükleme hatası' }));
            throw new Error(error.error || 'Resim yükleme hatası');
        }

        return response.json();
    }

    async deleteFile(filename: string) {
        return this.request<any>(`/upload/${filename}`, {
            method: 'DELETE',
        });
    }
}

export const api = new ApiService();
export default api;

